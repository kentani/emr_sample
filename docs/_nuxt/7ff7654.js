(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{608:function(t,e,n){"use strict";n.r(e);var r=n(411),c=n(581),o=n(195),l=n(160),m=n(421),d=n(490),v=n(410),h=n(420),f=n(580),k=n(105),_=n(479),y=n(579),D=n(418),C=n(464),x=n(482),O=n(582),w=n(104),E=(n(162),n(37),n(11),n(12),n(15),n(20),n(21),n(2)),I=(n(202),n(203),n(56),n(34),n(5),n(10),n(132)),M=n.n(I);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(E.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var T={name:"TrainingHistoryPage",layout:"users",data:function(){return{value:M()().format(),locale:"ja-jp",weekdays:[1,2,3,4,5,6,0],eventList:{"2023-05-01":[{id:1,name:"",start:"2023-05-01 10:00:00",end:"2023-05-01 11:30:00",color:"#262626",timed:!0}],"2023-05-03":[{id:2,name:"",start:"2023-05-03 10:00:00",end:"2023-05-03 11:30:00",color:"#262626",timed:!0}],"2023-05-05":[{id:3,name:"",start:"2023-05-05 09:00:00",end:"2023-05-05 10:30:00",color:"#262626",timed:!0}],"2023-05-08":[{id:4,name:"",start:"2023-05-08 09:30:00",end:"2023-05-08 11:00:00",color:"#262626",timed:!0}],"2023-05-13":[{id:5,name:"",start:"2023-05-13 09:00:00",end:"2023-05-13 10:30:00",color:"#262626",timed:!0}],"2023-05-16":[{id:6,name:"",start:"2023-05-16 09:30:00",end:"2023-05-16 11:00:00",color:"#262626",timed:!0}],"2023-05-19":[{id:7,name:"",start:"2023-05-19 09:00:00",end:"2023-05-19 10:30:00",color:"#262626",timed:!0},{id:8,name:"",start:"2023-05-19 18:00:00",end:"2023-05-19 19:30:00",color:"#262626",timed:!0}]},menuList:{1:[{id:1,trainingID:1,name:"メニュー1",kg:10,memo:"abc"},{id:2,trainingID:1,name:"メニュー2",kg:20,memo:"abc"}],2:[{id:3,trainingID:2,name:"メニュー1",kg:10,memo:""},{id:4,trainingID:2,name:"メニュー2",kg:20,memo:"abc"},{id:5,trainingID:2,name:"メニュー3",kg:30,memo:""}],3:[{id:6,trainingID:3,name:"メニュー1",kg:10,memo:""},{id:7,trainingID:3,name:"メニュー2",kg:20,memo:"abc"}],4:[{id:8,trainingID:4,name:"メニュー1",kg:10,memo:"abc"},{id:9,trainingID:4,name:"メニュー2",kg:20,memo:"abc"},{id:10,trainingID:4,name:"メニュー3",kg:30,memo:"abc"}],5:[{id:11,trainingID:5,name:"メニュー1",kg:10,memo:"abc"},{id:12,trainingID:5,name:"メニュー2",kg:20,memo:""}],6:[{id:13,trainingID:6,name:"メニュー1",kg:10,memo:""},{id:14,trainingID:6,name:"メニュー2",kg:20,memo:""},{id:15,trainingID:6,name:"メニュー3",kg:30,memo:""}],7:[{id:16,trainingID:7,name:"メニュー1",kg:10,memo:"abc"},{id:17,trainingID:7,name:"メニュー2",kg:20,memo:""},{id:18,trainingID:7,name:"メニュー3",kg:30,memo:"abc"},{id:19,trainingID:7,name:"メニュー4",kg:40,memo:""}],8:[{id:20,trainingID:8,name:"メニュー1",kg:10,memo:""},{id:21,trainingID:8,name:"メニュー2",kg:20,memo:"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"}]},currentDay:"",currentEvent:{},defaultMenus:[{id:0,trainingID:0,name:"-",kg:"-",memo:""}],dialog:!1,dialog2:!1,step:1,selectOptionForMenu:["メニュー1","メニュー2","メニュー3","メニュー4","メニュー5"],menuForms:[{name:"",kg:0,memo:""}],defaultMenuForm:[{name:"",kg:0,memo:""}],time:"00:00",currentDate:"",currentDateKey:"",currentMenuID:0,currentMenu:0,isEdit:!1}},mounted:function(){this.setLastTrainingDay(),this.currentEvent=this.lastTraining},computed:{events:function(){return Object.values(this.eventList).flat()},lastTraining:function(){return this.events.slice(-1)[0]},currentMenus:function(){return this.currentEvent?this.menuList[this.currentEvent.id]:this.defaultMenus},calenderDate:function(){return M()(this.value).format("YYYY年 M月")},menuDate:function(){return M()(this.value).format("YYYY/MM/DD HH:mm")}},methods:{setToday:function(){this.value=M()().format()},setLastTrainingDay:function(){this.value=M()(this.lastTraining.start).format()},onClickDate:function(t){var e;this.value=M()(t.date).format(),this.currentDate=M()(t.date).format("MM/DD"),this.currentEvent&&(this.currentEvent.color="#262626"),this.currentEvent=null===(e=this.eventList[t.date])||void 0===e?void 0:e.slice(-1)[0],t.date===this.currentDateKey&&(this.dialog=!0),this.currentDateKey=t.date},onClickEvent:function(t){var e,n=t.event;this.value=M()(n.start).format(),this.currentEvent&&(this.currentEvent.color="#262626"),n.color="#9E9E9E",n.id===(null===(e=this.currentEvent)||void 0===e?void 0:e.id)&&(this.time=M()(n.start).format("HH:mm"),this.menuForms=this.menuList[n.id],this.isEdit=!0,this.dialog=!0),this.currentEvent=n,this.currentDateKey=M()(n.start).format("YYYY-MM-DD")},onClickCancel:function(){this.closeDialog()},onClickNext:function(){this.step=2},onClickBack:function(){this.step=1},onClickSave:function(){this.isEdit?this.updateTraining():this.createTraining(),this.closeDialog()},createTraining:function(){var t=this,e=this.events.length+1,n={id:e,name:"",start:"".concat(this.currentDateKey," ").concat(this.time),end:"".concat(this.currentDateKey," ").concat(this.time),color:"#262626",timed:!0},r=L({},this.eventList);r[this.currentDateKey]?r[this.currentDateKey].push(n):r[this.currentDateKey]=[n],this.eventList=Object.assign({},this.eventList,r);var c=Object.values(this.eventList).flat().length+1;this.menuList[e]=[],this.menuForms.forEach((function(form){t.menuList[e].push(L(L({},form),{},{id:c,trainingID:e})),c++})),this.currentEvent=n},updateTraining:function(){var t=this,e={};this.eventList[this.currentDateKey].forEach((function(n){n.id===t.currentEvent.id&&(e=n)}));var n=L({},this.eventList);n[this.currentDateKey]=L(L({},e),{},{start:"".concat(this.currentDateKey," ").concat(this.time),end:"".concat(this.currentDateKey," ").concat(this.time)}),this.eventList=Object.assign({},this.eventList,n),this.menuList[e.id]=this.deepCopy(this.menuForms),this.currentEvent=e},onClickAddMenu:function(){this.menuForms.push(this.deepCopy(this.defaultMenuForm))[0]},closeDialog:function(){this.time="00:00",this.menuForms=this.deepCopy(this.defaultMenuForm),this.step=1,this.isEdit=!1,this.dialog=!1},deepCopy:function(t){return JSON.parse(JSON.stringify(t))},omittedText:function(text){return(null==text?void 0:text.length)>20?text.slice(0,20)+"…":text},onClickMenuRow:function(menu){menu.memo.length>0&&(this.dialog2=!0),this.currentMenuID=menu.id,this.currentMenu=menu}}},K=n(59),component=Object(K.a)(T,(function(){var t=this,e=t._self._c;return e("div",[e(h.a,{staticClass:"mt-4"},[e(m.a,{attrs:{cols:"12",md:"6"}},[e(l.d,{staticClass:"text-h6 py-0"},[e("p",{staticClass:"mb-0"},[t._v("ユーザー1")])])],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"6"}},[e(l.c,{staticClass:"text-h6 py-0"},[e("p",{staticClass:"mb-0"},[t._v(t._s("トレーニング数 ".concat(Object.values(t.eventList).length," 回")))])])],1)],1),t._v(" "),e(o.a,{attrs:{flat:""}},[e(h.a,[e(m.a,{attrs:{cols:"12"}},[e(k.a,{staticClass:"d-flex align-center",attrs:{tile:"",height:"6vh",color:"grey lighten-3"}},[e(r.a,{staticClass:"ma-4",attrs:{outlined:"",small:""},on:{click:t.setToday}},[t._v("\n            今日\n          ")]),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.prev()}}},[e(v.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(w.a,[t._v(t._s(t.calenderDate))]),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.next()}}},[e(v.a,[t._v("mdi-chevron-right")])],1)],1)],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"6"}},[e(k.a,{attrs:{height:"500"}},[e(c.a,{ref:"calendar",attrs:{locale:t.locale,weekdays:t.weekdays,events:t.events},on:{"click:date":t.onClickDate,"click:event":t.onClickEvent},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"6"}},[e(h.a,[e(m.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{outlined:"",flat:"",elevation:"0"}},[e(l.c,[e("p",{staticClass:"mb-0"},[t._v(t._s(t.menuDate))])])],1)],1),t._v(" "),e(m.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{outlined:"",flat:"",elevation:"0"}},[e(_.a,{attrs:{"fixed-header":"",height:"418"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n                        メニュー\n                      ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                        重量\n                      ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n                        メモ\n                      ")])])]),t._v(" "),e("tbody",t._l(t.currentMenus,(function(menu){return e("tr",{key:menu.id,on:{click:function(e){return t.onClickMenuRow(menu)}}},[e("td",{staticStyle:{width:"30%"}},[t._v(t._s(menu.name))]),t._v(" "),e("td",{staticStyle:{width:"10%"}},[t._v(t._s(menu.kg))]),t._v(" "),e("td",{staticStyle:{width:"60%"}},[t._v(t._s(t.omittedText(menu.memo)))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1)],1),t._v(" "),e(h.a,{attrs:{justify:"center"}},[e(d.a,{attrs:{"max-width":"600",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[1===t.step?e(o.a,[e(l.d,{staticClass:"text-h6"},[t._v("\n          "+t._s("時間を入力してください。")+"\n        ")]),t._v(" "),e("div",[e(l.c,{staticClass:"py-0"},[e(h.a,[e(m.a,{attrs:{cols:"12"}},[e(O.a,{attrs:{"ampm-in-title":"",flat:"","full-width":"",color:"#262626","header-color":"#262626"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1)],1),t._v(" "),e(l.a,[e(D.a),t._v(" "),e(r.a,{attrs:{text:""},on:{click:t.onClickCancel}},[t._v("\n            キャンセル\n          ")]),t._v(" "),e(r.a,{attrs:{text:""},on:{click:t.onClickNext}},[t._v("\n            次へ\n          ")])],1)],1):t._e(),t._v(" "),2===t.step?e(o.a,[e(l.d,{staticClass:"text-h6"},[t._v("\n          メニューを入力してください。\n        ")]),t._v(" "),e("div",[e(l.c,{staticClass:"py-0"},t._l(t.menuForms,(function(form,n){return e(o.a,{key:"menu-form-".concat(n),staticClass:"py-2 px-4 mb-2",attrs:{flat:"",outlined:""}},[e(h.a,[e(m.a,{attrs:{cols:"12"}},[e(f.a,{attrs:{items:t.selectOptionForMenu,label:"メニュー",color:"#262626"},model:{value:form.name,callback:function(e){t.$set(form,"name",e)},expression:"form.name"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12"}},[e(y.a,{staticClass:"align-center",attrs:{color:"#262626","track-color":"gray",max:100,min:0,label:"重量","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e(C.a,{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:form.kg,callback:function(e){t.$set(form,"kg",e)},expression:"form.kg"}})]},proxy:!0}],null,!0),model:{value:form.kg,callback:function(e){t.$set(form,"kg",e)},expression:"form.kg"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{label:"メモ",color:"#262626","hide-details":""},model:{value:form.memo,callback:function(e){t.$set(form,"memo",e)},expression:"form.memo"}})],1)],1)],1)})),1),t._v(" "),e(l.a,{staticClass:"py-0"},[e(D.a),t._v(" "),e(r.a,{attrs:{text:""},on:{click:t.onClickAddMenu}},[t._v("\n              メニューを追加\n            ")])],1)],1),t._v(" "),e(l.a,[e(D.a),t._v(" "),e(r.a,{attrs:{text:""},on:{click:t.onClickBack}},[t._v("\n            戻る\n          ")]),t._v(" "),e(r.a,{attrs:{text:""},on:{click:t.onClickSave}},[t._v("\n            保存\n          ")])],1)],1):t._e()],1),t._v(" "),e(d.a,{attrs:{"max-width":"600"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[e(o.a,{staticClass:"pa-6",attrs:{flat:"",outlined:""}},[e(l.c,{staticClass:"pa-0"},[t._v("\n          "+t._s(t.currentMenu.memo)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"79fb84e0",null);e.default=component.exports}}]);