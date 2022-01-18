//BURGER
let menuBtn = document.querySelector('.header_burger');
let menu = document.querySelector('.list');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('_active');
  menu.classList.toggle('_active');
  main.addEventListener('click', function () {
    menuBtn.classList.remove('_active');
    menu.classList.remove('_active');
  });
  footer.addEventListener('click', function () {
    menuBtn.classList.remove('_active');
    menu.classList.remove('_active');
  });
});

//СМЕНА ОНОВНОГО ФОТО ПО МИНИАТЮРЕ
var img = document.getElementById('main_big_img_kid');
function changeIMG(str) {
  img.setAttribute('src', str);
}

// Like и добавить в корзину с сообщением
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.modal_open'),
    overlay = document.querySelector('.overlay'),
    closeButtons = document.querySelectorAll('.modal_close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var final_count = document.getElementById('final_count');
      var final_name = document.getElementById('final_name');
      var final_count2 = document.getElementById('final_count2');
      var final_name2 = document.getElementById('final_name2');
      final_count.innerText = document.getElementById('count').innerText;
      final_count2.innerText = document.getElementById('count').innerText;
      final_name.innerText = document.getElementById('title').innerText;
      final_name2.innerText = document.getElementById('title').innerText;

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      modalElem.classList.add('active');
      overlay.classList.add('active');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var modal = this.closest('.modal');

      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
});

//scroll шапки
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('header').style.top = '0';
  } else {
    document.querySelector('header').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

//Проверка и отправка формы
function validate(form_email, email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_email].elements[email].value;
  if (reg.test(address)) {
    alert(`Вы подписались на рассылку! Сообщение придет Вам на почту: ${address}`);
    return false;
  } else {
    alert('Введите корректный e-mail');
    return false;
  }
}
