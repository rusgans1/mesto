(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var n,r;return n=t,(r=[{key:"_checkResult",value:function(t){return t.ok?t.json():Promise.reject(console.log(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:"".concat(this._headers.authorization)}}).then(this._checkResult)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:"".concat(this._headers.authorization)}}).then(this._checkResult)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkResult)}},{key:"setNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResult)}},{key:"removeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResult)}},{key:"sendLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResult)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResult)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResult)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.item,o=e.userInfo,i=e.handleCardClick,u=e.handleDeleteButtonClick,c=e.handleActivationLikeClick,a=e.handleDisactivationLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=r.name,this._cardId=r._id,this._owner=r.owner,this._likes=r.likes,this._imageLink=r.link,this._userInfo=o,this._cardSelector=n,this._handleCardClick=i,this._handleDeleteButtonClick=u,this._handleActivationLikeClick=c,this._handleDisactivationLikeClick=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".element__button-like").addEventListener("click",(function(e){t._eventLikeButton()})),this._element.querySelector(".element__pic").addEventListener("click",(function(){t._handleCardClick()})),this._element.querySelector(".element__button-trash").addEventListener("click",(function(){t._handleDeleteButtonClick()}))}},{key:"_disactivationRemoveButton",value:function(){this._owner._id!==this._userInfo&&this._element.querySelector(".element__button-trash").classList.add("element__button-trash_inactive")}},{key:"changeLikeStatus",value:function(){this._element.querySelector(".element__button-like").classList.toggle("element__button-like_active")}},{key:"_eventLikeButton",value:function(){this._element.querySelector(".element__button-like").classList.contains("element__button-like_active")?this._handleDisactivationLikeClick():this._handleActivationLikeClick()}},{key:"eventCounterLikes",value:function(t){this._element.querySelector(".element__counter-likes").textContent=t}},{key:"removeCard",value:function(){this._element.closest(".element").remove()}},{key:"generateCard",value:function(){var t=this;this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".element__pic");return e.src=this._imageLink,e.alt=this._title,this._element.querySelector(".element__title").textContent=this._title,this._likes.find((function(e){return t._userInfo===e._id}))&&this.changeLikeStatus(),this.eventCounterLikes(this._likes.length),this._disactivationRemoveButton(),this._element}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function a(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e,n.classList.add(r._errorClass)})),a(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass),e.textContent=""})),a(this,"_checkInputValidaty",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidaty(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled="disabled"):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled="")}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this.toggleButtonState()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=document.querySelector(".profile"),p=document.querySelector(".popup_profile-edit"),y=document.querySelector(".popup_card-add"),h=document.querySelector(".popup_avatar-change"),v=f.querySelector(".profile__avatar-overlay"),m=f.querySelector(".profile__button-edit"),d=f.querySelector(".profile__button-add"),_=p.querySelector(".popup__form"),b=y.querySelector(".popup__form"),S=h.querySelector(".popup__form"),k=p.querySelector(".popup__input_name"),g=p.querySelector(".popup__input_about"),w={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_invalid",inputErrorClass:"popup__input_invalid",errorClass:"popup__error_active"};function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickOverlayClose",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__button-close").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",this._handleClickOverlayClose.bind(this))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".fullsize-image__picture"),e._popupCaption=e._popup.querySelector(".fullsize-image__caption"),e}return e=u,(n=[{key:"open",value:function(t){R(B(u.prototype),"open",this).call(this),this._popupImage.alt=t.name,this._popupImage.src=t.link,this._popupCaption.textContent=t.name}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__button-submit"),n._popupInputs=n._form.querySelectorAll(".popup__input"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"close",value:function(){U(z(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t,e){t?this._submitButton.textContent=e:(this.close(),this._submitButton.textContent=this._submitButtonText)}},{key:"_getInputsValues",value:function(){var t=this;return this._inputContainer={},this._popupInputs.forEach((function(e){t._inputContainer[e.name]=e.value})),this._inputContainer}},{key:"setEventListeners",value:function(){var t=this;U(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputsValues())}))}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},G.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(o){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"setAction",value:function(t){this._handleClickAction=t}},{key:"setEventListeners",value:function(){var t=this;G(M(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__button-confirm").addEventListener("click",(function(e){t._handleClickAction()}))}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(P);function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}var X,Y=function(){function t(e){var n=e.userName,r=e.userInfo,o=e.userAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userProfile={name:this._name.textContent,info:this._info.textContent},this._userProfile}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._info.textContent=t.about,this._avatar.src=t.avatar}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Z=new n({url:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"0250b2ff-4a35-418c-a094-de9de5877fe5","Content-Type":"application/json"}}),$=new x(".popup_fullsize");$.setEventListeners();var tt=new K(".popup_confirm-remove");function et(t){var e=new i({item:t,handleCardClick:function(){$.open(t)},handleDeleteButtonClick:function(){tt.open(),tt.setAction((function(){Z.removeCard(t._id).then((function(){e.removeCard(),tt.close()})).catch((function(t){console.log(t)}))}))},handleActivationLikeClick:function(){Z.sendLike(t._id).then((function(t){e.changeLikeStatus(),e.eventCounterLikes(t.likes.length)})).catch((function(t){console.log(t)}))},handleDisactivationLikeClick:function(){Z.removeLike(t._id).then((function(t){e.changeLikeStatus(),e.eventCounterLikes(t.likes.length)})).catch((function(t){console.log(t)}))},userInfo:X},"#element");return e}function nt(t){return new s(w,t)}tt.setEventListeners();var rt=nt(S),ot=nt(b),it=nt(_);rt.enableValidation(),ot.enableValidation(),it.enableValidation();var ut=new O({renderer:function(t){var e=et(t).generateCard();ut.addItem(e)}},".elements");Z.getInitialCards().then((function(t){return ut.renderItems(t)}));var ct=new Y({userName:".profile__title",userInfo:".profile__subtitle",userAvatar:".profile__avatar"});Z.getUserInfo().then((function(t){ct.setUserInfo(t),X=t._id}));var at=new N(".popup_card-add",{submitForm:function(t){at.renderLoading(!0,"Сохранить..."),Z.setNewCard(t).then((function(t){var e=et(t).generateCard();ut.addItem(e)})).catch((function(t){console.log(t)})).finally((function(){at.close(),at.renderLoading(!1,"")}))}});at.setEventListeners();var lt=new N(".popup_profile-edit",{submitForm:function(t){lt.renderLoading(!0,"Заменяем..."),Z.setUserInfo(t).then((function(t){console.log(t),ct.setUserInfo(t)})).catch((function(t){console.log(t)})).finally((function(){lt.close(),lt.renderLoading(!1,"")}))}});lt.setEventListeners();var st=new N(".popup_avatar-change",{submitForm:function(t){st.renderLoading(!0,"Обновляем..."),Z.setUserAvatar(t).then((function(t){ct.setUserAvatar(t),st.close()})).catch((function(t){console.log(t)})).finally((function(){st.close(),st.renderLoading(!1,"")}))}});st.setEventListeners(),v.addEventListener("click",(function(){rt.resetValidation(),st.open()})),d.addEventListener("click",(function(){ot.resetValidation(),at.open()})),m.addEventListener("click",(function(){it.resetValidation();var t=ct.getUserInfo();k.value=t.name,g.value=t.info,lt.open()}))})();