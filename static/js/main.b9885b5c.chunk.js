(this.webpackJsonpmytest=this.webpackJsonpmytest||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(7),r=n.n(i),o=(n(17),n(11)),s=n(6),u=(n(18),n(3)),l=(n(19),n(8)),j=n(9),m=n(12),b=n(10),d=n(0),f=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:""},t.getDate=function(){var e=(new Date).toDateString();t.setState({date:e})},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getDate()}},{key:"render",value:function(){var t=this.state.date;return Object(d.jsx)("div",{children:t})}}]),n}(a.a.Component),p=function(t){var e=t.id,n=t.item,c=t.list,a=t.setList,i=t.complete;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("input",{onChange:function(t){a(c.map((function(n){return n.id===e?Object(u.a)(Object(u.a)({},n),{},{item:t.target.value}):n})))},className:i?"complete":"",type:"text",value:n,style:{border:"none",outline:"none",backgroundColor:"transparent",color:"white",fontSize:"20px"}}),Object(d.jsx)("img",{onClick:function(){return function(t){a(c.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{complete:!e.complete}):e})))}(e)},src:"https://img.icons8.com/offices/40/000000/checked-2--v2.png",alt:"complete task"}),Object(d.jsx)("img",{onClick:function(){return function(t){a(c.filter((function(e){return e.id!==t})))}(e)},src:"https://img.icons8.com/color/48/000000/trash.png",alt:"Delete"}),Object(d.jsx)(f,{})]})},O=n(23),h=function(){return localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]};var v=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)(h),u=Object(s.a)(r,2),l=u[0],j=u[1];return a.a.useEffect((function(){localStorage.setItem("data",JSON.stringify(l))}),[l]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Grocery List"}),Object(d.jsx)("button",{onClick:function(){return function(){var t=l.sort((function(t,e){return t.item-e.item}));j(t)}()},children:"sorted name"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Object(O.a)(),item:n,complete:!1};n&&(j([].concat(Object(o.a)(l),[e])),i(""))},children:[Object(d.jsx)("input",{className:"input",type:"text",value:n,placeholder:"Enter the items",onChange:function(t){i(t.target.value)}}),Object(d.jsx)("button",{className:"btn",type:"submit",children:"Add Items"})]}),Object(d.jsx)("div",{children:l.map((function(t,e){return Object(d.jsx)(p,{id:t.id,item:t.item,list:l,setList:j,complete:t.complete,setItem:i},e)}))})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b9885b5c.chunk.js.map