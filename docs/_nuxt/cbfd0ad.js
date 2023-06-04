(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{383:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return h}));var r=n(385),c=n(2),o=Object(c.i)("v-card__actions"),l=Object(c.i)("v-card__subtitle"),v=Object(c.i)("v-card__text"),h=Object(c.i)("v-card__title");r.a},388:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(154);var c=n(188),o=n(120);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},395:function(t,e,n){"use strict";var r={inserted:function(t,e,n){var r=e.value,c=e.options||{passive:!0};window.addEventListener("resize",r,c),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:r,options:c},e.modifiers&&e.modifiers.quiet||r()},unbind:function(t,e,n){var r;if(null===(r=t._onResize)||void 0===r?void 0:r[n.context._uid]){var c=t._onResize[n.context._uid],o=c.callback,l=c.options;window.removeEventListener("resize",o,l),delete t._onResize[n.context._uid]}}};e.a=r},421:function(t,e,n){"use strict";n(42),n(62),n(7),n(84);var r=n(387),c=n(181),o=n(2),l=n(33),v=Object(l.a)(Object(c.a)("stepper","v-stepper-content","v-stepper"));e.a=v.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?r.g:r.h},styles:function(){return this.isVertical?{height:Object(o.g)(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},n={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var r=t("div",n,[this.$slots.default]),content=t("div",e,[r]);return t(this.computedTransition,{on:this.$listeners},[content])}})},581:function(t,e,n){"use strict";n.r(e);var r=n(373),c=n(573),o=n(385),l=n(383),v=n(566),h=n(372),d=n(565),f=n(95),m=n(461),_=n(421),k=n(144),y=(n(183),n(36),n(261),n(262),n(50),n(122)),w=n.n(y),x={name:"AddTrainingHistoryPage",layout:"users",data:function(){return{value:w()().format(),locale:"ja-jp",weekdays:[1,2,3,4,5,6,0],eventList:{"2023-05-01":[{id:1,name:"",start:"2023-05-01 10:00:00",end:"2023-05-01 11:30:00",color:"#262626",timed:!0}]},menuList:{1:[{id:1,trainingID:1,name:"メニュー1",kg:"10kg"},{id:2,trainingID:1,name:"メニュー2",kg:"20kg"}]},currentDay:"",currentEvent:{},defaultMenus:[{id:0,trainingID:0,name:"-",kg:"-"}]}},mounted:function(){this.$emit("setStep","training-history"),this.setLastTrainingDay(),this.currentEvent=this.lastTraining},computed:{events:function(){return Object.values(this.eventList).flat()},lastTraining:function(){return this.events.slice(-1)[0]},currentMenus:function(){return this.currentEvent?this.menuList[this.currentEvent.id]:this.defaultMenus},calenderDate:function(){return w()(this.value).format("YYYY年 M月")},menuDate:function(){return w()(this.value).format("YYYY/MM/DD HH:mm")}},methods:{onClickBackBtn:function(){this.$emit("clickBackBtn","training-history")},onClickNextBtn:function(){this.$emit("clickNextBtn","training-history")},setToday:function(){this.value=w()().format()},setLastTrainingDay:function(){this.value=w()(this.lastTraining.start).format()},onClickDate:function(t){var e;this.currentEvent=null===(e=this.eventList[t.date])||void 0===e?void 0:e.slice(-1)[0]},onClickEvent:function(t){var e=t.event;this.value=w()(e.start).format(),this.currentEvent=e}}},C=n(63),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e(_.a,{attrs:{step:"2"}},[e(d.a,{staticClass:"mt-4"},[e(v.a,{attrs:{cols:"12",md:"6"}},[e(l.d,{staticClass:"text-h6 py-0"},[e("p",{staticClass:"mb-0"},[t._v("新規ユーザー")])])],1),t._v(" "),e(v.a,{attrs:{cols:"12",md:"6"}},[e(l.c,{staticClass:"text-h6 py-0"},[e("p",{staticClass:"mb-0"},[t._v(t._s("トレーニング数 ".concat(Object.values(t.eventList).length," 回")))])])],1)],1),t._v(" "),e(o.a,{attrs:{flat:""}},[e(d.a,[e(v.a,{attrs:{cols:"12"}},[e(f.a,{staticClass:"d-flex align-center",attrs:{tile:"",height:"6vh",color:"grey lighten-3"}},[e(r.a,{staticClass:"ma-4",attrs:{outlined:"",small:""},on:{click:t.setToday}},[t._v("\n            今日\n          ")]),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.prev()}}},[e(h.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(k.a,[t._v(t._s(t.calenderDate))]),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.next()}}},[e(h.a,[t._v("mdi-chevron-right")])],1)],1)],1),t._v(" "),e(v.a,{attrs:{cols:"12",md:"6"}},[e(f.a,{attrs:{height:"500"}},[e(c.a,{ref:"calendar",attrs:{locale:t.locale,weekdays:t.weekdays,events:t.events},on:{"click:date":t.onClickDate,"click:event":t.onClickEvent},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),e(v.a,{attrs:{cols:"12",md:"6"}},[e(d.a,[e(v.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{outlined:"",flat:"",elevation:"0"}},[e(l.c,[e("p",{staticClass:"mb-0"},[t._v(t._s(t.menuDate))])])],1)],1),t._v(" "),e(v.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{outlined:"",flat:"",elevation:"0"}},[e(m.a,{attrs:{"fixed-header":"",height:"418"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n                        メニュー\n                      ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                        重量\n                      ")])])]),t._v(" "),e("tbody",t._l(t.currentMenus,(function(menu){return e("tr",{key:menu.id},[e("td",[t._v(t._s(menu.name))]),t._v(" "),e("td",[t._v(t._s(menu.kg))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1),t._v(" "),e(d.a,[e(v.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(r.a,{attrs:{dark:"","x-large":""},on:{click:t.onClickBackBtn}},[t._v("\n          戻る\n        ")]),t._v(" "),e(r.a,{attrs:{dark:"","x-large":""},on:{click:t.onClickNextBtn}},[t._v("\n          次へ\n        ")])],1)],1)],1)],1)}),[],!1,null,"5f220770",null);e.default=component.exports}}]);