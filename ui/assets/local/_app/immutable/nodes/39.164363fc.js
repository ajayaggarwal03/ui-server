import{S as w,b as k,a as $,C as m,D as i,E as u,j as p,g as l,F as c,K as g,c as b,d as h,f as y,k as Q}from"../chunks/index.9b814669.js";import{p as P}from"../chunks/stores.6266e7a5.js";import{P as W}from"../chunks/page-title.83a2b61d.js";import{t as C}from"../chunks/translate.c28e5b4f.js";import{W as R}from"../chunks/workers-list.e77c1480.js";import{w as S}from"../chunks/workflow-run.08ac4c5b.js";function j(n){var s;let t,o;return t=new R({props:{taskQueue:(s=n[2])==null?void 0:s.taskQueue,workers:n[3],compatibility:n[1],reachability:n[0]}}),{c(){m(t.$$.fragment)},l(r){i(t.$$.fragment,r)},m(r,e){u(t,r,e),o=!0},p(r,[e]){var f;const a={};e&4&&(a.taskQueue=(f=r[2])==null?void 0:f.taskQueue),e&8&&(a.workers=r[3]),e&2&&(a.compatibility=r[1]),e&1&&(a.reachability=r[0]),t.$set(a)},i(r){o||(p(t.$$.fragment,r),o=!0)},o(r){l(t.$$.fragment,r),o=!1},d(r){c(t,r)}}}function q(n,t,o){let s,r,e,a,f;return g(n,S,_=>o(4,f=_)),n.$$.update=()=>{n.$$.dirty&16&&o(3,{workers:s,workflow:r,compatibility:e,reachability:a}=f,s,(o(2,r),o(4,f)),(o(1,e),o(4,f)),(o(0,a),o(4,f)))},[a,e,r,s,f]}class D extends w{constructor(t){super(),k(this,t,q,j,$,{})}}function E(n){let t,o,s,r;return t=new W({props:{title:`${C("workflows.workers-tab")} | ${n[1]}`,url:n[0].url.href}}),s=new D({}),{c(){m(t.$$.fragment),o=b(),m(s.$$.fragment)},l(e){i(t.$$.fragment,e),o=h(e),i(s.$$.fragment,e)},m(e,a){u(t,e,a),y(e,o,a),u(s,e,a),r=!0},p(e,[a]){const f={};a&1&&(f.url=e[0].url.href),t.$set(f)},i(e){r||(p(t.$$.fragment,e),p(s.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),l(s.$$.fragment,e),r=!1},d(e){c(t,e),e&&Q(o),c(s,e)}}}function F(n,t,o){let s;g(n,P,e=>o(0,s=e));const r=s.params.workflow;return[s,r]}class I extends w{constructor(t){super(),k(this,t,F,E,$,{})}}export{I as component};
