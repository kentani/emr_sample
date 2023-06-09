(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{426:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(164);var o=n(208),c=n(130);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},433:function(t,e,n){"use strict";var r={inserted:function(t,e,n){var r=e.value,o=e.options||{passive:!0};window.addEventListener("resize",r,o),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:r,options:o},e.modifiers&&e.modifiers.quiet||r()},unbind:function(t,e,n){var r;if(null===(r=t._onResize)||void 0===r?void 0:r[n.context._uid]){var o=t._onResize[n.context._uid],c=o.callback,l=o.options;window.removeEventListener("resize",c,l),delete t._onResize[n.context._uid]}}};e.a=r},461:function(t,e,n){"use strict";n(35),n(70),n(5),n(90);var r=n(162),o=n(204),c=n(1),l=n(19),v=Object(l.a)(Object(o.a)("stepper","v-stepper-content","v-stepper"));e.a=v.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?r.g:r.h},styles:function(){return this.isVertical?{height:Object(c.g)(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},n={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var r=t("div",n,[this.$slots.default]),content=t("div",e,[r]);return t(this.computedTransition,{on:this.$listeners},[content])}})},594:function(t,e,n){"use strict";n.r(e);var r=n(411),o=n(584),c=n(195),l=n(160),v=n(421),h=n(410),d=n(420),f=n(105),m=n(480),_=n(461),k=n(104),y=(n(161),n(37),n(202),n(203),n(56),n(132)),w=n.n(y),x={name:"AddTrainingHistoryPage",layout:"users",data:function(){return{value:w()().format(),locale:"ja-jp",weekdays:[1,2,3,4,5,6,0],eventList:{"2023-05-01":[{id:1,name:"",start:"2023-05-01 10:00:00",end:"2023-05-01 11:30:00",color:"#262626",timed:!0}]},menuList:{1:[{id:1,trainingID:1,name:"メニュー1",kg:"10kg"},{id:2,trainingID:1,name:"メニュー2",kg:"20kg"}]},currentDay:"",currentEvent:{},defaultMenus:[{id:0,trainingID:0,name:"-",kg:"-"}]}},mounted:function(){this.$emit("setStep","training-history"),this.setLastTrainingDay(),this.currentEvent=this.lastTraining},computed:{events:function(){return Object.values(this.eventList).flat()},lastTraining:function(){return this.events.slice(-1)[0]},currentMenus:function(){return this.currentEvent?this.menuList[this.currentEvent.id]:this.defaultMenus},calenderDate:function(){return w()(this.value).format("YYYY年 M月")},menuDate:function(){return w()(this.value).format("YYYY/MM/DD HH:mm")}},methods:{onClickBackBtn:function(){this.$emit("clickBackBtn","training-history")},onClickNextBtn:function(){this.$emit("clickNextBtn","training-history")},setToday:function(){this.value=w()().format()},setLastTrainingDay:function(){this.value=w()(this.lastTraining.start).format()},onClickDate:function(t){var e;this.currentEvent=null===(e=this.eventList[t.date])||void 0===e?void 0:e.slice(-1)[0]},onClickEvent:function(t){var e=t.event;this.value=w()(e.start).format(),this.currentEvent=e}}},C=n(59),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e(_.a,{attrs:{step:"2"}},[e(d.a,{staticClass:"mt-4"},[e(v.a,{attrs:{cols:"12",md:"6"}},[e(l.d,{staticClass:"text-h6 py-0"},[e("p",{staticClass:"mb-0"},[t._v("新規ユーザー")])])],1),t._v(" "),e(v.a,{attrs:{cols:"12",md:"6"}},[e(l.c,{staticClass:"text-h6 py-0"},[e("p",{staticClass:"mb-0"},[t._v(t._s("トレーニング数 ".concat(Object.values(t.eventList).length," 回")))])])],1)],1),t._v(" "),e(c.a,{attrs:{flat:""}},[e(d.a,[e(v.a,{attrs:{cols:"12"}},[e(f.a,{staticClass:"d-flex align-center",attrs:{tile:"",height:"6vh",color:"grey lighten-3"}},[e(r.a,{staticClass:"ma-4",attrs:{outlined:"",small:""},on:{click:t.setToday}},[t._v("\n            今日\n          ")]),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.prev()}}},[e(h.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(k.a,[t._v(t._s(t.calenderDate))]),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.next()}}},[e(h.a,[t._v("mdi-chevron-right")])],1)],1)],1),t._v(" "),e(v.a,{attrs:{cols:"12",md:"6"}},[e(f.a,{attrs:{height:"500"}},[e(o.a,{ref:"calendar",attrs:{locale:t.locale,weekdays:t.weekdays,events:t.events},on:{"click:date":t.onClickDate,"click:event":t.onClickEvent},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),e(v.a,{attrs:{cols:"12",md:"6"}},[e(d.a,[e(v.a,{attrs:{cols:"12"}},[e(c.a,{attrs:{outlined:"",flat:"",elevation:"0"}},[e(l.c,[e("p",{staticClass:"mb-0"},[t._v(t._s(t.menuDate))])])],1)],1),t._v(" "),e(v.a,{attrs:{cols:"12"}},[e(c.a,{attrs:{outlined:"",flat:"",elevation:"0"}},[e(m.a,{attrs:{"fixed-header":"",height:"418"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n                        メニュー\n                      ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                        重量\n                      ")])])]),t._v(" "),e("tbody",t._l(t.currentMenus,(function(menu){return e("tr",{key:menu.id},[e("td",[t._v(t._s(menu.name))]),t._v(" "),e("td",[t._v(t._s(menu.kg))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1),t._v(" "),e(d.a,[e(v.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(r.a,{attrs:{dark:"","x-large":""},on:{click:t.onClickBackBtn}},[t._v("\n          戻る\n        ")]),t._v(" "),e(r.a,{attrs:{dark:"","x-large":""},on:{click:t.onClickNextBtn}},[t._v("\n          次へ\n        ")])],1)],1)],1)],1)}),[],!1,null,"d92b7b04",null);e.default=component.exports}}]);