(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(4),i=n.n(s),r=(n(12),n(2)),l=n.p+"static/media/__logo-header.c2821b38.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("a",{href:"https://chakrygin-maxim.github.io/mesto/",className:"header__link",children:Object(a.jsx)("img",{src:l,alt:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043b\u043e\u0433\u043e Mesto",className:"header__logo"})})})},u=n(5),h=n(6),j="8a14ceb3-7392-4a44-a6bb-8080b9aa5657",d="cohort-17",m=new(function(){function e(){Object(u.a)(this,e),this._token=j,this._cohort=d,this._url="https://mesto.nomoreparties.co/v1/"}return Object(h.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url).concat(this._cohort,"/users/me"),{headers:{authorization:this._token,"content-type":"application/json"}}).then(this._handleResponse)}},{key:"updateUserInfo",value:function(e,t){return fetch("".concat(this._url).concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url).concat(this._cohort,"/cards"),{headers:{authorization:this._token,"content-type":"application/json"}}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url).concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url).concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._url).concat(this._cohort,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._handleResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url).concat(this._cohort,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._handleResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url).concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())(j,d);var _=function(e){return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{className:"element__photo",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(a.jsx)("button",{className:"element__button-trash"}),Object(a.jsxs)("div",{className:"element__info",children:[Object(a.jsx)("h2",{className:"element__info-name",children:e.card.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:"element__button-like",type:"button"}),Object(a.jsx)("p",{className:"element__likes",children:e.card.likes.length})]})]})]})};var b=function(e){var t=Object(c.useState)("\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),n=Object(r.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)("\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"),l=Object(r.a)(i,2),p=l[0],u=l[1],h=Object(c.useState)(""),j=Object(r.a)(h,2),d=j[0],b=j[1],O=Object(c.useState)([]),f=Object(r.a)(O,2),x=f[0],k=f[1];return Object(c.useEffect)((function(){Promise.all([m.getUserInfo(),m.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];!function(e){s(e.name),u(e.about),b(e.avatar)}(n),k(a)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__main-container",children:[Object(a.jsx)("div",{className:"profile__image-container",onClick:e.onEditAvatarClick,children:Object(a.jsx)("img",{src:d,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__image"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__name-container",children:[Object(a.jsx)("h1",{className:"profile__name",children:o}),Object(a.jsx)("button",{className:"profile__button-edit",type:"button",onClick:e.onEditProfileClick})]}),Object(a.jsx)("p",{className:"profile__job",children:p})]})]}),Object(a.jsx)("button",{className:"profile__button-add",type:"button",onClick:e.onAddPlaceClick})]}),Object(a.jsx)("main",{className:"elements",children:x.map((function(t){return Object(a.jsx)(_,{card:t,onCardClick:e.onCardClick},t._id)}))})]})};var O=function(){var e=(new Date).getFullYear();return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__text",children:["\xa9 ",e," Mesto Russia"]})})};var f=function(e){return Object(a.jsx)("section",{className:"popup popup_form_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("form",{className:"popup__form",action:"popup-".concat(e.name,"-submit"),name:e.name,noValidate:!0,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonText}),Object(a.jsx)("button",{className:"popup__button-close",type:"button",onClick:e.onClose})]})})};var x=function(e){return Object(a.jsxs)(f,{name:e.name,isOpen:e.isOpen,onClose:e.onClose,title:e.title,buttonText:e.buttonText,children:[Object(a.jsx)("input",{name:"name",type:"text",className:"popup__input popup__input_field_name",id:"name-input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{name:"job",type:"text",className:"popup__input popup__input_field_job",id:"job-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"job-input-error"})]})};var k=function(e){return Object(a.jsxs)(f,{name:"mesto",isOpen:e.isOpen,onClose:e.onClose,title:e.title,buttonText:e.buttonText,children:[Object(a.jsx)("input",{name:"cardName",type:"text",className:"popup__input popup__input_field_cardName",id:"cardName-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"cardName-input-error"}),Object(a.jsx)("input",{name:"link",type:"url",className:"popup__input popup__input_field_link",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})};var N=function(e){return Object(a.jsxs)(f,{name:e.name,isOpen:e.isOpen,onClose:e.onClose,title:e.title,buttonText:e.buttonText,children:[Object(a.jsx)("input",{name:"avatarLink",type:"url",className:"popup__input popup__input_field_avatarLink",id:"avatarLink-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"avatarLink-input-error"})]})};var v=function(e){return Object(a.jsx)("section",{className:"popup popup_form_photo ".concat(e.card.link&&"popup_opened"),children:Object(a.jsxs)("figure",{className:"popup__image-container",children:[Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(a.jsx)("figcaption",{className:"popup__caption",children:e.card.name}),Object(a.jsx)("button",{className:"popup__button-close",type:"button",onClick:e.onClose})]})})};var C=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],u=i[1],h=Object(c.useState)(!1),j=Object(r.a)(h,2),d=j[0],m=j[1],_=Object(c.useState)({link:"",name:""}),f=Object(r.a)(_,2),C=f[0],g=f[1];function y(){m(!1),o(!1),u(!1),g({link:"",name:""})}return Object(a.jsxs)("body",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(b,{onEditAvatarClick:function(){m(!0)},onEditProfileClick:function(){o(!0)},onAddPlaceClick:function(){u(!0)},onCardClick:function(e){var t=e.link,n=e.name;g({link:t,name:n})}}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{name:"profile",isOpen:n,onClose:y,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(a.jsx)(k,{name:"mesto",isOpen:l,onClose:y,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(a.jsx)(N,{name:"avatar",isOpen:d,onClose:y,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(a.jsx)(v,{card:C,onClose:y})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.314041ac.chunk.js.map