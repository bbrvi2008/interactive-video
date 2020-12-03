!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var i=n(9),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();e.exports=o},function(e,t,n){var i=n(1).Symbol;e.exports=i},function(e,t,n){"use strict";var i,r="object"==typeof Reflect?Reflect:null,o=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};i=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,i){function r(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,r),i(n)},e.once("error",o)),e.once(t,r)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function d(e,t,n,i){var r,o,s,a;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=l(e))>0&&s.length>r&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=f.bind(i);return r.listener=n,i.wrapFn=r,r}function p(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):y(r,r.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function y(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return l(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=r[e];if(void 0===u)return!1;if("function"==typeof u)o(u,this,t);else{var c=u.length,l=y(u,c);for(n=0;n<c;++n)o(l[n],this,t)}return!0},a.prototype.addListener=function(e,t){return d(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return d(this,e,t,!0)},a.prototype.once=function(e,t){return c(t),this.on(e,v(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,v(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,i,r,o,s;if(c(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},a.prototype.listeners=function(e){return p(this,e,!0)},a.prototype.rawListeners=function(e){return p(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},a.prototype.listenerCount=h,a.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(e,t,n){e.exports=n(17)},function(e,t,n){},function(e,t,n){},function(e,t,n){var i=n(0),r=n(8),o=n(11),s=Math.max,a=Math.min;e.exports=function(e,t,n){var u,c,l,d,f,v,p=0,h=!1,y=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=u,i=c;return u=c=void 0,p=t,d=e.apply(i,n)}function w(e){return p=e,f=setTimeout(g,t),h?b(e):d}function k(e){var n=e-v;return void 0===v||n>=t||n<0||y&&e-p>=l}function g(){var e=r();if(k(e))return L(e);f=setTimeout(g,function(e){var n=t-(e-v);return y?a(n,l-(e-p)):n}(e))}function L(e){return f=void 0,m&&u?b(e):(u=c=void 0,d)}function _(){var e=r(),n=k(e);if(u=arguments,c=this,v=e,n){if(void 0===f)return w(v);if(y)return clearTimeout(f),f=setTimeout(g,t),b(v)}return void 0===f&&(f=setTimeout(g,t)),d}return t=o(t)||0,i(n)&&(h=!!n.leading,l=(y="maxWait"in n)?s(o(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),_.cancel=function(){void 0!==f&&clearTimeout(f),p=0,u=v=c=f=void 0},_.flush=function(){return void 0===f?d:L(r())},_}},function(e,t,n){var i=n(1);e.exports=function(){return i.Date.now()}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(10))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var i=n(0),r=n(12),o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):s.test(e)?NaN:+e}},function(e,t,n){var i=n(13),r=n(16);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==i(e)}},function(e,t,n){var i=n(2),r=n(14),o=n(15),s=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?r(e):o(e)}},function(e,t,n){var i=n(2),r=Object.prototype,o=r.hasOwnProperty,s=r.toString,a=i?i.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var i=!0}catch(e){}var r=s.call(e);return i&&(t?e[a]=n:delete e[a]),r}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";n.r(t);n(5),n(6),n(7);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentIndex=0,this.items=t}var t,n,r;return t=e,(n=[{key:"getCurrent",value:function(){var e=this.currentIndex;return this.items[e]}},{key:"next",value:function(){var e=this.currentIndex;return this.items[e+1]?(this.currentIndex=++e,this.items[e]):null}},{key:"prev",value:function(){var e=this.currentIndex;return this.items[e-1]?(this.currentIndex=--e,this.items[e]):null}}])&&i(t.prototype,n),r&&i(t,r),e}(),o=n(3),s=n.n(o);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){e||document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()}var d=function(){function e(t,n,i){var r=this,o=n.question,s=n.answers,u=n.isFullscreen;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_handlePlayClicked",(function(e){return function(t){l(!1),r.view.classList.add("interactive-video--fullscreen"),r.video.play(),e&&e()}})),c(this,"_handleCloseClicked",(function(e){return function(){l(!0),document.body.classList.remove("page-locked"),r.view.classList.remove("interactive-video--fullscreen"),r.video.pause(),e&&e()}})),this.$container=t,this.video=this.createVideo(this.getVideoLink(o.videoLink),i),this.answers=this.createAnswers(s,i),this.view=this.createView(this.video,this.answers,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isFullscreen:u},i))}var t,n,i;return t=e,(n=[{key:"hide",value:function(){this.view.parentNode.removeChild(this.view)}},{key:"show",value:function(){this.$container.appendChild(this.view)}},{key:"getVideoLink",value:function(e){return"www.admkrsk.ru"===location.hostname?e:"//www.admkrsk.ru".concat(e)}},{key:"createView",value:function(e,t,n){var i=n.onPlayClicked,r=n.onCloseClicked,o=n.isFullscreen,s=this.createOverlay(),a=this.createButton("play_circle_outline","interactive-video__btn-play"),u=this.createButton("close","interactive-video__btn-close");a.addEventListener("click",this._handlePlayClicked(i)),u.addEventListener("click",this._handleCloseClicked(r));var c=document.createElement("div");c.classList.add("interactive-video__inner"),c.appendChild(e),c.appendChild(a),null!=t&&c.appendChild(t),c.appendChild(s);var l=document.createElement("div");return l.classList.add("interactive-video"),o&&l.classList.add("interactive-video--fullscreen"),l.appendChild(c),l}},{key:"createVideo",value:function(e,t){var n=t.onVideoPlayed,i=document.createElement("video");return i.setAttribute("src",e),i.setAttribute("preload","auto"),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline","true"),i.classList.add("interactive-video__video"),i.controls=!1,i.addEventListener("ended",n),i.addEventListener("contextmenu",(function(e){e.preventDefault(),e.stopPropagation()}),!1),i}},{key:"createQuestion",value:function(e){if(!e)return null;var t=document.createElement("h2");t.classList.add("interactive-video__question-title"),t.textContent=e;var n=document.createElement("div");return n.classList.add("interactive-video__question"),n.appendChild(t),n}},{key:"createAnswers",value:function(e,t){var n=this;if(!e)return null;var i=document.createElement("div");return i.classList.add("interactive-video__answer-list"),e.forEach((function(e){var r=n.createAnswer(e,t);i.appendChild(r)})),i}},{key:"createButton",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("div");return n.classList.add("material-icons"),t.length&&n.classList.add(t),n.textContent=e,n}},{key:"createOverlay",value:function(){var e=document.createElement("div");e.classList.add("interactive-video__overlay");var t=this.createButton("screen_rotation","interactive-video__overlay-icon"),n=document.createElement("p");return e.classList.add("interactive-video__overlay-text"),n.textContent="Поверните экран",e.appendChild(t),e.appendChild(n),e}},{key:"createAnswer",value:function(e,t){var n=t.onAnswerClick,i=document.createElement("div");return i.classList.add("btn"),i.classList.add("interactive-video__answer-item"),i.addEventListener("click",(function(t){n(e)})),i}}])&&u(t.prototype,n),i&&u(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}var b="simple",w="question",k="event:simple-video-played",g="event:answer-clicked",L="event:play-clicked",_="event:close-clicked",O=(new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$container=t}var t,n,i;return t=e,(n=[{key:"createRow",value:function(e){var t=document.createElement("div");t.textContent=e,this.$container.appendChild(t)}},{key:"log",value:function(e){this.createRow(e)}}])&&f(t.prototype,n),i&&f(t,i),e}())(document.querySelector(".view-console")),function(){function e(t,n){var i=n.link;h(this,e),this.$container=t,this.player=this.createView(this.getLink(i))}return m(e,[{key:"getLink",value:function(e){return"www.admkrsk.ru"===location.hostname?e:"//www.admkrsk.ru".concat(e)}},{key:"play",value:function(){this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"createView",value:function(e){var t=document.createElement("audio");return t.setAttribute("preload","auto"),t.setAttribute("playsinline",""),t.setAttribute("src",e),t}}]),e}()),E={audio:{link:"/Style Library/res/files-card2020/files/Music_mixdown.mp3"},questions:[{rank:1,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 1.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 1-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 1-2.mp4",isRight:!1}]},{rank:2,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 2.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 2-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 2-2.mp4",isRight:!1}]},{rank:3,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 3.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 3-2.mp4",isRight:!1},{videoLink:"/Style Library/res/files-card2020/files/Answer 3-1.mp4",isRight:!0}]},{rank:4,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 4.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 4-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 4-2.mp4",isRight:!1}]},{rank:5,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 5.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 5-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 5-2.mp4",isRight:!1}]},{rank:6,type:"simple",question:{videoLink:"/Style Library/res/files-card2020/files/Coda 2.mp4"}}]};new(function(){function e(t,n){var i=this,o=n.questions,a=n.audio;h(this,e),p(this,"_handleSimpleVideoPlayed",(function(){var e=i.slides.next();e&&i._playSlide(e)})),p(this,"_handleAnswerClicked",(function(e){if(console.log("_handleAnswerClicked"),!e.isRight||e.videoLink){var t=e.isRight?i.createSlideDataFromVideoLink(e.videoLink):i.createSlideDataFromAnswer(e);i._playSlide(t)}else i._handleSimpleVideoPlayed()})),p(this,"_handlePlayClicked",(function(){})),p(this,"_handleCloseClicked",(function(){})),this.$container=t,this.eventEmitter=new s.a,this.slides=new r(o),this.audio=new O(t,a),this.bindEventHandlers()}return m(e,[{key:"show",value:function(){var e=this.slides.getCurrent();this.currentSlide=this.createSlide(this.$container,e),this.currentSlide.show()}},{key:"_playSlide",value:function(e){var t=this;if(!this.intervalId){this._handleAudio(e);var n=this.createSlide(this.$container,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isFullscreen:!0},e));this.intervalId=setInterval((function(){n.video.readyState>0&&(clearInterval(t.intervalId),t.intervalId=null,n.video.play(),n.show(),t.currentSlide.hide(),t.currentSlide=n)}),200)}}},{key:"_handleAudio",value:function(e){var t=e.rank;1==t&&this.audio.play(),6===t&&this.audio.pause()}},{key:"bindEventHandlers",value:function(){this.eventEmitter.on(k,this._handleSimpleVideoPlayed),this.eventEmitter.on(g,this._handleAnswerClicked),this.eventEmitter.on(L,this._handlePlayClicked),this.eventEmitter.on(_,this._handleCloseClicked)}},{key:"createSlide",value:function(e,t){return t.type==b?this.createSimpleSlide(e,t):t.type==w?this.createQuestionSlide(e,t):null}},{key:"createSlideDataFromVideoLink",value:function(e){return{type:b,question:{videoLink:e}}}},{key:"createSlideDataFromAnswer",value:function(e){var t=e.videoLink,n=this.slides.getCurrent(),i=n.answers,r=n.question;return{type:w,question:{text:r.text,videoLink:t},answers:i}}},{key:"createSimpleSlide",value:function(e,t){var n=this;return new d(e,t,{onVideoPlayed:function(){n.eventEmitter.emit(k)},onPlayClicked:function(){n.eventEmitter.emit(L)},onCloseClicked:function(){n.eventEmitter.emit(_)}})}},{key:"createQuestionSlide",value:function(e,t){var n=this;return console.log("createQuestionSlide"),new d(e,t,{onAnswerClick:function(e){n.eventEmitter.emit(g,e)},onVideoPlayed:function(){},onPlayClicked:function(){n.eventEmitter.emit(L)},onCloseClicked:function(){n.eventEmitter.emit(_)}})}}]),e}())(document.querySelector(".interactive-video-container"),E).show()}]);
//# sourceMappingURL=bundle.js.map