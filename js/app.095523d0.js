(function(t){function e(e){for(var o,c,i=e[0],l=e[1],n=e[2],d=0,h=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,n||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},a={app:0},s=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuezee/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var n=0;n<i.length;n++)e(i[n]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"36af":function(t,e,r){"use strict";var o=r("85aa"),a=r.n(o);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],c=(r("5c0b"),r("2877")),i={},l=Object(c["a"])(i,a,s,!1,null,null,null),n=l.exports,u=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"game"}},[r("div",{staticClass:"container"},[r("br"),r("div",{staticClass:"tile is-ancestor"},[r("div",{staticClass:"tile is-parent is-4 is-vertical"},[r("div",{staticClass:"tile is-child box"},[r("title-howto-about")],1),r("div",{staticClass:"tile is-child box"},[r("p",{staticClass:"is-size-5"},[t._v(t._s(t.rollText()))]),r("div",{staticClass:"is-marginless"},t._l(t.all_dice,(function(e){return r("span",{key:e.dice_id},[r("span",{staticClass:"dice-size is-size-1-mobile"},[r("i",{staticClass:"fas pointed-cursor",class:[{"has-text-info":e.selected},t.diceClass(e.value)],on:{click:function(r){return t.toggleSelected(e)}}})])])})),0),r("p",[r("button",{staticClass:"button is-primary is-large",attrs:{disabled:t.rollLimitReached()||t.gameComplete()},on:{click:function(e){return t.rollAll()}}},[r("i",{staticClass:"fas fa-dice",class:[{"fa-spin":!t.rollLimitReached()&&!t.gameComplete()}]})])])]),r("div",{staticClass:"tile is-child box"},[r("highscores")],1)]),r("div",{staticClass:"tile is-parent"},[r("div",{staticClass:"tile is-child box"},[r("table",{staticClass:"table is-fullwidth"},[t._m(0),r("tbody",t._l(t.scorecard.upper_section,(function(e){return r("tr",{key:e.label,staticClass:"pointed-cursor",on:{click:function(r){return t.scoreRoll(e)}}},[r("td",[t._v(t._s(e.label)+" "),e.scored?r("i",{staticClass:"fas fa-check has-text-primary"}):t._e()]),r("td",[t._v(t._s(e.howto))]),r("td",[t._v(t._s(e.score))])])})),0)]),r("table",{staticClass:"table is-fullwidth"},[t._m(1),r("tbody",t._l(t.scorecard.lower_section,(function(e){return r("tr",{key:e.label,staticClass:"pointed-cursor",on:{click:function(r){return t.scoreRoll(e)}}},[r("td",[t._v(t._s(e.label)+" "),e.scored?r("i",{staticClass:"fas fa-check has-text-primary"}):t._e()]),r("td",[t._v(t._s(e.howto))]),r("td",[t._v(t._s(e.score))])])})),0)]),r("table",{staticClass:"table is-fullwidth"},[t._m(2),r("tbody",[r("tr",[r("td",{attrs:{colspan:"2"}},[t._v("Upper Section Total")]),r("td",[t._v(t._s(t.scorecard.upper_total))])]),r("tr",[r("td",{attrs:{colspan:"2"}},[t._v("Lower Section Total")]),r("td",[t._v(t._s(t.scorecard.lower_total))])]),r("tr",[r("td",{attrs:{colspan:"2"}},[t._v("Grand Total")]),r("td",[t._v(t._s(t.scorecard.grand_total))])])])]),r("button",{staticClass:"button is-info",on:{click:function(e){return t.newGame()}}},[t._v("New Game")])])])])])])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{staticClass:"section-title",attrs:{width:"20%"}},[t._v("Upper Section")]),r("td",{staticClass:"section-title",attrs:{width:"60%"}},[t._v("How To Score")]),r("td",{staticClass:"section-title",attrs:{width:"20%"}},[t._v("Score")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{staticClass:"section-title",attrs:{width:"20%"}},[t._v("Lower Section")]),r("td",{staticClass:"section-title",attrs:{width:"60%"}},[t._v("How To Score")]),r("td",{staticClass:"section-title",attrs:{width:"20%"}},[t._v("Score")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{staticClass:"section-title",attrs:{width:"20%"}},[t._v("Totals")]),r("td",{staticClass:"section-title",attrs:{width:"60%"}}),r("td",{staticClass:"section-title",attrs:{width:"20%"}},[t._v("Score")])])])}],f=(r("8e6e"),r("456d"),r("5df3"),r("f400"),r("6762"),r("55dd"),r("ac4d"),r("8a81"),r("ac6a"),r("bd86")),v=r("2f62"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"title-howto-about"}},[r("i",{staticClass:"fas fa-dice fancy-title-dice has-text-info"}),r("div",{staticClass:"fancy-title has-text-info"},[t._v("Vuezee")]),r("br"),r("a",{staticClass:"button is-text",attrs:{id:"howto-button"},on:{click:function(e){t.show_howto_modal=!0}}},[t._v("How To")]),r("a",{staticClass:"button is-text",attrs:{id:"about-button"},on:{click:function(e){t.show_about_modal=!0}}},[t._v("About")]),r("div",{staticClass:"modal",class:[{"is-active":t.show_howto_modal}]},[r("div",{staticClass:"modal-background"}),r("div",{staticClass:"modal-content"},[r("div",{staticClass:"box"},[t._m(0),r("button",{staticClass:"button is-info",on:{click:function(e){t.show_howto_modal=!1}}},[t._v("Close")])])]),r("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.show_howto_modal=!1}}})]),r("div",{staticClass:"modal",class:[{"is-active":t.show_about_modal}]},[r("div",{staticClass:"modal-background"}),r("div",{staticClass:"modal-content"},[r("div",{staticClass:"box"},[t._m(1),r("button",{staticClass:"button is-info",on:{click:function(e){t.show_about_modal=!1}}},[t._v("Close")])])]),r("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.show_about_modal=!1}}})])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content has-text-left"},[r("p",[t._v("How To Play Vuezee")]),r("p",[r("ol",[r("li",[t._v("Click the roll button (spinning dice) to begin your first roll.")]),r("li",[t._v("Click any dice you want to keep.")]),r("li",[t._v("You have 3 rolls to try and make scoreable combos.")]),r("li",[t._v("Click the line in the scorecard you wish to score your dice.")]),r("li",[t._v("Repeat until you've completed the scorecard.")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[t._v("Vuezee is a Yahtzee clone created with Vue.js, Bulma, and FontAwesome.")]),r("hr"),r("p",[t._v("Created by Josh Burks")]),r("a",{attrs:{href:"https://github.com/dotnofoolin/vuezee",target:"_blank"}},[t._v("\n            https://github.com/dotnofoolin/vuezee\n          ")])])}],b={name:"TitleHowtoAbout",data:function(){return{show_about_modal:!1,show_howto_modal:!1}}},m=b,y=(r("36af"),Object(c["a"])(m,_,p,!1,null,"1c0749c3",null)),w=y.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"highscores"}},[r("p",{staticClass:"is-size-5"},[t._v("High Scores on This Machine")]),r("table",{staticClass:"table is-fullwidth"},[t._m(0),r("tbody",t._l(t.top5,(function(e,o){return r("tr",{key:o},[r("td",{staticClass:"has-text-centered"},[t._v(t._s(e.date))]),r("td",{staticClass:"has-text-centered"},[t._v(t._s(e.score))])])})),0)])])},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{width:"50%"}}),r("th",{attrs:{width:"50%"}})])])}];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(r,!0).forEach((function(e){Object(f["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k={name:"Highscores",computed:O({},Object(v["c"])("highscores",["top5"]))},x=k,j=Object(c["a"])(x,g,C,!1,null,null,null),E=j.exports;function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(r,!0).forEach((function(e){Object(f["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={name:"game",components:{"title-howto-about":w,highscores:E},computed:D({},Object(v["d"])("scorecard",["scorecard"])),data:function(){return{roll_count:0,all_dice:[{dice_id:1,value:null,selected:!1},{dice_id:2,value:null,selected:!1},{dice_id:3,value:null,selected:!1},{dice_id:4,value:null,selected:!1},{dice_id:5,value:null,selected:!1}]}},mounted:function(){this.fetchScorecard(),this.fetchHighscores()},methods:D({},Object(v["b"])("highscores",["saveHighscore","fetchHighscores"]),{},Object(v["b"])("scorecard",["updateScorecard","fetchScorecard","resetScorecard"]),{roll:function(t){t.value=Math.floor(6*Math.random())+1},rollAll:function(){var t=!0,e=!1,r=void 0;try{for(var o,a=this.all_dice.filter((function(t){return!1===t.selected}))[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=o.value;this.roll(s)}}catch(c){e=!0,r=c}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}this.roll_count++},toggleSelected:function(t){0!==this.roll_count&&(t.selected=!t.selected)},rollLimitReached:function(){return this.roll_count>=3},diceClass:function(t){switch(t){case 1:return"fa-dice-one";case 2:return"fa-dice-two";case 3:return"fa-dice-three";case 4:return"fa-dice-four";case 5:return"fa-dice-five";case 6:return"fa-dice-six";default:return"fa-square"}},rollText:function(){if(this.gameComplete())return"Game Complete! Thanks for Playing!";switch(this.roll_count){case 1:return"First Roll";case 2:return"Second Roll";case 3:return"Final Roll. Please Score.";default:return"Click Roll to Get Started!"}},resetDice:function(){this.roll_count=0;var t=!0,e=!1,r=void 0;try{for(var o,a=this.all_dice[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=o.value;s.value=null,s.selected=!1}}catch(c){e=!0,r=c}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}},addGrandTotal:function(){this.scorecard.grand_total=this.scorecard.upper_total+this.scorecard.lower_total},scoreRoll:function(t){if(0!==this.roll_count&&(!t.scored&&"bonus"!==t.id||"vuezee"===t.id)){switch(t.id){case"aces":this.scoreIndividualUpper(t,1);break;case"twos":this.scoreIndividualUpper(t,2);break;case"threes":this.scoreIndividualUpper(t,3);break;case"fours":this.scoreIndividualUpper(t,4);break;case"fives":this.scoreIndividualUpper(t,5);break;case"sixes":this.scoreIndividualUpper(t,6);break;case"three_of_a_kind":this.scoreXOfAKind(t,3);break;case"four_of_a_kind":this.scoreXOfAKind(t,4);break;case"full_house":this.scoreFullHouse(t);break;case"small_straight":this.scoreSmallStraight(t);break;case"large_straight":this.scoreLargeStraight(t);break;case"vuezee":this.scoreVuezee(t);break;case"chance":this.scoreChance(t);break;default:return}var e=this.scorecard.upper_section.filter((function(t){return"bonus"===t.id}))[0];e.scored||this.scorecard.upper_total>=63&&(e.score=35,this.scorecard.upper_total+=e.score,e.scored=!0),t.scored=!0,this.addGrandTotal(),this.resetDice(),this.updateScorecard(),this.gameComplete()&&this.saveHighscore(this.scorecard.grand_total)}},scoreIndividualUpper:function(t,e){var r=!0,o=!1,a=void 0;try{for(var s,c=this.all_dice[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var i=s.value;i.value===e&&(t.score+=e)}}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}this.scorecard.upper_total+=t.score},scoreXOfAKind:function(t,e){var r=this.buildDiceCheckMap(),o=!0,a=!1,s=void 0;try{for(var c,i=r.dice_map_values[Symbol.iterator]();!(o=(c=i.next()).done);o=!0){var l=c.value;l>=e&&(t.score=r.dice_total,this.scorecard.lower_total+=r.dice_total)}}catch(n){a=!0,s=n}finally{try{o||null==i.return||i.return()}finally{if(a)throw s}}},scoreFullHouse:function(t){var e=this.buildDiceCheckMap(),r=!1,o=!1,a=!0,s=!1,c=void 0;try{for(var i,l=e.dice_map_values[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var n=i.value;2===n&&(r=!0),3===n&&(o=!0)}}catch(u){s=!0,c=u}finally{try{a||null==l.return||l.return()}finally{if(s)throw c}}r&&o&&(t.score=25,this.scorecard.lower_total+=25)},scoreSmallStraight:function(t){var e=this.buildDiceCheckArray();e.length>=4&&(e=e.slice(0,4),(this.$_.isEqual(e,[1,2,3,4])||this.$_.isEqual(e,[2,3,4,5])||this.$_.isEqual(e,[3,4,5,6]))&&(t.score=30,this.scorecard.lower_total+=30))},scoreLargeStraight:function(t){var e=this.buildDiceCheckArray();5===e.length&&(this.$_.isEqual(e,[1,2,3,4,5])||this.$_.isEqual(e,[2,3,4,5,6]))&&(t.score=40,this.scorecard.lower_total+=40)},scoreVuezee:function(t){var e=this.buildDiceCheckArray();1===e.length&&(t.scored&&0!==t.score&&(t.score+=100,this.scorecard.lower_total+=100),t.scored||(t.score=50,this.scorecard.lower_total+=50))},scoreChance:function(t){var e=!0,r=!1,o=void 0;try{for(var a,s=this.all_dice[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var c=a.value;t.score+=c.value}}catch(i){r=!0,o=i}finally{try{e||null==s.return||s.return()}finally{if(r)throw o}}this.scorecard.lower_total+=t.score},buildDiceCheckArray:function(){var t=[],e=!0,r=!1,o=void 0;try{for(var a,s=this.all_dice[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var c=a.value;t.includes(c.value)||t.push(c.value)}}catch(i){r=!0,o=i}finally{try{e||null==s.return||s.return()}finally{if(r)throw o}}return t.sort()},buildDiceCheckMap:function(){var t=new Map;t.set(1,0),t.set(2,0),t.set(3,0),t.set(4,0),t.set(5,0),t.set(6,0);var e=0,r=!0,o=!1,a=void 0;try{for(var s,c=this.all_dice[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var i=s.value;e+=i.value,t.set(i.value,t.get(i.value)+1)}}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return{dice_total:e,dice_map_values:t.values()}},gameComplete:function(){var t=!1;0===this.scorecard.upper_section.filter((function(t){return"bonus"!==t.id})).filter((function(t){return!1===t.scored})).length&&(t=!0);var e=!1;return 0===this.scorecard.lower_section.filter((function(t){return!1===t.scored})).length&&(e=!0),!(!t||!e)},newGame:function(){this.resetDice(),this.resetScorecard()}})},T=P,H=(r("e83e"),Object(c["a"])(T,d,h,!1,null,"6247585a",null)),z=H.exports;o["a"].use(u["a"]);var R=new u["a"]({mode:"history",base:"/vuezee/",routes:[{path:"/",name:"game",component:z}]}),$=(r("15f5"),{scorecard:{upper_section:[{id:"aces",label:"Aces",howto:"Count and Score Only Aces",score:0,scored:!1},{id:"twos",label:"Twos",howto:"Count and Score Only Twos",score:0,scored:!1},{id:"threes",label:"Threes",howto:"Count and Score Only Threes",score:0,scored:!1},{id:"fours",label:"Fours",howto:"Count and Score Only Fours",score:0,scored:!1},{id:"fives",label:"Fives",howto:"Count and Score Only Fives",score:0,scored:!1},{id:"sixes",label:"Sixes",howto:"Count and Score Only Sixes",score:0,scored:!1},{id:"bonus",label:"Bonus",howto:"If Aces thru Sixes Summed >= 63 (35)",score:0,scored:!1}],lower_section:[{id:"three_of_a_kind",label:"3 of a Kind",howto:"Add Total of All Dice",score:0,scored:!1},{id:"four_of_a_kind",label:"4 of a Kind",howto:"Add Total of All Dice",score:0,scored:!1},{id:"full_house",label:"Full House",howto:"One Triple and One Double (25)",score:0,scored:!1},{id:"small_straight",label:"Small Straight",howto:"Sequence of 4 (30)",score:0,scored:!1},{id:"large_straight",label:"Large Straight",howto:"Sequence of 5 (40)",score:0,scored:!1},{id:"vuezee",label:"Vuezee",howto:"5 of a Kind (50). Bonus for additionals (100)",score:0,scored:!1},{id:"chance",label:"Chance",howto:"Add All 5 Dice",score:0,scored:!1}],upper_total:0,lower_total:0,grand_total:0}}),I={},V={SAVE_SCORECARD:function(t,e){t.scorecard=e}},G={updateScorecard:function(t){localStorage.setItem("vuezee-scorecard",JSON.stringify($.scorecard))},fetchScorecard:function(t){var e=localStorage.getItem("vuezee-scorecard");e&&t.commit("SAVE_SCORECARD",JSON.parse(e))},resetScorecard:function(t){var e=$.scorecard,r=!0,o=!1,a=void 0;try{for(var s,c=e.upper_section[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var i=s.value;i.score=0,i.scored=!1}}catch(v){o=!0,a=v}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}var l=!0,n=!1,u=void 0;try{for(var d,h=e.lower_section[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var f=d.value;f.score=0,f.scored=!1}}catch(v){n=!0,u=v}finally{try{l||null==h.return||h.return()}finally{if(n)throw u}}e.upper_total=e.lower_total=e.grand_total=0,t.commit("SAVE_SCORECARD",e),t.dispatch("updateScorecard")}},M={namespaced:!0,state:$,getters:I,mutations:V,actions:G},F=r("2ef0"),L=r.n(F),U={highscores:[]},q={top5:function(t){return L.a.orderBy(t.highscores,"score","desc").slice(0,5)}},J={SAVE_HIGHSCORES:function(t,e){t.highscores=e},SAVE_HIGHSCORE:function(t,e){t.highscores.push(e)}},K={saveHighscore:function(t,e){var r={score:e,date:(new Date).toLocaleDateString()};t.commit("SAVE_HIGHSCORE",r),localStorage.setItem("vuezee-highscores",JSON.stringify(U.highscores))},fetchHighscores:function(t){var e=localStorage.getItem("vuezee-highscores");e&&t.commit("SAVE_HIGHSCORES",JSON.parse(e))}},B={namespaced:!0,state:U,getters:q,mutations:J,actions:K};o["a"].use(v["a"]);var N=new v["a"].Store({modules:{scorecard:M,highscores:B}});Object.defineProperty(o["a"].prototype,"$_",{value:L.a}),o["a"].config.productionTip=!1,new o["a"]({router:R,store:N,render:function(t){return t(n)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var o=r("e332"),a=r.n(o);a.a},"85aa":function(t,e,r){},ccf2:function(t,e,r){},e332:function(t,e,r){},e83e:function(t,e,r){"use strict";var o=r("ccf2"),a=r.n(o);a.a}});
//# sourceMappingURL=app.095523d0.js.map