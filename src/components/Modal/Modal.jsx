import React, { Component } from 'react';
import css from './Modal.module.css';
/*
Шпоргалка по метода життєвого циклу:
1. componendDidMount - метод життєвого циклу, який запускається
    після того, як компонент з'явився в DOM.

    Для чого використовується:
    - вішаються глобальні слухачі події "addEventListener"
    - надсилаються мережеві запити
    - втановлюються таймери та інтервали (setTimeout, setInterval)
    - звернення до localStorage

2. componendWillUnmount - метод життєвого циклу, який запускається
    перед тим, як компонент буде повністю видалений з DOM.

    Для чого використовується:
    - прибираються глобальні слухачі події "removeEventListener"
    - відхиляються мережеві запити
    - прибирати таймери та інтервали (clearTimeout, clearInterval)

3. componentDidUpdate - метод життєвого циклу, який запускається
    кожен раз, після оновлення компоненти.

    Для чого використовується:
    - надсилання мережевих запитів з актуальним стейтом
    - звернення, до localStorage для синхронізації даних

*/
// &times;- це спецсимвол!!! ==============================

export default class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount: Modal - render');
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    console.log(' componentWillUnmount: Modal -delete');
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') this.props.onCloseModal();
  };

  onOverlyaClick = event => {
    if (event.currentTarget === event.target) this.props.onCloseModal();
  };
  render() {
    return (
      <div onClick={this.onOverlyaClick} className={css.overlay}>
        <div className={css.modal}>
          <h3>{this.props.data.title}</h3>
          <h4>{this.props.data.author}</h4>
          <button
            onClick={this.props.onCloseModal}
            // onClisk={() => this.props.onCloseModal()}  no work
            className={css.closeModalBtn}
            type="button"
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}
