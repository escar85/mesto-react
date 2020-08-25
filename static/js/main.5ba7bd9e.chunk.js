(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),l=(a(15),a(9)),i=a(1),s=a(6),u=a.n(s);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u.a,alt:"\u043c\u0435\u0441\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438",className:"header__logo"}))},p=o.a.createContext();var d=function(e){var t=o.a.useContext(p),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id})),c="element__delete-button ".concat(a?"":"element__delete-button_hidden"),r="element__like-button ".concat(n?"element__like-button_active":"");return o.a.createElement("li",{className:"element"},o.a.createElement("img",{alt:e.card.name,className:"element__image",src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("button",{type:"button","aria-label":"delete",className:c,onClick:function(){e.onCardDelete(e.card)}}),o.a.createElement("div",{className:"element__info"},o.a.createElement("h2",{className:"element__title"},e.card.name),o.a.createElement("div",{className:"element__like-area"},o.a.createElement("button",{type:"button","aria-label":"like",className:r,onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("span",{className:"element__like-count"},e.card.likes.length))))};var f=function(e){var t=o.a.useContext(p);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__info"},o.a.createElement("img",{alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",src:t.avatar,className:"profile__avatar",onClick:e.onEditAvatar}),o.a.createElement("div",{className:"profile__block"},o.a.createElement("div",{className:"profile__name-area"},o.a.createElement("h1",{className:"profile__name"},t.name),o.a.createElement("button",{type:"button","aria-label":"edit-profile",className:"profile__edit-button",onClick:e.onEditProfile})),o.a.createElement("p",{className:"profile__job"},t.about))),o.a.createElement("button",{type:"button","aria-label":"add-card",className:"profile__card-add-button",onClick:e.onAddPlace})),o.a.createElement("ul",{className:"elements"},e.cards.map((function(t,a){return o.a.createElement(d,{card:t,key:a,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))};var _=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var h=function(e){return o.a.createElement("section",{className:"popup ".concat(e.isOpen?"popup_opened":""," popup-").concat(e.name)},o.a.createElement("form",{name:e.name,onSubmit:e.onSubmit,method:"post",action:"#",className:"popup__container",id:e.name,noValidate:!0},o.a.createElement("h3",{className:"popup__title"},e.title),e.children,o.a.createElement("button",{type:"submit",className:"popup__submit-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement("button",{type:"button","aria-label":"close",className:"popup__close-button",onClick:e.onClose})))};var b=function(e){var t=o.a.useContext(p),a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],r=n[1],l=o.a.useState(""),s=Object(i.a)(l,2),u=s[0],m=s[1];return o.a.useEffect((function(){r(t.name),m(t.about)}),[t]),o.a.createElement(h,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})}},o.a.createElement("input",{type:"text",name:"name",required:!0,minLength:"2",maxLength:"40",className:"popup__input",id:"inputName",defaultValue:c,onChange:function(e){r(e.target.value)}}),o.a.createElement("span",{className:"popup__input_type_error",id:"inputName-error"}),o.a.createElement("input",{type:"text",name:"about",required:!0,minLength:"2",maxLength:"200",className:"popup__input",id:"inputJob",defaultValue:u,onChange:function(e){m(e.target.value)}}),o.a.createElement("span",{className:"popup__input_type_error",id:"inputJob-error"}))};var E=function(e){var t=o.a.useRef();return o.a.createElement(h,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""}},o.a.createElement("input",{type:"url",name:"avatar",ref:t,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,className:"popup__input",id:"linkAvatar"}),o.a.createElement("span",{className:"popup__input_type_error",id:"linkAvatar-error"}))};var v=function(e){var t=o.a.useRef(),a=o.a.useRef();return o.a.createElement(h,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onAddPlace({name:t.current.value,link:a.current.value}),t.current.value="",a.current.value=""}},o.a.createElement("input",{type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",ref:t,defaultValue:"",required:!0,minLength:"1",maxLength:"30",className:"popup__input",id:"cardName"}),o.a.createElement("span",{className:"popup__input_type_error",id:"cardName-error"}),o.a.createElement("input",{type:"url",name:"link",ref:a,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",defaultValue:"",required:!0,className:"popup__input",id:"linkPhoto"}),o.a.createElement("span",{className:"popup__input_type_error",id:"linkPhoto-error"}))};var k=function(e){return o.a.createElement("figure",{className:"popup popup_big-image ".concat(e.card&&"popup_opened")},o.a.createElement("div",{className:"popup__image-box"},o.a.createElement("img",{alt:e.card?e.card.name:"",className:"popup__image",src:e.card?e.card.link:""}),o.a.createElement("figcaption",{className:"popup__image-caption"},e.card?e.card.name:""),o.a.createElement("button",{type:"button","aria-label":"close",className:"popup__close-button",onClick:e.onClose})))};var C=function(e){return o.a.createElement("section",{className:"popup popup-delete-card ".concat(e.isOpen?"popup_opened":""),onSubmit:function(t){t.preventDefault(),e.onCardDelete(e.isOpen)}},o.a.createElement("form",{name:"delete-card",method:"post",action:"#",className:"popup__container",id:"deleteCardForm",noValidate:!0},o.a.createElement("h3",{className:"popup__title"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),o.a.createElement("button",{type:"submit",className:"popup__submit-button"},"\u0414\u0430"),o.a.createElement("button",{type:"button","aria-label":"close",className:"popup__close-button",onClick:e.onClose})))},g=a(7),N=a(8),y=new(function(){function e(t){Object(g.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(N.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"b8b572e2-0aa8-4f92-a0e1-a67154852e96","Content-Type":"application/json"}});var O=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],d=o.a.useState(!1),h=Object(i.a)(d,2),g=h[0],N=h[1],O=o.a.useState(),j=Object(i.a)(O,2),U=j[0],S=j[1],P=o.a.useState(),L=Object(i.a)(P,2),A=L[0],x=L[1],w=o.a.useState([]),D=Object(i.a)(w,2),T=D[0],I=D[1],J=o.a.useState([]),V=Object(i.a)(J,2),q=V[0],R=V[1];function B(){n(!1),u(!1),N(!1),x(void 0),S("")}return o.a.useEffect((function(){Promise.all([y.getInitialCards(),y.getUserInfo()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];R(a),I(n)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){function e(e){("Escape"===e.key||e.target.classList.contains("popup_opened"))&&B()}return document.addEventListener("click",e),document.addEventListener("keydown",e),function(){document.removeEventListener("click",e),document.removeEventListener("keydown",e)}})),o.a.createElement("div",{className:"root"},o.a.createElement(p.Provider,{value:T},o.a.createElement(m,null),o.a.createElement(f,{onEditProfile:function(){n(!0)},onEditAvatar:function(){N(!0)},onAddPlace:function(){u(!0)},onCardClick:function(e){x(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){var a=q.map((function(a){return a._id===e._id?t:a}));R(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){S(e)},cards:q}),o.a.createElement(_,null),o.a.createElement(b,{isOpen:a,onClose:B,onUpdateUser:function(e){y.setUserInfo(e).then((function(e){I(e)})).catch((function(e){console.log(e)})),B()}}),o.a.createElement(E,{isOpen:g,onClose:B,onUpdateAvatar:function(e){y.setUserAvatar(e).then((function(e){I(e)})).catch((function(e){console.log(e)})),B()}}),o.a.createElement(v,{isOpen:s,onClose:B,onAddPlace:function(e){y.addCard(e).then((function(e){R([].concat(Object(l.a)(q),[e]))})).catch((function(e){console.log(e)})),B()}}),o.a.createElement(k,{card:A,onClose:B}),o.a.createElement(C,{isOpen:U,onClose:B,onCardDelete:function(e){y.deleteCard(e._id).then((function(){var t=q.filter((function(t){return t._id!==e._id}));R(t)})).catch((function(e){console.log(e)})),B()}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo__mesto.4e5bdbab.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.5ba7bd9e.chunk.js.map