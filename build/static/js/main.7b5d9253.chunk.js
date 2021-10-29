(this["webpackJsonpreact-spring-tutorial"]=this["webpackJsonpreact-spring-tutorial"]||[]).push([[0],{37:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},65:function(e,t,c){},66:function(e,t){var c=document.querySelector("#cursor"),a=c.querySelector(".cursor__circle"),s={x:-100,y:-100},n={x:0,y:0};window.addEventListener("mousemove",(function(e){s.x=e.clientX,s.y=e.clientY}));var r=function(){var e=Math.round(s.x-n.x),t=Math.round(s.y-n.y);n.x+=.1*e,n.y+=.1*t;var r=function(e,t){return 180*Math.atan2(t,e)/Math.PI}(e,t),i=function(e,t){var c=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));return Math.min(c/1500,.15)}(e,t),j="scale("+(1+i)+", "+(1-i)+")",b="rotate("+r+"deg)",l="translate3d("+n.x+"px ,"+n.y+"px, 0)";c.style.transform=l,a.style.transform=b+j};requestAnimationFrame((function e(){r(),requestAnimationFrame(e)})),document.querySelectorAll("[cursor-class]").forEach((function(e){e.addEventListener("mouseenter",(function(){var e=this.getAttribute("cursor-class");c.classList.add(e)})),e.addEventListener("mouseleave",(function(){var e=this.getAttribute("cursor-class");c.classList.remove(e)}))}))},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(22),n=c.n(s),r=(c(50),c(10)),i=c(5),j=c(87),b=c(84),l=(c(51),c(52),c(1)),o=function(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(r.b,{className:" nav Home",to:"/",children:Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{className:"logo-img",src:"https://64.media.tumblr.com/3ad4b7267cd1af63cd4f0af474ff6c0a/c4282aa208b95acd-a6/s1280x1920/6ca9598cd0b31330c0e41040a612f97fe4e5fb23.png",alt:"logo"})})}),Object(l.jsxs)(b.a,{className:"nav-list",container:!0,direction:"column",spacing:1,children:[Object(l.jsx)(b.a,{item:!0,xs:3,children:Object(l.jsx)(r.b,{className:" nav About",to:"/about",children:Object(l.jsxs)("p",{className:"nav-text-vertical",children:[" ",Object(l.jsx)("span",{className:"about-link",children:" About "})]})})}),Object(l.jsx)(b.a,{item:!0,xs:3,children:Object(l.jsx)(r.b,{className:" nav Portfolio",to:"/projects",children:Object(l.jsx)("p",{className:"nav-text-vertical",children:Object(l.jsx)("span",{className:"projects-link",children:"Projects"})})})}),Object(l.jsx)(b.a,{item:!0,xs:3,children:Object(l.jsx)(r.b,{className:" nav Passion",to:"/passion",children:Object(l.jsx)("p",{className:"nav-text-vertical",children:Object(l.jsx)("span",{className:"passion-link",children:"Passion"})})})}),Object(l.jsx)(b.a,{item:!0,xs:3,children:Object(l.jsx)("a",{href:"https://read.cv/miaomiao",children:Object(l.jsx)("p",{className:"cv",children:"CV"})})})]})]})},d=c(86);function m(){return Object(l.jsxs)("main",{className:"projects-page",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"sec-one",children:Object(l.jsx)("h2",{children:"My recent projects"})}),Object(l.jsx)("section",{className:"sec-projects",children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)("div",{className:"project-intro",children:Object(l.jsxs)(b.a,{container:!0,direction:"column",className:"text-intro",children:[Object(l.jsxs)(b.a,{item:!0,xs:!0,children:[Object(l.jsx)("h2",{children:" Musicmash Web"}),Object(l.jsx)("h3",{children:"A collective music player"})]}),Object(l.jsx)(b.a,{item:!0,xs:!0,children:Object(l.jsx)("h1",{children:"Relieve the Dj-ing pressure off from one person and keep everyone at party entertained."})}),Object(l.jsx)(b.a,{item:!0,xs:!0,children:Object(l.jsx)(r.b,{to:"/musicmash",children:Object(l.jsx)(d.a.svg,{className:"ploygon",whileHover:{scale:1.5},width:"117",height:"115",viewBox:"0 0 117 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M31.0692 35.5852C30.4439 25.4632 41.1333 18.5549 50.1051 23.2828L77.2517 37.5883L104.721 51.2632C113.8 55.7827 114.438 68.4941 105.858 73.9L79.8954 90.2569L54.3177 107.209C45.8645 112.811 34.537 107.008 34.1456 96.8745L32.9613 66.2121L31.0692 35.5852Z",fill:"#FFC664"})})})})]})}),Object(l.jsx)("div",{className:"project-image"})]})}),Object(l.jsx)("section",{className:"sec-projects",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"project-intro",children:Object(l.jsxs)(b.a,{container:!0,direction:"column",className:"text-intro",children:[Object(l.jsxs)(b.a,{item:!0,xs:!0,children:[Object(l.jsx)("h2",{children:" Musicmash App"}),Object(l.jsx)("h3",{children:"A collective music app"})]}),Object(l.jsx)(b.a,{item:!0,xs:!0,children:Object(l.jsx)("h1",{children:"Relieve the Dj-ing pressure off from one person and keep everyone at party entertained."})}),Object(l.jsx)(b.a,{item:!0,xs:!0,children:Object(l.jsx)(r.b,{to:"/musicmash",children:Object(l.jsx)(d.a.svg,{className:"ploygon",whileHover:{scale:1.5},width:"117",height:"115",viewBox:"0 0 117 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M31.0692 35.5852C30.4439 25.4632 41.1333 18.5549 50.1051 23.2828L77.2517 37.5883L104.721 51.2632C113.8 55.7827 114.438 68.4941 105.858 73.9L79.8954 90.2569L54.3177 107.209C45.8645 112.811 34.537 107.008 34.1456 96.8745L32.9613 66.2121L31.0692 35.5852Z",fill:"#FFC664"})})})})]})}),Object(l.jsx)("div",{className:"project-image"})]})})]})}var x=c(15),h=c(4),u=c(8),O=(c(65),c(66),[function(e){var t=e.style;return Object(l.jsxs)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{background:"#1E4CF0"}),children:[" ",Object(l.jsx)("img",{className:"sketch",src:"https://64.media.tumblr.com/56b38435f2dab2207cf7cc96352a3160/1788ce4a84f3234d-57/s2048x3072/d64d078d64d69b869a731cc2bd395da1a054e3ab.png",alt:"sketch"})," "]})},function(e){var t=e.style;return Object(l.jsxs)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{background:"#1E4CF0"}),children:[" ",Object(l.jsx)("img",{className:"sketch",src:"https://64.media.tumblr.com/fd8594f767223b1a565a076410a3825a/1788ce4a84f3234d-f8/s2048x3072/cb76a70d5d9c4f3837361bd893e515b8e0b51f54.png",alt:"sketch"})," "]})},function(e){var t=e.style;return Object(l.jsxs)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{background:"#1E4CF0"}),children:[" ",Object(l.jsx)("img",{className:"sketch",src:"https://64.media.tumblr.com/781dd93bc356ab3465fae0ff312ca9f8/1788ce4a84f3234d-87/s2048x3072/f4b191f2229cdbfbee64bfa7f78fab31a4dca2ca.png",alt:"sketch"})," "]})},function(e){var t=e.style;return Object(l.jsxs)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{background:"#1E4CF0"}),children:[" ",Object(l.jsx)("img",{className:"sketch",src:"https://64.media.tumblr.com/5eaaab4b4b84a5ef1fd4452fe6db9bef/1788ce4a84f3234d-cd/s2048x3072/ef21600b138f242f58f66f66f5df885b4e13a5be.png",alt:"sketch"})," "]})},function(e){var t=e.style;return Object(l.jsxs)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{background:"#1E4CF0"}),children:[" ",Object(l.jsx)("img",{className:"sketch",src:"https://64.media.tumblr.com/6f70ec2b91744e62a4cb42ffef7dbb15/1788ce4a84f3234d-38/s2048x3072/07a05b1078ec4ef3c8549313be0d2ba7d9a3a5a9.png",alt:"sketch"})," "]})},function(e){var t=e.style;return Object(l.jsxs)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{background:"#1E4CF0"}),children:[" ",Object(l.jsx)("img",{className:"sketch",src:"https://64.media.tumblr.com/df7e1e613c9df82522522701d13d3429/1788ce4a84f3234d-45/s2048x3072/b63b7c6b227de9206437390271a567d6891379ab.png",alt:"sketch"})," "]})}]);function f(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),c=t[0],s=t[1],n=Object(a.useCallback)((function(){return s((function(e){return(e+1)%6}))}),[]),r=Object(u.d)(c,(function(e){return e}),{from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}});return Object(l.jsxs)("main",{id:"cursor",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"simple-trans-main",onClick:n,children:r.map((function(e){var t=e.item,c=e.props,a=e.key,s=O[t];return Object(l.jsx)(s,{style:c},a)}))})]})}c(37);var p=function(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsxs)(b.a,{container:!0,spacing:2,justifyContent:"center",className:"nav-grid",children:[Object(l.jsx)(b.a,{item:!0,xs:2,children:Object(l.jsxs)(r.b,{className:" nav about",to:"/about",children:[Object(l.jsx)("p",{className:"nav-text",children:"About"})," "]})}),Object(l.jsx)(b.a,{item:!0,xs:3,children:Object(l.jsx)(r.b,{className:" nav portfolio",to:"/projects",children:Object(l.jsx)("p",{className:"nav-text",children:"Projects"})})}),Object(l.jsx)(b.a,{item:!0,xs:3,children:Object(l.jsx)(r.b,{className:" nav passion",to:"/passion",children:Object(l.jsx)("p",{className:"nav-text",children:"Passion"})})})]})})};function v(){return Object(l.jsx)("main",{className:"main",children:Object(l.jsx)(j.a,{className:"container",children:Object(l.jsxs)(b.a,{conatiner:!0,direction:"column",children:[Object(l.jsx)(b.a,{item:!0,children:Object(l.jsx)("div",{className:"intro-title",children:Object(l.jsx)("h2",{children:"Hej, I am Miaomiao"})})}),Object(l.jsx)(b.a,{xs:!0,item:!0,children:Object(l.jsx)(j.a,{className:"nav",children:Object(l.jsx)(p,{})})}),Object(l.jsx)(b.a,{xs:!0,item:!0,children:Object(l.jsx)("img",{src:"https://64.media.tumblr.com/c5db6de6ba179dd434ba148d2299d231/bb59e8c47a2fe029-95/s2048x3072/42422fc3b280609b968fa83c7ce74228299cae46.png",alt:"Mia",className:"homeImage"})})]})})})}var g=c(7),y=c(43),N=(c(67),["https://64.media.tumblr.com/0f5b789b768497e9307754aa7fbc50f7/b2b4887bb35ef721-12/s2048x3072/a58043fd9c1b8723144bf87f0e470d9c3a3ecf7a.png","https://64.media.tumblr.com/f75e8a739ddeb25ab1fe5bfd3e538ec0/b2b4887bb35ef721-0a/s2048x3072/3982750b596607b7e3e05fa78167c88ace2279ca.png","https://64.media.tumblr.com/7f58b0d35457840fbdbdc533ae97e2be/b2b4887bb35ef721-4d/s2048x3072/463e1c00345805e5114b25ff3dfb36378e6db94a.png"]),k=function(e){return{x:0,y:-4*e,scale:.8,rot:10*Math.random()-5,delay:200*e}},w=function(e,t){return"perspective(1500px) rotateX(0deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};function C(){var e=Object(a.useState)((function(){return new Set})),t=Object(x.a)(e,1)[0],c=Object(u.c)(N.length,(function(e){return Object(h.a)(Object(h.a)({},k(e)),{},{from:Object(g.a)({x:0,y:0,rot:0,scale:.1},"y",-1e3)})})),s=Object(x.a)(c,2),n=s[0],r=s[1],i=Object(y.a)((function(e){var c=Object(x.a)(e.args,1)[0],a=e.down,s=Object(x.a)(e.delta,1)[0],n=(e.distance,Object(x.a)(e.direction,1)[0]),i=e.velocity,j=n<0?-1:1;!a&&i>.9&&t.add(c),r((function(e){if(c===e){var n=t.has(c);return{x:n?(200+window.innerWidth)*j:a?s:0,rot:s/100+(n?10*j*i:0),scale:1,delay:.2,config:{friction:50,tension:a?800:n?200:500}}}})),a||t.size!==N.length||setTimeout((function(){return t.clear()||r((function(e){return k(e)}))}),600)}));return n.map((function(e,t){var c=e.x,a=e.y,s=e.rot,n=e.scale;return Object(l.jsx)(u.a.div,{style:{transform:Object(u.b)([c,a],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))},children:Object(l.jsx)(u.a.div,Object(h.a)(Object(h.a)({},i(t)),{},{style:{transform:Object(u.b)([s,n],w),backgroundImage:"url(".concat(N[t],")")}}))},t)}))}c(68);function L(){return Object(l.jsxs)("main",{className:"background",children:[Object(l.jsx)(o,{}),Object(l.jsx)(j.a,{className:"about",children:Object(l.jsx)(C,{})})]})}c(69);var M=[function(e){var t=e.style;return Object(l.jsx)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{backgroundColor:"#171313"}),children:Object(l.jsx)(j.a,{children:Object(l.jsx)("h2",{children:"Musicmash gft "})})})},function(e){var t=e.style;return Object(l.jsx)(u.a.div,{style:Object(h.a)(Object(h.a)({},t),{},{backgroundColor:"#171313"}),children:Object(l.jsx)(j.a,{children:Object(l.jsx)("div",{className:"vertical-title",children:Object(l.jsx)("h2",{children:" Overview"})})})})}];function F(){var e=Object(a.useState)(0),t=Object(x.a)(e,2),c=t[0],s=t[1],n=Object(a.useCallback)((function(){return s((function(e){return(e+1)%6}))}),[]),r=Object(u.d)(c,(function(e){return e}),{from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}});return Object(l.jsx)("main",{children:Object(l.jsx)("div",{className:"simple-trans-main",onClick:n,children:r.map((function(e){var t=e.item,c=e.props,a=e.key,s=M[t];return Object(l.jsx)(s,{style:c},a)}))})})}var A=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)(v,{})}),Object(l.jsx)(i.a,{path:"/projects",children:Object(l.jsx)(m,{})}),Object(l.jsx)(i.a,{path:"/passion",children:Object(l.jsx)(f,{})}),Object(l.jsx)(i.a,{path:"/about",children:Object(l.jsx)(L,{})}),Object(l.jsx)(i.a,{path:"/musicmash",children:Object(l.jsx)(F,{})})]})})})})};n.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7b5d9253.chunk.js.map