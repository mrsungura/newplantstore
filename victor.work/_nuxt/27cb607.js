(window.webpackJsonp=window.webpackJsonp||[]).push([[42,22,23],{325:function(e,t,r){"use strict";r.r(t);var c={props:["headers"]},n=r(15),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"headers",attrs:{"data-id":e.headers.id,"data-transtitle":e.headers.title_transition}},[r("div",{staticClass:"headers__hold"},[r("div",{staticClass:"headers__texts"},[r("div",{staticClass:"headers__subt wrap"},[r("span",{staticClass:"wrapped"},[e._v(e._s(e.headers.subt))])]),r("div",{staticClass:"headers__title"},[r("h1",{staticClass:"wrap"},[r("span",{staticClass:"wrapped"},[e._v(e._s(e.headers.title_page_1))])]),r("h1",{staticClass:"wrap"},[r("span",{staticClass:"wrapped"},[e._v(e._s(e.headers.title_page_2))])])])])])])}),[],!1,null,null,null);t.default=component.exports},326:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));r(27);var c=r(5),n=r(6),l=r(2),o=(r(100),r(169),r(99),r(33)),d=new(function(){function e(){Object(c.a)(this,e)}return Object(n.a)(e,[{key:"init",value:function(e,t){this.body=document.querySelector("body"),this.DOM=t,this.isPage=e}},{key:"beforeEnter",value:function(e,t){o.a.changeName(t),o.a.createText(),e.classList.contains("has-header")&&window.innerWidth>1024?l.a.set(e.querySelectorAll(".headers .wrapped"),{yPercent:101}):l.a.set(e,{opacity:0}),"about"==t&&window.innerWidth>1024&&l.a.set(e.querySelector("main"),{opacity:0})}},{key:"onEnter",value:function(e,t,r){o.a.animaBox(e,t,this.isPage,r)}},{key:"firstEntrance",value:function(e,t,r){o.a.done(e,r),t()}}]),e}()),_={name:"navigations",appear:!0,css:!1,mode:"in-out",beforeEnter:function(e){this.from&&(document.querySelector("body").classList.contains("dark-page")&&document.querySelector("body").classList.remove("dark-page"),document.querySelector("body").classList.add("is-transitioning"),e.classList.add("new-page"),d.beforeEnter(e,this.$route.name)),this.from=this.$route.name},enter:function(e,t){d.init(this.from,e),document.querySelector("html").classList.contains("not-first")?d.onEnter(e,t,this.oldpage):(document.querySelector("html").classList.add("not-first"),d.firstEntrance(e,t,this.from)),this.oldpage=e},leave:function(e,t){t()},afterLeave:function(e){document.querySelector(".new-page").classList.add("page-done"),document.querySelector(".new-page").classList.remove("new-page"),document.querySelector("body").classList.remove("is-transitioning")}}},331:function(e,t,r){"use strict";r.r(t);var c=r(336),n={props:["slices"],name:"slice-blocks",components:{SliceAnimation:c.SliceAnimation,SliceMobiles:c.SliceMobiles,SliceUxVideos:c.SliceUxVideos,SliceExpertise:c.SliceExpertise,SliceDoubleImage:c.SliceDoubleImage,SliceImage:c.SliceImage,SliceList:c.SliceList,SliceMega:c.SliceMega,SliceSubtP:c.SliceSubtP,SliceSubtPImg:c.SliceSubtPImg,SliceTextImage:c.SliceTextImage,SliceVimeo:c.SliceVimeo},mounted:function(){}},l=r(15),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"slices"},e._l(e.slices,(function(t,c){return r("section",{key:"slice-"+c},["about"===t.slice_type?[r("SliceAbout",{attrs:{slice:t}})]:"animations"===t.slice_type?[r("SliceAnimation",{attrs:{slice:t}})]:"expertise"===t.slice_type?[r("SliceExpertise",{attrs:{slice:t}})]:"__case___-_ux_videos"===t.slice_type?[r("SliceUxVideos",{attrs:{slice:t}})]:"ux_mobile"===t.slice_type?[r("SliceMobiles",{attrs:{slice:t}})]:e._e(),"subtitle___paragraph"===t.slice_type?[r("SliceSubtP",{attrs:{slice:t}})]:"image_1"===t.slice_type?[r("SliceImage",{attrs:{slice:t}})]:"mega_module"===t.slice_type?[r("SliceMega",{attrs:{slice:t}})]:"image"===t.slice_type?[r("SliceDoubleImage",{attrs:{slice:t}})]:"subt___paragraph___image"===t.slice_type?[r("SliceSubtPImg",{attrs:{slice:t}})]:"video"===t.slice_type?[r("SliceVimeo",{attrs:{slice:t}})]:"list"===t.slice_type?[r("SliceList",{attrs:{slice:t}})]:e._e()],2)})),0)}),[],!1,null,null,null);t.default=component.exports},394:function(e,t,r){"use strict";r.r(t);var c=r(14),n=(r(43),{head:function(){return{title:"Expertise | Victor Work"}},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$prismic,e.params,e.error,t.next=3,r.api.getSingle("expertise");case 3:return c=t.sent,data=c.data,t.abrupt("return",{data:data,slices:data.body});case 6:case"end":return t.stop()}}),t)})))()},mounted:function(){},transition:r(326).a}),l=r(15),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page page-expertise has-header",attrs:{"data-scroll-content":"","data-page":"expertise"}},[e._l(e.$store.state.data_global.headers_group,(function(t){return"expertise"==t.id?[r("Headers",{attrs:{headers:t}})]:e._e()})),r("main",{staticClass:"main-expertise"},[e._l(e.$store.state.data_global.body,(function(t){return"expertise"==t.primary.id?[r("TitleSections",{attrs:{data:t.primary}})]:e._e()})),r("SlicesBlocks",{attrs:{slices:e.slices}})],2),r("CtaSection",{attrs:{cta:e.$store.state.data_global}}),r("Footer",{attrs:{dash:e.$store.state.data_dashboard}})],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Headers:r(325).default,TitleSections:r(332).default,SlicesBlocks:r(331).default,CtaSection:r(233).default,Footer:r(168).default})}}]);