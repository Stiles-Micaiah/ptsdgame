(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],p=0,u=[];p<i.length;p++)o=i[p],n[o]&&u.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ptsdgame/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0527":function(t,e,a){},"2ac6":function(t,e,a){"use strict";var s=a("4fa4"),n=a.n(s);n.a},"4fa4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s,n,r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},i=[],c=(a("034f"),a("2877")),l={},d=Object(c["a"])(l,o,i,!1,null,null,null),p=d.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home d-flex justify-content-center"},[a("div",{staticClass:"card bg-dark text-white",staticStyle:{height:"300px",width:"300px"}},[a("img",{staticClass:"card-img",attrs:{src:"https://via.placeholder.com/300.png",alt:"..."}}),a("div",{staticClass:"card-img-overlay"},[a("h5",{staticClass:"card-title"},[t._v("Card title")]),a("div",{staticClass:"form-group"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.startGame(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.startGameInfo.playerName,expression:"startGameInfo.playerName"}],staticClass:"form-control",attrs:{id:"name",required:"true",type:"text",placeholder:"Enter Your Name"},domProps:{value:t.startGameInfo.playerName},on:{input:function(e){e.target.composing||t.$set(t.startGameInfo,"playerName",e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.startGameInfo.set,expression:"startGameInfo.set"}],staticClass:"custom-select",attrs:{required:"true"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.startGameInfo,"set",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1"}},[t._v("One")]),a("option",{attrs:{value:"2"}},[t._v("Two")]),a("option",{attrs:{value:"3"}},[t._v("Three")]),a("option",{attrs:{value:"4"}},[t._v("Four")])]),a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"submit"}},[t._v("Play")])])])])])])},h=[],f={name:"Home",data(){return{startGameInfo:{playerName:"",set:""}}},mounted(){this.$store.dispatch("getGames")},methods:{startGame(t){this.$store.dispatch("createGame",this.startGameInfo),console.log("startGame form output",this.startGameInfo)}}},v=f,g=Object(c["a"])(v,m,h,!1,null,null,null),b=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"GameView container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v(t._s(t.game.player.name)+" VS "+t._s(t.game.opponent.name))])])]),a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-3 d-flex justify-content-center",staticStyle:{"margin-bottom":"150px"}},[a("button",{staticClass:"btn btn-block btn-lg btn-info",on:{click:function(e){return t.attackShizzie()}}},[t._v("Attack")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("PlayerCard",{attrs:{hand:t.game.player.hand},on:{playerSelect:t.isPlayer}})],1)]),a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-9"},[a("OpponentCard",{attrs:{hand:t.game.opponent.hand},on:{opponentSelect:t.isOpponent}})],1)])])},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},t._l(t.hand,function(e){return a("a",{key:e.id,staticClass:"btn btn-anchor col",on:{click:function(a){return t.sendopponent(e.id)}}},[e.visible?t._e():a("img",{staticClass:"card-img-target",attrs:{src:"https://nicholmagouirk.typepad.com/.a/6a00d8341c6f8a53ef0133f2f5755e970b-800wi",alt:"yeet"}}),e.visible?a("div",{staticClass:"card bg-dark text-white d-flex"},[a("img",{staticClass:"card-img-target",attrs:{src:e.img,alt:"yeet"}}),a("div",{staticClass:"card-img-overlay"},[a("h5",{staticClass:"card-title"},[t._v("Name:"+t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v("Attackses:"+t._s(e.attack))]),a("p",{staticClass:"card-text"},[t._v("Defense:"+t._s(e.defense))]),a("p",{staticClass:"card-text"},[t._v("Health:"+t._s(e.health))])])]):t._e()])}),0)])])},w=[],k={name:"opponentCard",props:["hand"],data(){return{selectedopponent:""}},methods:{sendopponent(t){this.$emit("opponentSelect",t)}}},j=k,x=(a("e222"),Object(c["a"])(j,_,w,!1,null,"39487326",null)),G=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},t._l(t.hand,function(e){return a("a",{key:e.id,staticClass:"btn btn-anchor col",on:{click:function(a){return t.sendPlayer(e.id)}}},[a("div",{staticClass:"card bg-dark text-white d-flex"},[a("img",{staticClass:"card-img-target",attrs:{src:e.img,alt:"yeet"}}),a("div",{staticClass:"card-img-overlay"},[a("h5",{staticClass:"card-title"},[t._v("Name:"+t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v("Attackses:"+t._s(e.attack))]),a("p",{staticClass:"card-text"},[t._v("Defense:"+t._s(e.defense))]),a("p",{staticClass:"card-text"},[t._v("Health:"+t._s(e.health))])])])])}),0)])])},I=[],S={name:"PlayerCard",props:["hand"],data(){return{selectedPlayer:""}},methods:{sendPlayer(t){this.$emit("playerSelect",t)}}},$=S,A=(a("f88a"),Object(c["a"])($,O,I,!1,null,"1662283e",null)),P=A.exports,N={name:"Game",props:["id"],data(){return{attackObj:{playerCardId:"",opponentCardId:""}}},mounted(){this.$store.dispatch("getGame",this.id)},computed:{game(){return this.$store.state.activeGame}},components:{OpponentCard:G,PlayerCard:P},methods:{consoleLog(){console.log("console.log(",this.attackObj,")")},attackShizzie(){let t={attackses:this.attackObj,id:this.id};this.$store.dispatch("attackShizzie",t),this.$store.dispatch("getGame",this.id),clear()},clear(){this.attackObj.playerCardId="",this.attackObj.opponentCardId=""},isPlayer(t){this.attackObj.playerCardId=t,console.log("you selected card"+this.attackObj.playerCardId)},isOpponent(t){this.attackObj.opponentCardId=t,console.log("your opponent selected"+this.attackObj.opponentCardId)}}},z=N,E=Object(c["a"])(z,y,C,!1,null,"31e98c2a",null),T=E.exports,U={},q=Object(c["a"])(U,s,n,!1,null,null,null),M=q.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h1",[a("span",{attrs:{id:"congrats"}},[t._v("Congratulations ")]),a("span",{attrs:{id:"winner"}},[t._v('"'+t._s(t.isWinner)+'"')]),a("br"),a("span",{attrs:{id:"enjoy"}},[t._v("Enjoy Your")]),a("span",{attrs:{id:"chicken"}},[t._v(" Chicken")])]),a("button",{staticClass:"btn btn-success btn-lg btn-block",on:{click:t.tryAgain}},[t._v("Try Again?")]),a("img",{staticClass:"banner",attrs:{src:t.img,alt:t.img}})])},W=[],D={name:"",props:["isWinner","img"],methods:{tryAgain(){this.$store.dispatch("restart")}}},F=D,L=(a("2ac6"),Object(c["a"])(F,H,W,!1,null,"d112b5ec",null)),J=L.exports;r["a"].use(u["a"]);var V=new u["a"]({mode:"history",base:"/ptsdgame/",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:M},{path:"/winner",name:"winner",props:!0,component:J},{path:"/game/:id",name:"game",props:!0,component:T}]}),Y=a("2f62"),B=a("bc3a"),R=a.n(B);r["a"].use(Y["a"]);const K=R.a.create({baseURL:"https://battlecardz.herokuapp.com/api/games"});var Q=new Y["a"].Store({state:{games:[],activeGame:{},activeUser:""},mutations:{setGames(t,e){t.games=e},setActiveGame(t,e){t.activeGame=e},setActiveUser(t,e){t.activeUser=e}},actions:{getGames({commit:t,dispatch:e}){K.get("").then(e=>{t("setGames",e.data),console.log(e)}).catch(t=>{console.error(t)})},getGame({commit:t,dispatch:e},a){K.get(""+a).then(e=>{t("setActiveGame",e.data.data),t("setActiveUser",e.data.data.player.name),e.data.data.winner&&(e.data.data.winner==this.state.activeUser?V.push({name:"winner",params:{isWinner:e.data.data.winner,img:"https://deow9bq0xqvbj.cloudfront.net/image-logo/2332469/winnerwinnerbanner.png"}}):V.push({name:"winner",params:{isWinner:e.data.data.winner,img:"https://i1.wp.com/axtschmiede.com/wp-content/uploads/2017/09/Get-rid-of-a-Loser-Mindset.jpg?fit=844%2C1181"}})),console.log("getGame output",e,"game obj",e.data.data)}).catch(t=>{console.log(t)})},createGame({commit:t,dispatch:e},a){K.post("",a).then(e=>{t("setActiveGame",e.data.game),V.push({name:"game",params:{id:e.data.game.id}}),console.log("createGame output",e,"res.data.game is commited")}).catch(t=>{console.error(t)})},attackShizzie({commit:t,dispatch:e},a){K.put(""+a.id,a.attackses).then(t=>{console.log("updated game obj",t)}).catch(t=>{console.error(t)})},restart({commit:t,dispatch:e}){V.push({name:"home"})}}}),X=a("9483");Object(X["a"])("/ptsdgame/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:V,store:Q,render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,a){},"8fc7":function(t,e,a){},e222:function(t,e,a){"use strict";var s=a("0527"),n=a.n(s);n.a},f88a:function(t,e,a){"use strict";var s=a("8fc7"),n=a.n(s);n.a}});
//# sourceMappingURL=app.537e9405.js.map