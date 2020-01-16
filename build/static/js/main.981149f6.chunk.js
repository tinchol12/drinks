(this.webpackJsonpdrinks=this.webpackJsonpdrinks||[]).push([[0],{26:function(e,t,a){e.exports=a(54)},31:function(e,t,a){},32:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(31),a(32),function(){return c.a.createElement("header",{className:"bg-alert"},c.a.createElement("h1",null,"Busca Recetas de Bebidas"))}),l=a(6),i=a(24),u=a(3),m=a(7),d=a.n(m),b=a(9),p=a.n(b),f=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){!function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",t.next=3,d.a.awrap(p.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"));case 3:e=t.sent,o(e.data.drinks);case 5:case"end":return t.stop()}}))}()}),[]),c.a.createElement(f.Provider,{value:{categorias:r}},e.children)},v=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)({nombre:"",categoria:""}),l=Object(u.a)(s,2),i=l[0],m=l[1],b=Object(n.useState)(!1),f=Object(u.a)(b,2),E=f[0],g=f[1],h=i.nombre,j=i.categoria;return Object(n.useEffect)((function(){if(E){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(h,"&c=").concat(j),a.next=3,d.a.awrap(p.a.get(e));case 3:t=a.sent,o(t.data.drinks);case 5:case"end":return a.stop()}}))}()}}),[i]),c.a.createElement(v.Provider,{value:{recetas:r,buscarRecetas:m,guardarConsultar:g}},e.children)},h=function(){var e=Object(n.useState)({nombre:"",categoria:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useContext)(f).categorias,s=Object(n.useContext)(v),m=s.buscarRecetas,d=s.guardarConsultar,b=function(e){r(Object(i.a)({},a,Object(l.a)({},e.target.name,e.target.value)))};return c.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),m(a),d(!0)}},c.a.createElement("fieldset",{className:"text-center"},c.a.createElement("legend",null,"Busca bebidas por categoria o ingredientes")),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("input",{name:"nombre",className:"form-control",type:"text",placeholder:"Busca por Ingrediente",onChange:b})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("select",{className:"form-control",name:"categoria",onChange:b},c.a.createElement("option",{value:""},"--Selecciona Categor\xeda--"),o.map((function(e){return c.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)})))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"Buscar Bebidas"}))))},j=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)({}),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(r){a.next=2;break}return a.abrupt("return");case 2:return e="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(r),a.next=5,d.a.awrap(p.a.get(e));case 5:t=a.sent,m(t.data.drinks[0]);case 7:case"end":return a.stop()}}))}()}),[r]),c.a.createElement(j.Provider,{value:{informacion:i,guardarIdReceta:o,guardarReceta:m}},e.children)},O=a(65),k=a(64);function N(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var y=Object(k.a)((function(e){return{paper:{position:"absolute",width:350,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),C=function(e){var t=e.receta,a=Object(n.useState)(N),r=Object(u.a)(a,1)[0],o=Object(n.useState)(!1),s=Object(u.a)(o,2),l=s[0],i=s[1],m=y(),d=Object(n.useContext)(j),b=d.informacion,p=d.guardarIdReceta,f=d.guardarReceta;console.log(b);return c.a.createElement("div",{className:"col-md-4 mb-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"card-header"}," ",t.strDrink),c.a.createElement("img",{className:"card-img-top",src:t.strDrinkThumb,alt:"Im\xe1gen de ".concat(t.strDrink)}),c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",onClick:function(){p(t.idDrink),i(!0)}},"Ver Receta"),c.a.createElement(O.a,{open:l,onClose:function(){p(null),f({}),i(!1)}},c.a.createElement("div",{style:r,className:m.paper},c.a.createElement("h2",null,b.strDrink),c.a.createElement("h3",{className:"mt-4"},"Instrucciones"),c.a.createElement("p",null,b.strInstructions),c.a.createElement("img",{className:"img-fluid my-4",src:b.strDrinkThumb}),c.a.createElement("h3",null," Ingredientes y Cantidades "),c.a.createElement("ul",null,function(e){for(var t=[],a=1;a<16;a++)e["strIngredient".concat(a)]&&t.push(c.a.createElement("li",null,e["strIngredient".concat(a)]," ",e["strMeasure".concat(a)]));return t}(b)))))))},x=function(){var e=Object(n.useContext)(v).recetas;return c.a.createElement("div",{className:"row mt-5"},e.map((function(e){return c.a.createElement(C,{key:e.idDrink,receta:e})})))};var S=function(){return c.a.createElement(E,null,c.a.createElement(g,null,c.a.createElement(w,null,c.a.createElement(s,null),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement(h,null)),c.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.981149f6.chunk.js.map