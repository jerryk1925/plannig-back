(function(e){function t(t){for(var a,r,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({auth:"auth",dashboard:"dashboard",page404:"page404"}[e]||e)+"."+{auth:"e7a06eb6",dashboard:"5ceec0a8",page404:"fe4cd2b9"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={auth:1,dashboard:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({auth:"auth",dashboard:"dashboard",page404:"page404"}[e]||e)+"."+{auth:"17bb9dfc",dashboard:"17df3450",page404:"31d6cfe0"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1254:function(e,t,n){e.exports={layout:"Sidebar_layout_1Xgfd",wrapper:"Sidebar_wrapper_3fUSm",left:"Sidebar_left_25nO_",title:"Sidebar_title_3OUmS",exit:"Sidebar_exit_3OkNL",list:"Sidebar_list_3UeUu",item:"Sidebar_item_3HgnY",line:"Sidebar_line_1QN3O"}},3302:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{class:e.css.link,attrs:{to:e.url,"active-class":e.css.active,exact:""}},[e._t("default")],2)},r=[],o=n("e878"),i=n.n(o),s={name:"Link",props:{url:{required:!0,type:String}},data:function(){return{css:i.a}}},u=s,c=n("2877"),l=Object(c["a"])(u,a,r,!1,null,null,null);t["a"]=l.exports},"482a":function(e,t,n){e.exports={layout:"Defaul_layout_FOcaI",main:"Defaul_main_24dgL",page:"Defaul_page_3ITdn"}},"56d7":function(e,t,n){"use strict";n.r(t);n("45fc"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.layout,{tag:"component",attrs:{id:"app"}},[n("transition",{attrs:{name:"fade-in-right",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i={name:"App",computed:{layout:function(){return this.$route.meta.layout}},mounted:function(){console.log(this.$store),console.log(Object({NODE_ENV:"production",BASE_URL:"/"}))}},s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,r,o,!1,null,null,null),l=c.exports,d="default-layout",f="no-sidebar-layout",p=function(){return"/"},h=function(){return"/auth"},m=function(){return"/planning"},b=function(){return"/transactions"},_=function(){return"/create-wallet"},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{class:e.css.layout},[n("Sidebar"),n("Header"),n("div",{class:e.css.main},[n("div",{class:e.css.page},[e._t("default")],2)])],1)},v=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.isOpenPortableSidebar&&e.css.layout},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],class:[e.css.wrapper,e.isOpenPortableSidebar&&e.css.left]},[n("div",{class:e.css.title},[e._v("Himi")]),n("ul",{class:e.css.list},e._l(e.links,(function(t){return n("li",{key:t.title,class:e.css.item},[t.isShow?n("UiLink",{attrs:{url:t.url},nativeOn:{click:function(t){return e.changeLinePosition(t)}}},[e._v(" "+e._s(t.title)+" ")]):e._e()],1)})),0),n("div",{class:e.css.line,style:{top:e.positionLine}}),n("div",{class:e.css.exit},[n("UiLink",{attrs:{url:e.exitLink}},[e._v(" На Выход ")])],1)])])},E=[],O=n("5530"),y=n("2f62"),k=n("3302"),w=[{title:"Dashboard",url:p(),isShow:!0},{title:"Budget Planner",url:m(),isShow:!0},{title:"Transaction",url:b(),isShow:!0},{title:"Create Wallet",url:_(),isShow:!0}],L=n("1254"),P=n.n(L),A={name:"Sidebar",data:function(){return{links:w,exitLink:h(),positionLine:null,css:P.a}},computed:Object(O["a"])({},Object(y["c"])(["isOpenPortableSidebar"])),methods:Object(O["a"])({},Object(y["b"])(["SET_IS_OPEN_PORTABLE_SIDEBAR"]),{changeLinePosition:function(e){this.positionLine="".concat(e.target.offsetTop,"px"),this.isOpenPortableSidebar&&this.SET_IS_OPEN_PORTABLE_SIDEBAR(!1)},clickOutside:function(){this.isOpenPortableSidebar&&this.SET_IS_OPEN_PORTABLE_SIDEBAR(!1)}}),mounted:function(){var e=document.getElementsByClassName("router-link-exact-active");this.positionLine="".concat(e[0].offsetTop,"px")},components:{UiLink:k["a"]}},T=A,x=Object(u["a"])(T,S,E,!1,null,null,null),j=x.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.css.wrapper},[n("button",{class:e.css.burger,on:{click:function(t){return t.stopPropagation(),e.SET_IS_OPEN_PORTABLE_SIDEBAR(!0)}}},[n("span",{class:e.css.line}),n("span",{class:e.css.line}),n("span",{class:e.css.line})])])},B=[],D=n("e537"),I=n.n(D),R={name:"Header",data:function(){return{css:I.a}},methods:Object(O["a"])({},Object(y["b"])(["SET_IS_OPEN_PORTABLE_SIDEBAR"]))},C=R,U=Object(u["a"])(C,N,B,!1,null,null,null),q=U.exports,H=n("482a"),$=n.n(H),M={name:"Default",data:function(){return{css:$.a}},components:{Sidebar:j,Header:q}},W=M,F=Object(u["a"])(W,g,v,!1,null,null,null),G=F.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e._t("default")],2)},Q=[],V={name:"NoSiDEBAR"},Y=V,K=Object(u["a"])(Y,J,Q,!1,null,null,null),X=K.exports,Z={bind:function(e,t,n){e.clickOutsideEvent=function(a){e===a.target||e.contains(a.target)||n.context[t.expression](a)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},z=n("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var ee=n("8c4f");a["a"].use(ee["a"]);var te=[{path:p(),name:"DashboardPage",meta:{layout:d,requiresAuth:!0},component:function(){return n.e("dashboard").then(n.bind(null,"1aa9"))}},{path:h(),name:"Auth",meta:{layout:f},component:function(){return n.e("auth").then(n.bind(null,"d841"))}},{path:m(),name:"BudgetPlannerPage",meta:{layout:d,requiresAuth:!0},component:function(){return n.e("auth").then(n.bind(null,"7829"))}},{path:b(),name:"TransactionsPage",meta:{layout:d,requiresAuth:!0},component:function(){return n.e("auth").then(n.bind(null,"629e"))}},{path:_(),name:"CreateWalletPage",meta:{layout:d,requiresAuth:!0},component:function(){return n.e("auth").then(n.bind(null,"0f80"))}},{path:"*",name:"Page404",meta:{layout:f},component:function(){return n.e("page404").then(n.bind(null,"54e6"))}}],ne=new ee["a"]({mode:"history",base:"/",routes:te}),ae=ne,re={authentication:localStorage.getItem("token")||!1},oe={USER_LOGIN:function(e,t){e.authentication=t}},ie={},se={state:re,mutations:oe,actions:ie},ue=(n("b0c0"),{wallet:{name:"",status:"Неакивно",balance:null,type:null}}),ce={SET_WALLET_NAME:function(e,t){e.wallet.name=t},SET_WALLET_TYPE:function(e,t){e.wallet.type=t},SET_WALLET_BALANCE:function(e,t){e.wallet.balance=t}},le={},de={state:ue,mutations:ce,actions:le};a["a"].use(y["a"]);var fe=new y["a"].Store({state:{load:!1,isOpenPortableSidebar:!1},mutations:{LOADING:function(e,t){e.load=t},SET_IS_OPEN_PORTABLE_SIDEBAR:function(e,t){e.isOpenPortableSidebar=t}},actions:{},modules:{userStore:se,walletStore:de}});n("db78");a["a"].config.productionTip=!1,a["a"].component(d,G),a["a"].component(f,X),a["a"].directive("click-outside",Z),ae.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?fe.state.userStore.authentication?n():n({path:h()}):n()})),new a["a"]({router:ae,store:fe,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},db78:function(e,t,n){},e537:function(e,t,n){e.exports={wrapper:"Header_wrapper_3AwTG",burger:"Header_burger_30SgV",line:"Header_line_18Dsk"}},e878:function(e,t,n){e.exports={link:"Link_link_2Z_gQ","router-link-active":"Link_router-link-active_33va-",active:"Link_active_2ybJT"}}});
//# sourceMappingURL=app.b7bc67a6.js.map