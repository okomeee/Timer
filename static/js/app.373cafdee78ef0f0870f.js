webpackJsonp([1],[,,,function(t,e,s){"use strict";e.a={name:"app",data:function(){return{startTime:0,elapsedTime:0,h:0,m:0,s:0,ms:0,Timer:"00:00:00",isActive:!0,a:10,state:!1}},watch:{a:function(t){document.querySelector("main").style.fontSize=2*t+"px"}},methods:{start:function(t){var e;switch(this.isActive=!this.isActive,t){case 1:this.startTime=new Date;break;case 2:e=new Date,this.startTime=e.setMinutes(e.getMinutes()-30);break;case 3:e=new Date,this.startTime=e.setHours(e.getHours()-1);break;case 4:e=new Date,this.startTime=e.setSeconds(e.getSeconds()-59);break;case 5:e=new Date,this.startTime=e.setMinutes(e.getMinutes()-59);break;case 6:e=new Date,this.startTime=e.setSeconds(e.getSeconds()-59),this.startTime=e.setMinutes(e.getMinutes()-59)}this.countUp()},countUp:function(){var t=this;setTimeout(function(){t.elapsedTime=new Date-t.startTime,t.updateTimetText(),t.countUp()},10)},updateTimetText:function(){this.h=Math.floor(this.elapsedTime/36e5),this.m=Math.floor(this.elapsedTime/6e4%60),this.s=Math.floor(this.elapsedTime%6e4/1e3),this.Timer=("0"+this.h).slice(-2)+":"+("0"+this.m).slice(-2)+":"+("0"+this.s).slice(-2)},ch:function(){this.state=!this.state,console.log(this.state)}}}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s(9),a=s(13);n.a.config.productionTip=!1,new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},,,,function(t,e,s){"use strict";function n(t){s(10)}var i=s(3),a=s(12),r=s(2),o=n,c=r(i.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("main",{class:{active:t.state}},[t._v("\n    "+t._s(t.Timer)+"\n  ")]),s("br"),t._v(" "),t.isActive?s("button",{on:{click:function(e){return t.start(1)}}},[t._v("スタート")]):t._e(),t._v(" "),t.isActive?s("button",{on:{click:function(e){return t.start(2)}}},[t._v("30分からスタート")]):t._e(),t._v(" "),t.isActive?s("button",{on:{click:function(e){return t.start(3)}}},[t._v("1時間からスタート")]):t._e(),s("br"),t._v(" "),t.isActive?s("button",{staticClass:"debug",on:{click:function(e){return t.start(4)}}},[t._v("59秒からスタート")]):t._e(),t._v(" "),t.isActive?s("button",{staticClass:"debug",on:{click:function(e){return t.start(5)}}},[t._v("59分からスタート")]):t._e(),t._v(" "),t.isActive?s("button",{staticClass:"debug",on:{click:function(e){return t.start(6)}}},[t._v("59分59秒からスタート")]):t._e(),s("br"),t._v(" "),t.isActive?s("button",{staticClass:"size",on:{click:function(e){t.a-=1}}},[t._v("小")]):t._e(),t._v(" "),t.isActive?s("button",{staticClass:"size",on:{click:function(e){t.a+=1}}},[t._v("大")]):t._e(),s("br"),t._v(" "),t.isActive?s("button",{staticClass:"color",on:{click:function(e){return t.ch()}}},[t._v("晴れ用")]):t._e(),s("br")])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,s){"use strict";var n=s(1),i=s(14),a=s(15);n.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:a.a}]})},,function(t,e,s){"use strict";function n(t){s(16)}var i=s(4),a=s(17),r=s(2),o=n,c=r(i.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],a={render:n,staticRenderFns:i};e.a=a}],[5]);
//# sourceMappingURL=app.373cafdee78ef0f0870f.js.map