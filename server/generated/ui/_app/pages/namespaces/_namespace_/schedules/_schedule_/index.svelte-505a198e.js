import{S as ne,i as ae,s as oe,e as v,t as E,k as y,c as g,a as b,h as I,d as u,m as T,b as _,g as w,M as m,j as K,E as A,I as Xe,R as re,J as xe,K as et,L as tt,q as P,o as S,w as N,x as U,y as W,B as L,N as Ye,l as Y,aa as rt,ac as Nl,n as Ze,a7 as Fl,am as Bl,p as Qe,ad as Ul,T as ze,C as Ie,V as Re,Y as gl,ae as Hl,G as jl,W as Wl,a4 as Ol,a5 as Gl,_ as Jl,$ as Kl,Z as Yl,a9 as at,f as Zl,ab as bl}from"../../../../../chunks/index-1da60d19.js";import{p as Ql}from"../../../../../chunks/stores-bed2f46e.js";import{I as it}from"../../../../../chunks/index-c656f9dc.js";import{m as ot,n as wl,d as Ll}from"../../../../../chunks/route-for-ef692dd7.js";import{g as Xl}from"../../../../../chunks/navigation-6709cf39.js";import{f as kl,d as xl,u as es,p as ts}from"../../../../../chunks/schedule-service-6ad9ce8e.js";import{f as Pe}from"../../../../../chunks/format-date-f8f72e15.js";import{t as ft}from"../../../../../chunks/time-format-c0d655b5.js";import{l as st}from"../../../../../chunks/schedules-c2f44465.js";import{W as zl}from"../../../../../chunks/workflow-status-4f13a27e.js";import{f as $l}from"../../../../../chunks/workflow-service-e7632726.js";import{E as ls}from"../../../../../chunks/empty-state-3e8347d9.js";import{L as ss}from"../../../../../chunks/link-12a67bb2.js";import{S as rs}from"../../../../../chunks/schedule-frequency-96c74f57.js";import{M as El}from"../../../../../chunks/modal-de829d7d.js";import{f as ns}from"../../../../../chunks/index-ad10ae27.js";import{L as ql}from"../../../../../chunks/loading-a1bf5066.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/route-for-api-692c1159.js";import"../../../../../chunks/index-6843fe21.js";import"../../../../../chunks/notifications-121124a6.js";import"../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../chunks/is-function-b969a126.js";import"../../../../../chunks/to-duration-3f40f60b.js";import"../../../../../chunks/is-18735aa3.js";import"../../../../../chunks/persist-store-f0d328df.js";import"../../../../../chunks/simplify-attributes-6c8439d9.js";import"../../../../../chunks/code-block-d99d48ee.js";import"../../../../../chunks/copy-to-clipboard-4893348d.js";import"../../../../../chunks/button-bb025b66.js";import"../../../../../chunks/badge-8b9f8ded.js";function as(r){let e,s,t,l,a;return{c(){e=v("h2"),s=E("Memo"),t=y(),l=v("p"),a=E(r[0]),this.h()},l(n){e=g(n,"H2",{class:!0});var o=b(e);s=I(o,"Memo"),o.forEach(u),t=T(n),l=g(n,"P",{});var i=b(l);a=I(i,r[0]),i.forEach(u),this.h()},h(){_(e,"class","mb-4 text-2xl")},m(n,o){w(n,e,o),m(e,s),w(n,t,o),w(n,l,o),m(l,a)},p(n,[o]){o&1&&K(a,n[0])},i:A,o:A,d(n){n&&u(e),n&&u(t),n&&u(l)}}}function os(r,e,s){let{notes:t=""}=e;return r.$$set=l=>{"notes"in l&&s(0,t=l.notes)},[t]}class is extends ne{constructor(e){super(),ae(this,e,os,as,oe,{notes:0})}}function fs(r){let e,s;const t=r[2].default,l=Xe(t,r,r[1],null);return{c(){e=v("div"),l&&l.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var n=b(e);l&&l.l(n),n.forEach(u),this.h()},h(){_(e,"class","panel svelte-iclf07"),re(e,"error",r[0])},m(a,n){w(a,e,n),l&&l.m(e,null),s=!0},p(a,[n]){l&&l.p&&(!s||n&2)&&xe(l,t,a,a[1],s?tt(t,a[1],n,null):et(a[1]),null),n&1&&re(e,"error",a[0])},i(a){s||(P(l,a),s=!0)},o(a){S(l,a),s=!1},d(a){a&&u(e),l&&l.d(a)}}}function us(r,e,s){let{$$slots:t={},$$scope:l}=e,{error:a=!1}=e;return r.$$set=n=>{"error"in n&&s(0,a=n.error),"$$scope"in n&&s(1,l=n.$$scope)},[a,l,t]}class nt extends ne{constructor(e){super(),ae(this,e,us,fs,oe,{error:0})}}function Il(r,e,s){const t=r.slice();return t[3]=e[s],t}function cs(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function ds(r){let e,s,t,l,a,n,o,i,f,c=Pe(r[3].actualTime,r[2])+"",d,p;return t=new zl({props:{status:r[6].status}}),n=new ss({props:{"sveltekit:prefetch":!0,href:wl({workflow:r[3].startWorkflowResult.workflowId,run:r[3].startWorkflowResult.runId,namespace:r[1]}),$$slots:{default:[ms]},$$scope:{ctx:r}}}),{c(){e=v("div"),s=v("div"),N(t.$$.fragment),l=y(),a=v("div"),N(n.$$.fragment),o=y(),i=v("div"),f=v("p"),d=E(c),this.h()},l(h){e=g(h,"DIV",{class:!0});var R=b(e);s=g(R,"DIV",{class:!0});var z=b(s);U(t.$$.fragment,z),z.forEach(u),l=T(R),a=g(R,"DIV",{class:!0});var q=b(a);U(n.$$.fragment,q),q.forEach(u),o=T(R),i=g(R,"DIV",{class:!0});var B=b(i);f=g(B,"P",{});var j=b(f);d=I(j,c),j.forEach(u),B.forEach(u),R.forEach(u),this.h()},h(){_(s,"class","w-28"),_(a,"class","w-96"),_(i,"class","ml-auto"),_(e,"class","row svelte-1mikfkz")},m(h,R){w(h,e,R),m(e,s),W(t,s,null),m(e,l),m(e,a),W(n,a,null),m(e,o),m(e,i),m(i,f),m(f,d),p=!0},p(h,R){const z={};R&3&&(z.status=h[6].status),t.$set(z);const q={};R&3&&(q.href=wl({workflow:h[3].startWorkflowResult.workflowId,run:h[3].startWorkflowResult.runId,namespace:h[1]})),R&129&&(q.$$scope={dirty:R,ctx:h}),n.$set(q),(!p||R&5)&&c!==(c=Pe(h[3].actualTime,h[2])+"")&&K(d,c)},i(h){p||(P(t.$$.fragment,h),P(n.$$.fragment,h),p=!0)},o(h){S(t.$$.fragment,h),S(n.$$.fragment,h),p=!1},d(h){h&&u(e),L(t),L(n)}}}function ms(r){let e=r[3].startWorkflowResult.workflowId+"",s;return{c(){s=E(e)},l(t){s=I(t,e)},m(t,l){w(t,s,l)},p(t,l){l&1&&e!==(e=t[3].startWorkflowResult.workflowId+"")&&K(s,e)},d(t){t&&u(s)}}}function hs(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function Rl(r,e){let s,t,l,a,n={ctx:e,current:null,token:null,hasCatch:!1,pending:hs,then:ds,catch:cs,value:6,blocks:[,,,]};return rt(l=$l({namespace:e[1],workflowId:ot(e[3].startWorkflowResult.workflowId),runId:e[3].startWorkflowResult.runId},fetch),n),{key:r,first:null,c(){s=Y(),t=Y(),n.block.c(),this.h()},l(o){s=Y(),t=Y(),n.block.l(o),this.h()},h(){this.first=s},m(o,i){w(o,s,i),w(o,t,i),n.block.m(o,n.anchor=i),n.mount=()=>t.parentNode,n.anchor=t,a=!0},p(o,i){e=o,n.ctx=e,i&3&&l!==(l=$l({namespace:e[1],workflowId:ot(e[3].startWorkflowResult.workflowId),runId:e[3].startWorkflowResult.runId},fetch))&&rt(l,n)||Nl(n,e,i)},i(o){a||(P(n.block),a=!0)},o(o){for(let i=0;i<3;i+=1){const f=n.blocks[i];S(f)}a=!1},d(o){o&&u(s),o&&u(t),n.block.d(o),n.token=null,n=null}}}function Pl(r){let e,s;return e=new ls({props:{title:"No Recent Runs"}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function ps(r){let e,s,t,l=[],a=new Map,n,o,i,f=r[0].slice(0,5);const c=p=>p[3].startWorkflowResult.workflowId;for(let p=0;p<f.length;p+=1){let h=Il(r,f,p),R=c(h);a.set(R,l[p]=Rl(R,h))}let d=!r[0].length&&Pl();return{c(){e=v("h2"),s=E("Recent Runs"),t=y();for(let p=0;p<l.length;p+=1)l[p].c();n=y(),d&&d.c(),o=Y(),this.h()},l(p){e=g(p,"H2",{class:!0});var h=b(e);s=I(h,"Recent Runs"),h.forEach(u),t=T(p);for(let R=0;R<l.length;R+=1)l[R].l(p);n=T(p),d&&d.l(p),o=Y(),this.h()},h(){_(e,"class","mb-4 text-2xl")},m(p,h){w(p,e,h),m(e,s),w(p,t,h);for(let R=0;R<l.length;R+=1)l[R].m(p,h);w(p,n,h),d&&d.m(p,h),w(p,o,h),i=!0},p(p,h){h&7&&(f=p[0].slice(0,5),Ze(),l=Fl(l,h,c,1,p,f,a,n.parentNode,Bl,Rl,n,Il),Qe()),p[0].length?d&&(Ze(),S(d,1,1,()=>{d=null}),Qe()):d?h&1&&P(d,1):(d=Pl(),d.c(),P(d,1),d.m(o.parentNode,o))},i(p){if(!i){for(let h=0;h<f.length;h+=1)P(l[h]);P(d),i=!0}},o(p){for(let h=0;h<l.length;h+=1)S(l[h]);S(d),i=!1},d(p){p&&u(e),p&&u(t);for(let h=0;h<l.length;h+=1)l[h].d(p);p&&u(n),d&&d.d(p),p&&u(o)}}}function _s(r){let e,s;return e=new nt({props:{$$slots:{default:[ps]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const a={};l&135&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function vs(r,e,s){let t;Ye(r,ft,n=>s(2,t=n));let{recentRuns:l=[]}=e,{namespace:a}=e;return r.$$set=n=>{"recentRuns"in n&&s(0,l=n.recentRuns),"namespace"in n&&s(1,a=n.namespace)},[l,a,t]}class gs extends ne{constructor(e){super(),ae(this,e,vs,_s,oe,{recentRuns:0,namespace:1})}}function Sl(r,e,s){const t=r.slice();return t[2]=e[s],t}function Dl(r){let e,s,t=Pe(r[2],r[1],"from now")+"",l,a;return{c(){e=v("div"),s=v("p"),l=E(t),a=y(),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=b(e);s=g(o,"P",{});var i=b(s);l=I(i,t),i.forEach(u),a=T(o),o.forEach(u),this.h()},h(){_(e,"class","row svelte-kbuuws")},m(n,o){w(n,e,o),m(e,s),m(s,l),m(e,a)},p(n,o){o&3&&t!==(t=Pe(n[2],n[1],"from now")+"")&&K(l,t)},d(n){n&&u(e)}}}function bs(r){let e,s,t,l,a=r[0].slice(0,5),n=[];for(let o=0;o<a.length;o+=1)n[o]=Dl(Sl(r,a,o));return{c(){e=v("h2"),s=E("Upcoming Runs"),t=y();for(let o=0;o<n.length;o+=1)n[o].c();l=Y(),this.h()},l(o){e=g(o,"H2",{class:!0});var i=b(e);s=I(i,"Upcoming Runs"),i.forEach(u),t=T(o);for(let f=0;f<n.length;f+=1)n[f].l(o);l=Y(),this.h()},h(){_(e,"class","mb-4 text-2xl")},m(o,i){w(o,e,i),m(e,s),w(o,t,i);for(let f=0;f<n.length;f+=1)n[f].m(o,i);w(o,l,i)},p(o,i){if(i&3){a=o[0].slice(0,5);let f;for(f=0;f<a.length;f+=1){const c=Sl(o,a,f);n[f]?n[f].p(c,i):(n[f]=Dl(c),n[f].c(),n[f].m(l.parentNode,l))}for(;f<n.length;f+=1)n[f].d(1);n.length=a.length}},d(o){o&&u(e),o&&u(t),Ul(n,o),o&&u(l)}}}function ws(r){let e,s;return e=new nt({props:{$$slots:{default:[bs]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const a={};l&35&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function ks(r,e,s){let t;Ye(r,ft,a=>s(1,t=a));let{futureRuns:l=[]}=e;return r.$$set=a=>{"futureRuns"in a&&s(0,l=a.futureRuns)},[l,t]}class $s extends ne{constructor(e){super(),ae(this,e,ks,ws,oe,{futureRuns:0})}}function yl(r){var G,De,be,fe,Ne,ue,we,ce,Ue,ke,de,We,$e;let e,s,t=((De=(G=r[0])==null?void 0:G.startTime)!=null?De:"")+"",l,a,n,o,i=((fe=(be=r[0])==null?void 0:be.endTime)!=null?fe:"")+"",f,c,d,p,h=((ue=(Ne=r[0])==null?void 0:Ne.jitter)!=null?ue:"")+"",R,z,q,B,j=((Ue=(ce=(we=r[0])==null?void 0:we.excludeCalendar)==null?void 0:ce[0])!=null?Ue:"")+"",ee,H,M,V,Q=((de=(ke=r[1])==null?void 0:ke.remainingActions)!=null?de:"")+"",O,ve,ie,Se,X=(($e=(We=r[2])==null?void 0:We.overlapPolicy)!=null?$e:"")+"",ge;return{c(){e=v("p"),s=E("Schedule Start Time: "),l=E(t),a=y(),n=v("p"),o=E("Schedule End Time: "),f=E(i),c=y(),d=v("p"),p=E("Jitter: "),R=E(h),z=y(),q=v("p"),B=E("Exclusion Calendar: "),ee=E(j),H=y(),M=v("p"),V=E("Remaining Actions: "),O=E(Q),ve=y(),ie=v("p"),Se=E("Overlap Policy: "),ge=E(X)},l(k){e=g(k,"P",{});var C=b(e);s=I(C,"Schedule Start Time: "),l=I(C,t),C.forEach(u),a=T(k),n=g(k,"P",{});var te=b(n);o=I(te,"Schedule End Time: "),f=I(te,i),te.forEach(u),c=T(k),d=g(k,"P",{});var x=b(d);p=I(x,"Jitter: "),R=I(x,h),x.forEach(u),z=T(k),q=g(k,"P",{});var me=b(q);B=I(me,"Exclusion Calendar: "),ee=I(me,j),me.forEach(u),H=T(k),M=g(k,"P",{});var Z=b(M);V=I(Z,"Remaining Actions: "),O=I(Z,Q),Z.forEach(u),ve=T(k),ie=g(k,"P",{});var he=b(ie);Se=I(he,"Overlap Policy: "),ge=I(he,X),he.forEach(u)},m(k,C){w(k,e,C),m(e,s),m(e,l),w(k,a,C),w(k,n,C),m(n,o),m(n,f),w(k,c,C),w(k,d,C),m(d,p),m(d,R),w(k,z,C),w(k,q,C),m(q,B),m(q,ee),w(k,H,C),w(k,M,C),m(M,V),m(M,O),w(k,ve,C),w(k,ie,C),m(ie,Se),m(ie,ge)},p(k,C){var te,x,me,Z,he,le,Ee,J,F,lt,qe,Fe,Be;C&1&&t!==(t=((x=(te=k[0])==null?void 0:te.startTime)!=null?x:"")+"")&&K(l,t),C&1&&i!==(i=((Z=(me=k[0])==null?void 0:me.endTime)!=null?Z:"")+"")&&K(f,i),C&1&&h!==(h=((le=(he=k[0])==null?void 0:he.jitter)!=null?le:"")+"")&&K(R,h),C&1&&j!==(j=((F=(J=(Ee=k[0])==null?void 0:Ee.excludeCalendar)==null?void 0:J[0])!=null?F:"")+"")&&K(ee,j),C&2&&Q!==(Q=((qe=(lt=k[1])==null?void 0:lt.remainingActions)!=null?qe:"")+"")&&K(O,Q),C&4&&X!==(X=((Be=(Fe=k[2])==null?void 0:Fe.overlapPolicy)!=null?Be:"")+"")&&K(ge,X)},d(k){k&&u(e),k&&u(a),k&&u(n),k&&u(c),k&&u(d),k&&u(z),k&&u(q),k&&u(H),k&&u(M),k&&u(ve),k&&u(ie)}}}function Es(r){let e,s,t,l,a,n,o,i;t=new it({props:{class:"inline",name:r[3]?"caretUp":"caretDown"}});let f=r[3]&&yl(r);return{c(){e=v("p"),s=E("Advanced Settings "),N(t.$$.fragment),l=y(),f&&f.c(),a=Y(),this.h()},l(c){e=g(c,"P",{class:!0});var d=b(e);s=I(d,"Advanced Settings "),U(t.$$.fragment,d),d.forEach(u),l=T(c),f&&f.l(c),a=Y(),this.h()},h(){_(e,"class","settings svelte-7frpd7")},m(c,d){w(c,e,d),m(e,s),W(t,e,null),w(c,l,d),f&&f.m(c,d),w(c,a,d),n=!0,o||(i=ze(e,"click",r[4]),o=!0)},p(c,[d]){const p={};d&8&&(p.name=c[3]?"caretUp":"caretDown"),t.$set(p),c[3]?f?f.p(c,d):(f=yl(c),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i(c){n||(P(t.$$.fragment,c),n=!0)},o(c){S(t.$$.fragment,c),n=!1},d(c){c&&u(e),L(t),c&&u(l),f&&f.d(c),c&&u(a),o=!1,i()}}}function Is(r,e,s){let{spec:t}=e,{state:l}=e,{policies:a}=e,n=!1;const o=()=>s(3,n=!n);return r.$$set=i=>{"spec"in i&&s(0,t=i.spec),"state"in i&&s(1,l=i.state),"policies"in i&&s(2,a=i.policies)},[t,l,a,n,o]}class Rs extends ne{constructor(e){super(),ae(this,e,Is,Es,oe,{spec:0,state:1,policies:2})}}function Ps(r){let e,s,t,l,a;return{c(){e=v("p"),s=E("Error Message"),t=y(),l=v("p"),a=E(r[0]),this.h()},l(n){e=g(n,"P",{class:!0});var o=b(e);s=I(o,"Error Message"),o.forEach(u),t=T(n),l=g(n,"P",{class:!0});var i=b(l);a=I(i,r[0]),i.forEach(u),this.h()},h(){_(e,"class","error-text svelte-1lke5yx"),_(l,"class","error-text svelte-1lke5yx")},m(n,o){w(n,e,o),m(e,s),w(n,t,o),w(n,l,o),m(l,a)},p(n,o){o&1&&K(a,n[0])},d(n){n&&u(e),n&&u(t),n&&u(l)}}}function Ss(r){let e,s;return e=new nt({props:{error:!0,$$slots:{default:[Ps]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const a={};l&3&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Ds(r,e,s){let{error:t=""}=e;return r.$$set=l=>{"error"in l&&s(0,t=l.error)},[t]}class ys extends ne{constructor(e){super(),ae(this,e,Ds,Ss,oe,{error:0})}}function Ts(r){let e,s,t,l,a,n;return a=new rs({props:{calendar:r[0],interval:r[1]}}),{c(){e=v("h2"),s=E("Frequency"),t=y(),l=v("div"),N(a.$$.fragment),this.h()},l(o){e=g(o,"H2",{class:!0});var i=b(e);s=I(i,"Frequency"),i.forEach(u),t=T(o),l=g(o,"DIV",{class:!0});var f=b(l);U(a.$$.fragment,f),f.forEach(u),this.h()},h(){_(e,"class","mb-4 text-2xl"),_(l,"class","pr-2")},m(o,i){w(o,e,i),m(e,s),w(o,t,i),w(o,l,i),W(a,l,null),n=!0},p(o,i){const f={};i&1&&(f.calendar=o[0]),i&2&&(f.interval=o[1]),a.$set(f)},i(o){n||(P(a.$$.fragment,o),n=!0)},o(o){S(a.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(t),o&&u(l),L(a)}}}function Ms(r){let e,s;return e=new nt({props:{$$slots:{default:[Ts]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const a={};l&7&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Vs(r,e,s){let{calendar:t}=e,{interval:l}=e;return r.$$set=a=>{"calendar"in a&&s(0,t=a.calendar),"interval"in a&&s(1,l=a.interval)},[t,l]}class As extends ne{constructor(e){super(),ae(this,e,Vs,Ms,oe,{calendar:0,interval:1})}}function Cs(r){let e,s,t;const l=r[2].default,a=Xe(l,r,r[1],null);return{c(){e=v("div"),a&&a.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=b(e);a&&a.l(o),o.forEach(u),this.h()},h(){_(e,"class",s="relative inline-block "+r[0].class)},m(n,o){w(n,e,o),a&&a.m(e,null),t=!0},p(n,[o]){a&&a.p&&(!t||o&2)&&xe(a,l,n,n[1],t?tt(l,n[1],o,null):et(n[1]),null),(!t||o&1&&s!==(s="relative inline-block "+n[0].class))&&_(e,"class",s)},i(n){t||(P(a,n),t=!0)},o(n){S(a,n),t=!1},d(n){n&&u(e),a&&a.d(n)}}}function Ns(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=a=>{s(0,e=Ie(Ie({},e),Re(a))),"$$scope"in a&&s(1,l=a.$$scope)},e=Re(e),[e,l,t]}class Us extends ne{constructor(e){super(),ae(this,e,Ns,Cs,oe,{})}}const Ws=r=>{const e=l=>{r.dispatchEvent(new CustomEvent("toggle-menu")),l.stopPropagation()},s=l=>{var n;let a=(n=l.path)!=null&&n.length?l.path[0]:l.target;!a&&l.relatedTarget&&(a=l.relatedTarget),r&&!r.contains(a)&&!l.defaultPrevented&&(r.dispatchEvent(new CustomEvent("close-menu")),l.stopPropagation())},t=l=>{(l==null?void 0:l.key)==="Escape"&&r.dispatchEvent(new CustomEvent("close-menu"))};return r.setAttribute("tabindex","0"),r.addEventListener("click",e,!1),document.addEventListener("click",s,!1),document.addEventListener("keyup",t,!1),{destroy(){r.removeEventListener("click",e,!1),document.removeEventListener("click",s,!1),document.removeEventListener("keyup",t,!1)}}};function Ls(r){let e,s,t,l,a,n;const o=r[8].default,i=Xe(o,r,r[7],null);return{c(){e=v("button"),i&&i.c(),this.h()},l(f){e=g(f,"BUTTON",{"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,class:!0});var c=b(e);i&&i.l(c),c.forEach(u),this.h()},h(){_(e,"aria-haspopup",s=!r[3]),_(e,"aria-controls",r[1]),_(e,"aria-expanded",r[0]),_(e,"class",t=gl(r[6].class)+" svelte-6vunh2"),e.disabled=r[3],re(e,"dark",r[2])},m(f,c){w(f,e,c),i&&i.m(e,null),l=!0,a||(n=[Hl(Ws.call(null,e)),ze(e,"close-menu",r[4]),ze(e,"toggle-menu",r[5]),ze(e,"click",r[9])],a=!0)},p(f,[c]){i&&i.p&&(!l||c&128)&&xe(i,o,f,f[7],l?tt(o,f[7],c,null):et(f[7]),null),(!l||c&8&&s!==(s=!f[3]))&&_(e,"aria-haspopup",s),(!l||c&2)&&_(e,"aria-controls",f[1]),(!l||c&1)&&_(e,"aria-expanded",f[0]),(!l||c&64&&t!==(t=gl(f[6].class)+" svelte-6vunh2"))&&_(e,"class",t),(!l||c&8)&&(e.disabled=f[3]),c&68&&re(e,"dark",f[2])},i(f){l||(P(i,f),l=!0)},o(f){S(i,f),l=!1},d(f){f&&u(e),i&&i.d(f),a=!1,jl(n)}}}function zs(r,e,s){let{$$slots:t={},$$scope:l}=e,{show:a}=e,{controls:n}=e,{dark:o=!1}=e,{disabled:i=!1}=e;const f=()=>{!i&&s(0,a=!1)},c=()=>{!i&&s(0,a=!a)};function d(p){Wl.call(this,r,p)}return r.$$set=p=>{s(6,e=Ie(Ie({},e),Re(p))),"show"in p&&s(0,a=p.show),"controls"in p&&s(1,n=p.controls),"dark"in p&&s(2,o=p.dark),"disabled"in p&&s(3,i=p.disabled),"$$scope"in p&&s(7,l=p.$$scope)},e=Re(e),[a,n,o,i,f,c,e,l,t,d]}class qs extends ne{constructor(e){super(),ae(this,e,zs,Ls,oe,{show:0,controls:1,dark:2,disabled:3})}}function Tl(r){let e,s,t,l;const a=r[8].default,n=Xe(a,r,r[7],null);return{c(){e=v("ul"),n&&n.c(),this.h()},l(o){e=g(o,"UL",{role:!0,class:!0,"aria-labelledby":!0,width:!0,id:!0});var i=b(e);n&&n.l(i),i.forEach(u),this.h()},h(){_(e,"role","menu"),_(e,"class",s="absolute z-50 mt-1 w-full list-none overflow-y-scroll rounded border bg-white text-gray-900 shadow "+r[6].class+" svelte-zt7cn"),_(e,"aria-labelledby",r[0]),_(e,"width",r[5]),_(e,"id",r[0]),re(e,"dark",r[2]),re(e,"left",r[3]),re(e,"right",r[4])},m(o,i){w(o,e,i),n&&n.m(e,null),l=!0},p(o,i){n&&n.p&&(!l||i&128)&&xe(n,a,o,o[7],l?tt(a,o[7],i,null):et(o[7]),null),(!l||i&64&&s!==(s="absolute z-50 mt-1 w-full list-none overflow-y-scroll rounded border bg-white text-gray-900 shadow "+o[6].class+" svelte-zt7cn"))&&_(e,"class",s),(!l||i&1)&&_(e,"aria-labelledby",o[0]),(!l||i&1)&&_(e,"id",o[0]),i&68&&re(e,"dark",o[2]),i&72&&re(e,"left",o[3]),i&80&&re(e,"right",o[4])},i(o){l||(P(n,o),t||Ol(()=>{t=Gl(e,ns,{duration:100}),t.start()}),l=!0)},o(o){S(n,o),l=!1},d(o){o&&u(e),n&&n.d(o)}}}function Fs(r){let e,s,t=r[1]&&Tl(r);return{c(){t&&t.c(),e=Y()},l(l){t&&t.l(l),e=Y()},m(l,a){t&&t.m(l,a),w(l,e,a),s=!0},p(l,[a]){l[1]?t?(t.p(l,a),a&2&&P(t,1)):(t=Tl(l),t.c(),P(t,1),t.m(e.parentNode,e)):t&&(Ze(),S(t,1,1,()=>{t=null}),Qe())},i(l){s||(P(t),s=!0)},o(l){S(t),s=!1},d(l){t&&t.d(l),l&&u(e)}}}function Bs(r,e,s){let{$$slots:t={},$$scope:l}=e,{id:a}=e,{show:n=!1}=e,{dark:o=!1}=e,{left:i=!0}=e,{right:f=!1}=e,c;return r.$$set=d=>{s(6,e=Ie(Ie({},e),Re(d))),"id"in d&&s(0,a=d.id),"show"in d&&s(1,n=d.show),"dark"in d&&s(2,o=d.dark),"left"in d&&s(3,i=d.left),"right"in d&&s(4,f=d.right),"$$scope"in d&&s(7,l=d.$$scope)},e=Re(e),[a,n,o,i,f,c,e,l,t]}class Hs extends ne{constructor(e){super(),ae(this,e,Bs,Fs,oe,{id:0,show:1,dark:2,left:3,right:4})}}function js(r){let e,s,t,l,a,n,o;return n=new it({props:{stroke:"currentcolor",name:"caretDown"}}),{c(){e=v("div"),s=v("button"),t=E(r[0]),l=y(),a=v("div"),N(n.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var f=b(e);s=g(f,"BUTTON",{tabindex:!0,class:!0});var c=b(s);t=I(c,r[0]),c.forEach(u),l=T(f),a=g(f,"DIV",{class:!0});var d=b(a);U(n.$$.fragment,d),d.forEach(u),f.forEach(u),this.h()},h(){_(s,"tabindex","-1"),s.disabled=r[2],_(s,"class","segment rounded-l px-4 svelte-1h09rr7"),_(a,"class","segment rounded-r px-2 svelte-1h09rr7"),_(e,"class","split-button svelte-1h09rr7"),re(e,"disabled",r[2])},m(i,f){w(i,e,f),m(e,s),m(s,t),m(e,l),m(e,a),W(n,a,null),o=!0},p(i,f){(!o||f&1)&&K(t,i[0]),(!o||f&4)&&(s.disabled=i[2]),f&4&&re(e,"disabled",i[2])},i(i){o||(P(n.$$.fragment,i),o=!0)},o(i){S(n.$$.fragment,i),o=!1},d(i){i&&u(e),L(n)}}}function Os(r){let e;const s=r[7].default,t=Xe(s,r,r[10],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&1024)&&xe(t,s,l,l[10],e?tt(s,l[10],a,null):et(l[10]),null)},i(l){e||(P(t,l),e=!0)},o(l){S(t,l),e=!1},d(l){t&&t.d(l)}}}function Gs(r){let e,s,t,l,a;function n(i){r[8](i)}let o={controls:r[1],class:r[6].class,disabled:r[2],$$slots:{default:[js]},$$scope:{ctx:r}};return r[5]!==void 0&&(o.show=r[5]),e=new qs({props:o}),Jl.push(()=>Kl(e,"show",n)),e.$on("click",r[9]),l=new Hs({props:{class:"split-button-menu",id:r[1],show:r[5],left:r[3],right:r[4],$$slots:{default:[Os]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment),t=y(),N(l.$$.fragment)},l(i){U(e.$$.fragment,i),t=T(i),U(l.$$.fragment,i)},m(i,f){W(e,i,f),w(i,t,f),W(l,i,f),a=!0},p(i,f){const c={};f&2&&(c.controls=i[1]),f&64&&(c.class=i[6].class),f&4&&(c.disabled=i[2]),f&1029&&(c.$$scope={dirty:f,ctx:i}),!s&&f&32&&(s=!0,c.show=i[5],Yl(()=>s=!1)),e.$set(c);const d={};f&2&&(d.id=i[1]),f&32&&(d.show=i[5]),f&8&&(d.left=i[3]),f&16&&(d.right=i[4]),f&1024&&(d.$$scope={dirty:f,ctx:i}),l.$set(d)},i(i){a||(P(e.$$.fragment,i),P(l.$$.fragment,i),a=!0)},o(i){S(e.$$.fragment,i),S(l.$$.fragment,i),a=!1},d(i){L(e,i),i&&u(t),L(l,i)}}}function Js(r){let e,s;return e=new Us({props:{class:r[6].class,$$slots:{default:[Gs]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const a={};l&64&&(a.class=t[6].class),l&1151&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Ks(r,e,s){let{$$slots:t={},$$scope:l}=e,{label:a}=e,{id:n}=e,{disabled:o=!1}=e,{left:i=!1}=e,{right:f=!1}=e,c=!1;function d(h){c=h,s(5,c)}function p(h){Wl.call(this,r,h)}return r.$$set=h=>{s(6,e=Ie(Ie({},e),Re(h))),"label"in h&&s(0,a=h.label),"id"in h&&s(1,n=h.id),"disabled"in h&&s(2,o=h.disabled),"left"in h&&s(3,i=h.left),"right"in h&&s(4,f=h.right),"$$scope"in h&&s(10,l=h.$$scope)},e=Re(e),[a,n,o,i,f,c,e,t,d,p,l]}class Ys extends ne{constructor(e){super(),ae(this,e,Ks,Js,oe,{label:0,id:1,disabled:2,left:3,right:4})}}function Ml(r,e,s){const t=r.slice();return t[20]=e[s],t}function Zs(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function Qs(r){let e,s,t,l;const a=[xs,Xs],n=[];function o(i,f){return i[4]?0:1}return e=o(r),s=n[e]=a[e](r),{c(){s.c(),t=Y()},l(i){s.l(i),t=Y()},m(i,f){n[e].m(i,f),w(i,t,f),l=!0},p(i,f){let c=e;e=o(i),e===c?n[e].p(i,f):(Ze(),S(n[c],1,1,()=>{n[c]=null}),Qe(),s=n[e],s?s.p(i,f):(s=n[e]=a[e](i),s.c()),P(s,1),s.m(t.parentNode,t))},i(i){l||(P(s),l=!0)},o(i){S(s),l=!1},d(i){n[e].d(i),i&&u(t)}}}function Xs(r){var qe,Fe,Be,ut,ct,dt,mt,ht,pt,_t,vt,gt,bt,wt,kt,$t,Et,It,Rt,Pt,St,Dt,yt,Tt,Mt,Vt,At,Ct,Nt,Ut,Wt,Lt,zt,qt,Ft,Bt;let e,s,t,l,a,n,o,i,f,c,d,p,h,R,z,q,B,j=((ct=(ut=(Be=(Fe=(qe=r[19])==null?void 0:qe.schedule)==null?void 0:Fe.action)==null?void 0:Be.startWorkflow)==null?void 0:ut.workflowType)==null?void 0:ct.name)+"",ee,H,M,V,Q,O=Pe((mt=(dt=r[19])==null?void 0:dt.info)==null?void 0:mt.createTime,r[5])+"",ve,ie,Se,X,ge,G,De,be,fe,Ne,ue,we,ce,Ue,ke,de,We,$e,k,C,te,x,me,Z,he,le,Ee;l=new it({props:{scale:.8,name:"caretLeft",class:"inline"}}),f=new zl({props:{status:(ht=r[19])!=null&&ht.schedule.state.paused?"Paused":"Running"}});let J=((_t=(pt=r[19])==null?void 0:pt.info)==null?void 0:_t.updateTime)&&Vl(r);X=new Ys({props:{right:!0,label:(bt=(gt=(vt=r[19])==null?void 0:vt.schedule)==null?void 0:gt.state)!=null&&bt.paused?"Unpause":"Pause",id:"pause-schedule-button",$$slots:{default:[er]},$$scope:{ctx:r}}}),X.$on("click",r[11]);let F=((kt=(wt=r[19])==null?void 0:wt.info)==null?void 0:kt.invalidScheduleError)&&Cl(r);fe=new As({props:{calendar:(Rt=(It=(Et=($t=r[19])==null?void 0:$t.schedule)==null?void 0:Et.spec)==null?void 0:It.calendar)==null?void 0:Rt[0],interval:(yt=(Dt=(St=(Pt=r[19])==null?void 0:Pt.schedule)==null?void 0:St.spec)==null?void 0:Dt.interval)==null?void 0:yt[0]}}),ce=new gs({props:{namespace:r[6],recentRuns:(Mt=(Tt=r[19])==null?void 0:Tt.info)==null?void 0:Mt.recentActions}}),de=new $s({props:{futureRuns:(At=(Vt=r[19])==null?void 0:Vt.info)==null?void 0:At.futureActionTimes}}),k=new Rs({props:{spec:(Nt=(Ct=r[19])==null?void 0:Ct.schedule)==null?void 0:Nt.spec,state:(Wt=(Ut=r[19])==null?void 0:Ut.schedule)==null?void 0:Wt.state,policies:(zt=(Lt=r[19])==null?void 0:Lt.schedule)==null?void 0:zt.policies}}),x=new is({props:{notes:(Bt=(Ft=(qt=r[19])==null?void 0:qt.schedule)==null?void 0:Ft.state)==null?void 0:Bt.notes}});function lt(){return r[14](r[19])}return Z=new El({props:{open:r[1],confirmType:"primary",confirmText:r[19].schedule.state.paused?"Unpause":"Pause",confirmDisabled:!r[3],$$slots:{content:[lr],title:[tr]},$$scope:{ctx:r}}}),Z.$on("cancelModal",r[13]),Z.$on("confirmModal",lt),le=new El({props:{open:r[2],confirmType:"destroy",confirmText:"Delete",$$slots:{content:[rr],title:[sr]},$$scope:{ctx:r}}}),le.$on("cancelModal",r[15]),le.$on("confirmModal",r[16]),{c(){e=v("header"),s=v("main"),t=v("a"),N(l.$$.fragment),a=E("Back to Schedules"),n=y(),o=v("div"),i=v("h1"),N(f.$$.fragment),c=y(),d=v("span"),p=E(r[7]),h=y(),R=v("div"),z=v("p"),q=E(r[6]),B=y(),ee=E(j),H=y(),M=v("div"),V=v("p"),Q=E("Created: "),ve=E(O),ie=y(),J&&J.c(),Se=y(),N(X.$$.fragment),ge=y(),G=v("div"),F&&F.c(),De=y(),be=v("div"),N(fe.$$.fragment),Ne=y(),ue=v("div"),we=v("div"),N(ce.$$.fragment),Ue=y(),ke=v("div"),N(de.$$.fragment),We=y(),$e=v("div"),N(k.$$.fragment),C=y(),te=v("div"),N(x.$$.fragment),me=y(),N(Z.$$.fragment),he=y(),N(le.$$.fragment),this.h()},l($){e=g($,"HEADER",{class:!0});var D=b(e);s=g(D,"MAIN",{class:!0});var pe=b(s);t=g(pe,"A",{href:!0,class:!0,style:!0});var ye=b(t);U(l.$$.fragment,ye),a=I(ye,"Back to Schedules"),ye.forEach(u),n=T(pe),o=g(pe,"DIV",{class:!0});var Le=b(o);i=g(Le,"H1",{class:!0});var Te=b(i);U(f.$$.fragment,Te),c=T(Te),d=g(Te,"SPAN",{class:!0});var He=b(d);p=I(He,r[7]),He.forEach(u),Te.forEach(u),Le.forEach(u),h=T(pe),R=g(pe,"DIV",{class:!0});var Me=b(R);z=g(Me,"P",{});var Ve=b(z);q=I(Ve,r[6]),B=T(Ve),ee=I(Ve,j),Ve.forEach(u),Me.forEach(u),H=T(pe),M=g(pe,"DIV",{class:!0});var _e=b(M);V=g(_e,"P",{});var Ae=b(V);Q=I(Ae,"Created: "),ve=I(Ae,O),Ae.forEach(u),ie=T(_e),J&&J.l(_e),_e.forEach(u),pe.forEach(u),Se=T(D),U(X.$$.fragment,D),D.forEach(u),ge=T($),G=g($,"DIV",{class:!0});var se=b(G);F&&F.l(se),De=T(se),be=g(se,"DIV",{class:!0});var je=b(be);U(fe.$$.fragment,je),je.forEach(u),Ne=T(se),ue=g(se,"DIV",{class:!0});var Ce=b(ue);we=g(Ce,"DIV",{class:!0});var Oe=b(we);U(ce.$$.fragment,Oe),Oe.forEach(u),Ue=T(Ce),ke=g(Ce,"DIV",{class:!0});var Ge=b(ke);U(de.$$.fragment,Ge),Ge.forEach(u),Ce.forEach(u),We=T(se),$e=g(se,"DIV",{class:!0});var Je=b($e);U(k.$$.fragment,Je),Je.forEach(u),C=T(se),te=g(se,"DIV",{class:!0});var Ke=b(te);U(x.$$.fragment,Ke),Ke.forEach(u),se.forEach(u),me=T($),U(Z.$$.fragment,$),he=T($),U(le.$$.fragment,$),this.h()},h(){_(t,"href",Ll({namespace:r[6]})),_(t,"class","absolute top-0 back-to-workflows"),Zl(t,"left","-.5rem"),_(d,"class","font-medium select-all"),_(i,"class","text-2xl flex relative items-center gap-4"),_(o,"class","flex justify-between items-center mt-8"),_(R,"class","flex items-center text-sm"),_(M,"class","flex items-center gap-2 text-sm"),_(s,"class","flex flex-col gap-1 relative"),_(e,"class","flex flex-row justify-between gap-4 mb-8"),_(be,"class","w-full xl:w-1/2"),_(we,"class","w-full xl:w-3/4"),_(ke,"class","w-full xl:w-1/4"),_(ue,"class","flex flex-col xl:flex-row gap-4"),_($e,"class","w-full xl:w-1/2"),_(te,"class","w-full xl:w-1/2"),_(G,"class","flex flex-col gap-4 pb-24")},m($,D){w($,e,D),m(e,s),m(s,t),W(l,t,null),m(t,a),m(s,n),m(s,o),m(o,i),W(f,i,null),m(i,c),m(i,d),m(d,p),m(s,h),m(s,R),m(R,z),m(z,q),m(z,B),m(z,ee),m(s,H),m(s,M),m(M,V),m(V,Q),m(V,ve),m(M,ie),J&&J.m(M,null),m(e,Se),W(X,e,null),w($,ge,D),w($,G,D),F&&F.m(G,null),m(G,De),m(G,be),W(fe,be,null),m(G,Ne),m(G,ue),m(ue,we),W(ce,we,null),m(ue,Ue),m(ue,ke),W(de,ke,null),m(G,We),m(G,$e),W(k,$e,null),m(G,C),m(G,te),W(x,te,null),w($,me,D),W(Z,$,D),w($,he,D),W(le,$,D),Ee=!0},p($,D){var se,je,Ce,Oe,Ge,Je,Ke,Ht,jt,Ot,Gt,Jt,Kt,Yt,Zt,Qt,Xt,xt,el,tl,ll,sl,rl,nl,al,ol,il,fl,ul,cl,dl,ml,hl,pl,_l,vl;r=$;const pe={};D&1&&(pe.status=(se=r[19])!=null&&se.schedule.state.paused?"Paused":"Running"),f.$set(pe),(!Ee||D&1)&&j!==(j=((Je=(Ge=(Oe=(Ce=(je=r[19])==null?void 0:je.schedule)==null?void 0:Ce.action)==null?void 0:Oe.startWorkflow)==null?void 0:Ge.workflowType)==null?void 0:Je.name)+"")&&K(ee,j),(!Ee||D&33)&&O!==(O=Pe((Ht=(Ke=r[19])==null?void 0:Ke.info)==null?void 0:Ht.createTime,r[5])+"")&&K(ve,O),(Ot=(jt=r[19])==null?void 0:jt.info)!=null&&Ot.updateTime?J?J.p(r,D):(J=Vl(r),J.c(),J.m(M,null)):J&&(J.d(1),J=null);const ye={};D&1&&(ye.label=(Kt=(Jt=(Gt=r[19])==null?void 0:Gt.schedule)==null?void 0:Jt.state)!=null&&Kt.paused?"Unpause":"Pause"),D&8388608&&(ye.$$scope={dirty:D,ctx:r}),X.$set(ye),(Zt=(Yt=r[19])==null?void 0:Yt.info)!=null&&Zt.invalidScheduleError?F?(F.p(r,D),D&1&&P(F,1)):(F=Cl(r),F.c(),P(F,1),F.m(G,De)):F&&(Ze(),S(F,1,1,()=>{F=null}),Qe());const Le={};D&1&&(Le.calendar=(el=(xt=(Xt=(Qt=r[19])==null?void 0:Qt.schedule)==null?void 0:Xt.spec)==null?void 0:xt.calendar)==null?void 0:el[0]),D&1&&(Le.interval=(rl=(sl=(ll=(tl=r[19])==null?void 0:tl.schedule)==null?void 0:ll.spec)==null?void 0:sl.interval)==null?void 0:rl[0]),fe.$set(Le);const Te={};D&1&&(Te.recentRuns=(al=(nl=r[19])==null?void 0:nl.info)==null?void 0:al.recentActions),ce.$set(Te);const He={};D&1&&(He.futureRuns=(il=(ol=r[19])==null?void 0:ol.info)==null?void 0:il.futureActionTimes),de.$set(He);const Me={};D&1&&(Me.spec=(ul=(fl=r[19])==null?void 0:fl.schedule)==null?void 0:ul.spec),D&1&&(Me.state=(dl=(cl=r[19])==null?void 0:cl.schedule)==null?void 0:dl.state),D&1&&(Me.policies=(hl=(ml=r[19])==null?void 0:ml.schedule)==null?void 0:hl.policies),k.$set(Me);const Ve={};D&1&&(Ve.notes=(vl=(_l=(pl=r[19])==null?void 0:pl.schedule)==null?void 0:_l.state)==null?void 0:vl.notes),x.$set(Ve);const _e={};D&2&&(_e.open=r[1]),D&1&&(_e.confirmText=r[19].schedule.state.paused?"Unpause":"Pause"),D&8&&(_e.confirmDisabled=!r[3]),D&8388617&&(_e.$$scope={dirty:D,ctx:r}),Z.$set(_e);const Ae={};D&4&&(Ae.open=r[2]),D&8388608&&(Ae.$$scope={dirty:D,ctx:r}),le.$set(Ae)},i($){Ee||(P(l.$$.fragment,$),P(f.$$.fragment,$),P(X.$$.fragment,$),P(F),P(fe.$$.fragment,$),P(ce.$$.fragment,$),P(de.$$.fragment,$),P(k.$$.fragment,$),P(x.$$.fragment,$),P(Z.$$.fragment,$),P(le.$$.fragment,$),Ee=!0)},o($){S(l.$$.fragment,$),S(f.$$.fragment,$),S(X.$$.fragment,$),S(F),S(fe.$$.fragment,$),S(ce.$$.fragment,$),S(de.$$.fragment,$),S(k.$$.fragment,$),S(x.$$.fragment,$),S(Z.$$.fragment,$),S(le.$$.fragment,$),Ee=!1},d($){$&&u(e),L(l),L(f),J&&J.d(),L(X),$&&u(ge),$&&u(G),F&&F.d(),L(fe),L(ce),L(de),L(k),L(x),$&&u(me),L(Z,$),$&&u(he),L(le,$)}}}function xs(r){let e,s;return e=new ql({props:{title:"Deleting Schedule...",class:"my-2"}}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p:A,i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Vl(r){var i,f;let e,s,t,l,a,n=Pe((f=(i=r[19])==null?void 0:i.info)==null?void 0:f.updateTime,r[5])+"",o;return{c(){e=v("p"),s=E("-"),t=y(),l=v("p"),a=E("Last updated: "),o=E(n)},l(c){e=g(c,"P",{});var d=b(e);s=I(d,"-"),d.forEach(u),t=T(c),l=g(c,"P",{});var p=b(l);a=I(p,"Last updated: "),o=I(p,n),p.forEach(u)},m(c,d){w(c,e,d),m(e,s),w(c,t,d),w(c,l,d),m(l,a),m(l,o)},p(c,d){var p,h;d&33&&n!==(n=Pe((h=(p=c[19])==null?void 0:p.info)==null?void 0:h.updateTime,c[5])+"")&&K(o,n)},d(c){c&&u(e),c&&u(t),c&&u(l)}}}function Al(r){let e,s=r[20].label+"",t,l,a,n,o;return{c(){e=v("div"),t=E(s),l=y(),this.h()},l(i){e=g(i,"DIV",{class:!0});var f=b(e);t=I(f,s),l=T(f),f.forEach(u),this.h()},h(){var i;_(e,"class",a="cursor-pointer flex gap-2 items-center "+((i=r[20])==null?void 0:i.class))},m(i,f){w(i,e,f),m(e,t),m(e,l),n||(o=ze(e,"click",r[20].onClick),n=!0)},p(i,f){r=i},d(i){i&&u(e),n=!1,o()}}}function er(r){let e,s=r[10],t=[];for(let l=0;l<s.length;l+=1)t[l]=Al(Ml(r,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Y()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=Y()},m(l,a){for(let n=0;n<t.length;n+=1)t[n].m(l,a);w(l,e,a)},p(l,a){if(a&1024){s=l[10];let n;for(n=0;n<s.length;n+=1){const o=Ml(l,s,n);t[n]?t[n].p(o,a):(t[n]=Al(o),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(l){Ul(t,l),l&&u(e)}}}function Cl(r){var l,a;let e,s,t;return s=new ys({props:{error:(a=(l=r[19])==null?void 0:l.info)==null?void 0:a.invalidScheduleError}}),{c(){e=v("div"),N(s.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=b(e);U(s.$$.fragment,o),o.forEach(u),this.h()},h(){_(e,"class","w-full xl:w-1/2")},m(n,o){w(n,e,o),W(s,e,null),t=!0},p(n,o){var f,c;const i={};o&1&&(i.error=(c=(f=n[19])==null?void 0:f.info)==null?void 0:c.invalidScheduleError),s.$set(i)},i(n){t||(P(s.$$.fragment,n),t=!0)},o(n){S(s.$$.fragment,n),t=!1},d(n){n&&u(e),L(s)}}}function tr(r){let e,s=r[19].schedule.state.paused?"Unpause":"Pause",t,l;return{c(){e=v("h3"),t=E(s),l=E(" Schedule?"),this.h()},l(a){e=g(a,"H3",{slot:!0});var n=b(e);t=I(n,s),l=I(n," Schedule?"),n.forEach(u),this.h()},h(){_(e,"slot","title")},m(a,n){w(a,e,n),m(e,t),m(e,l)},p(a,n){n&1&&s!==(s=a[19].schedule.state.paused?"Unpause":"Pause")&&K(t,s)},d(a){a&&u(e)}}}function lr(r){let e,s,t,l=r[19].schedule.state.paused?"unpause":"pause",a,n,o,i,f,c,d,p,h=r[19].schedule.state.paused?"unpausing":"pausing",R,z,q,B,j,ee;return{c(){e=v("div"),s=v("p"),t=E("Are you sure you want to "),a=E(l),n=y(),o=v("strong"),i=E(r[7]),f=E("?"),c=y(),d=v("p"),p=E("Enter a reason for "),R=E(h),z=E(" the schedule."),q=y(),B=v("input"),this.h()},l(H){e=g(H,"DIV",{slot:!0});var M=b(e);s=g(M,"P",{});var V=b(s);t=I(V,"Are you sure you want to "),a=I(V,l),n=T(V),o=g(V,"STRONG",{});var Q=b(o);i=I(Q,r[7]),Q.forEach(u),f=I(V,"?"),V.forEach(u),c=T(M),d=g(M,"P",{class:!0});var O=b(d);p=I(O,"Enter a reason for "),R=I(O,h),z=I(O," the schedule."),O.forEach(u),q=T(M),B=g(M,"INPUT",{class:!0,placeholder:!0}),M.forEach(u),this.h()},h(){_(d,"class","my-4"),_(B,"class","block w-full border border-gray-200 rounded-md p-2 mt-4"),_(B,"placeholder","Enter a reason"),_(e,"slot","content")},m(H,M){w(H,e,M),m(e,s),m(s,t),m(s,a),m(s,n),m(s,o),m(o,i),m(s,f),m(e,c),m(e,d),m(d,p),m(d,R),m(d,z),m(e,q),m(e,B),bl(B,r[3]),j||(ee=ze(B,"input",r[12]),j=!0)},p(H,M){M&1&&l!==(l=H[19].schedule.state.paused?"unpause":"pause")&&K(a,l),M&1&&h!==(h=H[19].schedule.state.paused?"unpausing":"pausing")&&K(R,h),M&8&&B.value!==H[3]&&bl(B,H[3])},d(H){H&&u(e),j=!1,ee()}}}function sr(r){let e,s;return{c(){e=v("h3"),s=E("Delete Schedule?"),this.h()},l(t){e=g(t,"H3",{slot:!0});var l=b(e);s=I(l,"Delete Schedule?"),l.forEach(u),this.h()},h(){_(e,"slot","title")},m(t,l){w(t,e,l),m(e,s)},p:A,d(t){t&&u(e)}}}function rr(r){let e,s,t,l,a,n;return{c(){e=v("div"),s=v("p"),t=E(`Are you sure you want to delete
          `),l=v("strong"),a=E(r[7]),n=E("?"),this.h()},l(o){e=g(o,"DIV",{slot:!0});var i=b(e);s=g(i,"P",{});var f=b(s);t=I(f,`Are you sure you want to delete
          `),l=g(f,"STRONG",{});var c=b(l);a=I(c,r[7]),c.forEach(u),n=I(f,"?"),f.forEach(u),i.forEach(u),this.h()},h(){_(e,"slot","content")},m(o,i){w(o,e,i),m(e,s),m(s,t),m(s,l),m(l,a),m(s,n)},p:A,d(o){o&&u(e)}}}function nr(r){let e,s;return e=new ql({}),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p:A,i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function ar(r){let e,s,t,l={ctx:r,current:null,token:null,hasCatch:!1,pending:nr,then:Qs,catch:Zs,value:19,blocks:[,,,]};return rt(s=r[0],l),{c(){e=Y(),l.block.c()},l(a){e=Y(),l.block.l(a)},m(a,n){w(a,e,n),l.block.m(a,l.anchor=n),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(a,[n]){r=a,l.ctx=r,n&1&&s!==(s=r[0])&&rt(s,l)||Nl(l,r,n)},i(a){t||(P(l.block),t=!0)},o(a){for(let n=0;n<3;n+=1){const o=l.blocks[n];S(o)}t=!1},d(a){a&&u(e),l.block.d(a),l.token=null,l=null}}}function or(r,e,s){let t,l,a;Ye(r,st,V=>s(4,t=V)),Ye(r,Ql,V=>s(17,l=V)),Ye(r,ft,V=>s(5,a=V));let n=l.params.namespace,o=l.params.schedule;const i={namespace:n,scheduleId:ot(o)};let f=kl(i,fetch),c=!1,d=!1,p="";const h=async()=>{try{at(st,t=!0,t),await xl({namespace:n,scheduleId:o}),setTimeout(()=>{Xl(Ll({namespace:n})),at(st,t=!1,t)},2e3)}catch{at(st,t=!1,t)}},R=async V=>{var Q,O;!((O=(Q=V==null?void 0:V.schedule)===null||Q===void 0?void 0:Q.state)===null||O===void 0)&&O.paused?await es({namespace:n,scheduleId:o,reason:p}):await ts({namespace:n,scheduleId:o,reason:p}),s(0,f=kl(i,fetch)),s(1,c=!1),s(3,p="")};let z=[{label:"Delete Schedule",onClick:()=>s(2,d=!0),class:"text-red-500"}];const q=()=>s(1,c=!c);function B(){p=this.value,s(3,p)}return[f,c,d,p,t,a,n,o,h,R,z,q,B,()=>s(1,c=!1),V=>R(V),()=>s(2,d=!1),()=>h()]}class zr extends ne{constructor(e){super(),ae(this,e,or,ar,oe,{})}}export{zr as default};