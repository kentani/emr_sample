(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{609:function(t,n,o){"use strict";o.r(n);var e=o(574),c=o(584),r=(o(37),o(56),o(5),o(10),o(161),o(34),{name:"UserPage",layout:"users",data:function(){return{tab:0,tabList:{1:{id:1,name:"パーソナルデータ",to:"personal-data"},3:{id:3,name:"トレーニング履歴",to:"training-history"},4:{id:4,name:"身体数値",to:"weight-history"},5:{id:5,name:"身体画像",to:"image-history"}}}},mounted:function(){var t=this.$route.path.split("/").slice(-1)[0];this.tab=this.toList.indexOf(t)},computed:{toList:function(){var t=[];return Object.values(this.tabList).forEach((function(n){t.push(n.to)})),t}},methods:{onclickTab:function(t){var n=this.tabList[t];this.$router.push("/users/".concat(this.$route.params.id,"/").concat(n.to))}}}),l=o(59),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",[n(c.a,{attrs:{color:"#262626"},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.tabList,(function(o){return n(e.a,{key:o.id,class:{active:!0},on:{click:function(n){return t.onclickTab(o.id)}}},[t._v("\n      "+t._s(o.name)+"\n    ")])})),1),t._v(" "),n("nuxt-child")],1)}),[],!1,null,"356264a7",null);n.default=component.exports}}]);