import{S as A,b as V,a as v,G as I,H as T,I as E,J as S,j as U,g as W,K as k,o as j}from"./index.9b814669.js";import{p as q}from"./stores.5fc39bf3.js";import{a as w}from"./auth-user.cc5d369f.js";import{e as B,d as G}from"./decode-payload.9f726478.js";import{g as H,a as J,b as K}from"./get-codec.0785a197.js";import{s as _}from"./parse-with-big-int.0036a80a.js";const M=t=>({decodedValue:t&1}),b=t=>({decodedValue:t[0]});function z(t){let n;const o=t[9].default,s=I(o,t,t[8],b);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,d){s&&s.m(e,d),n=!0},p(e,[d]){s&&s.p&&(!n||d&257)&&T(s,o,e,e[8],n?S(o,e[8],d,M):E(e[8]),b)},i(e){n||(U(s,e),n=!0)},o(e){W(s,e),n=!1},d(e){s&&s.d(e)}}}function D(t,n,o){let s,e,d,g,m,c;k(t,w,a=>o(11,m=a)),k(t,q,a=>o(7,c=a));let{$$slots:h={},$$scope:y}=n;var r;let{value:i}=n,{key:l=""}=n,C=l&&(i!=null&&i[l])?i[l]:i,f=_(C);const P=async()=>{try{const a=await B(i,c.params.namespace,g,m.accessToken),u=G(a),p=l&&(u==null?void 0:u[l]);p?o(0,f=_(p)):o(0,f=_(u))}catch{console.error("Could not decode payloads")}};return j(()=>{P()}),t.$$set=a=>{"value"in a&&o(1,i=a.value),"key"in a&&o(2,l=a.key),"$$scope"in a&&o(8,y=a.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&o(6,s=H(c.data.settings)),t.$$.dirty&128&&o(5,e=J(c.data.settings)),t.$$.dirty&128&&o(4,d=K(c.data.settings)),t.$$.dirty&248&&(g={...c.data.settings,codec:{...o(3,r=c.data.settings)===null||r===void 0?void 0:r.codec,endpoint:s,passAccessToken:e,includeCredentials:d}})},[f,i,l,r,d,e,s,c,y,h]}class X extends A{constructor(n){super(),V(this,n,D,z,v,{value:1,key:2})}}export{X as P};