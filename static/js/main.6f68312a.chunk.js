(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(47),o=n.n(i),c=(n(70),n(72),n(74),n(4)),l=n(113),s=n(108),u=n(115),m=n(31),f=n.n(m),h=n(61),p=function(){var e=Object(a.useState)("home"),t=Object(c.a)(e,2),n=(t[0],t[1]),i=Object(a.useState)(!1),o=Object(c.a)(i,2),m=o[0],p=o[1];Object(a.useEffect)(function(){var e=function(){window.scrollY>50?p(!0):p(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var d=function(e){n(e)};return r.a.createElement(h.a,null,r.a.createElement(l.a,{expand:"md",className:m?"scrolled":""},r.a.createElement(s.a,{style:{justifyContent:"flex-end"}},r.a.createElement(l.a.Toggle,{"aria-controls":"basic-navbar-nav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(l.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(u.a,{className:"ms-auto"},r.a.createElement(u.a.Link,{href:"#home",className:m?"scrolled navbar-link":"navbar-link",onClick:function(){return d("home")}},"Home"),r.a.createElement(u.a.Link,{href:"#skills",className:m?"scrolled navbar-link":"navbar-link",onClick:function(){return d("skills")}},"Skills"),r.a.createElement(u.a.Link,{href:"#projects",className:m?"scrolled navbar-link":"navbar-link",onClick:function(){return d("projects")}},"Projects")),r.a.createElement("span",{className:"navbar-text"},r.a.createElement("div",{className:"social-icon"},r.a.createElement("a",{href:"https://www.linkedin.com/in/nicholas-wu-lnkdin/",target:"_blank"},r.a.createElement("img",{src:f.a,alt:""}))))))))},d=n(109),v=n(110),g=n(111),y=n(48),E=n.n(y),w=(n(40),n(34)),b=n.n(w),x=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],i=t[1];return r.a.createElement("section",{className:"banner",id:"home",style:{transition:"height 0.3s ease"}},r.a.createElement(s.a,null,r.a.createElement(d.a,{className:"aligh-items-center"},r.a.createElement("h1",{style:{transition:"height 0.3s ease"}},"Hi! I'm Nicholas Wu.",r.a.createElement(b.a,null,function(e){return!e.isVisible&&n?n.stop():n&&n.start(),r.a.createElement(E.a,{style:{transition:"height 0.3s ease"},className:"secondtype",onInit:function(e){i(e),e.changeDelay(60).typeString("I'm a software developer.").pauseFor(1600).deleteChars(20).typeString("n avid F1 fan.").pauseFor(1600).deleteChars(25).typeString("A student at the University of Auckland.").pauseFor(1600).deleteAll(60).typeString("Welcome to my website!").start()}})})),r.a.createElement(v.a,{xs:12,md:6,xl:7},r.a.createElement("div",null,r.a.createElement("p",null,"I'm a final year Computer Science student passionate about full-stack development, building projects using cloud services, and experimenting with new frameworks. ",r.a.createElement("br",null),r.a.createElement("br",null),"In my free time I love playing badminton, walking my border collie, and exploring nifty cafes around Auckland."),r.a.createElement("button",{onClick:function(){console.log("connect"),window.location.hash="#connect"}},"Let\u2019s Connect ",r.a.createElement(g.a,{size:25})))),r.a.createElement(v.a,{xs:12,md:6,xl:5},r.a.createElement("div",{className:"animate__animated animate__zoomIn"})))))},N=n(49),k=n.n(N),L=(n(97),n(50)),j=n.n(L),O=function(){return r.a.createElement("section",{className:"skill",id:"skills"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"skill-bx wow zoomIn"},r.a.createElement("h2",null,"Technical Skills"),r.a.createElement("p",null),r.a.createElement(k.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0,autoPlay:!0,autoPlaySpeed:2500,className:"owl-carousel owl-theme skill-slider"},r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-csharp-line"}),r.a.createElement("h5",null,"C#")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-dotnetcore-plain"}),r.a.createElement("h5",null,".NET")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-azure-plain"}),r.a.createElement("h5",null,"Microsoft Azure")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-react-original"}),r.a.createElement("h5",null,"React")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-javascript-plain"}),r.a.createElement("h5",null,"Javascript")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-java-plain"}),r.a.createElement("h5",null,"Java")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{class:"devicon-python-plain"}),r.a.createElement("h5",null,"Python")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-html5-plain"}),r.a.createElement("h5",null,"HTML")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-css3-plain"}),r.a.createElement("h5",null,"CSS")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-mysql-plain"}),r.a.createElement("h5",null,"MySQL")),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"devicon-sqlite-plain"}),r.a.createElement("h5",null,"SQLite"))))))),r.a.createElement("img",{className:"background-image-left",src:j.a,alt:"Image"}))},_=function(e){var t=e.title,n=e.description,a=e.imgUrl,i=e.link,o=e.languages;return r.a.createElement(v.a,{size:12,sm:6,md:4},r.a.createElement("div",{className:"proj-imgbx"},r.a.createElement("img",{src:a}),r.a.createElement("div",{className:"proj-txtx",onClick:function(){i&&window.open(i,"_blank")}},r.a.createElement("h4",null,t),r.a.createElement("span",null,n),r.a.createElement("h6",null,o))))},S=n(51),C=n.n(S),P=n(52),T=n.n(P),F=n(53),I=n.n(F),z=n(54),G=n.n(z),A=n(55),U=n.n(A),W=n(56),R=n.n(W),J=n(57),M=n.n(J),Y=function(){var e=[{title:"Personal Portfolio",imgUrl:T.a,languages:"React, C#"},{title:"NZ Company Wait Times",description:"A website that allows kiwis to leave reviews about a company's wait time via phone.",imgUrl:C.a,languages:"React, C#"},{title:"F1 Sponsor Stock Website",description:"(minimum viable product) This website allows you to see a graph of the closing price for each F1 sponsor.",imgUrl:I.a,languages:"React, C#, SQL, d3.js"},{title:"Central C# Endpoints/webAPIs",description:"A repository containing some of C# endpoints used in my personal projects.",imgUrl:G.a,link:"https://github.com/Saif3n/publiccs",languages:"C#"},{title:"Linux Cybersecurity Tutorial Website",description:"(unfinished/in-development)",imgUrl:U.a,link:"https://github.com/Saif3n/overthewire-passwords",languages:"React, Linux"},{title:"Blackjack Project - Java",description:"A Java app which allows users to play blackjack against bots with pre-determined strategies.",imgUrl:R.a,link:"https://github.com/Saif3n/javabot",languages:"Java"}];return r.a.createElement("section",{className:"project",id:"projects"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(v.a,{size:12},r.a.createElement(b.a,{partialVisibility:!0,once:!0},function(t){var n=t.isVisible;return r.a.createElement("div",{className:"project-wrapper"},r.a.createElement("h2",null,"Projects"),r.a.createElement("p",null,r.a.createElement("br",null)),r.a.createElement(d.a,{style:{display:n?"flex":"none"},className:"animate__animated ".concat(n?"animate__backInLeft":"")},e.map(function(e,t){return r.a.createElement(_,Object.assign({key:t},e))})))})))),r.a.createElement("img",{className:"background-image-right",src:M.a}))},B=n(35),q=n(9),D=n(3),H=n(58),V=n.n(H),Z=n(114),Q=n(60);function K(){K=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,i=Object.create(r.prototype),o=new N(a||[]);return i._invoke=function(e,t,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return L()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var c=w(o,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function f(){}function h(){}var p={};c(p,r,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(k([])));v&&v!==t&&n.call(v,r)&&(p=v);var g=h.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,i){function o(){return new t(function(a,o){!function a(r,i,o,c){var l=s(e[r],e,i);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,o,c)},function(e){a("throw",e,o,c)}):t.resolve(m).then(function(e){u.value=e,o(u)},function(e){return a("throw",e,o,c)})}c(l.arg)}(r,i,a,o)})}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function k(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,c(g,"constructor",h),c(h,"constructor",f),f.displayName=c(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new E(l(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},y(g),c(g,o,"Generator"),c(g,r,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var X=function(){var e={firstName:"",lastName:"",email:"",message:""},t=Object(a.useState)(e),n=Object(c.a)(t,2),i=n[0],o=n[1],l=Object(a.useState)("Send"),u=Object(c.a)(l,2),m=u[0],f=u[1],h=Object(a.useState)({}),p=Object(c.a)(h,2),g=p[0],y=p[1],E=Object(a.useState)(!1),w=Object(c.a)(E,2),b=w[0],x=w[1],N=function(e,t){o(Object(D.a)({},i,Object(q.a)({},e,t)))},k=function(){var t=Object(B.a)(K().mark(function t(n){var a;return K().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a={Name:i.firstName,Message:i.message,Email:i.email},Z.a.post("https://personalbackendreact.azurewebsites.net/Register",a).then(function(e){console.log("Azure post successful.",e.status,e.text)}).catch(function(e){console.log("Azure post unsuccessful.",e.status,e.text)}),Object(Q.a)("service_ygbg1rb","template_dkuipet",i,"5577N8LTBNR8w8d37").then(function(e){console.log("Successfully sent!",e.status,e.text),y({success:!0,message:"Message sent successfully."}),f("Sent!")}).catch(function(e){console.log("Email service failed...",e),y({success:!1,message:"Sorry, that didn't work. Why not try reaching out on LinkedIn?"}),f("Oops!")}),x(!0),o(e);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("section",{className:"contact",id:"connect"},r.a.createElement(s.a,null,r.a.createElement(d.a,{className:"align-items-center"},r.a.createElement(v.a,{size:12,md:6,className:"d-flex justify-content-center align-items-center text-center phone-center"},r.a.createElement("img",{className:"animate__animated",src:V.a,alt:"Contact Us"})),r.a.createElement(v.a,{size:12,md:6},r.a.createElement("div",null,r.a.createElement("h2",null,"Get In Touch!"),r.a.createElement("form",{onSubmit:k},r.a.createElement(d.a,null,r.a.createElement(v.a,{size:12,sm:6,className:"px-1"},r.a.createElement("input",{type:"text",value:i.firstName,required:!0,placeholder:"First Name",onChange:function(e){return N("firstName",e.target.value)}})),r.a.createElement(v.a,{size:12,sm:6,className:"px-1"},r.a.createElement("input",{type:"text",value:i.lastName,placeholder:"Last Name",onChange:function(e){return N("lastName",e.target.value)}})),r.a.createElement(v.a,{size:12,sm:12,className:"px-1"},r.a.createElement("input",{type:"email",value:i.email,required:!0,placeholder:"Email Address",onChange:function(e){return N("email",e.target.value)}})),r.a.createElement(v.a,{size:12,sm:12,className:"px-1"},r.a.createElement("textarea",{rows:"6",value:i.message,placeholder:"Message",onChange:function(e){return N("message",e.target.value)}}),r.a.createElement("button",{type:"submit",disabled:b,className:"contact-form-button ".concat(b?"disabled":"")},r.a.createElement("span",null,m))),g.message&&r.a.createElement(v.a,null,r.a.createElement("p",{className:!1===g.success?"danger":"success"},g.message)))))))))},$=n(59),ee=n.n($),te=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)(function(){Z.a.get("https://personalbackendreact.azurewebsites.net/GetLastUser").then(function(e){i(ee.a.sanitize(e.data.name)+" was the last user to leave a message.")})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"lastUser"},n),r.a.createElement("footer",{className:"footer"},r.a.createElement(s.a,null,r.a.createElement(d.a,{className:"align-items-center"},r.a.createElement(v.a,{size:12,sm:6}),r.a.createElement(v.a,{size:12,sm:6,className:"text-center text-sm-end"},r.a.createElement("div",{className:"social-icon-footer"},r.a.createElement("a",{href:"https://www.linkedin.com/in/nicholas-wu-lnkdin/",target:"_blank"},r.a.createElement("img",{src:f.a,alt:"Icon"}))),r.a.createElement("p",null,"Nicholas Wu - 2023"))))))};n(103);function ne(){ne=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,i=Object.create(r.prototype),o=new N(a||[]);return i._invoke=function(e,t,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return L()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var c=w(o,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function f(){}function h(){}var p={};c(p,r,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(k([])));v&&v!==t&&n.call(v,r)&&(p=v);var g=h.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,i){function o(){return new t(function(a,o){!function a(r,i,o,c){var l=s(e[r],e,i);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,o,c)},function(e){a("throw",e,o,c)}):t.resolve(m).then(function(e){u.value=e,o(u)},function(e){return a("throw",e,o,c)})}c(l.arg)}(r,i,a,o)})}return a=a?a.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function k(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=h,c(g,"constructor",h),c(h,"constructor",f),f.displayName=c(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new E(l(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},y(g),c(g,o,"Generator"),c(g,r,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var ae=function(){var e="",t="",n=function(){var n=Object(B.a)(ne().mark(function n(){var a;return ne().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.a.get("https://geolocation-db.com/json/");case 2:a=n.sent,t=a.data.IPv4,e=a.data.country_name,Z.a.post("https://discord.com/api/webhooks/1057923506974760970/BllTchTktW4FAWjvWGOTXoEKYi2ZuRtCMGrPg1gweAPEyHeZkkZ_rnLbcf1vyVlYEd3W",{content:t+" from "+e+" has arrived on your personal website!"}).then(function(e){}).catch(function(e){console.error(e)});case 6:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();Object(a.useEffect)(function(){n()},[])};var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ae,null),r.a.createElement(p,null),r.a.createElement(x,null),r.a.createElement(O,null),r.a.createElement(Y,null),r.a.createElement(X,null),r.a.createElement(te,null))},ie=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,112)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(re,null)),ie()},31:function(e,t,n){e.exports=n.p+"static/media/nav-icon1.dff2b624.svg"},50:function(e,t,n){e.exports=n.p+"static/media/color-sharp.bf917ab1.webp"},51:function(e,t,n){e.exports=n.p+"static/media/project-img1.5d2b9008.webp"},52:function(e,t,n){e.exports=n.p+"static/media/project-img2.a0488826.webp"},53:function(e,t,n){e.exports=n.p+"static/media/project-img3.4c36585e.webp"},54:function(e,t,n){e.exports=n.p+"static/media/project-img4.f030c87b.webp"},55:function(e,t,n){e.exports=n.p+"static/media/project-img5.c87569c5.webp"},56:function(e,t,n){e.exports=n.p+"static/media/image.d5b373f5.webp"},57:function(e,t,n){e.exports=n.p+"static/media/color-sharp2.da82470a.webp"},58:function(e,t,n){e.exports=n.p+"static/media/coder.284d703c.webp"},63:function(e,t,n){e.exports=n(105)},70:function(e,t,n){},72:function(e,t,n){}},[[63,3,2]]]);
//# sourceMappingURL=main.6f68312a.chunk.js.map