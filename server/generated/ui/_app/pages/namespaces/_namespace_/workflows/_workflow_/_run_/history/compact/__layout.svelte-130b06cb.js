import{S as f,i as m,s as p,w as _,x as g,y,q as u,o as c,B as v,K as d,M as b,N as G,O as $}from"../../../../../../../../chunks/vendor-ff19c65d.js";import{E as h}from"../../../../../../../../chunks/_event-table-465f7d91.js";import"../../../../../../../../chunks/empty-state-5615bb06.js";import"../../../../../../../../chunks/filter-select-bad6e600.js";import"../../../../../../../../chunks/navigation-093db9e2.js";import"../../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../../chunks/stores-4aa32d62.js";import"../../../../../../../../chunks/append-query-parameters-b8619cc0.js";import"../../../../../../../../chunks/select-82f923ea.js";import"../../../../../../../../chunks/index-0b5ef030.js";import"../../../../../../../../chunks/data-converter-config-67b393c3.js";import"../../../../../../../../chunks/atob-5f9d7101.js";import"../../../../../../../../chunks/format-date-25613f84.js";function E(s){let e;const n=s[3].default,t=d(n,s,s[4],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,r){t&&t.m(o,r),e=!0},p(o,r){t&&t.p&&(!e||r&16)&&b(t,n,o,o[4],e?$(n,o[4],r,null):G(o[4]),null)},i(o){e||(u(t,o),e=!0)},o(o){c(t,o),e=!1},d(o){t&&t.d(o)}}}function q(s){let e,n;return e=new h({props:{category:s[0],events:s[1],$$slots:{default:[E]},$$scope:{ctx:s}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,o){y(e,t,o),n=!0},p(t,[o]){const r={};o&1&&(r.category=t[0]),o&2&&(r.events=t[1]),o&16&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}const F=async function({stuff:s,url:e}){const{eventGroups:n}=s,t=e.searchParams.get("category");return{props:{eventGroups:n,category:t}}};function w(s,e,n){let t,{$$slots:o={},$$scope:r}=e,{eventGroups:i}=e,{category:l=null}=e;return s.$$set=a=>{"eventGroups"in a&&n(2,i=a.eventGroups),"category"in a&&n(0,l=a.category),"$$scope"in a&&n(4,r=a.$$scope)},s.$$.update=()=>{s.$$.dirty&5&&n(1,t=i.filter(a=>!l||a.category===l))},[l,t,i,o,r]}class H extends f{constructor(e){super();m(this,e,w,q,p,{eventGroups:2,category:0})}}export{H as default,F as load};