import{S as Q,i as P,s as C,ad as T,e as p,b as g,ae as v,g as u,d as i,h as d,C as W,R as a,y as _,z as k,A as $,B as b,a as I,c as N}from"../chunks/index.bac36631.js";import{p as B}from"../chunks/stores.a0375d69.js";import{P as R}from"../chunks/page-title.4413e49e.js";import{W as h}from"../chunks/workers-list.5e88cbf5.js";import{g as S,a as z,b as A}from"../chunks/pollers-service.24871632.js";import{p as F,c as H}from"../chunks/task-queue-compatibility.8d922da0.js";function y(r){const t=F(r[4].pollers);r[5]=t}function q(r){r[7]=r[9][0],r[8]=r[9][1]}function U(r){const t=r.slice(),l=H(t[4].pollers);return t[6]=l,t}function V(r){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function j(r){y(r);let t,l,e,n;const o=[E,D],c=[];function m(s,f){return s[5]?0:1}function w(s,f){return f===0?U(s):s}return t=m(r),l=c[t]=o[t](w(r,t)),{c(){l.c(),e=p()},l(s){l.l(s),e=p()},m(s,f){c[t].m(s,f),g(s,e,f),n=!0},p(s,f){y(s),l.p(w(s,t),f)},i(s){n||(u(l),n=!0)},o(s){i(l),n=!1},d(s){c[t].d(s),s&&d(e)}}}function D(r){let t,l;return t=new h({props:{taskQueue:r[0],workers:r[4]}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){$(t,e,n),l=!0},p:a,i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){i(t.$$.fragment,e),l=!1},d(e){b(t,e)}}}function E(r){let t,l,e={ctx:r,current:null,token:null,hasCatch:!0,pending:K,then:J,catch:G,value:9,blocks:[,,,]};return T(Promise.all([z({queue:r[0],namespace:r[1]}),A({namespace:r[1],buildIds:r[6],taskQueue:r[2]})]),e),{c(){t=p(),e.block.c()},l(n){t=p(),e.block.l(n)},m(n,o){g(n,t,o),e.block.m(n,e.anchor=o),e.mount=()=>t.parentNode,e.anchor=t,l=!0},p(n,o){r=n,v(e,r,o)},i(n){l||(u(e.block),l=!0)},o(n){for(let o=0;o<3;o+=1){const c=e.blocks[o];i(c)}l=!1},d(n){n&&d(t),e.block.d(n),e.token=null,e=null}}}function G(r){let t,l;return t=new h({props:{taskQueue:r[0],workers:r[4]}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){$(t,e,n),l=!0},p:a,i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){i(t.$$.fragment,e),l=!1},d(e){b(t,e)}}}function J(r){q(r);let t,l;return t=new h({props:{taskQueue:r[0],workers:r[4],compatibility:r[7],reachability:r[8]}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){$(t,e,n),l=!0},p(e,n){q(e)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){i(t.$$.fragment,e),l=!1},d(e){b(t,e)}}}function K(r){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function L(r){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function M(r){let t,l,e={ctx:r,current:null,token:null,hasCatch:!1,pending:L,then:j,catch:V,value:4,blocks:[,,,]};return T(S({queue:r[0],namespace:r[1]}),e),{c(){t=p(),e.block.c()},l(n){t=p(),e.block.l(n)},m(n,o){g(n,t,o),e.block.m(n,e.anchor=o),e.mount=()=>t.parentNode,e.anchor=t,l=!0},p(n,[o]){r=n,v(e,r,o)},i(n){l||(u(e.block),l=!0)},o(n){for(let o=0;o<3;o+=1){const c=e.blocks[o];i(c)}l=!1},d(n){n&&d(t),e.block.d(n),e.token=null,e=null}}}function O(r,t,l){let e;W(r,B,m=>l(3,e=m));let{queue:n,namespace:o,taskQueue:c}=e.params;return[n,o,c]}class X extends Q{constructor(t){super(),P(this,t,O,M,C,{})}}function Y(r){let t,l,e,n;return t=new R({props:{title:`Task Queue | ${r[1]}`,url:r[0].url.href}}),e=new X({}),{c(){_(t.$$.fragment),l=I(),_(e.$$.fragment)},l(o){k(t.$$.fragment,o),l=N(o),k(e.$$.fragment,o)},m(o,c){$(t,o,c),g(o,l,c),$(e,o,c),n=!0},p(o,[c]){const m={};c&1&&(m.url=o[0].url.href),t.$set(m)},i(o){n||(u(t.$$.fragment,o),u(e.$$.fragment,o),n=!0)},o(o){i(t.$$.fragment,o),i(e.$$.fragment,o),n=!1},d(o){b(t,o),o&&d(l),b(e,o)}}}function Z(r,t,l){let e;W(r,B,o=>l(0,e=o));const n=e.params.queue;return[e,n]}class le extends Q{constructor(t){super(),P(this,t,Z,Y,C,{})}}export{le as component};