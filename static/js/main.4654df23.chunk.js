(this.webpackJsonpmytest=this.webpackJsonpmytest||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(7),o=c.n(i),a=(c(13),c(8)),l=c(6),r=(c(14),c(3)),u=(c(15),c(20)),j=c(0),b=function(t){var e=t.id,c=t.item,n=t.list,s=t.setList,i=t.complete;return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("input",{onChange:function(t){s(n.map((function(c){return c.id===e?Object(r.a)(Object(r.a)({},c),{},{item:t.target.value}):c})))},className:i?"complete":"",type:"text",value:c,style:{border:"none",outline:"none",backgroundColor:"transparent",color:"white",fontSize:"20px"}}),Object(j.jsxs)("label",{className:"toggle-switch",children:[Object(j.jsx)("input",{type:"checkbox",className:"toggle-switch-checkbox",name:"complete task",id:"toggleSwitch"}),Object(j.jsxs)("div",{onClick:function(){return function(t){s(n.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{complete:!e.complete}):e})))}(e)},className:"toggle-switch-label",htmlFor:"toggleSwitch",children:[Object(j.jsx)("span",{className:"toggle-switch-inner"}),Object(j.jsx)("span",{className:"toggle-switch-switch"})]})]}),Object(j.jsxs)("select",{className:"select",children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"4",children:"3"}),Object(j.jsx)("option",{value:"5",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"})]}),Object(j.jsx)("img",{onClick:function(){return function(t){s(n.filter((function(e){return e.id!==t})))}(e)},src:"https://img.icons8.com/color/48/000000/trash.png",alt:"Delete"}),Object(j.jsx)("span",{children:Object(u.a)(new Date,"MM/dd/yyyy")})]})},m=c(21),d=function(){return localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]};var p=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],i=e[1],o=Object(n.useState)(d),r=Object(l.a)(o,2),u=r[0],p=r[1];return s.a.useEffect((function(){localStorage.setItem("data",JSON.stringify(u))}),[u]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Grocery List"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"buttonSorteItem",onClick:function(){return function(){var t=u.concat().sort((function(t,e){return t.complete-e.complete}));p(t)}()},children:"sorted by name"}),Object(j.jsx)("button",{className:"buttonSorteItem",onClick:function(){return function(){var t=u.concat().sort((function(t,e){return t.complete-e.complete}));p(t)}()},children:"filter by status"})]}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Object(m.a)(),item:c,complete:!1};c&&(p([].concat(Object(a.a)(u),[e])),i(""))},children:[Object(j.jsx)("input",{className:"input",type:"text",value:c,placeholder:"Enter the items",onChange:function(t){i(t.target.value)}}),Object(j.jsx)("button",{className:"btn",type:"submit",children:"Add Items"})]}),Object(j.jsx)("div",{children:u.map((function(t,e){return Object(j.jsx)(b,{id:t.id,item:t.item,list:u,setList:p,complete:t.complete,setItem:i},e)}))})]})};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4654df23.chunk.js.map