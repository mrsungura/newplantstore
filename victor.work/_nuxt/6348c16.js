(window.webpackJsonp=window.webpackJsonp||[]).push([[41,16,17,20,22],{325:function(t,e,r){"use strict";r.r(e);var n={props:["headers"]},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"headers",attrs:{"data-id":t.headers.id,"data-transtitle":t.headers.title_transition}},[r("div",{staticClass:"headers__hold"},[r("div",{staticClass:"headers__texts"},[r("div",{staticClass:"headers__subt wrap"},[r("span",{staticClass:"wrapped"},[t._v(t._s(t.headers.subt))])]),r("div",{staticClass:"headers__title"},[r("h1",{staticClass:"wrap"},[r("span",{staticClass:"wrapped"},[t._v(t._s(t.headers.title_page_1))])]),r("h1",{staticClass:"wrap"},[r("span",{staticClass:"wrapped"},[t._v(t._s(t.headers.title_page_2))])])])])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(27);var n=r(5),o=r(6),c=r(2),l=(r(100),r(169),r(99),r(33)),d=new(function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,[{key:"init",value:function(t,e){this.body=document.querySelector("body"),this.DOM=e,this.isPage=t}},{key:"beforeEnter",value:function(t,e){l.a.changeName(e),l.a.createText(),t.classList.contains("has-header")&&window.innerWidth>1024?c.a.set(t.querySelectorAll(".headers .wrapped"),{yPercent:101}):c.a.set(t,{opacity:0}),"about"==e&&window.innerWidth>1024&&c.a.set(t.querySelector("main"),{opacity:0})}},{key:"onEnter",value:function(t,e,r){l.a.animaBox(t,e,this.isPage,r)}},{key:"firstEntrance",value:function(t,e,r){l.a.done(t,r),e()}}]),t}()),f={name:"navigations",appear:!0,css:!1,mode:"in-out",beforeEnter:function(t){this.from&&(document.querySelector("body").classList.contains("dark-page")&&document.querySelector("body").classList.remove("dark-page"),document.querySelector("body").classList.add("is-transitioning"),t.classList.add("new-page"),d.beforeEnter(t,this.$route.name)),this.from=this.$route.name},enter:function(t,e){d.init(this.from,t),document.querySelector("html").classList.contains("not-first")?d.onEnter(t,e,this.oldpage):(document.querySelector("html").classList.add("not-first"),d.firstEntrance(t,e,this.from)),this.oldpage=t},leave:function(t,e){e()},afterLeave:function(t){document.querySelector(".new-page").classList.add("page-done"),document.querySelector(".new-page").classList.remove("new-page"),document.querySelector("body").classList.remove("is-transitioning")}}},327:function(t,e,r){"use strict";r.r(e);var n={props:["video"],mounted:function(){}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("video",{staticClass:"lazyvideo",attrs:{autoplay:"",loop:"",muted:"",playsinline:"",height:"fit-content"},domProps:{muted:!0}},[r("source",{attrs:{"data-src":t.video,type:"video/mp4"}})])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);var n={props:["descrData"]},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"descriptions"},[r("div",{staticClass:"descriptions__hold e-hold-border"},[r("div",{staticClass:"descriptions__header"},[r("div",{staticClass:"descriptions__header__subt e-flex"},[r("div",{staticClass:"descriptions__header__subt__bg e-color"}),r("span",{staticClass:"t-soft"},[t._v(t._s(t.descrData.rel_subt))])]),r("h1",{staticClass:"t-sansbold"},[t._v(t._s(t.descrData.rel_text))])]),r("div",{staticClass:"descriptions__texts e-flex-desk"},[r("div",{staticClass:"descriptions__texts__subt no-mobile"},[r("div",{staticClass:"descriptions__index"},[r("svg",{staticClass:"circle-svg",attrs:{width:"100%",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{cx:"17",cy:"17",r:"16.5",stroke:"var(--lineColor)",pathLength:"1"}})]),t._v(" "),r("span",[t._v("1")])]),r("h1",{staticClass:"t-sansbold"},[t._v(t._s(t.descrData.rel_title))])]),r("prismic-rich-text",{staticClass:"rich-t subt-p descriptions__parag",attrs:{field:t.descrData.rel_parag}})],1)])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,r){"use strict";r.r(e);var n={props:["postData","type","uid"],mounted:function(){}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"proj-card",class:[t.postData.coming_soon?"card-coming-soon":null]},[r("div",{staticClass:"proj-card__holder"},[r("NuxtLink",{staticClass:"proj-card__media",attrs:{to:t.type+"/"+t.uid,title:t.postData.title}},[t.postData.thumb.url?[r("AppVideo",{attrs:{video:t.postData.thumb.url}})]:[r("img",{staticClass:"img-load",attrs:{src:t.postData.cover.url,alt:""}})]],2),r("div",{staticClass:"proj-card__texts",class:[t.postData.dark_text?"dark-text":"white-text"]},[r("NuxtLink",{staticClass:"proj-card__title",attrs:{to:t.type+"/"+t.uid}},[r("h1",[t._v(t._s(t.postData.title))])]),r("div",{staticClass:"proj-card__infos"},[t.postData.coming_soon?[r("span",{staticClass:"soon"},[t._v(t._s(t.postData.coming_soon))])]:t._e(),r("span",{staticClass:"cat"},[t._v(t._s(t.postData.category))]),r("span",{staticClass:"role"},[t._v(t._s(t.postData.role))])],2)],1),r("PrimaryButton",{attrs:{link:t.type+"/"+t.uid,text:"SEE "+t.type,version:"color"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppVideo:r(327).default,PrimaryButton:r(167).default})},335:function(t,e,r){"use strict";var n=r(12),o=r(129).charAt;n({target:"String",proto:!0,forced:r(13)((function(){return"𠮷"!=="𠮷".at(0)}))},{at:function(t){return o(this,t)}})},393:function(t,e,r){"use strict";r.r(e);var n=r(14);r(43),r(335),r(39),r(22),r(27),r(74),r(46),r(45),r(75),r(76),r(44);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={head:function(){return{title:"Courses | Victor Work"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,c,l,d,i,f,_,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,t.params,t.error,e.next=3,r.api.getSingle("courses");case 3:return n=e.sent,data=n.data,e.next=7,r.api.query(r.predicates.at("document.type","course"));case 7:c=e.sent.results,l=data.courses_group,d=[],i=0,f=o(l),e.prev=12,f.s();case 14:if((_=f.n()).done){e.next=23;break}return _.value,e.next=18,r.api.getByUID("course",""+l[i].course.uid);case 18:h=e.sent,d.push(h),i++;case 21:e.next=14;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(12),f.e(e.t0);case 28:return e.prev=28,f.f(),e.finish(28);case 31:return e.abrupt("return",{data:data,courses:c,course:d});case 32:case"end":return e.stop()}}),e,null,[[12,25,28,31]])})))()},mounted:function(){},transition:r(326).a},d=r(15),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page page-courses has-header",attrs:{"data-scroll-content":"","data-page":"courses"}},[t._l(t.$store.state.data_global.headers_group,(function(e){return"courses"==e.id?[r("Headers",{attrs:{headers:e}})]:t._e()})),r("main",{staticClass:"main-courses"},[t._l(t.$store.state.data_global.body,(function(e){return"courses"==e.primary.id?[r("TitleSections",{attrs:{data:e.primary}})]:t._e()})),r("Description",{attrs:{descrData:t.data}}),r("section",{staticClass:"projects"},[r("ul",{staticClass:"projects__hold e-hold"},[t._l(t.courses,(function(t,e){return[r("CardProject",{attrs:{postData:t.data,type:t.type,uid:t.uid}})]}))],2)])],2),r("CtaSection",{attrs:{cta:t.$store.state.data_global}}),r("Footer",{attrs:{dash:t.$store.state.data_dashboard}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Headers:r(325).default,TitleSections:r(332).default,Description:r(330).default,CardProject:r(333).default,CtaSection:r(233).default,Footer:r(168).default})}}]);