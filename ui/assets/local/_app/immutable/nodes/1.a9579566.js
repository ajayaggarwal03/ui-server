import{S as i,b as p,a as c,C as u,D as f,E as _,j as g,g as l,F as $,K as E}from"../chunks/index.9b814669.js";/* empty css                    */import{p as d}from"../chunks/stores.6266e7a5.js";import{E as h}from"../chunks/error.b22ae272.js";import{i as b}from"../chunks/is-network-error.85ce3eb2.js";import{p as y}from"../chunks/parse-with-big-int.0036a80a.js";function C(e){let t,o;return t=new h({props:{error:e[1],status:e[0]}}),{c(){u(t.$$.fragment)},l(r){f(t.$$.fragment,r)},m(r,s){_(t,r,s),o=!0},p(r,[s]){const n={};s&2&&(n.error=r[1]),s&1&&(n.status=r[0]),t.$set(n)},i(r){o||(g(t.$$.fragment,r),o=!0)},o(r){l(t.$$.fragment,r),o=!1},d(r){$(t,r)}}}function q(e,t,o){let r,s,n;E(e,d,m=>o(2,n=m));let a;try{a=y(r.message),b(a)&&(s=a.statusCode)}catch(m){console.error(m)}return e.$$.update=()=>{e.$$.dirty&4&&o(1,r=n.error),e.$$.dirty&4&&o(0,s=n.status)},[s,r,n]}class A extends i{constructor(t){super(),p(this,t,q,C,c,{})}}export{A as component};
