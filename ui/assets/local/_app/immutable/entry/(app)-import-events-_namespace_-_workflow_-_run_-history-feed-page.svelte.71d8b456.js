import{S as I,b as P,a as z,C as $,D as h,E as d,j as c,g as p,F as v,K as _,_ as N,e as g,f as A,z as y,a1 as j,h as b,k as C,a2 as q}from"../chunks/index.c37b9eda.js";import{i as x}from"../chunks/import-events.2a38decc.js";import{E as D,a as K,b as L}from"../chunks/event-empty-row.b8b2ee03.js";import{P as M}from"../chunks/pagination.146d28e3.js";import{b as E,e as B}from"../chunks/event-view.805e4495.js";import{e as G}from"../chunks/filters.69ac765b.js";import{t as H}from"../chunks/translate.d6afa57d.js";function k(i,t,r){const e=i.slice();return e[10]=t[r],e}function w(i){let t,r;return t=new K({}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,o){d(t,e,o),r=!0},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function S(i,t){let r,e,o;return e=new L({props:{event:t[10],compact:F,expandAll:t[1]==="true",initialItem:t[9]}}),{key:i,first:null,c(){r=g(),$(e.$$.fragment),this.h()},l(n){r=g(),h(e.$$.fragment,n),this.h()},h(){this.first=r},m(n,f){A(n,r,f),d(e,n,f),o=!0},p(n,f){t=n;const s={};f&256&&(s.event=t[10]),f&2&&(s.expandAll=t[1]==="true"),f&512&&(s.initialItem=t[9]),e.$set(s)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){p(e.$$.fragment,n),o=!1},d(n){n&&C(r),v(e,n)}}}function J(i){let t=[],r=new Map,e,o,n=i[8];const f=a=>`${a[10].id}-${a[10].timestamp}`;for(let a=0;a<n.length;a+=1){let l=k(i,n,a),u=f(l);r.set(u,t[a]=S(u,l))}let s=null;return n.length||(s=w()),{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=g(),s&&s.c()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=g(),s&&s.l(a)},m(a,l){for(let u=0;u<t.length;u+=1)t[u].m(a,l);A(a,e,l),s&&s.m(a,l),o=!0},p(a,l){l&770&&(n=a[8],y(),t=j(t,l,f,1,a,n,r,e.parentNode,q,S,e,k),b(),n.length?s&&(y(),p(s,1,1,()=>{s=null}),b()):s||(s=w(),s.c(),c(s,1),s.m(e.parentNode,e)))},i(a){if(!o){for(let l=0;l<n.length;l+=1)c(t[l]);o=!0}},o(a){for(let l=0;l<t.length;l+=1)p(t[l]);o=!1},d(a){for(let l=0;l<t.length;l+=1)t[l].d(a);a&&C(e),s&&s.d(a)}}}function O(i){let t,r;return t=new D({props:{compact:F,$$slots:{default:[J]},$$scope:{ctx:i}}}),t.$on("expandAll",i[2]),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,o){d(t,e,o),r=!0},p(e,o){const n={};o&8962&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Q(i){let t,r;return t=new M({props:{items:i[0],floatId:"event-view-toggle","aria-label":"recent events",pageSizeSelectLabel:H("per-page"),$$slots:{default:[O,({visibleItems:e,initialItem:o})=>({8:e,9:o}),({visibleItems:e,initialItem:o})=>(e?256:0)|(o?512:0)]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,o){d(t,e,o),r=!0},p(e,[o]){const n={};o&1&&(n.items=e[0]),o&8962&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}let F=!1;function R(i,t,r){let e,o,n,f,s,a,l;_(i,E,m=>r(1,f=m)),_(i,x,m=>r(5,s=m)),_(i,B,m=>r(6,a=m)),_(i,G,m=>r(7,l=m));function u(m){N(E,f=m.detail.expanded,f)}return i.$$.update=()=>{i.$$.dirty&128&&r(3,e=l),i.$$.dirty&96&&r(4,o=a==="descending"?[...s].reverse():s),i.$$.dirty&24&&r(0,n=o.filter(m=>e?m.category===e:m))},[n,f,u,e,o,s,a,l]}class ee extends I{constructor(t){super(),P(this,t,R,Q,z,{})}}export{ee as default};
