import{s as M,x as O,k as w,g as h,c as R,e as v,a as X,b as C,d as S,h as Y,j as b,W as Q,l as x,m as k,D as p,Z as y,v as T,E as $,B as j,ac as ee}from"./scheduler.yuwC4fMQ.js";import{S as te,i as le,t as m,g,b as _,e as I,c as Z,a as G,m as H,d as J}from"./index.m6evPz-M.js";import{I as K}from"./icon.5C_lPgq9.js";import{c as ie}from"./copy-to-clipboard.SQL39_ND.js";import{t as P}from"./tw-merge.k1eX69SP.js";import{b as A,c as ne,d,e as oe,f as U,g as ce}from"./has.jYYzOA_H.js";import{g as se}from"./_commonjsHelpers.4gQjN7DL.js";function V(c){let e,n,l,t,a,o,i=c[1]&&W(c),s=c[2]&&z(c);return{c(){e=v("div"),i&&i.c(),n=X(),s&&s.c(),this.h()},l(r){e=C(r,"DIV",{class:!0});var u=S(e);i&&i.l(u),n=Y(u),s&&s.l(u),u.forEach(h),this.h()},h(){b(e,"class",l=Q(P("copy-or-filter",c[9]))+" svelte-12wbf7u")},m(r,u){w(r,e,u),i&&i.m(e,null),x(e,n),s&&s.m(e,null),t=!0,a||(o=[k(e,"click",p(y(T))),k(e,"keyup",p(y(T)))],a=!0)},p(r,u){r[1]?i?(i.p(r,u),u&2&&m(i,1)):(i=W(r),i.c(),m(i,1),i.m(e,n)):i&&(g(),_(i,1,1,()=>{i=null}),I()),r[2]?s?(s.p(r,u),u&4&&m(s,1)):(s=z(r),s.c(),m(s,1),s.m(e,null)):s&&(g(),_(s,1,1,()=>{s=null}),I()),(!t||u&512&&l!==(l=Q(P("copy-or-filter",r[9]))+" svelte-12wbf7u"))&&b(e,"class",l)},i(r){t||(m(i),m(s),t=!0)},o(r){_(i),_(s),t=!1},d(r){r&&h(e),i&&i.d(),s&&s.d(),a=!1,$(o)}}}function W(c){let e,n=c[5],l,t,a,o=q(c);return{c(){e=v("button"),o.c(),this.h()},l(i){e=C(i,"BUTTON",{class:!0,id:!0});var s=S(e);o.l(s),s.forEach(h),this.h()},h(){b(e,"class","copy-or-filter-button svelte-12wbf7u"),b(e,"id","filter-button"),j(e,"filtered",c[5])},m(i,s){w(i,e,s),o.m(e,null),l=!0,t||(a=k(e,"click",p(y(function(){ee(c[4])&&c[4].apply(this,arguments)}))),t=!0)},p(i,s){c=i,s&32&&M(n,n=c[5])?(g(),_(o,1,1,T),I(),o=q(c),o.c(),m(o,1),o.m(e,null)):o.p(c,s),(!l||s&32)&&j(e,"filtered",c[5])},i(i){l||(m(o),l=!0)},o(i){_(o),l=!1},d(i){i&&h(e),o.d(i),t=!1,a()}}}function q(c){let e,n;return e=new K({props:{title:c[8],name:"filter"}}),{c(){Z(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,t){H(e,l,t),n=!0},p(l,t){const a={};t&256&&(a.title=l[8]),e.$set(a)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){_(e.$$.fragment,l),n=!1},d(l){J(e,l)}}}function z(c){let e,n,l,t,a;return n=new K({props:{title:c[10]?c[7]:c[6],name:c[10]?"checkmark":"copy",stroke:"#000"}}),{c(){e=v("button"),Z(n.$$.fragment),this.h()},l(o){e=C(o,"BUTTON",{class:!0,id:!0});var i=S(e);G(n.$$.fragment,i),i.forEach(h),this.h()},h(){b(e,"class","copy-or-filter-button svelte-12wbf7u"),b(e,"id","copy-button")},m(o,i){w(o,e,i),H(n,e,null),l=!0,t||(a=k(e,"click",p(y(c[13]))),t=!0)},p(o,i){const s={};i&1216&&(s.title=o[10]?o[7]:o[6]),i&1024&&(s.name=o[10]?"checkmark":"copy"),n.$set(s)},i(o){l||(m(n.$$.fragment,o),l=!0)},o(o){_(n.$$.fragment,o),l=!1},d(o){o&&h(e),J(n),t=!1,a()}}}function ae(c){let e,n,l=c[0]&&V(c);return{c(){l&&l.c(),e=O()},l(t){l&&l.l(t),e=O()},m(t,a){l&&l.m(t,a),w(t,e,a),n=!0},p(t,[a]){t[0]?l?(l.p(t,a),a&1&&m(l,1)):(l=V(t),l.c(),m(l,1),l.m(e.parentNode,e)):l&&(g(),_(l,1,1,()=>{l=null}),I())},i(t){n||(m(l),n=!0)},o(t){_(l),n=!1},d(t){t&&h(e),l&&l.d(t)}}}function fe(c,e,n){let l,{show:t=!1}=e,{filterable:a=!0}=e,{copyable:o=!0}=e,{content:i}=e,{onFilter:s=T}=e,{filtered:r=!1}=e,{copyIconTitle:u}=e,{copySuccessIconTitle:F}=e,{filterIconTitle:B}=e,{class:E=""}=e;const{copy:D,copied:N}=ie();R(c,N,f=>n(10,l=f));const L=f=>D(f,i);return c.$$set=f=>{"show"in f&&n(0,t=f.show),"filterable"in f&&n(1,a=f.filterable),"copyable"in f&&n(2,o=f.copyable),"content"in f&&n(3,i=f.content),"onFilter"in f&&n(4,s=f.onFilter),"filtered"in f&&n(5,r=f.filtered),"copyIconTitle"in f&&n(6,u=f.copyIconTitle),"copySuccessIconTitle"in f&&n(7,F=f.copySuccessIconTitle),"filterIconTitle"in f&&n(8,B=f.filterIconTitle),"class"in f&&n(9,E=f.class)},[t,a,o,i,s,r,u,F,B,E,l,D,N,L]}class ye extends te{constructor(e){super(),le(this,e,fe,ae,M,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5,copyIconTitle:6,copySuccessIconTitle:7,filterIconTitle:8,class:9})}}const Te=c=>{const e=[],n=()=>{l&&(e.push(l),l="")};let l="",t=0;const a=o=>{for(let i=t+1;i<c.length;i++){const s=c[i];if(o(s)){n(),t=i+1;return}l+=s}t++};for(;t<c.length;){const o=c[t];if(A(o)){const i=t===0||U(c[t-1])&&ce(e[e.length-1]),s=c.slice(t+1).includes(o);if(i&&s){n(),a(A);continue}}if(ne(o)){l+=o,n(),t++;continue}if(d(o)){const i=`${c[t]}${c[t+1]}`,s=`${c[t]}${c[t+1]}${c[t+2]}`;if(d(s)){n(),l+=s,t+=3;continue}else if(d(i)){n(),l+=i,t+=2;continue}else{n(),l+=o,t++;continue}}if(oe(o)){n();const i=d(c[t-1]),s=c.slice(t+1).includes(o);if(i&&s){a(u=>u===o);continue}t++;continue}if(U(o)){n(),t++;continue}l+=o,t++}return n(),e};var re=ue;function ue(c,e,n,l){var t,a,o;return function(){if(o=this,a=Array.prototype.slice.call(arguments),t&&(n||l))return;if(!n)return r(),t=setTimeout(s,e),t;t=setTimeout(r,e),c.apply(o,a);function s(){r(),c.apply(o,a)}function r(){clearTimeout(t),t=null}}}const ge=se(re);export{ye as F,ge as d,Te as t};
