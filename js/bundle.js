!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentIndex=0,this.items=t}var t,n,r;return t=e,(n=[{key:"getCurrent",value:function(){var e=this.currentIndex;return this.items[e]}},{key:"next",value:function(){var e=this.currentIndex;return this.items[e+1]?(this.currentIndex=++e,this.items[e]):null}},{key:"prev",value:function(){var e=this.currentIndex;return this.items[e-1]?(this.currentIndex=--e,this.items[e]):null}}])&&i(t.prototype,n),r&&i(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function e(t,n){o(this,e),this.isOnce=n||!1,this.callback=t},a=function(){function e(){o(this,e),this.events={}}var t,n,i;return t=e,(n=[{key:"on",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(new l(t))}},{key:"off",value:function(e,t){this.events[e]=this.events[e].filter((function(e){return e===t}))}},{key:"once",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(new l(t,!0))}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=this.events[e];r&&(r.forEach((function(e){e.callback.apply(e,n)})),this.events[e]=r.filter((function(e){return!e.isOnce})))}}])&&s(t.prototype,n),i&&s(t,i),e}();function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){e||document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()}var f=function(){function e(t,n,i){var r=this,s=n.question,o=n.answers,l=n.isFullscreen;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_handlePlayClicked",(function(e){return function(t){v(!1),r.view.classList.add("interactive-video--fullscreen"),r.video.play(),e&&e()}})),d(this,"_handleCloseClicked",(function(e){return function(){v(!0),document.body.classList.remove("page-locked"),r.view.classList.remove("interactive-video--fullscreen"),r.video.pause(),e&&e()}})),this.$container=t,this.video=this.createVideo(this.getVideoLink(s.videoLink),i),this.answers=this.createAnswers(o,i),this.view=this.createView(this.video,this.answers,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isFullscreen:l},i))}var t,n,i;return t=e,(n=[{key:"hide",value:function(){this.view.parentNode.removeChild(this.view)}},{key:"show",value:function(){this.$container.appendChild(this.view)}},{key:"getVideoLink",value:function(e){return"www.admkrsk.ru"===location.hostname?e:"//www.admkrsk.ru".concat(e)}},{key:"createView",value:function(e,t,n){var i=n.onPlayClicked,r=n.onCloseClicked,s=n.isFullscreen,o=this.createButton("screen_rotation","interactive-video__overlay"),l=this.createButton("play_circle_outline","interactive-video__btn-play"),a=this.createButton("close","interactive-video__btn-close");l.addEventListener("click",this._handlePlayClicked(i)),a.addEventListener("click",this._handleCloseClicked(r));var c=document.createElement("div");c.classList.add("interactive-video__inner"),c.appendChild(e),c.appendChild(l),null!=t&&c.appendChild(t),c.appendChild(o);var u=document.createElement("div");return u.classList.add("interactive-video"),s&&u.classList.add("interactive-video--fullscreen"),u.appendChild(c),u}},{key:"createVideo",value:function(e,t){var n=t.onVideoPlayed,i=document.createElement("video");return i.setAttribute("src",e),i.setAttribute("preload","auto"),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline","true"),i.classList.add("interactive-video__video"),i.controls=!1,i.addEventListener("ended",n),i.addEventListener("contextmenu",(function(e){e.preventDefault(),e.stopPropagation()}),!1),i}},{key:"createQuestion",value:function(e){if(!e)return null;var t=document.createElement("h2");t.classList.add("interactive-video__question-title"),t.textContent=e;var n=document.createElement("div");return n.classList.add("interactive-video__question"),n.appendChild(t),n}},{key:"createAnswers",value:function(e,t){var n=this;if(!e)return null;var i=document.createElement("div");return i.classList.add("interactive-video__answer-list"),e.forEach((function(e){var r=n.createAnswer(e,t);i.appendChild(r)})),i}},{key:"createButton",value:function(e,t){var n=document.createElement("div");return n.classList.add("material-icons"),n.classList.add(t),n.textContent=e,n}},{key:"createAnswer",value:function(e,t){var n=t.onAnswerClick,i=document.createElement("div");return i.classList.add("btn"),i.classList.add("interactive-video__answer-item"),i.addEventListener("click",(function(t){n(e)})),i}}])&&u(t.prototype,n),i&&u(t,i),e}();function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b="simple",k="question",w="event:simple-video-played",L="event:answer-clicked",S="event:play-clicked",g="event:close-clicked",E=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$container=t}var t,n,i;return t=e,(n=[{key:"createRow",value:function(e){var t=document.createElement("div");t.textContent=e,this.$container.appendChild(t)}},{key:"log",value:function(e){this.createRow(e)}}])&&y(t.prototype,n),i&&y(t,i),e}())(document.querySelector(".view-console"));new(function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleSimpleVideoPlayed",(function(){var e=i.slides.next();e&&i._playSlide(e)})),p(this,"_handleAnswerClicked",(function(e){if(!e.isRight||e.videoLink){var t=e.isRight?i.createSlideDataFromVideoLink(e.videoLink):i.createSlideDataFromAnswer(e);i._playSlide(t)}else i._handleSimpleVideoPlayed()})),p(this,"_handlePlayClicked",(function(){})),p(this,"_handleCloseClicked",(function(){})),this.$container=t,this.eventEmitter=new a,this.slides=new r(n),this.bindEventHandlers()}var t,n,i;return t=e,(n=[{key:"show",value:function(){var e=this.slides.getCurrent();this.currentSlide=this.createSlide(this.$container,e),this.currentSlide.show()}},{key:"_playSlide",value:function(e){var t=this,n=this.createSlide(this.$container,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isFullscreen:!0},e));console.log("_playSlide"),this.intervalId=setInterval((function(){E.log(n.video.readyState),n.video.readyState>0&&(E.log(n.video.readyState),clearInterval(t.intervalId),t.currentSlide.hide(),t.currentSlide=n,t.currentSlide.show(),t.currentSlide.video.play())}),200),E.log("_playSlide end")}},{key:"bindEventHandlers",value:function(){this.eventEmitter.on(w,this._handleSimpleVideoPlayed),this.eventEmitter.on(L,this._handleAnswerClicked),this.eventEmitter.on(S,this._handlePlayClicked),this.eventEmitter.on(g,this._handleCloseClicked)}},{key:"createSlide",value:function(e,t){return t.type==b?this.createSimpleSlide(e,t):t.type==k?this.createQuestionSlide(e,t):null}},{key:"createSlideDataFromVideoLink",value:function(e){return{type:b,question:{videoLink:e}}}},{key:"createSlideDataFromAnswer",value:function(e){var t=e.videoLink,n=this.slides.getCurrent(),i=n.answers,r=n.question;return{type:k,question:{text:r.text,videoLink:t},answers:i}}},{key:"createSimpleSlide",value:function(e,t){var n=this;return new f(e,t,{onVideoPlayed:function(){n.eventEmitter.emit(w)},onPlayClicked:function(){n.eventEmitter.emit(S)},onCloseClicked:function(){n.eventEmitter.emit(g)}})}},{key:"createQuestionSlide",value:function(e,t){var n=this,i=new f(e,t,{onAnswerClick:function(e){n.eventEmitter.emit(L,e)},onVideoPlayed:function(){i.answers.classList.remove("hidden")},onPlayClicked:function(){n.eventEmitter.emit(S)},onCloseClicked:function(){n.eventEmitter.emit(g)}});return i.answers.classList.add("hidden"),i}}])&&m(t.prototype,n),i&&m(t,i),e}())(document.querySelector(".interactive-video-container"),[{rank:1,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 1.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 1-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 1-2.mp4",isRight:!1}]},{rank:2,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 2.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 2-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 2-2.mp4",isRight:!1}]},{rank:3,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 3.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 3-2.mp4",isRight:!1},{videoLink:"/Style Library/res/files-card2020/files/Answer 3-1.mp4",isRight:!0}]},{rank:4,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 4.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 4-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 4-2.mp4",isRight:!1}]},{rank:5,type:"question",question:{videoLink:"/Style Library/res/files-card2020/files/Question 5.mp4"},answers:[{videoLink:"/Style Library/res/files-card2020/files/Answer 5-1.mp4",isRight:!0},{videoLink:"/Style Library/res/files-card2020/files/Answer 5-2.mp4",isRight:!1}]},{rank:6,type:"simple",question:{videoLink:"/Style Library/res/files-card2020/files/Coda 2.mp4"}}]).show()}]);
//# sourceMappingURL=bundle.js.map