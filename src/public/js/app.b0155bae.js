(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function u(e){return c.p+"js/"+({auth:"auth",dashboard:"dashboard",page404:"page404"}[e]||e)+"."+{auth:"3c198759",dashboard:"e5ba4d2c",page404:"8df3404c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={auth:1,dashboard:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({auth:"auth",dashboard:"dashboard",page404:"page404"}[e]||e)+"."+{auth:"db21d93f",dashboard:"17df3450",page404:"31d6cfe0"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1254:function(e,t,n){e.exports={layout:"Sidebar_layout_1Xgfd",wrapper:"Sidebar_wrapper_3fUSm",left:"Sidebar_left_25nO_",title:"Sidebar_title_3OUmS",exit:"Sidebar_exit_3OkNL",list:"Sidebar_list_3UeUu",item:"Sidebar_item_3HgnY",line:"Sidebar_line_1QN3O"}},3302:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{class:e.css.link,attrs:{to:e.url,"active-class":e.css.active,exact:""}},[e._t("default")],2)},a=[],i=n("e878"),o=n.n(i),u={name:"Link",props:{url:{required:!0,type:String}},data:function(){return{css:o.a}}},c=u,s=n("2877"),l=Object(s["a"])(c,r,a,!1,null,null,null);t["a"]=l.exports},"482a":function(e,t,n){e.exports={layout:"Defaul_layout_FOcaI",main:"Defaul_main_24dgL",page:"Defaul_page_3ITdn"}},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.layout,{tag:"component",attrs:{id:"app"}},[n("transition",{attrs:{name:"fade-in-right",mode:"out-in"}},[n("router-view")],1)],1)},o=[],u={name:"App",computed:{layout:function(){return this.$route.meta.layout}},mounted:function(){console.log(this.$store),console.log("https://himi-planning.herokuapp.com/api")}},c=u,s=(n("034f"),n("2877")),l=Object(s["a"])(c,i,o,!1,null,null,null),p=l.exports,f="default-layout",d="no-sidebar-layout",h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{class:e.css.layout},[n("Sidebar"),n("Header"),n("div",{class:e.css.main},[n("div",{class:e.css.page},[e._t("default")],2)])],1)},m=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.isOpenPortableSidebar&&e.css.layout},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],class:[e.css.wrapper,e.isOpenPortableSidebar&&e.css.left]},[n("div",{class:e.css.title},[e._v("Himi")]),n("ul",{class:e.css.list},e._l(e.links,(function(t){return n("li",{key:t.title,class:e.css.item},[t.isShow?n("UiLink",{attrs:{url:t.url},nativeOn:{click:function(t){return e.changeLinePosition(t)}}},[e._v(" "+e._s(t.title)+" ")]):e._e()],1)})),0),n("div",{class:e.css.line,style:{top:e.positionLine}}),n("div",{class:e.css.exit,on:{click:e.userLogout}},[e._v(" На Выход ")])])])},g=[],v=n("5530"),_=n("2f62"),E=n("3302"),O=function(){return"/"},S=function(){return"/auth"},w=function(){return"/planning"},k=function(){return"/transactions"},y=function(){return"/create-wallet"},x=[{title:"Dashboard",url:O(),isShow:!0},{title:"Budget Planner",url:w(),isShow:!0},{title:"Transaction",url:k(),isShow:!0},{title:"Create Wallet",url:y(),isShow:!0}],R=n("1254"),T=n.n(R),j={name:"Sidebar",data:function(){return{links:x,exitLink:S(),positionLine:null,css:T.a}},computed:Object(v["a"])({},Object(_["d"])(["isOpenPortableSidebar"])),methods:Object(v["a"])({},Object(_["c"])(["SET_IS_OPEN_PORTABLE_SIDEBAR"]),{},Object(_["b"])(["logout"]),{changeLinePosition:function(e){this.positionLine="".concat(e.target.offsetTop,"px"),this.isOpenPortableSidebar&&this.SET_IS_OPEN_PORTABLE_SIDEBAR(!1)},clickOutside:function(){this.isOpenPortableSidebar&&this.SET_IS_OPEN_PORTABLE_SIDEBAR(!1)},userLogout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.logout();case 2:if(n=t.sent,!n){t.next=6;break}return t.next=6,e.$router.push(S());case 6:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e=document.getElementsByClassName("router-link-exact-active");this.positionLine="".concat(e[0].offsetTop,"px")},components:{UiLink:E["a"]}},A=j,L=Object(s["a"])(A,b,g,!1,null,null,null),P=L.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.css.wrapper},[n("button",{class:e.css.burger,on:{click:function(t){return t.stopPropagation(),e.SET_IS_OPEN_PORTABLE_SIDEBAR(!0)}}},[n("span",{class:e.css.line}),n("span",{class:e.css.line}),n("span",{class:e.css.line})])])},D=[],B=n("e537"),C=n.n(B),I={name:"Header",data:function(){return{css:C.a}},methods:Object(v["a"])({},Object(_["c"])(["SET_IS_OPEN_PORTABLE_SIDEBAR"]))},U=I,$=Object(s["a"])(U,N,D,!1,null,null,null),q=$.exports,H=n("482a"),M=n.n(H),W={name:"Default",data:function(){return{css:M.a}},components:{Sidebar:P,Header:q}},F=W,J=Object(s["a"])(F,h,m,!1,null,null,null),G=J.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e._t("default")],2)},Y=[],K={name:"NoSiDEBAR"},V=K,X=Object(s["a"])(V,Q,Y,!1,null,null,null),Z=X.exports,z={bind:function(e,t,n){e.clickOutsideEvent=function(r){e===r.target||e.contains(r.target)||n.context[t.expression](r)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},ee=n("9483");Object(ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var te=n("8c4f");a["a"].use(te["a"]);var ne=[{path:O(),name:"DashboardPage",meta:{layout:f,requiresAuth:!0},component:function(){return n.e("dashboard").then(n.bind(null,"1aa9"))}},{path:S(),name:"Auth",meta:{layout:d},component:function(){return n.e("auth").then(n.bind(null,"d841"))}},{path:w(),name:"BudgetPlannerPage",meta:{layout:f,requiresAuth:!0},component:function(){return n.e("auth").then(n.bind(null,"7829"))}},{path:k(),name:"TransactionsPage",meta:{layout:f,requiresAuth:!0},component:function(){return n.e("auth").then(n.bind(null,"629e"))}},{path:y(),name:"CreateWalletPage",meta:{layout:f,requiresAuth:!0},component:function(){return n.e("auth").then(n.bind(null,"0f80"))}},{path:"*",name:"Page404",meta:{layout:d},component:function(){return n.e("page404").then(n.bind(null,"54e6"))}}],re=new te["a"]({mode:"history",base:"/",routes:ne}),ae=re,ie=(n("99af"),n("4160"),n("b64b"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("630a")),oe=function(e){return new URL("".concat(ie["a"],"/").concat(e))},ue=function(e,t){var n=oe(e);return 0===t.length||Object.keys(t).forEach((function(e){return n.searchParams.append(e,t[e])})),n},ce=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=o.length>2&&void 0!==o[2]?o[2]:{},a=ue(t,n),e.next=5,fetch(a,Object(v["a"])({method:"GET"},r,{withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}}));case 5:if(i=e.sent,!i.ok){e.next=10;break}return e.next=9,i.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",{error:{all:"Чтото пошло не так"}});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=o.length>2&&void 0!==o[2]?o[2]:{},a=oe(t),e.next=5,fetch(a,Object(v["a"])({method:"POST",body:JSON.stringify(n)},r,{withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json"}}));case 5:if(i=e.sent,!i.ok){e.next=10;break}return e.next=9,i.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",{error:{all:"Чтото пошло не так"}});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se("login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se("register",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ce("auth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ce("logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he={user:null,error:{},load:!1},me={SET_USER:function(e,t){e.user=t},SET_ERROR:function(e,t){e.error=t},SET_LOAD:function(e,t){e.load=t}},be={login:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("SET_LOAD",!0),n.next=4,le(t);case 4:a=n.sent,a.error?r("SET_ERROR",a.error):(r("SET_ERROR",{}),r("SET_USER",a.user)),r("SET_LOAD",!1);case 7:case"end":return n.stop()}}),n)})))()},registration:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("SET_LOAD",!0),n.next=4,pe(t);case 4:a=n.sent,a.error?r("SET_ERROR",a.error):(r("SET_ERROR",{}),r("SET_USER",a.user)),r("SET_LOAD",!1);case 7:case"end":return n.stop()}}),n)})))()},checkAuth:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fe();case 3:r=t.sent,n("SET_USER",r.user);case 5:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,de();case 3:if(r=t.sent,!r.error){t.next=8;break}n("SET_ERROR",r.error),t.next=11;break;case 8:return n("SET_ERROR",{}),n("SET_USER",null),t.abrupt("return",r.success);case 11:case"end":return t.stop()}}),t)})))()}},ge={isAuthentication:function(e){return!!e.user}},ve={state:he,mutations:me,actions:be,getters:ge},_e=(n("b0c0"),{wallet:{name:"",status:"Неакивно",balance:null,type:null}}),Ee={SET_WALLET_NAME:function(e,t){e.wallet.name=t},SET_WALLET_TYPE:function(e,t){e.wallet.type=t},SET_WALLET_BALANCE:function(e,t){e.wallet.balance=t}},Oe={},Se={state:_e,mutations:Ee,actions:Oe};a["a"].use(_["a"]);var we=new _["a"].Store({state:{loading:!1,isOpenPortableSidebar:!1},mutations:{LOADING:function(e,t){e.loading=t},SET_IS_OPEN_PORTABLE_SIDEBAR:function(e,t){e.isOpenPortableSidebar=t}},actions:{},modules:{userStore:ve,walletStore:Se}}),ke=(n("45fc"),n("a78e")),ye=n.n(ke),xe=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.requiresAuth}))){e.next=14;break}if(!ye.a.get("authSession")){e.next=11;break}if(!a.state.userStore.user){e.next=6;break}r(),e.next=9;break;case 6:return e.next=8,a.dispatch("checkAuth");case 8:a.getters.isAuthentication?r():r({path:S()});case 9:e.next=12;break;case 11:r({path:S()});case 12:e.next=15;break;case 14:r();case 15:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}();n("db78");a["a"].config.productionTip=!1,a["a"].component(f,G),a["a"].component(d,Z),a["a"].directive("click-outside",z),ae.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,xe(t,n,r,we);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),new a["a"]({router:ae,store:we,render:function(e){return e(p)}}).$mount("#app")},"630a":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="https://himi-planning.herokuapp.com/api",a={card:0,cash:1,bank:2,garden:3}},"85ec":function(e,t,n){},db78:function(e,t,n){},e537:function(e,t,n){e.exports={wrapper:"Header_wrapper_3AwTG",burger:"Header_burger_30SgV",line:"Header_line_18Dsk"}},e878:function(e,t,n){e.exports={link:"Link_link_2Z_gQ","router-link-active":"Link_router-link-active_33va-",active:"Link_active_2ybJT"}}});
//# sourceMappingURL=app.b0155bae.js.map