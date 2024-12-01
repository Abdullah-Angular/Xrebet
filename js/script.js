"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//Переменная куда мы добавляем карточки 
var cartMenu = document.querySelector(".menu__carts");

//Переменная корзина 
var cartWrapper = document.querySelector(".cap__bucket-items-inside-wrapper");

// Определение интерфейса для элементов корзины

// Массив, в который вы добавляете элементы корзины
var basket = [];

// Класс для элементов listrolls
var Cart = /*#__PURE__*/_createClass(function Cart(id, img, title, price) {
  _classCallCheck(this, Cart);
  _defineProperty(this, "id", void 0);
  _defineProperty(this, "img", void 0);
  _defineProperty(this, "title", void 0);
  _defineProperty(this, "price", void 0);
  this.id = id;
  this.img = img;
  this.title = title;
  this.price = price;
}); // массив  объекты которого мы добавляем на страницу
var listrolls = [new Cart(1, "img/rolls/iconXrebet.jpg", "Cialis", 8500), new Cart(2, "img/rolls/iconXrebet.jpg", "Clomid", 2500), new Cart(3, "img/rolls/iconXrebet.jpg", "Androxal", 3300), new Cart(4, "img/rolls/iconXrebet.jpg", "Strattera", 2700), new Cart(5, "img/rolls/iconXrebet.jpg", "Minox", 3000), new Cart(6, "img/rolls/iconXrebet.jpg", "Clenbuterol", 3000), new Cart(7, "img/rolls/iconXrebet.jpg", "Semaglutine", 2500), new Cart(8, "img/rolls/iconXrebet.jpg", "Arimidex", 4000), new Cart(9, "img/rolls/iconXrebet.jpg", "Nimfo", 5000), new Cart(10, "img/rolls/iconXrebet.jpg", "Viagra", 3700), new Cart(11, "img/rolls/iconXrebet.jpg", "PT-141", 4400)];

// Добавление карточек на страницу 
listrolls.forEach(function (cart, index) {
  //html код карточки
  var cartaddeds = "<div id=\"".concat(cart.id, "\"  class=\"cart\">\n\t\t\t<div class=\"cart__img\">\n\t\t\t\t\t<img class=\"cart__imgsize\" src=\"").concat(cart.img, "\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div  class=\"cart__title\">\n\t\t\t\t").concat(cart.title, "\n\t\t\t</div>\n\t\t\t<div class=\"cart__price\">\n\t\t\t\t\t<div  class=\"cart__price-number\">\n\t\t\t\t\t\t").concat(cart.price, "\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"cart__price-counter display-none\">\n\t\t\t\t\t\t\t<div class=\"cart-moreless\">\n\t\t\t\t\t\t\t\t\t<div class=\"cart__price-minus\"  onclick=\"delCounter(").concat(cart.id, ")\" >-\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"cart__price-quantity\" id=\"").concat(cart.id, "\">1</div>\n\t\t\t\t\t\t\t\t\t<div class=\"cart__price-plus\" onclick=\"addCounter(").concat(cart.id, ")\">+</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>");
  //добавление карточки на страницу
  /*
  <div id="${cart.id}" onclick="addCartItem(${cart.id}); showCounter(${cart.id});"  class="cart__price-bucket">
  						В корзину
  				</div>
  				это корзина карточки
  */

  cartMenu.innerHTML += cartaddeds;
});

//добавление кликнутой карточки в массив basket
function addCartItem(cart) {
  var _basket$find;
  //Если карточка уже есть в массиве, то просто изменить ее количество
  var findCartId = (_basket$find = basket.find(function (product) {
    return product.id === cart;
  })) === null || _basket$find === void 0 ? void 0 : _basket$find.id; // ???

  if (findCartId) {
    var findIndexProduct = basket.findIndex(function (product) {
      return product.id === findCartId;
    }); // ???
    basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1;
  }
  //Если не найдена то пуш в корзину карточку и  задаем ее количество
  else {
    basket.push(_objectSpread(_objectSpread({}, listrolls[Number(cart - 1)]), {}, {
      counter: 1
    }));
  }

  //Добавляем элемент в корзину
  renderBasket();
  //Изменяем сумма заказа в корзине
  changeSumOfShop();
  //Обновляем количество продуктов в корзине
  ChangeQuantity();
  //Показ счетчика карточки
}
// добавление карточки в корзину из массива basket
//и в html коде у кнопок "+"  и "-" стоят функции действий с количеством товара в корзине
function renderBasket() {
  cartWrapper.innerHTML = "";
  basket.forEach(function (product) {
    var cartaddeds = "<div  class=\"cap__bucket-item-wrapper\" id=\"".concat(product.id, "\">\n\t\t\t<div class=\"cap__bucket-img-wrapper\">\n\t\t\t\t\t<img class='cap__bucket-img' src=\"").concat(product.img, "\"\">\n\t\t\t</div>\n\t\t\t<div class=\"cap__bucket-item-right\">\n\t\t\t\t\t<div class=\"cap__bucket-text\">\n\t\t\t\t\t").concat(product.title, "\n\t\t\t\t\t</div><div class=\"cap__bucket-item-right-bottom\">\n\t\t\t\t\t<div id=\"").concat(product.id, "\" class=\"cap__bucket-price\">\n\t\t\t\t\t\t\t").concat(product.price, "\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cap__bucket-moreless-wrapper\">\n\t\t\t\t\t\t\t<div class=\"cap__bucket-moreless\">\n\t\t\t\t\t\t\t\t\t<div class=\"cap__bucket-minus\" data-bucket-btnMinus=\"btnMinus\" onclick=\"delCounter(").concat(product.id, ")\" >-\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"cap__bucket-quantity\">").concat(product.counter, "</div>\n\t\t\t\t\t\t\t\t\t<div class=\"cap__bucket-plus\" data-bucket-btnPlus=\"btnPlus\" onclick=\"addCounter(").concat(product.id, ")\">+</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div onclick=\"delProdClickTrash(").concat(product.id, ")\"  class=\"cap__bucket-trash\">\n\t\t\t\t\t<img class='cap__bucket-trash-img' src=\"img/icon/free-icon-trash-bin-4620083.png\" alt=\"\">\n\t\t\t</div>\n\t\t</div>");
    cartWrapper.insertAdjacentHTML("beforeend", cartaddeds);
  });
}

//Функция изменения итоговой суммы
function changeSumOfShop() {
  var priceitem = document.querySelectorAll(".cap__bucket-price");
  var massiv1 = _toConsumableArray(priceitem).map(function (price) {
    var findIndexProduct = basket.findIndex(function (product) {
      return product.id === Number(price.id);
    });
    return Number(price.innerHTML) * basket[findIndexProduct].counter;
  });
  var sumOfPrices = document.querySelector(".cap__bucket-items-sum");
  if (sumOfPrices !== null) {
    sumOfPrices.innerHTML = _toConsumableArray(massiv1).reduce(function (total, item) {
      return total + Number(item);
    }, 0).toString();
  }
}
//Фунция изменения количества продуктов в корзине
function ChangeQuantity() {
  var quantityItem = document.querySelector(".cap__right-bucket-text2");
  if (quantityItem !== null) {
    var defaultQuantity = document.querySelectorAll(".cap__bucket-item-wrapper");
    quantityItem.innerHTML = defaultQuantity.length.toString();
  }
}
// Функция Увеличивания counter в корзине
function addCounter(idProduct) {
  var findIndexProduct = basket.findIndex(function (product) {
    return product.id === Number(idProduct);
  }); //  ???
  var cartCounterQuantity = document.querySelectorAll(".cart__price-quantity");
  //Увеличиваем counter на 1
  basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1;
  cartCounterQuantity[idProduct - 1].innerHTML = (Number(cartCounterQuantity[idProduct - 1].innerHTML) + 1).toString();
  //обновляем карточку в корзине
  renderBasket();
  //Изменяем сумма заказа в корзине
  changeSumOfShop();
}
// Функция уменьшения counter в корзине
function delCounter(idProduct) {
  var findIndexProduct = basket.findIndex(function (product) {
    return product.id === Number(idProduct);
  });
  var cartButton = document.querySelectorAll('.cart__price-bucket');
  var cartCounter = document.querySelectorAll(".cart__price-counter");
  var cartCounterQuantity = document.querySelectorAll(".cart__price-quantity");

  //Если количество равно 1 то удалить объект из корзины
  if (basket[findIndexProduct].counter == 1) {
    // ???
    //Скрываем counter на странице если элементов 0 в корзине
    cartButton[Number(idProduct - 1)].classList.remove("display-hidden");
    cartCounter[Number(idProduct - 1)].classList.add("display-none");
    //Удалем элемент
    basket.splice(findIndexProduct, 1);
  } else {
    //Уменьшаем counter на один
    basket[findIndexProduct].counter = basket[findIndexProduct].counter - 1;
    cartCounterQuantity[idProduct - 1].innerHTML = (Number(cartCounterQuantity[idProduct - 1].innerHTML) - 1).toString();
  }
  //Если объектов в корзине стало 0 то скрываем корзину
  var bucketBtn = document.querySelector(".cap__bucket");
  if (basket.length > 0) {
    console.log("В корзине больше 0 элементов");
  } else {
    if (bucketBtn !== null) {
      bucketBtn.classList.add("display-none");
    }
  }

  //обновляем карточку в корзине
  renderBasket();
  //Изменяем сумма заказа в корзине
  changeSumOfShop();
  //Обновление количество продуктов в корзине
  ChangeQuantity();
}
//Функция удаления карточки по нажатию на мусорку
function delProdClickTrash(idProduct) {
  var findIndexProduct = basket.findIndex(function (product) {
    return product.id === Number(idProduct);
  });
  var cartButton = document.querySelectorAll('.cart__price-bucket');
  var cartCounter = document.querySelectorAll(".cart__price-counter");

  //Скрываем counter на странице если удаляем его из корзины
  cartButton[Number(idProduct - 1)].classList.remove("display-hidden");
  cartCounter[Number(idProduct - 1)].classList.add("display-none");

  //Удаляем элемент с корзины
  basket.splice(findIndexProduct, 1);

  //Если объектов в корзине стало 0 то скрываем корзину
  var bucketBtn = document.querySelector(".cap__bucket");
  if (basket.length <= 0) {
    if (bucketBtn !== null) {
      bucketBtn.classList.add("display-none");
    }
  }

  //обновляем карточку в корзине
  renderBasket();
  //Изменяем сумма заказа в корзине
  changeSumOfShop();
  //Обновление количество продуктов в корзине
  ChangeQuantity();
}
//Функция показа корзины
function showBucket() {
  var bucketBtn = document.querySelector(".cap__bucket");
  var quantityItem = document.querySelector(".cap__right-bucket-text2");
  var bodyJs = document.querySelector("body");

  //Если 0 элементов то не открвать корзину

  if (quantityItem.innerHTML === "0") {
    bucketBtn.classList.add("display-none");
  } else {
    bucketBtn.classList.toggle("display-none");
    bodyJs.classList.toggle("overflow-hidden");
  }
}
// click gambit to up page 
function pageUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
function pageToAssor() {
  window.scrollTo({
    top: 620,
    left: 0,
    behavior: 'smooth'
  });
}
// Функция показа counter на странице при клике 
function showCounter(idProduct) {
  var cartCounter = document.querySelectorAll(".cart__price-counter");
  var cartButton = document.querySelectorAll('.cart__price-bucket');

  // скрываем кнопку
  cartButton[Number(idProduct - 1)].classList.add("display-hidden");
  //Показываем counter
  cartCounter[Number(idProduct - 1)].classList.remove("display-none");
}
function delCounter2(cartId) {
  console.log("hello");
  // basket[cartId].counter -1;
  console.log(basket);
}