import{S as Y,i as z,s as M,k as y,l as v,m as I,h as p,n as T,b as Q,v as U,d as m,f as j,g as d,y as P,q as W,z as B,r as K,A as N,F as h,u as R,B as q,K as A,a as S,c as E,D as g,L as C,M as F,N as L}from"./index.bac36631.js";import{I as D}from"./icon.821e2582.js";import{t as b}from"./translate.d045ded2.js";import{r as w,a as k}from"./route-for-api.10bd4f58.js";const G=r=>({}),V=r=>({}),H=r=>({}),O=r=>({});function J(r){let e,a,t,o;return a=new D({props:{name:"merge"}}),{c(){e=y("span"),P(a.$$.fragment),t=W(r[2]),this.h()},l(i){e=v(i,"SPAN",{class:!0});var n=I(e);B(a.$$.fragment,n),t=K(n,r[2]),n.forEach(p),this.h()},h(){T(e,"class","version svelte-1qefyw")},m(i,n){Q(i,e,n),N(a,e,null),h(e,t),o=!0},p(i,n){(!o||n&4)&&R(t,i[2])},i(i){o||(d(a.$$.fragment,i),o=!0)},o(i){m(a.$$.fragment,i),o=!1},d(i){i&&p(e),q(a)}}}function X(r){let e,a,t,o,i,n;a=new D({props:{name:"merge"}});const _=r[4]["overall-default-worker"],s=A(_,r,r[3],O),c=r[4]["default-worker"],u=A(c,r,r[3],V);return{c(){e=y("span"),P(a.$$.fragment),t=W(r[2]),o=S(),s&&s.c(),i=S(),u&&u.c(),this.h()},l(l){e=v(l,"SPAN",{class:!0});var f=I(e);B(a.$$.fragment,f),t=K(f,r[2]),o=E(f),s&&s.l(f),i=E(f),u&&u.l(f),f.forEach(p),this.h()},h(){T(e,"class","svelte-1qefyw"),g(e,"active-version",r[1]),g(e,"version",!r[1])},m(l,f){Q(l,e,f),N(a,e,null),h(e,t),h(e,o),s&&s.m(e,null),h(e,i),u&&u.m(e,null),n=!0},p(l,f){(!n||f&4)&&R(t,l[2]),s&&s.p&&(!n||f&8)&&C(s,_,l,l[3],n?L(_,l[3],f,H):F(l[3]),O),u&&u.p&&(!n||f&8)&&C(u,c,l,l[3],n?L(c,l[3],f,G):F(l[3]),V),(!n||f&2)&&g(e,"active-version",l[1]),(!n||f&2)&&g(e,"version",!l[1])},i(l){n||(d(a.$$.fragment,l),d(s,l),d(u,l),n=!0)},o(l){m(a.$$.fragment,l),m(s,l),m(u,l),n=!1},d(l){l&&p(e),q(a),s&&s.d(l),u&&u.d(l)}}}function Z(r){let e,a,t,o;const i=[X,J],n=[];function _(s,c){return s[0]&&s[2]?0:s[2]?1:-1}return~(a=_(r))&&(t=n[a]=i[a](r)),{c(){e=y("p"),t&&t.c(),this.h()},l(s){e=v(s,"P",{class:!0});var c=I(e);t&&t.l(c),c.forEach(p),this.h()},h(){T(e,"class","flex select-all gap-2 font-mono")},m(s,c){Q(s,e,c),~a&&n[a].m(e,null),o=!0},p(s,[c]){let u=a;a=_(s),a===u?~a&&n[a].p(s,c):(t&&(U(),m(n[u],1,1,()=>{n[u]=null}),j()),~a?(t=n[a],t?t.p(s,c):(t=n[a]=i[a](s),t.c()),d(t,1),t.m(e,null)):t=null)},i(s){o||(d(t),o=!0)},o(s){m(t),o=!1},d(s){s&&p(e),~a&&n[a].d()}}}function $(r,e,a){let{$$slots:t={},$$scope:o}=e,{defaultVersion:i=!1}=e,{active:n=!1}=e,{buildId:_=""}=e;return r.$$set=s=>{"defaultVersion"in s&&a(0,i=s.defaultVersion),"active"in s&&a(1,n=s.active),"buildId"in s&&a(2,_=s.buildId),"$$scope"in s&&a(3,o=s.$$scope)},[i,n,_,o,t]}class ne extends Y{constructor(e){super(),z(this,e,$,Z,M,{defaultVersion:0,active:1,buildId:2})}}async function re(r,e=fetch){var s;const a=w("task-queue",r),t=await k(a,{request:e,params:{taskQueueType:"1"}}),o=await k(a,{request:e,params:{taskQueueType:"2"}});t!=null&&t.pollers||(t.pollers=[]),o!=null&&o.pollers||(o.pollers=[]),o.pollers.forEach(c=>{c.taskQueueTypes=["ACTIVITY"]}),t.pollers.forEach(c=>{c.taskQueueTypes=["WORKFLOW"]});const i=c=>(u,l)=>{const f=u[l.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return u[l.identity]={lastAccessTime:!f.lastAccessTime||f.lastAccessTime<l.lastAccessTime?l.lastAccessTime:f.lastAccessTime,taskQueueTypes:f.taskQueueTypes.concat([c])},u};o.pollers.filter(c=>t.pollers.some(u=>{if(c.identity===u.identity)return c.taskQueueTypes=[...u.taskQueueTypes,...c.taskQueueTypes],c})),(s=o.pollers)==null||s.reduce(i("ACTIVITY"),t.pollers.reduce(i("WORKFLOW"),{}));const n=o.pollers.length?o.pollers:t.pollers,_=o.pollers.length?o.taskQueueStatus:t.taskQueueStatus;return{pollers:n,taskQueueStatus:_}}async function oe(r,e=fetch){const a=w("task-queue.compatibility",r);return k(a,{request:e,onError:t=>console.error(t)})}async function le(r,e=fetch){const{namespace:a,buildIds:t,taskQueue:o}=r,i=w("worker-task-reachability",{namespace:a}),n=new URLSearchParams;if(t.length)for(const _ of t)n.append("buildIds",_);else n.append("buildIds",""),n.append("taskQueues",o);return await k(i,{request:e,params:n,onError:_=>(console.error(_),{buildIdReachability:[]})})}function x(r){return!r||!r.length?b("workers.ready-to-be-retired"):r.length===1&&r.includes("CLOSED")?b("common.maybe"):b("common.no")}function ie(r,e,a){var n,_;const t=(n=r==null?void 0:r.buildIdReachability)==null?void 0:n.find(s=>s.buildId===a);if(!t)return"";const o=(_=t==null?void 0:t.taskQueueReachability)==null?void 0:_.find(s=>(s==null?void 0:s.taskQueue)===e);if(!o)return"";const i=o==null?void 0:o.reachability;return x(i)}export{ne as C,oe as a,le as b,ie as c,re as g};
