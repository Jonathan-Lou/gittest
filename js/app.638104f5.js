(function(t){function e(e){for(var r,a,o=e[0],s=e[1],u=e[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4643":"904f7ad2","chunk-2d22c83a":"621cd94f","chunk-15e23a62":"7ba8c8b1","chunk-69959690":"9ca09d7f","chunk-1544d568":"f25726cc","chunk-70c1037d":"a4e7e314","chunk-7c6d9a57":"f22ba6ce"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-15e23a62":1,"chunk-69959690":1,"chunk-1544d568":1,"chunk-70c1037d":1,"chunk-7c6d9a57":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c4643":"31d6cfe0","chunk-2d22c83a":"31d6cfe0","chunk-15e23a62":"426e483f","chunk-69959690":"8a1dafb1","chunk-1544d568":"275293be","chunk-70c1037d":"919c6961","chunk-7c6d9a57":"60d6697e"}[t]+".css",c=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"16e7":function(t,e,n){"use strict";var r=n("509b"),a=n.n(r);a.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"2c1d":function(t,e,n){},"2e83":function(t,e,n){"use strict";var r=n("2c1d"),a=n.n(r);a.a},"509b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-tab-bar"},[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443")},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("b508")},slot:"item-active-icon"}),r("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd")},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("a5ef")},slot:"item-active-icon"}),r("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872")},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("c3f8")},slot:"item-active-icon"}),r("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d")},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("d151")},slot:"item-active-icon"}),r("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar"},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,d=(n("2e83"),n("2877")),p=Object(d["a"])(f,s,u,!1,null,"648e706a",null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",{staticClass:"item-icon"},[t._t("item-active-icon")],2):n("div",{staticClass:"item-icon"},[t._t("item-icon")],2),n("div",{staticClass:"item-text"},[t._t("item-text")],2)])},v=[],b=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:{type:String,required:!0}},methods:{itemClick:function(){this.$router.replace(this.path)}},computed:{isActive:function(){return this.$route.path==this.path}}}),g=b,k=(n("16e7"),Object(d["a"])(g,h,v,!1,null,"df1d06ca",null)),y=k.exports,x={name:"MainTabBar",components:{TabBar:m,TabBarItem:y}},_=x,w=Object(d["a"])(_,i,o,!1,null,"2658a473",null),C=w.exports,O={name:"App",components:{MainTabBar:C}},j=O,P=(n("034f"),Object(d["a"])(j,a,c,!1,null,null,null)),T=P.exports,E=(n("d3b7"),n("8c4f")),L=function(){return Promise.all([n.e("chunk-2d22c83a"),n.e("chunk-69959690"),n.e("chunk-1544d568")]).then(n.bind(null,"b3d7"))},S=function(){return Promise.all([n.e("chunk-2d22c83a"),n.e("chunk-15e23a62")]).then(n.bind(null,"bb51"))},A=function(){return Promise.all([n.e("chunk-2d22c83a"),n.e("chunk-7c6d9a57")]).then(n.bind(null,"c228"))},B=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},$=function(){return Promise.all([n.e("chunk-2d22c83a"),n.e("chunk-69959690"),n.e("chunk-70c1037d")]).then(n.bind(null,"6ab7"))};r["a"].use(E["a"]);var M=new E["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:L},{path:"/category",name:"Category",component:S},{path:"/cart",name:"Cart",component:A},{path:"/profile",name:"Profile",component:B},{path:"/detail/:iid",name:"Detail",component:$}],mode:"hash"}),N=n("b85c"),D=n("2f62"),q={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(D["a"]);var I=new D["a"].Store({state:{cartList:[]},getters:q,actions:{addCart:function(t,e){return new Promise((function(n,r){var a,c=null,i=Object(N["a"])(t.state.cartList);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.iid==e.iid&&(c=o)}}catch(s){i.e(s)}finally{i.f()}c?(n("商品数量+1"),c.count++):(e.count=1,e.checked=!0,t.state.cartList.push(e),n("增加商品成功"))}))}}}),H=I,J=n("caf9");r["a"].config.productionTip=!1,r["a"].use(J["a"]),r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(T)},router:M,store:H}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.638104f5.js.map