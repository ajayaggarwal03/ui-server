import{S as I,b as L,a as P,C as h,D as d,E as v,j as c,g as p,F as y,K as _,a5 as z,e as $,f as C,z as b,aa as B,h as w,k as F,ab as N}from"../chunks/index.9b814669.js";import{E as j,a as q,b as D}from"../chunks/event-summary-table.e693076e.js";import{P as K}from"../chunks/pagination.2b43808d.js";import{t as g}from"../chunks/translate.c28e5b4f.js";import{b as k,e as M}from"../chunks/event-view.d784a73b.js";import{e as G}from"../chunks/filters.b1033ccd.js";import{i as H}from"../chunks/import-events.40221db8.js";function E(i,t,n){const e=i.slice();return e[10]=t[n],e}function S(i){let t,n;return t=new q({}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function A(i,t){let n,e,a;return e=new D({props:{event:t[10],compact:x,expandAll:t[1]==="true",initialItem:t[9]}}),{key:i,first:null,c(){n=$(),h(e.$$.fragment),this.h()},l(r){n=$(),d(e.$$.fragment,r),this.h()},h(){this.first=n},m(r,m){C(r,n,m),v(e,r,m),a=!0},p(r,m){t=r;const s={};m&256&&(s.event=t[10]),m&2&&(s.expandAll=t[1]==="true"),m&512&&(s.initialItem=t[9]),e.$set(s)},i(r){a||(c(e.$$.fragment,r),a=!0)},o(r){p(e.$$.fragment,r),a=!1},d(r){r&&F(n),y(e,r)}}}function J(i){let t=[],n=new Map,e,a,r=i[8];const m=o=>`${o[10].id}-${o[10].timestamp}`;for(let o=0;o<r.length;o+=1){let l=E(i,r,o),u=m(l);n.set(u,t[o]=A(u,l))}let s=null;return r.length||(s=S()),{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=$(),s&&s.c()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=$(),s&&s.l(o)},m(o,l){for(let u=0;u<t.length;u+=1)t[u].m(o,l);C(o,e,l),s&&s.m(o,l),a=!0},p(o,l){l&770&&(r=o[8],b(),t=B(t,l,m,1,o,r,n,e.parentNode,N,A,e,E),w(),r.length?s&&(b(),p(s,1,1,()=>{s=null}),w()):s||(s=S(),s.c(),c(s,1),s.m(e.parentNode,e)))},i(o){if(!a){for(let l=0;l<r.length;l+=1)c(t[l]);a=!0}},o(o){for(let l=0;l<t.length;l+=1)p(t[l]);a=!1},d(o){for(let l=0;l<t.length;l+=1)t[l].d(o);o&&F(e),s&&s.d(o)}}}function O(i){let t,n;return t=new j({props:{compact:x,$$slots:{default:[J]},$$scope:{ctx:i}}}),t.$on("expandAll",i[2]),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const r={};a&8962&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function Q(i){let t,n;return t=new K({props:{items:i[0],floatId:"event-view-toggle","aria-label":g("workflows.event-history"),pageSizeSelectLabel:g("common.per-page"),previousButtonLabel:g("common.previous"),nextButtonLabel:g("common.next"),$$slots:{default:[O,({visibleItems:e,initialItem:a})=>({8:e,9:a}),({visibleItems:e,initialItem:a})=>(e?256:0)|(a?512:0)]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,[a]){const r={};a&1&&(r.items=e[0]),a&8962&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}let x=!1;function R(i,t,n){let e,a,r,m,s,o,l;_(i,k,f=>n(1,m=f)),_(i,H,f=>n(5,s=f)),_(i,M,f=>n(6,o=f)),_(i,G,f=>n(7,l=f));function u(f){z(k,m=f.detail.expanded,m)}return i.$$.update=()=>{i.$$.dirty&128&&n(3,e=l),i.$$.dirty&96&&n(4,a=o==="descending"?[...s].reverse():s),i.$$.dirty&24&&n(0,r=a.filter(f=>e?f.category===e:f))},[r,m,u,e,a,s,o,l]}class ee extends I{constructor(t){super(),L(this,t,R,Q,P,{})}}export{ee as component};
