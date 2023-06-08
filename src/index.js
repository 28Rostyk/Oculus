'use strict';

const tabsItem = document.querySelectorAll('.tabs__btn-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');

tabsItem.forEach(item => {
  item.addEventListener('click', onClickBtn);
});

function onClickBtn(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabsItem.forEach(item => {
    item.classList.remove('tabs__btn-item--active');
  });

  tabsContent.forEach(item => {
    item.classList.remove('tabs__content-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document
    .querySelector(`#${button}`)
    .classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});
