import{S as l,b as g,a as _,C as m,D as p,E as i,n as E,j as f,g as u,F as $,K as d,c as F,d as I,f as K,k as M}from"../chunks/index.9b814669.js";import{p as h}from"../chunks/stores.6266e7a5.js";import{P as Q}from"../chunks/page-title.83a2b61d.js";import{S as T}from"../chunks/schedule-form-view.46462edd.js";import{a as W}from"../chunks/schedules.eae7334c.js";function z(a){let t,r;return t=new T({props:{onConfirm:a[0]}}),{c(){m(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,s){i(t,e,s),r=!0},p:E,i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){u(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function A(a,t,r){let e;d(a,h,o=>r(1,e=o));let{namespace:s}=e.params;return[(o,c)=>{const{name:w,workflowType:S,workflowId:C,taskQueue:y,hour:k,minute:b,second:v,phase:P,cronString:x,daysOfWeek:O,daysOfMonth:j,days:q,months:D}=c;W({action:{namespace:s,name:w,workflowType:S,workflowId:C,taskQueue:y},spec:{hour:k,minute:b,second:v,phase:P,cronString:x},presets:{preset:o,daysOfWeek:O,daysOfMonth:j,months:D,days:q}})}]}class B extends l{constructor(t){super(),g(this,t,A,z,_,{})}}function G(a){let t,r,e,s;return t=new Q({props:{title:`Create Schedule | ${a[1]}`,url:a[0].url.href}}),e=new B({}),{c(){m(t.$$.fragment),r=F(),m(e.$$.fragment)},l(n){p(t.$$.fragment,n),r=I(n),p(e.$$.fragment,n)},m(n,o){i(t,n,o),K(n,r,o),i(e,n,o),s=!0},p(n,[o]){const c={};o&1&&(c.url=n[0].url.href),t.$set(c)},i(n){s||(f(t.$$.fragment,n),f(e.$$.fragment,n),s=!0)},o(n){u(t.$$.fragment,n),u(e.$$.fragment,n),s=!1},d(n){$(t,n),n&&M(r),$(e,n)}}}function H(a,t,r){let e;d(a,h,n=>r(0,e=n));const s=e.params.namespace;return[e,s]}class Z extends l{constructor(t){super(),g(this,t,H,G,_,{})}}export{Z as component};
