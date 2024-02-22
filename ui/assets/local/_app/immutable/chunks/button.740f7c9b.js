import{S as fe,i as ue,s as de,e as q,b as p,v as N,d as g,f as I,g as m,h as k,a0 as w,Z as E,a1 as ce,O as be,K as $,k as B,a as P,l as C,m as O,c as V,_ as D,D as j,F as L,H as me,I as ve,L as x,M as ee,N as ie,$ as re,y as z,z as R,A,a3 as _e,B as S,q as le,r as ne,u as ae}from"./index.df672b57.js";import{B as te}from"./badge.fae0ed54.js";import{I as H}from"./icon.aeec2507.js";import{L as ge}from"./link.3b1457c2.js";function se(l){var e,i,r="";if(typeof l=="string"||typeof l=="number")r+=l;else if(typeof l=="object")if(Array.isArray(l))for(e=0;e<l.length;e++)l[e]&&(i=se(l[e]))&&(r&&(r+=" "),r+=i);else for(e in l)l[e]&&(r&&(r+=" "),r+=e);return r}function he(){for(var l,e,i=0,r="";i<arguments.length;)(l=arguments[i++])&&(e=se(l))&&(r&&(r+=" "),r+=e);return r}const F=l=>typeof l=="boolean"?"".concat(l):l===0?"0":l,W=he,ke=(l,e)=>i=>{var r;if((e==null?void 0:e.variants)==null)return W(l,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:n,defaultVariants:a}=e,t=Object.keys(n).map(o=>{const c=i==null?void 0:i[o],s=a==null?void 0:a[o];if(c===null)return null;const f=F(c)||F(s);return n[o][f]}),h=i&&Object.entries(i).reduce((o,c)=>{let[s,f]=c;return f===void 0||(o[s]=f),o},{}),d=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((o,c)=>{let{class:s,className:f,..._}=c;return Object.entries(_).every(y=>{let[M,u]=y;return Array.isArray(u)?u.includes({...a,...h}[M]):{...a,...h}[M]===u})?[...o,s,f]:o},[]);return W(l,t,d,i==null?void 0:i.class,i==null?void 0:i.className)};function pe(l){let e,i,r,n,a,t,h,d,o=(l[6]||l[5])&&Z(l);const c=l[15].default,s=$(c,l,l[17],null);let f=l[7]&&G(l),_=l[8]>0&&J(l),y=[{disabled:l[4]},{id:l[9]},{type:"button"},{class:a=l[13]({variant:l[0],size:l[1],borderModifier:l[2],borderRadiusModifier:l[3]})},l[14]],M={};for(let u=0;u<y.length;u+=1)M=E(M,y[u]);return{c(){e=B("button"),o&&o.c(),i=P(),s&&s.c(),r=P(),f&&f.c(),n=P(),_&&_.c(),this.h()},l(u){e=C(u,"BUTTON",{id:!0,type:!0,class:!0});var v=O(e);o&&o.l(v),i=V(v),s&&s.l(v),r=V(v),f&&f.l(v),n=V(v),_&&_.l(v),v.forEach(k),this.h()},h(){D(e,M),j(e,"active",l[12])},m(u,v){p(u,e,v),o&&o.m(e,null),L(e,i),s&&s.m(e,null),L(e,r),f&&f.m(e,null),L(e,n),_&&_.m(e,null),e.autofocus&&e.focus(),t=!0,h||(d=me(e,"click",ve(l[16])),h=!0)},p(u,v){u[6]||u[5]?o?(o.p(u,v),v&96&&m(o,1)):(o=Z(u),o.c(),m(o,1),o.m(e,i)):o&&(N(),g(o,1,1,()=>{o=null}),I()),s&&s.p&&(!t||v&131072)&&x(s,c,u,u[17],t?ie(c,u[17],v,null):ee(u[17]),null),u[7]?f?(f.p(u,v),v&128&&m(f,1)):(f=G(u),f.c(),m(f,1),f.m(e,n)):f&&(N(),g(f,1,1,()=>{f=null}),I()),u[8]>0?_?(_.p(u,v),v&256&&m(_,1)):(_=J(u),_.c(),m(_,1),_.m(e,null)):_&&(N(),g(_,1,1,()=>{_=null}),I()),D(e,M=re(y,[(!t||v&16)&&{disabled:u[4]},(!t||v&512)&&{id:u[9]},{type:"button"},(!t||v&15&&a!==(a=u[13]({variant:u[0],size:u[1],borderModifier:u[2],borderRadiusModifier:u[3]})))&&{class:a},v&16384&&u[14]])),j(e,"active",u[12])},i(u){t||(m(o),m(s,u),m(f),m(_),t=!0)},o(u){g(o),g(s,u),g(f),g(_),t=!1},d(u){u&&k(e),o&&o.d(),s&&s.d(u),f&&f.d(),_&&_.d(),h=!1,d()}}}function Me(l){let e,i;const r=[{target:l[11]},{href:l[10]},{id:l[9]},{role:"button"},{type:"button"},{class:l[13]({variant:l[0],size:l[1],borderModifier:l[2],borderRadiusModifier:l[3]})},l[14]];let n={$$slots:{default:[Ie]},$$scope:{ctx:l}};for(let a=0;a<r.length;a+=1)n=E(n,r[a]);return e=new ge({props:n}),{c(){z(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,t){A(e,a,t),i=!0},p(a,t){const h=t&28175?re(r,[t&2048&&{target:a[11]},t&1024&&{href:a[10]},t&512&&{id:a[9]},r[3],r[4],t&8207&&{class:a[13]({variant:a[0],size:a[1],borderModifier:a[2],borderRadiusModifier:a[3]})},t&16384&&_e(a[14])]):{};t&131552&&(h.$$scope={dirty:t,ctx:a}),e.$set(h)},i(a){i||(m(e.$$.fragment,a),i=!0)},o(a){g(e.$$.fragment,a),i=!1},d(a){S(e,a)}}}function Z(l){let e,i,r;return i=new H({props:{name:l[5]?"spinner":l[6]}}),{c(){e=B("span"),z(i.$$.fragment),this.h()},l(n){e=C(n,"SPAN",{});var a=O(e);R(i.$$.fragment,a),a.forEach(k),this.h()},h(){j(e,"animate-spin",l[5])},m(n,a){p(n,e,a),A(i,e,null),r=!0},p(n,a){const t={};a&96&&(t.name=n[5]?"spinner":n[6]),i.$set(t),(!r||a&32)&&j(e,"animate-spin",n[5])},i(n){r||(m(i.$$.fragment,n),r=!0)},o(n){g(i.$$.fragment,n),r=!1},d(n){n&&k(e),S(i)}}}function G(l){let e,i,r;return i=new H({props:{name:l[7]}}),{c(){e=B("span"),z(i.$$.fragment)},l(n){e=C(n,"SPAN",{});var a=O(e);R(i.$$.fragment,a),a.forEach(k)},m(n,a){p(n,e,a),A(i,e,null),r=!0},p(n,a){const t={};a&128&&(t.name=n[7]),i.$set(t)},i(n){r||(m(i.$$.fragment,n),r=!0)},o(n){g(i.$$.fragment,n),r=!1},d(n){n&&k(e),S(i)}}}function J(l){let e,i;return e=new te({props:{class:"badge absolute right-0 top-0 origin-bottom-left translate-x-[10px] translate-y-[-10px]",type:"count",$$slots:{default:[ye]},$$scope:{ctx:l}}}),{c(){z(e.$$.fragment)},l(r){R(e.$$.fragment,r)},m(r,n){A(e,r,n),i=!0},p(r,n){const a={};n&131328&&(a.$$scope={dirty:n,ctx:r}),e.$set(a)},i(r){i||(m(e.$$.fragment,r),i=!0)},o(r){g(e.$$.fragment,r),i=!1},d(r){S(e,r)}}}function ye(l){let e;return{c(){e=le(l[8])},l(i){e=ne(i,l[8])},m(i,r){p(i,e,r)},p(i,r){r&256&&ae(e,i[8])},d(i){i&&k(e)}}}function Q(l){let e,i,r;return i=new H({props:{name:l[5]?"spinner":l[6]}}),{c(){e=B("span"),z(i.$$.fragment),this.h()},l(n){e=C(n,"SPAN",{});var a=O(e);R(i.$$.fragment,a),a.forEach(k),this.h()},h(){j(e,"animate-spin",l[5])},m(n,a){p(n,e,a),A(i,e,null),r=!0},p(n,a){const t={};a&96&&(t.name=n[5]?"spinner":n[6]),i.$set(t),(!r||a&32)&&j(e,"animate-spin",n[5])},i(n){r||(m(i.$$.fragment,n),r=!0)},o(n){g(i.$$.fragment,n),r=!1},d(n){n&&k(e),S(i)}}}function X(l){let e,i,r;return i=new H({props:{name:l[7]}}),{c(){e=B("span"),z(i.$$.fragment)},l(n){e=C(n,"SPAN",{});var a=O(e);R(i.$$.fragment,a),a.forEach(k)},m(n,a){p(n,e,a),A(i,e,null),r=!0},p(n,a){const t={};a&128&&(t.name=n[7]),i.$set(t)},i(n){r||(m(i.$$.fragment,n),r=!0)},o(n){g(i.$$.fragment,n),r=!1},d(n){n&&k(e),S(i)}}}function Y(l){let e,i;return e=new te({props:{class:"badge absolute right-0 top-0 origin-bottom-left translate-x-[10px] translate-y-[-10px]",type:"count",$$slots:{default:[Ne]},$$scope:{ctx:l}}}),{c(){z(e.$$.fragment)},l(r){R(e.$$.fragment,r)},m(r,n){A(e,r,n),i=!0},p(r,n){const a={};n&131328&&(a.$$scope={dirty:n,ctx:r}),e.$set(a)},i(r){i||(m(e.$$.fragment,r),i=!0)},o(r){g(e.$$.fragment,r),i=!1},d(r){S(e,r)}}}function Ne(l){let e;return{c(){e=le(l[8])},l(i){e=ne(i,l[8])},m(i,r){p(i,e,r)},p(i,r){r&256&&ae(e,i[8])},d(i){i&&k(e)}}}function Ie(l){let e,i,r,n,a,t=(l[6]||l[5])&&Q(l);const h=l[15].default,d=$(h,l,l[17],null);let o=l[7]&&X(l),c=l[8]>0&&Y(l);return{c(){t&&t.c(),e=P(),d&&d.c(),i=P(),o&&o.c(),r=P(),c&&c.c(),n=q()},l(s){t&&t.l(s),e=V(s),d&&d.l(s),i=V(s),o&&o.l(s),r=V(s),c&&c.l(s),n=q()},m(s,f){t&&t.m(s,f),p(s,e,f),d&&d.m(s,f),p(s,i,f),o&&o.m(s,f),p(s,r,f),c&&c.m(s,f),p(s,n,f),a=!0},p(s,f){s[6]||s[5]?t?(t.p(s,f),f&96&&m(t,1)):(t=Q(s),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(N(),g(t,1,1,()=>{t=null}),I()),d&&d.p&&(!a||f&131072)&&x(d,h,s,s[17],a?ie(h,s[17],f,null):ee(s[17]),null),s[7]?o?(o.p(s,f),f&128&&m(o,1)):(o=X(s),o.c(),m(o,1),o.m(r.parentNode,r)):o&&(N(),g(o,1,1,()=>{o=null}),I()),s[8]>0?c?(c.p(s,f),f&256&&m(c,1)):(c=Y(s),c.c(),m(c,1),c.m(n.parentNode,n)):c&&(N(),g(c,1,1,()=>{c=null}),I())},i(s){a||(m(t),m(d,s),m(o),m(c),a=!0)},o(s){g(t),g(d,s),g(o),g(c),a=!1},d(s){t&&t.d(s),s&&k(e),d&&d.d(s),s&&k(i),o&&o.d(s),s&&k(r),c&&c.d(s),s&&k(n)}}}function ze(l){let e,i,r,n;const a=[Me,pe],t=[];function h(d,o){return d[10]&&!d[4]?0:1}return e=h(l),i=t[e]=a[e](l),{c(){i.c(),r=q()},l(d){i.l(d),r=q()},m(d,o){t[e].m(d,o),p(d,r,o),n=!0},p(d,[o]){let c=e;e=h(d),e===c?t[e].p(d,o):(N(),g(t[c],1,1,()=>{t[c]=null}),I(),i=t[e],i?i.p(d,o):(i=t[e]=a[e](d),i.c()),m(i,1),i.m(r.parentNode,r))},i(d){n||(m(i),n=!0)},o(d){g(i),n=!1},d(d){t[e].d(d),d&&k(r)}}}function Re(l,e,i){const r=["variant","size","borderModifier","borderRadiusModifier","disabled","loading","leadingIcon","trailingIcon","count","id","href","target","active"];let n=w(e,r),{$$slots:a={},$$scope:t}=e;const h=ke(["relative","flex","w-fit","items-center","justify-center","border","gap-2","rounded-lg","disabled:opacity-50","disabled:cursor-not-allowed","border-box","transition-colors","transition-shadow","focus-visible:outline-none"],{variants:{variant:{primary:"bg-interactive border-interactive text-inverse hover:enabled:bg-interactiveHover focus-visible:enabled:bg-interactiveHover focus-visible:enabled:border-white dark:focus-visible:enabled:border-black focus-visible:shadow-focus focus-visible:shadow-indigo-600/50 ",secondary:"border-secondary text-primary focus-visible:enabled:shadow-focus focus-visible:enabled:shadow-indigo-600 hover:enabled:surface-interactive-secondary  dark:hover:enabled:border-[transparent] focus-visible:enabled:surface-interactive-secondary focus-visible:enabled:border-white dark:focus-visible:enabled:border-black",destructive:"border-danger bg-danger dark:hover:enabled:shadow-red-600/30 hover:enabled:bg-red-400 hover:enabled:border-white dark:hover:enabled:border-black dark:hover:enabled:border-red-400/50 dark:hover:enabled:bg-red-400 focus-visible:shadow-focus dark:focus-visible:shadow-red-600/30 focus-visible:shadow-red-200/50 focus-visible:border-white dark:focus-visible:border-red-400/50 dark:focus-visible:bg-red-400",ghost:"border-[transparent] bg-[transparent] text-primary hover:enabled:surface-interactive-secondary focus-visible:border-white dark:hover:enabled:border-black dark:focus-visible:border-black focus-visible:shadow-focus focus-visible:shadow-indigo-600/50 focus-visible:surface-interactive-secondary ","table-header":" bg-inverse text-white focus-visible:shadow-focus focus-visible:shadow-blue-600/50 focus-visible:border-white"},size:{xs:"h-8 text-xs px-2 py-1",sm:"h-9 text-sm px-4 py-1.5",md:"h-10 text-base px-4 py-2",lg:"h-11 text-lg px-5 py-2.5"},borderModifier:{borderless:"border-0","borderless-left":"border-l-0","borderless-right":"border-r-0"},borderRadiusModifier:{square:"rounded-none","square-left":"rounded-l-none","square-right":"rounded-r-none"}},defaultVariants:{variant:"primary",size:"md"}});let{variant:d="primary"}=e,{size:o="md"}=e,{borderModifier:c=null}=e,{borderRadiusModifier:s=null}=e,{disabled:f=!1}=e,{loading:_=!1}=e,{leadingIcon:y=null}=e,{trailingIcon:M=null}=e,{count:u=0}=e,{id:v=null}=e,{href:T=null}=e,{target:K=null}=e,{active:U=!1}=e;function oe(b){be.call(this,l,b)}return l.$$set=b=>{e=E(E({},e),ce(b)),i(14,n=w(e,r)),"variant"in b&&i(0,d=b.variant),"size"in b&&i(1,o=b.size),"borderModifier"in b&&i(2,c=b.borderModifier),"borderRadiusModifier"in b&&i(3,s=b.borderRadiusModifier),"disabled"in b&&i(4,f=b.disabled),"loading"in b&&i(5,_=b.loading),"leadingIcon"in b&&i(6,y=b.leadingIcon),"trailingIcon"in b&&i(7,M=b.trailingIcon),"count"in b&&i(8,u=b.count),"id"in b&&i(9,v=b.id),"href"in b&&i(10,T=b.href),"target"in b&&i(11,K=b.target),"active"in b&&i(12,U=b.active),"$$scope"in b&&i(17,t=b.$$scope)},[d,o,c,s,f,_,y,M,u,v,T,K,U,h,n,a,oe,t]}class je extends fe{constructor(e){super(),ue(this,e,Re,ze,de,{variant:0,size:1,borderModifier:2,borderRadiusModifier:3,disabled:4,loading:5,leadingIcon:6,trailingIcon:7,count:8,id:9,href:10,target:11,active:12})}}export{je as B,ke as c};
