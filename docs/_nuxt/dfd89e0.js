(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{384:function(t,e,n){t.exports=n.p+"img/user.e6626ed.png"},596:function(t,e,n){"use strict";n.r(e);var c=n(373),o=n(385),r=n(383),l=n(566),_=n(560),v=n(372),m=n(258),d=n(565),f=n(379),C=(n(34),n(36),{name:"PersonalDataPage",layout:"users",data:function(){return{userImage:n(384),userAge:30,userInfo:{name:"ユーザー1",image:!0,birthday:"0000/00/00",sex:"男性",experience:"サッカー",injury:"膝が弱い",purpose:"ダイエット",goal:"服のサイズをXLからMにする",memo:"土日休み"},dialog:!1}},methods:{onClickEdit:function(){this.$router.push({path:"/users/add1",query:this.userInfo})},onClickDeleteConfirm:function(){this.dialog=!0},onClickDelete:function(){this.$router.push("/users")},onClickCancel:function(){this.dialog=!1}}}),h=n(63),component=Object(h.a)(C,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,{staticClass:"mt-6",attrs:{flat:""}},[e(d.a,{attrs:{"no-gutters":"",justify:"space-between"}},[e(l.a,{attrs:{cols:"12",md:"2","align-self":"center"}},[e(m.a,{attrs:{src:t.userImage}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"9"}},[e(d.a,{attrs:{"no-gutters":""}},[e(l.a,{attrs:{cols:"12",md:"9"}},[e(r.d,[e("p",{staticClass:"text-h3 font-weight-bold"},[t._v(t._s("".concat(t.userInfo.name,"（").concat(t.userAge,"）")))])])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"3"}},[e(r.a,[e(c.a,{attrs:{icon:""},on:{click:t.onClickEdit}},[e(v.a,[t._v("mdi-pencil")])],1),t._v(" "),e(c.a,{attrs:{icon:""},on:{click:t.onClickDeleteConfirm}},[e(v.a,[t._v("mdi-delete")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("生年月日")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.birthday))])])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("性別")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.sex))])])],1)],1)],1)],1),t._v(" "),e(d.a,{attrs:{"no-gutters":"",justify:"space-between"}},[e(l.a,{attrs:{cols:"12",md:"2","align-self":"center"}}),t._v(" "),e(l.a,{attrs:{cols:"12",md:"9"}},[e(d.a,{attrs:{"no-gutters":""}},[e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("運動経験")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.experience))])])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("けが・病気")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.injury))])])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("目的")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.purpose))])])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("目標")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.goal))])])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(r.c,[e("p",{staticClass:"mb-0"},[t._v("メモ")]),t._v(" "),e("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(t.userInfo.memo))])])],1)],1)],1)],1)],1),t._v(" "),e(d.a,{attrs:{justify:"center"}},[e(_.a,{attrs:{"max-width":"400",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,[e(r.d,{staticClass:"text-h6"},[t._v("\n          このユーザーを削除しますか?\n        ")]),t._v(" "),e(r.c,[t._v("\n          一度削除したユーザーは元に戻せません。\n        ")]),t._v(" "),e(r.a,[e(f.a),t._v(" "),e(c.a,{attrs:{text:""},on:{click:t.onClickCancel}},[t._v("\n            キャンセル\n          ")]),t._v(" "),e(c.a,{attrs:{text:""},on:{click:t.onClickDelete}},[t._v("\n            削除\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"56868806",null);e.default=component.exports}}]);