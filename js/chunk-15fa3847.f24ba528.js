(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15fa3847"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),i=n("8e60"),a=n("63b6"),c=n("9138"),u=n("ebfd").KEY,s=n("294c"),f=n("dbdb"),l=n("45f2"),p=n("62a0"),d=n("5168"),b=n("ccb9"),v=n("6718"),y=n("47ee"),h=n("9003"),m=n("e4ae"),g=n("f772"),x=n("241e"),w=n("36c3"),O=n("1bc3"),j=n("aebd"),S=n("a159"),_=n("0395"),P=n("bf0b"),E=n("9aa9"),k=n("d9f6"),F=n("c3a1"),C=P.f,T=k.f,I=_.f,M=r.Symbol,N=r.JSON,J=N&&N.stringify,D="prototype",$=d("_hidden"),A=d("toPrimitive"),R={}.propertyIsEnumerable,W=f("symbol-registry"),L=f("symbols"),B=f("op-symbols"),G=Object[D],q="function"==typeof M&&!!E.f,z=r.QObject,H=!z||!z[D]||!z[D].findChild,K=i&&s(function(){return 7!=S(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=C(G,e);r&&delete G[e],T(t,e,n),r&&t!==G&&T(G,e,r)}:T,Q=function(t){var e=L[t]=S(M[D]);return e._k=t,e},Y=q&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},U=function(t,e,n){return t===G&&U(B,e,n),m(t),e=O(e,!0),m(n),o(L,e)?(n.enumerable?(o(t,$)&&t[$][e]&&(t[$][e]=!1),n=S(n,{enumerable:j(0,!1)})):(o(t,$)||T(t,$,j(1,{})),t[$][e]=!0),K(t,e,n)):T(t,e,n)},V=function(t,e){m(t);var n,r=y(e=w(e)),o=0,i=r.length;while(i>o)U(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?S(t):V(S(t),e)},Z=function(t){var e=R.call(this,t=O(t,!0));return!(this===G&&o(L,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(L,t)||o(this,$)&&this[$][t])||e)},tt=function(t,e){if(t=w(t),e=O(e,!0),t!==G||!o(L,e)||o(B,e)){var n=C(t,e);return!n||!o(L,e)||o(t,$)&&t[$][e]||(n.enumerable=!0),n}},et=function(t){var e,n=I(w(t)),r=[],i=0;while(n.length>i)o(L,e=n[i++])||e==$||e==u||r.push(e);return r},nt=function(t){var e,n=t===G,r=I(n?B:w(t)),i=[],a=0;while(r.length>a)!o(L,e=r[a++])||n&&!o(G,e)||i.push(L[e]);return i};q||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(B,n),o(this,$)&&o(this[$],t)&&(this[$][t]=!1),K(this,t,j(1,n))};return i&&H&&K(G,t,{configurable:!0,set:e}),Q(t)},c(M[D],"toString",function(){return this._k}),P.f=tt,k.f=U,n("6abf").f=_.f=et,n("355d").f=Z,E.f=nt,i&&!n("b8e3")&&c(G,"propertyIsEnumerable",Z,!0),b.f=function(t){return Q(d(t))}),a(a.G+a.W+a.F*!q,{Symbol:M});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)d(rt[ot++]);for(var it=F(d.store),at=0;it.length>at;)v(it[at++]);a(a.S+a.F*!q,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=M(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),a(a.S+a.F*!q,"Object",{create:X,defineProperty:U,defineProperties:V,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ct=s(function(){E.f(1)});a(a.S+a.F*ct,"Object",{getOwnPropertySymbols:function(t){return E.f(x(t))}}),N&&a(a.S+a.F*(!q||s(function(){var t=M();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Y(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,J.apply(N,r)}}),M[D][A]||n("35e8")(M[D],A,M[D].valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"268f":function(t,e,n){t.exports=n("fde4")},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"32a6":function(t,e,n){var r=n("241e"),o=n("c3a1");n("ce7e")("keys",function(){return function(t){return o(r(t))}})},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var a,c=n(t),u=i.f,s=0;while(c.length>s)u.call(t,a=c[s++])&&e.push(a)}return e}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,a="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};c.store=r},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){while(s>f)if(c=u[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),a=n("35e8"),c=n("07e3"),u="prototype",s=function(t,e,n){var f,l,p,d=t&s.F,b=t&s.G,v=t&s.S,y=t&s.P,h=t&s.B,m=t&s.W,g=b?o:o[e]||(o[e]={}),x=g[u],w=b?r:v?r[e]:(r[e]||{})[u];for(f in b&&(n=e),n)l=!d&&w&&void 0!==w[f],l&&c(g,f)||(p=l?w[f]:n[f],g[f]=b&&"function"!=typeof w[f]?n[f]:h&&l?i(p,r):m&&w[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((g.virtual||(g.virtual={}))[f]=p,t&s.R&&x&&!x[f]&&a(x,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),a=n("ccb9"),c=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),c=a.length,u=0;while(c>u)r.f(t,n=a[u++],e[n]);return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,e,n){t.exports=n("35e8")},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),a=n("5559")("IE_PROTO"),c=function(){},u="prototype",s=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),s=t.F;while(r--)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[u]=r(t),n=new c,c[u]=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},a4bb:function(t,e,n){t.exports=n("8aae")},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b130:function(t,e,n){t.exports=n.p+"img/avatar_cadr.7f2ac608.png"},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.typed||t.me?r("div",{staticClass:"flex flex-col items-center justify-center w-full h-full lg:pt-24 sm:pt-12 pt-4",staticStyle:{"min-height":"calc(100vh - 20rem)",height:"calc(100vh - 20rem)"},attrs:{id:"home"}},[t.typed?r("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated bounceOutRight"}},[t.strings.length>0?r("vue-typed-js",{staticClass:"text-white sm:text-xl text-lg sm:p-0 p-4 text-center",attrs:{strings:t.strings,loop:!1,contentType:"html",typeSpeed:35,backSpeed:8,startDelay:1e3}},[r("h2",{staticClass:"typing"})]):t._e()],1):t._e(),t.me?r("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated bounceOutRight"}},[r("div",{staticClass:"flex flex-col lg:w-2/3 sm:w-5/6 w-full h-full"},[r("div",{staticClass:"flex flex-col items-center justify-center w-full font-light"},[r("div",{staticClass:"flex flex-col justify-center text-justify lg:w-2/3 w-5/6 h-full p-4 mb-6"},[r("p",{},[t._v("Peu adapté au système scolaire classique, on m'a orienté dans le BTP et je suis devenu maçon par défaut.")]),r("p",[t._v("Quatre années sur les chantiers, j'en ai gardé ce besoin de bâtir, ce goût du travail bien fait (sans bonnes fondations, toute chose s'écroule tôt ou tard) et cet immense plaisir d'admirer, une fois terminé, ce qui a été construit.")]),r("p",{staticClass:"mt-4"},[t._v("L'inactivité d'une période de chômage m'a fait rencontrer l'informatique par hasard, et je suis devenu développeur par passion.")]),r("p",[t._v("\n            Autodidacte, j'ai vécu mes premiers contrats freelance et expériences entrepreneuriales, puis ai (re)pris le chemin de l'école, pour intégrer "),r("a",{staticClass:"text-corail font-semibold",attrs:{href:"https://www.le-101.fr/",target:"_blank"}},[t._v("Le 101")]),t._v(", franchise lyonnaise de l'école "),r("a",{staticClass:"text-gray-500 font-semibold",attrs:{href:"https://www.42.fr/",target:"_blank"}},[t._v("42")]),t._v(".\n          ")]),r("p",[t._v("Après 18 mois de formation et de stages, me revoilà sur les routes du freelancing et de l'entrepreneuriat, activités parallèles à mon statut d'étudiant.")]),r("img",{staticClass:"w-64 self-center mt-12 rounded-lg shadow-lg",attrs:{src:n("b130"),alt:"Photo de profil"}})])])])]):t._e()],1):t._e()},o=[],i=n("268f"),a=n.n(i),c=n("e265"),u=n.n(c),s=n("a4bb"),f=n.n(s),l=n("85f2"),p=n.n(l);function d(t,e,n){return e in t?p()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=f()(n);"function"===typeof u.a&&(r=r.concat(u()(n).filter(function(t){return a()(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}var v=n("2f62"),y={name:"Home",data:function(){return{typed:!1,me:!1,strings:["<span class='text-yellow-500'>Hello !</span>^300","Je suis <span class='text-corail'>Gilian</span> :)^300","<span class='text-blue-500'>Freelance</span> web Fullstack^300","Étudiant et <span class='text-orange-500'>Entrepreneur</span>^300","Basé à <span class='text-corail'>Lyon</span>^200","Je travaille avec Python^150, <span class='text-green-600'>Django</span>^150, Javascript^150, <span class='text-green-400'>Vue.js</span>^150, HTML^150 et CSS^300","Particulièrement <span class=\"underline\">efficace</span> en développement <span class='text-yellow-500'>rapide</span> de prototype^300, je collabore régulièrement avec des <span class='text-corail'>startups</span> et des <span class='text-green-500'>porteur-se-s de projets</span> !^300",'J\'aime travailler <span class="border-b-2 border-t-2 border-blue-500 py-1">à distance</span>^300, mais effectuerais avec <span class="text-3xl text-red-400">plaisir</span>^150 une <span class="text-base text-gray-500">petite</span>^150 partie de ma mission dans vos locaux :)']}},methods:b({},Object(v["b"])(["finishIntro"])),mounted:function(){var t=this;this.$store.getters.getIntro?(setTimeout(function(){t.$data.typed=!0,t.finishIntro()},5500),setTimeout(function(){t.$data.typed=!1,t.$data.me=!0,t.$data.strings=[]},42e3)):(this.$data.typed=!1,this.$data.me=!0,this.$data.strings=[])}},h=y,m=n("2877"),g=Object(m["a"])(h,r,o,!1,null,null,null);e["default"]=g.exports},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),a=n("1bc3"),c=n("07e3"),u=n("794b"),s=Object.getOwnPropertyDescriptor;e.f=n("8e60")?s:function(t,e){if(t=i(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),o=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),o=n("584a"),i=n("294c");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e265:function(t,e,n){t.exports=n("ed33")},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);while(e.length>u)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),a=n("d9f6").f,c=0,u=Object.isExtensible||function(){return!0},s=!n("294c")(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return s&&b.NEED&&u(t)&&!i(t,r)&&f(t),t},b=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-15fa3847.f24ba528.js.map