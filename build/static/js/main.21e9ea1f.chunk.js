(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),u=n(9),o=n(2),l=n.n(o),s=n(5),h=n(3),p=n(8),d=n.n(p);n(16);function f(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),o=Object(h.a)(i,2),p=o[0],f=o[1],w=Object(a.useRef)(null),m=Object(a.useState)({unit:"%",width:30,aspect:16/9}),g=Object(h.a)(m,2),b=g[0],j=g[1],v=Object(a.useState)([]),O=Object(h.a)(v,2),E=O[0],C=O[1],R=Object(a.useCallback)(function(e){w.current=e},[]),k=function(){var e=Object(s.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.current&&t.width&&t.height&&x(w.current,t,"newFile.jpeg");case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(l.a.mark(function e(t,n,a){var r,c,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.createElement("canvas"),c=t.naturalWidth/t.width,i=t.naturalHeight/t.height,r.width=n.width,r.height=n.height,r.getContext("2d").drawImage(t,n.x*c,n.y*i,n.width*c,n.height*i,0,0,n.width,n.height),e.abrupt("return",new Promise(function(e,t){r.toBlob(function(e){e?(e.name=a,window.URL.revokeObjectURL(E),C(function(t){return[].concat(Object(u.a)(t),[window.URL.createObjectURL(e)])})):t(new Error("Canvas is empty"))},"image/jpeg")}));case 8:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.onload=function(){var e=new Image;e.onload=function(){1080==e.width&&1080==e.height&&(c(t.result),f(!0))},e.src=t.result},t.readAsDataURL(e.target.files[0])}}})),p?r.a.createElement("div",null,r.a.createElement(d.a,{src:n,onImageLoaded:R,crop:b,onChange:function(e){return j(e)},onComplete:k}),E&&E.map(function(e){return r.a.createElement("img",{alt:"Crop preview",src:e})})):r.a.createElement("h1",null,"Please upload file with 1080 x 1080 resolution."))}n(17);var w=document.getElementById("root");i.a.render(r.a.createElement(f,null),w)}},[[10,1,2]]]);
//# sourceMappingURL=main.21e9ea1f.chunk.js.map