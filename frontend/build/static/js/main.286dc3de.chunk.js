(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},58:function(e,n,t){},62:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(0),s=t.n(a),r=t(12),i=t.n(r),o=(t(50),t(51),t(52),t(32)),j=t.n(o),l=t(94),d=t(33),u=t.n(d);var b=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(l.a,{children:Object(c.jsx)(j.a,{fontSize:"large",className:"header__icon"})}),Object(c.jsx)("img",{src:"https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png",alt:"tinder logo",className:"header__logo"}),Object(c.jsx)(l.a,{children:Object(c.jsx)(u.a,{fontSize:"large",className:"header__icon"})})]})},f=(t(58),t(34)),h=t.n(f),O=t(35),p=t.n(O),x=t(36),g=t.n(x),m=t(37),v=t.n(m),_=t(38),w=t.n(_),N=function(){return Object(c.jsxs)("div",{className:"swipeButtons",children:[Object(c.jsx)(l.a,{className:"swipeButtons__repeat",children:Object(c.jsx)(h.a,{fontSize:"large"})}),Object(c.jsx)(l.a,{className:"swipeButtons__left",children:Object(c.jsx)(p.a,{fontSize:"large"})}),Object(c.jsx)(l.a,{className:"swipeButtons__star",children:Object(c.jsx)(g.a,{fontSize:"large"})}),Object(c.jsx)(l.a,{className:"swipeButtons__right",children:Object(c.jsx)(v.a,{fontSize:"large"})}),Object(c.jsx)(l.a,{className:"swipeButtons__lightning",children:Object(c.jsx)(w.a,{fontSize:"large"})})]})},S=t(20),B=t.n(S),z=t(39),C=t(21),k=t(40),y=t.n(k),F=(t(62),t(41)),I=t.n(F);var L=function(){var e=Object(a.useState)([]),n=Object(C.a)(e,2),t=n[0],s=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(z.a)(B.a.mark((function e(){var n,t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/tinder/cards");case 2:n=e.sent,t=n.data,s(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"tinderCards",children:Object(c.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(c.jsx)(y.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing",t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n);var n},children:Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(c.jsx)("h3",{children:e.name})})},e.name)}))})})};var E=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsx)(L,{}),Object(c.jsx)(N,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,95)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),J()}},[[80,1,2]]]);
//# sourceMappingURL=main.286dc3de.chunk.js.map