!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentIndex=0,this.items=t}var t,n,r;return t=e,(n=[{key:"getCurrent",value:function(){var e=this.currentIndex;return this.items[e]}},{key:"next",value:function(){var e=this.currentIndex;return this.items[e+1]?(this.currentIndex=++e,this.items[e]):null}},{key:"prev",value:function(){var e=this.currentIndex;return this.items[e-1]?(this.currentIndex=--e,this.items[e]):null}}])&&i(t.prototype,n),r&&i(t,r),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function e(t,n){o(this,e),this.isOnce=n||!1,this.callback=t},u=function(){function e(){o(this,e),this.events={}}var t,n,i;return t=e,(n=[{key:"on",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(new s(t))}},{key:"off",value:function(e,t){this.events[e]=this.events[e].filter((function(e){return e===t}))}},{key:"once",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(new s(t,!0))}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=this.events[e];r&&(r.forEach((function(e){e.callback.apply(e,n)})),this.events[e]=r.filter((function(e){return!e.isOnce})))}}])&&a(t.prototype,n),i&&a(t,i),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t,n,i){var r=n.question,a=n.answers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clear(t),this.video=this.createVideo(r.videoLink,i),this.answers=this.createAnswers(a,i);var o=this.createView(this.video,this.answers);t.append(o)}var t,n,i;return t=e,(n=[{key:"clear",value:function(e){Array.from(e.children).forEach((function(e){e.remove()}))}},{key:"createView",value:function(e,t){var n=document.createElement("div");return n.classList.add("interactive-video"),n.append(e),null!=t&&n.append(t),n}},{key:"createVideo",value:function(e,t){var n=t.onVideoPlayed,i=document.createElement("video");return i.setAttribute("src",e),i.setAttribute("preload","auto"),i.setAttribute("controls",""),i.classList.add("interactive-video__video"),i.addEventListener("ended",n),i}},{key:"createAnswers",value:function(e,t){var n=this;if(!e)return null;var i=document.createElement("div");return i.classList.add("interactive-video__answer-list"),e.forEach((function(e){var r=n.createAnswer(e,t);i.append(r)})),i}},{key:"createAnswer",value:function(e,t){var n=t.onAnswerClick,i=e.text,r=document.createElement("button");return r.classList.add("btn","btn__secondary","interactive-video__answer-item"),r.textContent=i,r.addEventListener("click",(function(t){n(e)})),r}}])&&c(t.prototype,n),i&&c(t,i),e}();function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f="simple",h="question",b="event:simple-video-played",p="event:answer-clicked";new(function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_handleSimpleVideoPlayed",(function(){var e=i.slides.next();e&&i._playSlide(e)})),d(this,"_handleAnswerClicked",(function(e){e.isRight&&!e.videoLink&&i._handleSimpleVideoPlayed();var t=e.isRight?i.createSlideDataFromVideoLink(e.videoLink):i.createSlideDataFromAnswer(e);i._playSlide(t)})),this.$container=t,this.eventEmitter=new u,this.slides=new r(n),this.bindEventHandlers()}var t,n,i;return t=e,(n=[{key:"show",value:function(){var e=this.slides.getCurrent();this.createSlide(this.$container,e)}},{key:"_playSlide",value:function(e){var t=this.createSlide(this.$container,e);t.video.addEventListener("canplay",(function(){t.video.play()}))}},{key:"bindEventHandlers",value:function(){this.eventEmitter.on(b,this._handleSimpleVideoPlayed),this.eventEmitter.on(p,this._handleAnswerClicked)}},{key:"createSlide",value:function(e,t){return t.type==f?this.createSimpleSlide(e,t):t.type==h?this.createQuestionSlide(e,t):null}},{key:"createSlideDataFromVideoLink",value:function(e){return{type:f,question:{videoLink:e}}}},{key:"createSlideDataFromAnswer",value:function(e){var t=e.videoLink,n=this.slides.getCurrent().answers;return{type:h,question:{videoLink:t},answers:n}}},{key:"createSimpleSlide",value:function(e,t){var n=this;return new l(e,t,{onVideoPlayed:function(){n.eventEmitter.emit(b)}})}},{key:"createQuestionSlide",value:function(e,t){var n=this,i=new l(e,t,{onAnswerClick:function(e){n.eventEmitter.emit(p,e)},onVideoPlayed:function(){i.answers.classList.remove("hidden")}});return i.answers.classList.add("hidden"),i}}])&&v(t.prototype,n),i&&v(t,i),e}())(document.querySelector(".interactive-video-container"),[{rank:1,type:"question",question:{videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"},answers:[{text:"Успокойтесь, пожалуйста, сейчас мы во всем разберемся.",videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_1.mp4?raw=true",isRight:!1},{text:"Пожалуйста, расскажите, что случилось. (без улыбки)",videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_2.mp4?raw=true",isRight:!0},{text:"Пожалуйста, расскажите, что случилось. (с улыбкой)",videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",isRight:!1}]},{rank:2,type:"question",question:{videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2.mp4?raw=true"},answers:[{text:"Действительно, ситуация очень неприятная, тем более накануне отпуска.",videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2__answer_1.mp4?raw=true",isRight:!0},{text:"Возможно, Вы пин код неверно ввели? Или срок действия карты закончился?",videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2__answer_2.mp4?raw=true",isRight:!1},{text:"Я Вас прекрасно понимаю.",videoLink:"https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2__answer_3.mp4?raw=true",isRight:!1}]}]).show()}]);
//# sourceMappingURL=bundle.js.map