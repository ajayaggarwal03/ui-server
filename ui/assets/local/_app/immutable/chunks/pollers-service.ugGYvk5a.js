import{s as j,e as v,b as T,d as I,g as p,j as Q,k as w,t as P,f as R,l as k,n as W,p as E,a as A,h as S,D as g,u as C,q as O,r as V}from"./scheduler.78ThUSKQ.js";import{S as B,i as U,g as z,b as m,e as G,t as d,c as q,a as D,m as K,d as N}from"./index.G2Max4V_.js";import{I as Y}from"./icon.63Khk0lC.js";import{t as y}from"./translate.HrioCK44.js";import{r as b,a as h}from"./route-for-api.8MPPVIS_.js";const H=r=>({}),F=r=>({}),J=r=>({}),L=r=>({});function M(r){let e,s,t,o;return s=new Y({props:{name:"merge"}}),{c(){e=v("span"),q(s.$$.fragment),t=P(r[2]),this.h()},l(i){e=T(i,"SPAN",{class:!0});var n=I(e);D(s.$$.fragment,n),t=R(n,r[2]),n.forEach(p),this.h()},h(){Q(e,"class","version svelte-1qefyw")},m(i,n){w(i,e,n),K(s,e,null),k(e,t),o=!0},p(i,n){(!o||n&4)&&W(t,i[2])},i(i){o||(d(s.$$.fragment,i),o=!0)},o(i){m(s.$$.fragment,i),o=!1},d(i){i&&p(e),N(s)}}}function X(r){let e,s,t,o,i,n;s=new Y({props:{name:"merge"}});const _=r[4]["overall-default-worker"],a=E(_,r,r[3],L),c=r[4]["default-worker"],u=E(c,r,r[3],F);return{c(){e=v("span"),q(s.$$.fragment),t=P(r[2]),o=A(),a&&a.c(),i=A(),u&&u.c(),this.h()},l(l){e=T(l,"SPAN",{class:!0});var f=I(e);D(s.$$.fragment,f),t=R(f,r[2]),o=S(f),a&&a.l(f),i=S(f),u&&u.l(f),f.forEach(p),this.h()},h(){Q(e,"class","svelte-1qefyw"),g(e,"active-version",r[1]),g(e,"version",!r[1])},m(l,f){w(l,e,f),K(s,e,null),k(e,t),k(e,o),a&&a.m(e,null),k(e,i),u&&u.m(e,null),n=!0},p(l,f){(!n||f&4)&&W(t,l[2]),a&&a.p&&(!n||f&8)&&C(a,_,l,l[3],n?V(_,l[3],f,J):O(l[3]),L),u&&u.p&&(!n||f&8)&&C(u,c,l,l[3],n?V(c,l[3],f,H):O(l[3]),F),(!n||f&2)&&g(e,"active-version",l[1]),(!n||f&2)&&g(e,"version",!l[1])},i(l){n||(d(s.$$.fragment,l),d(a,l),d(u,l),n=!0)},o(l){m(s.$$.fragment,l),m(a,l),m(u,l),n=!1},d(l){l&&p(e),N(s),a&&a.d(l),u&&u.d(l)}}}function Z(r){let e,s,t,o;const i=[X,M],n=[];function _(a,c){return a[0]&&a[2]?0:a[2]?1:-1}return~(s=_(r))&&(t=n[s]=i[s](r)),{c(){e=v("p"),t&&t.c(),this.h()},l(a){e=T(a,"P",{class:!0});var c=I(e);t&&t.l(c),c.forEach(p),this.h()},h(){Q(e,"class","flex select-all gap-2 font-mono")},m(a,c){w(a,e,c),~s&&n[s].m(e,null),o=!0},p(a,[c]){let u=s;s=_(a),s===u?~s&&n[s].p(a,c):(t&&(z(),m(n[u],1,1,()=>{n[u]=null}),G()),~s?(t=n[s],t?t.p(a,c):(t=n[s]=i[s](a),t.c()),d(t,1),t.m(e,null)):t=null)},i(a){o||(d(t),o=!0)},o(a){m(t),o=!1},d(a){a&&p(e),~s&&n[s].d()}}}function $(r,e,s){let{$$slots:t={},$$scope:o}=e,{defaultVersion:i=!1}=e,{active:n=!1}=e,{buildId:_=""}=e;return r.$$set=a=>{"defaultVersion"in a&&s(0,i=a.defaultVersion),"active"in a&&s(1,n=a.active),"buildId"in a&&s(2,_=a.buildId),"$$scope"in a&&s(3,o=a.$$scope)},[i,n,_,o,t]}class re extends B{constructor(e){super(),U(this,e,$,Z,j,{defaultVersion:0,active:1,buildId:2})}}async function oe(r,e=fetch){var a;const s=b("task-queue",r),t=await h(s,{request:e,params:{taskQueueType:"1"}}),o=await h(s,{request:e,params:{taskQueueType:"2"}});t!=null&&t.pollers||(t.pollers=[]),o!=null&&o.pollers||(o.pollers=[]),o.pollers.forEach(c=>{c.taskQueueTypes=["ACTIVITY"]}),t.pollers.forEach(c=>{c.taskQueueTypes=["WORKFLOW"]});const i=c=>(u,l)=>{const f=u[l.identity]||{lastAccessTime:void 0,taskQueueTypes:[]};return u[l.identity]={lastAccessTime:!f.lastAccessTime||f.lastAccessTime<l.lastAccessTime?l.lastAccessTime:f.lastAccessTime,taskQueueTypes:f.taskQueueTypes.concat([c])},u};o.pollers.filter(c=>t.pollers.some(u=>{if(c.identity===u.identity)return c.taskQueueTypes=[...u.taskQueueTypes,...c.taskQueueTypes],c})),(a=o.pollers)==null||a.reduce(i("ACTIVITY"),t.pollers.reduce(i("WORKFLOW"),{}));const n=o.pollers.length?o.pollers:t.pollers,_=o.pollers.length?o.taskQueueStatus:t.taskQueueStatus;return{pollers:n,taskQueueStatus:_}}async function le(r,e=fetch){const s=b("task-queue.rules",r);return h(s,{request:e,notifyOnError:!1,handleError:t=>{}})}async function ie(r,e=fetch){const s=b("task-queue.compatibility",r);return h(s,{request:e,notifyOnError:!1,onError:t=>{console.error(t)}})}async function ue(r,e=fetch){const{namespace:s,buildIds:t,taskQueue:o}=r,i=b("worker-task-reachability",{namespace:s}),n=new URLSearchParams;if(t.length)for(const _ of t)n.append("buildIds",_);else n.append("buildIds",""),n.append("taskQueues",o);return await h(i,{request:e,params:n,onError:_=>(console.error(_),{buildIdReachability:[]})})}function x(r){return!r||!r.length?y("workers.ready-to-be-retired"):r.length===1&&r.includes("CLOSED")?y("common.maybe"):y("common.no")}function ce(r,e,s){var n,_;const t=(n=r==null?void 0:r.buildIdReachability)==null?void 0:n.find(a=>a.buildId===s);if(!t)return"";const o=(_=t==null?void 0:t.taskQueueReachability)==null?void 0:_.find(a=>(a==null?void 0:a.taskQueue)===e);if(!o)return"";const i=o==null?void 0:o.reachability;return x(i)}export{re as C,ie as a,ue as b,ce as c,le as d,oe as g};
