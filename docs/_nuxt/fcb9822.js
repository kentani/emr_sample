(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{598:function(t,e,n){"use strict";n.r(e);var r=n(423),c=n(411),o=n(195),d=n(160),l=n(421),m=n(424),h=n(410),f=n(420),v=(n(37),n(56),n(5),n(10),n(162),{name:"MemberDetailPage",layout:"default",data:function(){return{tabList:{1:{id:1,name:"パーソナルデータ",to:"personal-data",active:!1},2:{id:2,name:"トレーニング履歴",to:"training-data",active:!1},3:{id:3,name:"身体数値",to:"physical-data",active:!1},4:{id:4,name:"身体画像",to:"physical-image",active:!1}},breadcrumbs:[{text:"メニュー",disabled:!1,href:"/gyms/1/menu"},{text:"顧客一覧",disabled:!1,href:"/gyms/1/members"},{text:"顧客 太郎",disabled:!0,href:"/gyms/1/members/1"}]}},mounted:function(){var t=this.$route.path.split("/").slice(-1)[0],e=this.toList.indexOf(t)+1;this.tabList[e].active=!0,this.tabList=Object.assign({},this.tabList)},computed:{toList:function(){var t=[];return Object.values(this.tabList).forEach((function(e){t.push(e.to)})),t}},methods:{onclickTab:function(t){var e=this;this.toList.forEach((function(n,r){var c=e.tabList[r+1];c.active=c.id===t,e.tabList[c.id]=c})),this.tabList=Object.assign({},this.tabList),this.$router.push("/gyms/1/members/1/".concat(this.tabList[t].to))}}}),L=n(59),component=Object(L.a)(v,(function(){var t=this,e=t._self._c;return e(m.a,[e(r.a,{staticClass:"px-0",attrs:{color:"main",items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(h.a,[t._v("mdi-chevron-right")])]},proxy:!0}])}),t._v(" "),e(f.a,[e(l.a,{attrs:{cols:"12",lg:"3"}},[e(o.a,{attrs:{flat:"",rounded:"lg"}},[e(d.c,{staticClass:"pa-2"},[e(f.a,{attrs:{"no-gutters":""}},t._l(t.tabList,(function(n){return e(l.a,{key:n.id,attrs:{cols:"6",md:"3",lg:"12"}},[e(c.a,{attrs:{dark:n.active,text:!n.active,block:"",large:"",color:"main"},on:{click:function(e){return t.onclickTab(n.id)}}},[t._v("\n                "+t._s(n.name)+"\n              ")])],1)})),1)],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",lg:"9"}},[e("nuxt-child")],1)],1)],1)}),[],!1,null,"58bd35ea",null);e.default=component.exports}}]);