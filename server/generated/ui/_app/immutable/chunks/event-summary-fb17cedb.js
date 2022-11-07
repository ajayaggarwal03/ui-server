import{S as M,i as P,s as R,l as y,x as g,m as w,n as E,y as h,h as _,p as A,b as v,N as T,z as d,F as S,f as u,t as m,C as $,e as p,g as b,d as k,O as j,a4 as q,ac as z,ap as D}from"./index-681506b4.js";import{g as I}from"./event-view-2294bc17.js";import{P as F}from"./pagination-a9aa69c6.js";import{E as O,a as V}from"./event-summary-row-30f6fe38.js";import{E as B}from"./empty-state-3ccc9dac.js";import{L as G}from"./loading-77a0047b.js";function H(f){let e,n,t,s;return t=new B({props:{title:"No Events Match",content:"There are no events that match your filters or selected view. Adjust your filters or view to see your events."}}),{c(){e=y("article"),n=y("div"),g(t.$$.fragment),this.h()},l(l){e=w(l,"ARTICLE",{class:!0});var i=E(e);n=w(i,"DIV",{class:!0});var o=E(n);h(t.$$.fragment,o),o.forEach(_),i.forEach(_),this.h()},h(){A(n,"class","cell"),A(e,"class","row svelte-111xkhf")},m(l,i){v(l,e,i),T(e,n),d(t,n,null),s=!0},p:S,i(l){s||(u(t.$$.fragment,l),s=!0)},o(l){m(t.$$.fragment,l),s=!1},d(l){l&&_(e),$(t)}}}class J extends M{constructor(e){super(),P(this,e,null,H,R,{})}}function N(f,e,n){const t=f.slice();return t[8]=e[n],t}function K(f){let e,n;return e=new F({props:{items:f[0],floatId:"event-view-toggle",$$slots:{default:[W,({visibleItems:t,initialItem:s})=>({6:t,7:s}),({visibleItems:t,initialItem:s})=>(t?64:0)|(s?128:0)]},$$scope:{ctx:f}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.items=t[0]),s&2266&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Q(f){let e,n;return e=new G({}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:S,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function C(f){let e,n;return e=new J({}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function L(f,e){let n,t,s;return t=new V({props:{event:e[8],groups:e[1],compact:e[3],expandAll:e[4]==="true",initialItem:e[7],visibleItems:e[6]}}),{key:f,first:null,c(){n=p(),g(t.$$.fragment),this.h()},l(l){n=p(),h(t.$$.fragment,l),this.h()},h(){this.first=n},m(l,i){v(l,n,i),d(t,l,i),s=!0},p(l,i){e=l;const o={};i&64&&(o.event=e[8]),i&2&&(o.groups=e[1]),i&8&&(o.compact=e[3]),i&16&&(o.expandAll=e[4]==="true"),i&128&&(o.initialItem=e[7]),i&64&&(o.visibleItems=e[6]),t.$set(o)},i(l){s||(u(t.$$.fragment,l),s=!0)},o(l){m(t.$$.fragment,l),s=!1},d(l){l&&_(n),$(t,l)}}}function U(f){let e=[],n=new Map,t,s,l=f[6];const i=r=>`${r[8].id}-${r[8].timestamp}`;for(let r=0;r<l.length;r+=1){let a=N(f,l,r),c=i(a);n.set(c,e[r]=L(c,a))}let o=null;return l.length||(o=C()),{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=p(),o&&o.c()},l(r){for(let a=0;a<e.length;a+=1)e[a].l(r);t=p(),o&&o.l(r)},m(r,a){for(let c=0;c<e.length;c+=1)e[c].m(r,a);v(r,t,a),o&&o.m(r,a),s=!0},p(r,a){a&218&&(l=r[6],b(),e=z(e,a,i,1,r,l,n,t.parentNode,D,L,t,N),k(),l.length?o&&(b(),m(o,1,1,()=>{o=null}),k()):o||(o=C(),o.c(),u(o,1),o.m(t.parentNode,t)))},i(r){if(!s){for(let a=0;a<l.length;a+=1)u(e[a]);s=!0}},o(r){for(let a=0;a<e.length;a+=1)m(e[a]);s=!1},d(r){for(let a=0;a<e.length;a+=1)e[a].d(r);r&&_(t),o&&o.d(r)}}}function W(f){let e,n;return e=new O({props:{compact:f[3],$$slots:{default:[U]},$$scope:{ctx:f}}}),e.$on("expandAll",f[5]),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,s){const l={};s&8&&(l.compact=t[3]),s&2266&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function X(f){let e,n,t,s;const l=[Q,K],i=[];function o(r,a){return r[2]?0:1}return e=o(f),n=i[e]=l[e](f),{c(){n.c(),t=p()},l(r){n.l(r),t=p()},m(r,a){i[e].m(r,a),v(r,t,a),s=!0},p(r,[a]){let c=e;e=o(r),e===c?i[e].p(r,a):(b(),m(i[c],1,1,()=>{i[c]=null}),k(),n=i[e],n?n.p(r,a):(n=i[e]=l[e](r),n.c()),u(n,1),n.m(t.parentNode,t))},i(r){s||(u(n),s=!0)},o(r){m(n),s=!1},d(r){i[e].d(r),r&&_(t)}}}function Y(f,e,n){let t;j(f,I,a=>n(4,t=a));let{items:s}=e,{groups:l}=e,{loading:i=!1}=e,{compact:o=!1}=e;function r(a){q(I,t=a.detail.expanded,t)}return f.$$set=a=>{"items"in a&&n(0,s=a.items),"groups"in a&&n(1,l=a.groups),"loading"in a&&n(2,i=a.loading),"compact"in a&&n(3,o=a.compact)},[s,l,i,o,t,r]}class le extends M{constructor(e){super(),P(this,e,Y,X,R,{items:0,groups:1,loading:2,compact:3})}}export{le as E};
