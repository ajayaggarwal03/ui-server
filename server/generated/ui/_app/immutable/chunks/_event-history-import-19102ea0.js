import{S as b,i as w,s as $,k,a as S,w as E,l as N,c as T,x as C,n as u,b as d,y as x,R as I,f as A,t as D,h as v,z as O,q as R,r as B}from"./index-6bdaee4d.js";import{f as F}from"./route-for-a6a4e2f3.js";import{g as U}from"./navigation-ba85a759.js";import{B as q}from"./button-152cbc02.js";import{t as G}from"./index-5ccc7f0c.js";import{t as h}from"./toaster-dcba2048.js";import{i as J,a as L}from"./import-events-7937c86c.js";import{p as W}from"./parse-with-big-int-02e81897.js";import{g as j}from"./index-0f6bdc7d.js";const y={auth:{enabled:!1,options:[]},baseUrl:"base",codec:{},defaultNamespace:"namespace",disableWriteActions:!1,workflowCancelDisabled:!1,workflowResetDisabled:!1,workflowSignalDisabled:!1,workflowTerminateDisabled:!1,showTemporalSystemNamespace:!1,notifyOnNewVersion:!1,feedbackURL:"",runtimeEnvironment:{isCloud:!1,isLocal:!0,envOverride:!1},version:"2.0.0"};function z(i){let s;return{c(){s=R("Import")},l(o){s=B(o,"Import")},m(o,t){d(o,s,t)},d(o){o&&v(s)}}}function H(i){let s,o,t,r,l,m;return t=new q({props:{icon:"file-upload",$$slots:{default:[z]},$$scope:{ctx:i}}}),t.$on("click",i[1]),{c(){s=k("input"),o=S(),E(t.$$.fragment),this.h()},l(e){s=N(e,"INPUT",{class:!0,type:!0,accept:!0}),o=T(e),C(t.$$.fragment,e),this.h()},h(){u(s,"class","import-input block rounded-md border border-gray-200 p-2"),u(s,"type","file"),u(s,"accept",".json")},m(e,a){d(e,s,a),d(e,o,a),x(t,e,a),r=!0,l||(m=I(s,"change",i[0]),l=!0)},p(e,[a]){const n={};a&16&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){r||(A(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){e&&v(s),e&&v(o),O(t,e),l=!1,m()}}}function P(i,s,o){let t,{user:r={}}=s;const l=async e=>{var a;const n=e.target,_=(a=n==null?void 0:n.files)===null||a===void 0?void 0:a[0],c=new FileReader;_&&(c.readAsText(_),c.onload=()=>{var p,f;try{const g=(f=(p=c==null?void 0:c.result)===null||p===void 0?void 0:p.toString())!==null&&f!==void 0?f:"";t=W(g)}catch{h.push({variant:"error",message:"Could not parse JSON"})}})},m=async()=>{try{const e=await G({response:Array.isArray(t)?t:t==null?void 0:t.events,namespace:y.defaultNamespace,settings:y,accessToken:r.accessToken}),a=j(e);J.set(e),L.set(a);const n=F({importType:"events",view:"feed"});U(n)}catch(e){console.error(e),h.push({variant:"error",message:"Could not create event history from JSON"})}};return i.$$set=e=>{"user"in e&&o(2,r=e.user)},[l,m,r]}class se extends b{constructor(s){super(),w(this,s,P,H,$,{user:2})}}export{se as E};
