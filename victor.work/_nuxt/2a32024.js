(window.webpackJsonp=window.webpackJsonp||[]).push([[40,22,23],{325:function(t,e,r){"use strict";r.r(e);var n={props:["headers"]},c=r(15),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"headers",attrs:{"data-id":t.headers.id,"data-transtitle":t.headers.title_transition}},[r("div",{staticClass:"headers__hold"},[r("div",{staticClass:"headers__texts"},[r("div",{staticClass:"headers__subt wrap"},[r("span",{staticClass:"wrapped"},[t._v(t._s(t.headers.subt))])]),r("div",{staticClass:"headers__title"},[r("h1",{staticClass:"wrap"},[r("span",{staticClass:"wrapped"},[t._v(t._s(t.headers.title_page_1))])]),r("h1",{staticClass:"wrap"},[r("span",{staticClass:"wrapped"},[t._v(t._s(t.headers.title_page_2))])])])])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));r(27);var n=r(5),c=r(6),o=r(2),l=(r(100),r(169),r(99),r(33)),d=new(function(){function t(){Object(n.a)(this,t)}return Object(c.a)(t,[{key:"init",value:function(t,e){this.body=document.querySelector("body"),this.DOM=e,this.isPage=t}},{key:"beforeEnter",value:function(t,e){l.a.changeName(e),l.a.createText(),t.classList.contains("has-header")&&window.innerWidth>1024?o.a.set(t.querySelectorAll(".headers .wrapped"),{yPercent:101}):o.a.set(t,{opacity:0}),"about"==e&&window.innerWidth>1024&&o.a.set(t.querySelector("main"),{opacity:0})}},{key:"onEnter",value:function(t,e,r){l.a.animaBox(t,e,this.isPage,r)}},{key:"firstEntrance",value:function(t,e,r){l.a.done(t,r),e()}}]),t}()),_={name:"navigations",appear:!0,css:!1,mode:"in-out",beforeEnter:function(t){this.from&&(document.querySelector("body").classList.contains("dark-page")&&document.querySelector("body").classList.remove("dark-page"),document.querySelector("body").classList.add("is-transitioning"),t.classList.add("new-page"),d.beforeEnter(t,this.$route.name)),this.from=this.$route.name},enter:function(t,e){d.init(this.from,t),document.querySelector("html").classList.contains("not-first")?d.onEnter(t,e,this.oldpage):(document.querySelector("html").classList.add("not-first"),d.firstEntrance(t,e,this.from)),this.oldpage=t},leave:function(t,e){e()},afterLeave:function(t){document.querySelector(".new-page").classList.add("page-done"),document.querySelector(".new-page").classList.remove("new-page"),document.querySelector("body").classList.remove("is-transitioning")}}},331:function(t,e,r){"use strict";r.r(e);var n=r(336),c={props:["slices"],name:"slice-blocks",components:{SliceAnimation:n.SliceAnimation,SliceMobiles:n.SliceMobiles,SliceUxVideos:n.SliceUxVideos,SliceExpertise:n.SliceExpertise,SliceDoubleImage:n.SliceDoubleImage,SliceImage:n.SliceImage,SliceList:n.SliceList,SliceMega:n.SliceMega,SliceSubtP:n.SliceSubtP,SliceSubtPImg:n.SliceSubtPImg,SliceTextImage:n.SliceTextImage,SliceVimeo:n.SliceVimeo},mounted:function(){}},o=r(15),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"slices"},t._l(t.slices,(function(e,n){return r("section",{key:"slice-"+n},["about"===e.slice_type?[r("SliceAbout",{attrs:{slice:e}})]:"animations"===e.slice_type?[r("SliceAnimation",{attrs:{slice:e}})]:"expertise"===e.slice_type?[r("SliceExpertise",{attrs:{slice:e}})]:"__case___-_ux_videos"===e.slice_type?[r("SliceUxVideos",{attrs:{slice:e}})]:"ux_mobile"===e.slice_type?[r("SliceMobiles",{attrs:{slice:e}})]:t._e(),"subtitle___paragraph"===e.slice_type?[r("SliceSubtP",{attrs:{slice:e}})]:"image_1"===e.slice_type?[r("SliceImage",{attrs:{slice:e}})]:"mega_module"===e.slice_type?[r("SliceMega",{attrs:{slice:e}})]:"image"===e.slice_type?[r("SliceDoubleImage",{attrs:{slice:e}})]:"subt___paragraph___image"===e.slice_type?[r("SliceSubtPImg",{attrs:{slice:e}})]:"video"===e.slice_type?[r("SliceVimeo",{attrs:{slice:e}})]:"list"===e.slice_type?[r("SliceList",{attrs:{slice:e}})]:t._e()],2)})),0)}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,r){"use strict";r.r(e);var n={props:["postData","type","uid"],mounted:function(){}},c=r(15),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"proj-card proj-card-mini",class:[t.postData.coming_soon?"card-coming-soon":null]},[r("div",{staticClass:"proj-card__holder"},[r("NuxtLink",{staticClass:"proj-card__media",attrs:{to:"/"+t.type+"/"+t.uid,title:t.postData.title}},[t.postData.thumb.url?[r("AppVideo",{attrs:{video:t.postData.thumb.url}})]:[r("img",{staticClass:"img-load",attrs:{src:t.postData.cover.url,alt:""}})]],2),r("div",{staticClass:"proj-card__texts"},[r("div",{staticClass:"proj-card__texts__ctn"},[r("NuxtLink",{staticClass:"proj-card__title",attrs:{to:"/"+t.type+"/"+t.uid}},[r("h1",[t._v(t._s(t.postData.title))])]),r("div",{staticClass:"proj-card__infos"},[t.postData.coming_soon?[r("span",{staticClass:"soon"},[t._v(t._s(t.postData.coming_soon))])]:t._e(),r("span",{staticClass:"cat"},[t._v(t._s(t.postData.category))]),r("span",{staticClass:"role"},[t._v(t._s(t.postData.role))])],2)],1),r("PrimaryButton",{attrs:{link:t.type+"/"+t.uid,text:"SEE "+t.type,version:"color"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppVideo:r(327).default,PrimaryButton:r(167).default})},400:function(t,e,r){"use strict";r.r(e);r(39),r(22),r(27),r(74),r(46),r(45),r(75),r(76),r(44);var n=r(14);r(43);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={name:"course-uid",head:function(){return{title:"".concat(this.data.title," | Victor Work")}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,data,d,_,m,f,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,n=t.params,o=t.error,e.prev=1,e.next=4,r.api.getByUID("course",n.uid);case 4:l=e.sent,data=l.data,d=[],_=data.next_group,m=0,f=c(_),e.prev=10,f.s();case 12:if((h=f.n()).done){e.next=21;break}return h.value,e.next=16,r.api.getByUID("course",""+_[m].course.uid);case 16:v=e.sent,d.push(v),m++;case 19:e.next=12;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),f.e(e.t0);case 26:return e.prev=26,f.f(),e.finish(26);case 29:return e.abrupt("return",{data:data,slices:data.body,course_normal:d});case 32:e.prev=32,e.t1=e.catch(1),o({statusCode:404,message:"Page not found"});case 35:case"end":return e.stop()}}),e,null,[[1,32],[10,23,26,29]])})))()},mounted:function(){},transition:r(326).a},d=r(15),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"course page page-course",attrs:{"data-scroll-content":"","data-page":"course","data-thumb":t.data.thumb.url}},[r("Headers",{staticClass:"e-dn",attrs:{headers:""}}),r("header",{staticClass:"header-course header-story"},[r("div",{staticClass:"header-story__hold e-flex-desk e-hold"},[r("div",{staticClass:"header-story__infos"},[r("div",{staticClass:"header-story__texts"},[r("h1",{staticClass:"t-title e-upper t-color"},[t._v(t._s(t.data.title)+" ")]),r("div",{staticClass:"proj-card__infos"},[t.data.coming_soon?[r("span",{staticClass:"soon"},[t._v(t._s(t.data.coming_soon))])]:t._e(),r("span",{staticClass:"cat"},[t._v(t._s(t.data.category))]),r("span",{staticClass:"role"},[t._v(t._s(t.data.role))])],2),r("prismic-rich-text",{staticClass:"rich-t subt-p",attrs:{field:t.data.description}}),t.data.link_project?[r("a",{staticClass:"dark primary-btn",attrs:{href:t.data.link_project,title:"START THE COURSE",rel:"noreferrer",target:"_blank"}},[r("div",{staticClass:"primary-btn__hold"},[r("span",{staticClass:"primary-btn__text"},[t._v("START THE COURSE")]),r("div",{staticClass:"primary-btn__circ"}),r("div",{staticClass:"primary-btn__icon"},[r("div",{staticClass:"primary-btn__icon__hold"},[r("div",{staticClass:"primary-btn__svg"},[r("svg",{attrs:{width:"100%",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0.578554 0L0.568579 1.46635H5.49626L0 6.96264L1.03741 8L6.53367 2.50379V7.43141L8 7.42145V0H0.578554Z",fill:"white"}})])])])])])])]:t._e()],2)]),r("div",{staticClass:"header-story__img single-bord"},[r("img",{staticClass:"img-load",attrs:{src:t.data.cover.url,alt:""}})])])]),r("main",{staticClass:"main-course"},[r("SlicesBlocks",{attrs:{slices:t.slices}}),t.course_normal.length>0?r("section",{staticClass:"nexts projects projects-reg"},[r("div",{staticClass:"t-title e-upper see-more"},[t._v("MORE COURSES:")]),r("ul",{staticClass:"projects__hold e-hold"},[t._l(t.course_normal,(function(t,e){return[r("CardProjectMini",{attrs:{postData:t.data,type:t.type,uid:t.uid}})]}))],2)]):t._e()],1),r("CtaSection",{attrs:{cta:t.$store.state.data_global}}),r("Footer",{attrs:{dash:t.$store.state.data_dashboard}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Headers:r(325).default,SlicesBlocks:r(331).default,CardProjectMini:r(334).default,CtaSection:r(233).default,Footer:r(168).default})}}]);