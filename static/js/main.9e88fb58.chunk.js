(this["webpackJsonpemoji-to-scale"]=this["webpackJsonpemoji-to-scale"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);n(4);var c=n(1),s=n(3),a=n.n(s);const i=[n.p+"static/media/random.fa8c1081.csv",n.p+"static/media/travel.a1375366.csv",n.p+"static/media/nature.5ee3e119.csv",n.p+"static/media/objects.824019ca.csv"];function r(e){return String(Number(e))===e}async function o(){let e={};let t=(await async function(){const e=i.map((e=>fetch(e).then((e=>e.text())).then((e=>e.trim().split("\n").splice(1)))));return Promise.all(e).then((e=>e.flat()))}()).reduce(((t,n)=>{const[c,s,a,i]=n.split(",");return"?"===s||(e[c]&&console.warn("REPEATED",c),t[c]=s,e[c]={source:s,label:a,src:i}),t}),{});for(const n in t){const e=t[n];if(t[n].includes("km"))t[n]=100*Number(e.replace("km",""))*1e3;else if(t[n].includes("m"))t[n]=100*Number(e.replace("m",""));else if(r(t[n]))t[n]=Number(e);else if(t[e])t[n]=t[e];else if(e.includes("*")){const c=e.split("*").map((e=>r(e)?Number(e):t[e]?t[e]:e));t[n]=c[0]*c[1]}}return Object.entries(t).sort(((e,t)=>e[1]-t[1])).map((t=>[t[0],t[1],e[t[0]].label])).filter((e=>e[1]>.01))}var l=n(0);const m=300;function u(e){return e<2?"".concat(10*e,"mm"):e<100?"".concat(e,"cm"):e<1e5?"".concat(Math.round(100*e)/100/100,"m"):"".concat(Math.round(e/100/10)/100,"km")}var d=function(){const[e,t]=Object(c.useState)([]),[n,s]=Object(c.useState)(0);return Object(c.useEffect)((()=>{o().then((e=>{const n=m*e.length+window.innerHeight-m;document.body.style.height="".concat(n,"px"),t(e)})),window.requestAnimationFrame((function e(){const t=window.pageYOffset;s(t),window.requestAnimationFrame(e)}))}),[]),Object(l.jsx)("div",{className:"emoji-display",children:e.map(((t,c)=>{let[s,a,i]=t;const r=window.innerWidth;let o=r/2+c*m-n-150;if(o<r/2&&(o=.1*o+.9*(o+.5*r)/2),o<-225||o>r-30)return null;let d=[Math.floor(n/m),Math.ceil(n/m)];d=d.map((t=>t<0?0:t>e.length-1?e.length-1:t)).map((t=>e[t]));const f=n/m%1,h=f*d[1][1]+(1-f)*d[0][1],p=Math.min(a/h,64);let j=1;if(p>3){const e=(p-3)/8;j=Math.max(1-e,0)}return Object(l.jsxs)("div",{className:"emoji-container",style:{transform:"translatex(".concat(o,"px)")},children:[Object(l.jsx)("div",{className:"emoji",style:{opacity:j,transform:"scale(".concat(p,") translateY(10%)")},children:s}),Object(l.jsx)("div",{children:u(a)}),Object(l.jsx)("div",{children:i})]},s)}))})};a.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},4:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.9e88fb58.chunk.js.map