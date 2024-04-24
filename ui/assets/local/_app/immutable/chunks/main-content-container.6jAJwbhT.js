import{z as T,s as O,ac as ot,e as H,b as y,d as E,g as p,j as k,B as V,k as P,a as F,h as J,W as Q,l as q,c as b,A as R,G as U,p as X,m as nt,u as Y,q as Z,r as $,v as st,w as B}from"./scheduler.LRpOgQOC.js";import{S as L,i as N,c as I,a as A,m as w,t as v,b as S,d as G,g as it,e as rt}from"./index.dE1eZLcR.js";import{w as j}from"./entry.FUKMb_vl.js";import{h as ct}from"./has.iatLMeUG.js";import{f as at,a as ft}from"./events.IMW3Z37l.js";import{B as lt}from"./button.L2qiBYKN.js";const dt=e=>e===null||typeof e!="object"||Array.isArray(e)?!1:!!ct(e,"activityType"),M=200,z=j(0),D=j(M),d=j([]),h=j([]),ut=()=>{h.set([]),d.set([]),z.set(0),D.set(M)},qt=()=>{h.set([]),d.set([])},zt=e=>{d.set([]),T(h).includes(e.id)?h.set(T(h).filter(t=>t!==e.id)):h.set([...T(h),e.id])},Dt=e=>{d.set([]),T(h).includes(e.id)?h.set([]):h.set([e.id])},Vt=e=>{h.set([]),T(d).includes(e.id)?d.set([]):d.set([e.id])},Mt=(e,t)=>{if(h.set([]),dt(e)){d.set(T(d).filter(o=>o!==e.activityId));return}if(T(d).includes(e.id))d.set(T(d).filter(o=>o!==e.id));else{const o=T(d).find(l=>t==null?void 0:t.eventIds.has(l));o?d.set([...T(d).filter(l=>l!==o),e.id]):d.set([...T(d),e.id])}};function mt(e){let t,o,l;return o=new lt({props:{size:"sm",variant:"primary",leadingIcon:"arrow-down"}}),o.$on("click",function(){ot(e[1])&&e[1].apply(this,arguments)}),{c(){t=H("div"),I(o.$$.fragment),this.h()},l(s){t=y(s,"DIV",{class:!0});var n=E(t);A(o.$$.fragment,n),n.forEach(p),this.h()},h(){k(t,"class","jump-to-bottom relative svelte-1a615g3"),V(t,"hidden",e[0])},m(s,n){P(s,t,n),w(o,t,null),l=!0},p(s,[n]){e=s,(!l||n&1)&&V(t,"hidden",e[0])},i(s){l||(v(o.$$.fragment,s),l=!0)},o(s){S(o.$$.fragment,s),l=!1},d(s){s&&p(t),G(o)}}}function ht(e,t,o){let{hidden:l}=t,{onScrollToBottomClick:s}=t;return e.$$set=n=>{"hidden"in n&&o(0,l=n.hidden),"onScrollToBottomClick"in n&&o(1,s=n.onScrollToBottomClick)},[l,s]}class _t extends L{constructor(t){super(),N(this,t,ht,mt,O,{hidden:0,onScrollToBottomClick:1})}}function Tt(e){let t,o,l;return o=new lt({props:{size:"sm",variant:"primary",leadingIcon:"arrow-up"}}),o.$on("click",function(){ot(e[1])&&e[1].apply(this,arguments)}),{c(){t=H("div"),I(o.$$.fragment),this.h()},l(s){t=y(s,"DIV",{});var n=E(t);A(o.$$.fragment,n),n.forEach(p),this.h()},h(){V(t,"invisible",e[0])},m(s,n){P(s,t,n),w(o,t,null),l=!0},p(s,[n]){e=s,(!l||n&1)&&V(t,"invisible",e[0])},i(s){l||(v(o.$$.fragment,s),l=!0)},o(s){S(o.$$.fragment,s),l=!1},d(s){s&&p(t),G(o)}}}function gt(e,t,o){let{hidden:l}=t,{onScrollToTopClick:s}=t;return e.$$set=n=>{"hidden"in n&&o(0,l=n.hidden),"onScrollToTopClick"in n&&o(1,s=n.onScrollToTopClick)},[l,s]}class vt extends L{constructor(t){super(),N(this,t,gt,Tt,O,{hidden:0,onScrollToTopClick:1})}}function x(e){let t,o;return t=new _t({props:{hidden:e[1],onScrollToBottomClick:e[3]}}),{c(){I(t.$$.fragment)},l(l){A(t.$$.fragment,l)},m(l,s){w(t,l,s),o=!0},p(l,s){const n={};s&2&&(n.hidden=l[1]),s&8&&(n.onScrollToBottomClick=l[3]),t.$set(n)},i(l){o||(v(t.$$.fragment,l),o=!0)},o(l){S(t.$$.fragment,l),o=!1},d(l){G(t,l)}}}function pt(e){let t,o,l,s,n;o=new vt({props:{hidden:e[0],onScrollToTopClick:e[2]}});let i=e[4].length&&x(e);return{c(){t=H("div"),I(o.$$.fragment),l=F(),i&&i.c(),this.h()},l(a){t=y(a,"DIV",{id:!0,class:!0});var c=E(t);A(o.$$.fragment,c),l=J(c),i&&i.l(c),c.forEach(p),this.h()},h(){k(t,"id","scroll-container"),k(t,"class",s=Q(e[5].class)+" svelte-1qpv1pk")},m(a,c){P(a,t,c),w(o,t,null),q(t,l),i&&i.m(t,null),n=!0},p(a,[c]){const g={};c&1&&(g.hidden=a[0]),c&4&&(g.onScrollToTopClick=a[2]),o.$set(g),a[4].length?i?(i.p(a,c),c&16&&v(i,1)):(i=x(a),i.c(),v(i,1),i.m(t,null)):i&&(it(),S(i,1,1,()=>{i=null}),rt()),(!n||c&32&&s!==(s=Q(a[5].class)+" svelte-1qpv1pk"))&&k(t,"class",s)},i(a){n||(v(o.$$.fragment,a),v(i),n=!0)},o(a){S(o.$$.fragment,a),S(i),n=!1},d(a){a&&p(t),G(o),i&&i.d()}}}function St(e,t,o){let l;b(e,at,c=>o(4,l=c));let{scrollToTopHidden:s=!0}=t,{scrollToBottomHidden:n=!1}=t,{onScrollToTopClick:i}=t,{onScrollToBottomClick:a}=t;return e.$$set=c=>{o(5,t=R(R({},t),U(c))),"scrollToTopHidden"in c&&o(0,s=c.scrollToTopHidden),"scrollToBottomHidden"in c&&o(1,n=c.scrollToBottomHidden),"onScrollToTopClick"in c&&o(2,i=c.onScrollToTopClick),"onScrollToBottomClick"in c&&o(3,a=c.onScrollToBottomClick)},t=U(t),[s,n,i,a,l,t]}class kt extends L{constructor(t){super(),N(this,t,St,pt,O,{scrollToTopHidden:0,scrollToBottomHidden:1,onScrollToTopClick:2,onScrollToBottomClick:3})}}const Ct=e=>({}),tt=e=>({});function Bt(e){let t,o,l,s,n,i,a,c;const g=e[5].default,u=X(g,e,e[4],null),C=e[5].main,m=X(C,e,e[4],tt);return n=new kt({props:{scrollToTopHidden:e[0],scrollToBottomHidden:bt,onScrollToTopClick:e[1],onScrollToBottomClick:e[2]}}),{c(){t=H("div"),u&&u.c(),o=F(),l=H("main"),m&&m.c(),s=F(),I(n.$$.fragment),this.h()},l(f){t=y(f,"DIV",{id:!0,class:!0});var r=E(t);u&&u.l(r),o=J(r),l=y(r,"MAIN",{id:!0});var _=E(l);m&&m.l(_),_.forEach(p),s=J(r),A(n.$$.fragment,r),r.forEach(p),this.h()},h(){k(l,"id","content"),k(t,"id","content-wrapper"),k(t,"class","surface-secondary relative h-screen w-max flex-auto overflow-auto")},m(f,r){P(f,t,r),u&&u.m(t,null),q(t,o),q(t,l),m&&m.m(l,null),q(t,s),w(n,t,null),i=!0,a||(c=nt(t,"scroll",e[3]),a=!0)},p(f,[r]){u&&u.p&&(!i||r&16)&&Y(u,g,f,f[4],i?$(g,f[4],r,null):Z(f[4]),null),m&&m.p&&(!i||r&16)&&Y(m,C,f,f[4],i?$(C,f[4],r,Ct):Z(f[4]),tt);const _={};r&1&&(_.scrollToTopHidden=f[0]),n.$set(_)},i(f){i||(v(u,f),v(m,f),v(n.$$.fragment,f),i=!0)},o(f){S(u,f),S(m,f),S(n.$$.fragment,f),i=!1},d(f){f&&p(t),u&&u.d(f),m&&m.d(f),G(n),a=!1,c()}}}const et=j(0);let bt=!1,Ht=150;function W(){return document.getElementById("content-wrapper")}function yt(e,t,o){let l,s=st,n,i,a;b(e,et,r=>o(6,l=r)),b(e,D,r=>o(7,n=r)),b(e,z,r=>o(8,i=r)),b(e,ft,r=>o(9,a=r)),e.$$.on_destroy.push(()=>s());let{$$slots:c={},$$scope:g}=t,u=!0;function C(){var r;B(z,i=0,i),B(D,n=M,n),(r=W())===null||r===void 0||r.scrollTo(0,0)}function m(){var r,_;const K=a==null?void 0:a.length;K&&(ut(),B(D,n=K,n),B(z,i=n-M,i)),(r=W())===null||r===void 0||r.scrollTo(0,(_=W())===null||_===void 0?void 0:_.scrollHeight)}function f(r){const _=r.target;B(et,l=_.scrollTop,l),o(0,u=l<Ht)}return e.$$set=r=>{"$$scope"in r&&o(4,g=r.$$scope)},[u,C,m,f,g,c]}class Ot extends L{constructor(t){super(),N(this,t,yt,Bt,O,{})}}export{Ot as M,Vt as a,z as b,qt as c,et as d,D as e,M as f,zt as g,Dt as h,dt as i,ut as j,h as k,d as l,Mt as s};
