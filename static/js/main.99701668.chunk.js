(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{18:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(8),i=c.n(a),s=(c(18),c(4)),d=c.n(s),l=(c(30),c(9)),j=c(2),r=[{id:1,description:"Dominoes",category:"FoodNDining",amount:430,date:"01-02-2020"},{id:2,description:"Car wash",category:"utility",amount:500,date:"01-06-2020"},{id:3,description:"Amazon",category:"shopping",amount:2030,date:"01-07-2020"},{id:4,description:"House rent",category:"Food & Dining",amount:35900,date:"01-03-2020"},{id:5,description:"Tuition",category:"education",amount:2200,date:"01-12-2020"},{id:6,description:"Laundry",category:"Personal Care",amount:320,date:"01-14-2020"},{id:7,description:"Vacation",category:"Travel",amount:3430,date:"01-18-2020"}],u=(c(31),c(0));d.a.setAppElement("#root");var A=function(){var e=Object(n.useState)(r),t=Object(j.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(!1),i=Object(j.a)(a,2),s=i[0],A=i[1],g=Object(n.useState)(""),m=Object(j.a)(g,2),b=(m[0],m[1]),O=Object(n.useState)(""),p=Object(j.a)(O,2),R=p[0],v=p[1],x=Object(n.useState)(""),h=Object(j.a)(x,2),y=h[0],f=h[1],F=Object(n.useState)(""),S=Object(j.a)(F,2),k=S[0],C=S[1],E=Object(n.useState)(""),L=Object(j.a)(E,2),I=L[0],T=L[1],w=Object(n.useState)(""),W=Object(j.a)(w,2),K=W[0],D=W[1],H=Object(n.useState)(r),P=Object(j.a)(H,2),Z=P[0],B=(P[1],c.filter((function(e){return e.category.toLowerCase().includes(K.toLowerCase())})));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("input",{type:"text",className:"header_searchBox",onChange:function(e){D(e.target.value)},placeholder:"Please search here"}),Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",class:"logo"}),Object(u.jsx)("button",{onClick:function(){return Z.sort((function(e,t){return t.amount-e.amount})),void alert("This feature will be added soon")},class:"add__btn__min",children:"See min"}),Object(u.jsx)("button",{onClick:function(){return A(!0)},class:"add__btn",children:"add"})]}),Object(u.jsxs)(d.a,{isOpen:s,onRequestClose:function(){return A(!1)},overlayClassName:"overlay",children:[Object(u.jsx)("h1",{className:"header_modal",children:"Please click on escape incase you don't want to add anything"}),Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),b(e.target.value)},className:"input_modal",placeholder:"Serial Number"}),Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),v(e.target.value)},className:"input_modal",placeholder:"Description"}),Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),f(e.target.value)},className:"input_modal",placeholder:"Category"}),Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),C(e.target.value)},className:"input_modal",placeholder:"Amount"}),Object(u.jsx)("input",{onChange:function(e){console.log(e.target.value),T(e.target.value)},className:"input_modal",type:"date"}),Object(u.jsx)("button",{onClick:function(){return A(!1)},className:"modal_back",children:"Go back"}),Object(u.jsx)("button",{onClick:function(){o([].concat(Object(l.a)(c),[{description:R,category:y,amount:k,date:I}])),console.log(c),A(!1)},className:"modal_add",children:"add"})]}),Object(u.jsx)("div",{class:"movements",children:B.map((function(e,t){return Object(u.jsxs)("div",{class:"movements__row",children:[Object(u.jsx)("div",{class:"movements__type movements__type--deposit",children:t+1}),Object(u.jsx)("div",{class:"movements__date",children:Object(u.jsx)("b",{children:e.date})}),Object(u.jsx)("div",{class:"movements__description",children:Object(u.jsx)("b",{children:e.description})}),Object(u.jsx)("div",{class:"movements__description",children:Object(u.jsx)("b",{children:e.category})}),Object(u.jsxs)("div",{class:"movements__value",children:[e.amount,"\u20ac"]}),Object(u.jsx)("button",{onClick:function(){alert("This feature will be added soon")},class:"movements__type movements__type--deposit",children:"edit"}),Object(u.jsx)("button",{onClick:function(){return function(e){var t=Object(l.a)(c);t.splice(e,1),o(t),console.log(c)}(t)},class:"movements__type movements__type--deposit",children:"delete"})]},t)}))})]})};var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(A,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),m()}},[[33,1,2]]]);
//# sourceMappingURL=main.99701668.chunk.js.map