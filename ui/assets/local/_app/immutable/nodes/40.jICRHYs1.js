import{s as G,e as N,b as C,d as D,g as m,j as P,k as h,v as V,x as U,y as $e,t as L,f as A,l as y,a as B,h as R,n as X,c as Q,P as we}from"../chunks/scheduler.LRpOgQOC.js";import{S as J,i as K,c as b,a as I,m as T,t as $,b as w,d as v,g as F,e as z}from"../chunks/index.dE1eZLcR.js";import{p as re}from"../chunks/stores.KPPG9CZf.js";import{P as de}from"../chunks/page-title.ZsHOm3Zs.js";import{e as te}from"../chunks/each._Tp_Nd1G.js";import{L as j}from"../chunks/link.VEEPJOw7.js";import{P as _e}from"../chunks/pagination.DU9PbBCw.js";import{T as Z,a as x}from"../chunks/table-header-row.-9-YQ5zd.js";import{T as ee}from"../chunks/table-row.Sis06F23.js";import{t as E}from"../chunks/translate.HrioCK44.js";import{b as O,i as le}from"../chunks/route-for.KXEPsd0j.js";import{W as he}from"../chunks/workflow-status.4vdG8_hx.js";import{b as ge}from"../chunks/workflows.0BQsHH4Q.js";import{f as ke}from"../chunks/events.-dQamc26.js";import{n as be}from"../chunks/namespaces.HprwxAUC.js";import{w as Ie}from"../chunks/workflow-run.19UZe-Sc.js";import{g as Te}from"../chunks/get-workflow-relationships.2Tmpi-4H.js";import{C as Y}from"../chunks/index.yoC1NHPu.js";import{W as ve}from"../chunks/workflow-padded-layout.8r9ZPB8f.js";function ne(o,t,r){const e=o.slice();return e[7]=t[r],e}function Ee(o){let t=o[7].workflowId+"",r;return{c(){r=L(t)},l(e){r=A(e,t)},m(e,l){h(e,r,l)},p(e,l){l&64&&t!==(t=e[7].workflowId+"")&&X(r,t)},d(e){e&&m(r)}}}function Ne(o){let t=o[7].runId+"",r;return{c(){r=L(t)},l(e){r=A(e,t)},m(e,l){h(e,r,l)},p(e,l){l&64&&t!==(t=e[7].runId+"")&&X(r,t)},d(e){e&&m(r)}}}function Ce(o){let t,r,e,l,n=o[7].type+"",f,a,s,c,p,_,d,k,S;return r=new he({props:{status:o[7].status}}),c=new j({props:{href:O({namespace:o[7].namespace,workflow:o[7].workflowId,run:o[7].runId}),$$slots:{default:[Ee]},$$scope:{ctx:o}}}),d=new j({props:{href:O({namespace:o[7].namespace,workflow:o[7].workflowId,run:o[7].runId}),$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){t=N("td"),b(r.$$.fragment),e=B(),l=N("td"),f=L(n),a=B(),s=N("td"),b(c.$$.fragment),p=B(),_=N("td"),b(d.$$.fragment),k=B(),this.h()},l(u){t=C(u,"TD",{class:!0});var i=D(t);I(r.$$.fragment,i),i.forEach(m),e=R(u),l=C(u,"TD",{class:!0});var g=D(l);f=A(g,n),g.forEach(m),a=R(u),s=C(u,"TD",{class:!0});var H=D(s);I(c.$$.fragment,H),H.forEach(m),p=R(u),_=C(u,"TD",{class:!0});var W=D(_);I(d.$$.fragment,W),W.forEach(m),k=R(u),this.h()},h(){P(t,"class","max-md:hidden"),P(l,"class","max-lg:hidden"),P(s,"class","hover:text-blue-700 hover:underline"),P(_,"class","hover:text-blue-700 hover:underline")},m(u,i){h(u,t,i),T(r,t,null),h(u,e,i),h(u,l,i),y(l,f),h(u,a,i),h(u,s,i),T(c,s,null),h(u,p,i),h(u,_,i),T(d,_,null),h(u,k,i),S=!0},p(u,i){const g={};i&64&&(g.status=u[7].status),r.$set(g),(!S||i&64)&&n!==(n=u[7].type+"")&&X(f,n);const H={};i&64&&(H.href=O({namespace:u[7].namespace,workflow:u[7].workflowId,run:u[7].runId})),i&1088&&(H.$$scope={dirty:i,ctx:u}),c.$set(H);const W={};i&64&&(W.href=O({namespace:u[7].namespace,workflow:u[7].workflowId,run:u[7].runId})),i&1088&&(W.$$scope={dirty:i,ctx:u}),d.$set(W)},i(u){S||($(r.$$.fragment,u),$(c.$$.fragment,u),$(d.$$.fragment,u),S=!0)},o(u){w(r.$$.fragment,u),w(c.$$.fragment,u),w(d.$$.fragment,u),S=!1},d(u){u&&(m(t),m(e),m(l),m(a),m(s),m(p),m(_),m(k)),v(r),v(c),v(d)}}}function oe(o){let t,r;return t=new ee({props:{$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&1088&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function De(o){let t,r,e=te(o[6]),l=[];for(let f=0;f<e.length;f+=1)l[f]=oe(ne(o,e,f));const n=f=>w(l[f],1,1,()=>{l[f]=null});return{c(){for(let f=0;f<l.length;f+=1)l[f].c();t=U()},l(f){for(let a=0;a<l.length;a+=1)l[a].l(f);t=U()},m(f,a){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(f,a);h(f,t,a),r=!0},p(f,a){if(a&64){e=te(f[6]);let s;for(s=0;s<e.length;s+=1){const c=ne(f,e,s);l[s]?(l[s].p(c,a),$(l[s],1)):(l[s]=oe(c),l[s].c(),$(l[s],1),l[s].m(t.parentNode,t))}for(F(),s=e.length;s<l.length;s+=1)n(s);z()}},i(f){if(!r){for(let a=0;a<e.length;a+=1)$(l[a]);r=!0}},o(f){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);r=!1},d(f){f&&m(t),$e(l,f)}}}function He(o){let t,r=E("workflows.child-workflows")+"",e;return{c(){t=N("caption"),e=L(r),this.h()},l(l){t=C(l,"CAPTION",{class:!0,slot:!0});var n=D(t);e=A(n,r),n.forEach(m),this.h()},h(){P(t,"class","sr-only"),P(t,"slot","caption")},m(l,n){h(l,t,n),y(t,e)},p:V,d(l){l&&m(t)}}}function Pe(o){let t,r=E("common.status")+"",e,l,n,f=E("common.type")+"",a,s,c,p=E("workflows.child-id")+"",_,d,k,S=E("workflows.child-run-id")+"",u;return{c(){t=N("th"),e=L(r),l=B(),n=N("th"),a=L(f),s=B(),c=N("th"),_=L(p),d=B(),k=N("th"),u=L(S),this.h()},l(i){t=C(i,"TH",{class:!0});var g=D(t);e=A(g,r),g.forEach(m),l=R(i),n=C(i,"TH",{class:!0});var H=D(n);a=A(H,f),H.forEach(m),s=R(i),c=C(i,"TH",{});var W=D(c);_=A(W,p),W.forEach(m),d=R(i),k=C(i,"TH",{});var q=D(k);u=A(q,S),q.forEach(m),this.h()},h(){P(t,"class","max-md:hidden"),P(n,"class","max-lg:hidden")},m(i,g){h(i,t,g),y(t,e),h(i,l,g),h(i,n,g),y(n,a),h(i,s,g),h(i,c,g),y(c,_),h(i,d,g),h(i,k,g),y(k,u)},p:V,d(i){i&&(m(t),m(l),m(n),m(s),m(c),m(d),m(k))}}}function Se(o){let t,r;return t=new x({props:{slot:"headers",$$slots:{default:[Pe]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&1024&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Le(o){let t,r;return t=new Z({props:{class:"w-full",$$slots:{headers:[Se],caption:[He],default:[De]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&1088&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ae(o){let t;return{c(){t=N("div"),this.h()},l(r){t=C(r,"DIV",{slot:!0}),D(t).forEach(m),this.h()},h(){P(t,"slot","pagination-top")},m(r,e){h(r,t,e)},p:V,d(r){r&&m(t)}}}function We(o){let t,r;return t=new _e({props:{items:o[0],"aria-label":E("workflows.child-workflows"),pageSizeSelectLabel:E("common.per-page"),previousButtonLabel:E("common.previous"),nextButtonLabel:E("common.next"),$$slots:{"pagination-top":[Ae],default:[Le,({visibleItems:e})=>({6:e}),({visibleItems:e})=>e?64:0]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,[l]){const n={};l&1&&(n.items=e[0]),l&1088&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ye(o,t,r){let e,l,n,{children:f=[]}=t,{pendingChildren:a=[]}=t,{namespace:s}=t;return o.$$set=c=>{"children"in c&&r(1,f=c.children),"pendingChildren"in c&&r(2,a=c.pendingChildren),"namespace"in c&&r(3,s=c.namespace)},o.$$.update=()=>{o.$$.dirty&12&&r(5,e=a.map(c=>({runId:c.runId,workflowId:c.workflowId,status:"Running",type:c.workflowTypeName,namespace:s}))),o.$$.dirty&10&&r(4,l=f.map(c=>{var p;return{runId:c.attributes.workflowExecution.runId,workflowId:c.attributes.workflowExecution.workflowId,type:c.attributes.workflowType,status:c.classification,namespace:((p=c.attributes)===null||p===void 0?void 0:p.namespace)||s}})),o.$$.dirty&48&&r(0,n=[...e,...l])},[n,f,a,s,l,e]}class Be extends J{constructor(t){super(),K(this,t,ye,We,G,{children:1,pendingChildren:2,namespace:3})}}function se(o){let t,r;return t=new j({props:{href:O({namespace:o[1],workflow:o[0],run:o[2]}),$$slots:{default:[Re]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&7&&(n.href=O({namespace:e[1],workflow:e[0],run:e[2]})),l&36&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Re(o){let t,r;return t=new Y({props:{copyIconTitle:E("common.copy-icon-title"),copySuccessIconTitle:E("common.copy-success-icon-title"),content:o[2],visible:!0}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&4&&(n.content=e[2]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function fe(o){let t,r;return t=new j({props:{href:O({namespace:o[1],workflow:o[0],run:o[4]}),$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&19&&(n.href=O({namespace:e[1],workflow:e[0],run:e[4]})),l&48&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Oe(o){let t,r;return t=new Y({props:{copyIconTitle:E("common.copy-icon-title"),copySuccessIconTitle:E("common.copy-success-icon-title"),content:o[4],visible:!0}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&16&&(n.content=e[4]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ae(o){let t,r;return t=new j({props:{href:O({namespace:o[1],workflow:o[0],run:o[3]}),$$slots:{default:[Ve]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&11&&(n.href=O({namespace:e[1],workflow:e[0],run:e[3]})),l&40&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ve(o){let t,r;return t=new Y({props:{copyIconTitle:E("common.copy-icon-title"),copySuccessIconTitle:E("common.copy-success-icon-title"),content:o[3],visible:!0}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&8&&(n.content=e[3]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Fe(o){let t,r,e,l,n,f,a=o[2]&&se(o),s=o[4]&&fe(o),c=o[3]&&ae(o);return{c(){t=N("td"),a&&a.c(),r=B(),e=N("td"),s&&s.c(),l=B(),n=N("td"),c&&c.c(),this.h()},l(p){t=C(p,"TD",{class:!0});var _=D(t);a&&a.l(_),_.forEach(m),r=R(p),e=C(p,"TD",{class:!0});var d=D(e);s&&s.l(d),d.forEach(m),l=R(p),n=C(p,"TD",{class:!0});var k=D(n);c&&c.l(k),k.forEach(m),this.h()},h(){P(t,"class","w-1/3"),P(e,"class","w-1/3"),P(n,"class","w-1/3")},m(p,_){h(p,t,_),a&&a.m(t,null),h(p,r,_),h(p,e,_),s&&s.m(e,null),h(p,l,_),h(p,n,_),c&&c.m(n,null),f=!0},p(p,_){p[2]?a?(a.p(p,_),_&4&&$(a,1)):(a=se(p),a.c(),$(a,1),a.m(t,null)):a&&(F(),w(a,1,1,()=>{a=null}),z()),p[4]?s?(s.p(p,_),_&16&&$(s,1)):(s=fe(p),s.c(),$(s,1),s.m(e,null)):s&&(F(),w(s,1,1,()=>{s=null}),z()),p[3]?c?(c.p(p,_),_&8&&$(c,1)):(c=ae(p),c.c(),$(c,1),c.m(n,null)):c&&(F(),w(c,1,1,()=>{c=null}),z())},i(p){f||($(a),$(s),$(c),f=!0)},o(p){w(a),w(s),w(c),f=!1},d(p){p&&(m(t),m(r),m(e),m(l),m(n)),a&&a.d(),s&&s.d(),c&&c.d()}}}function ze(o){let t,r;return t=new ee({props:{$$slots:{default:[Fe]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&63&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function je(o){let t,r=E("workflows.relationships")+"",e;return{c(){t=N("caption"),e=L(r),this.h()},l(l){t=C(l,"CAPTION",{class:!0,slot:!0});var n=D(t);e=A(n,r),n.forEach(m),this.h()},h(){P(t,"class","sr-only"),P(t,"slot","caption")},m(l,n){h(l,t,n),y(t,e)},p:V,d(l){l&&m(t)}}}function qe(o){let t,r=E("workflows.first-execution")+"",e,l,n,f=E("workflows.previous-execution")+"",a,s,c,p=E("workflows.next-execution")+"",_;return{c(){t=N("th"),e=L(r),l=B(),n=N("th"),a=L(f),s=B(),c=N("th"),_=L(p)},l(d){t=C(d,"TH",{});var k=D(t);e=A(k,r),k.forEach(m),l=R(d),n=C(d,"TH",{});var S=D(n);a=A(S,f),S.forEach(m),s=R(d),c=C(d,"TH",{});var u=D(c);_=A(u,p),u.forEach(m)},m(d,k){h(d,t,k),y(t,e),h(d,l,k),h(d,n,k),y(n,a),h(d,s,k),h(d,c,k),y(c,_)},p:V,d(d){d&&(m(t),m(l),m(n),m(s),m(c))}}}function Me(o){let t,r;return t=new x({props:{slot:"headers",$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&32&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ge(o){let t,r;return t=new Z({props:{class:"w-full",$$slots:{headers:[Me],caption:[je],default:[ze]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,[l]){const n={};l&63&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Je(o,t,r){let{workflow:e}=t,{namespace:l}=t,{first:n}=t,{next:f}=t,{previous:a}=t;return o.$$set=s=>{"workflow"in s&&r(0,e=s.workflow),"namespace"in s&&r(1,l=s.namespace),"first"in s&&r(2,n=s.first),"next"in s&&r(3,f=s.next),"previous"in s&&r(4,a=s.previous)},[e,l,n,f,a]}class Ke extends J{constructor(t){super(),K(this,t,Je,Ge,G,{workflow:0,namespace:1,first:2,next:3,previous:4})}}function ce(o,t,r){const e=o.slice();return e[4]=t[r],e}function Qe(o){let t=o[4].id+"",r;return{c(){r=L(t)},l(e){r=A(e,t)},m(e,l){h(e,r,l)},p(e,l){l&8&&t!==(t=e[4].id+"")&&X(r,t)},d(e){e&&m(r)}}}function Ue(o){let t=o[4].runId+"",r;return{c(){r=L(t)},l(e){r=A(e,t)},m(e,l){h(e,r,l)},p(e,l){l&8&&t!==(t=e[4].runId+"")&&X(r,t)},d(e){e&&m(r)}}}function Xe(o){let t,r,e,l,n=o[4].name+"",f,a,s,c,p,_,d,k,S;return r=new he({props:{status:o[4].status}}),c=new j({props:{href:O({namespace:o[1],workflow:o[4].id,run:o[4].runId}),$$slots:{default:[Qe]},$$scope:{ctx:o}}}),d=new j({props:{href:O({namespace:o[1],workflow:o[4].id,run:o[4].runId}),$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){t=N("td"),b(r.$$.fragment),e=B(),l=N("td"),f=L(n),a=B(),s=N("td"),b(c.$$.fragment),p=B(),_=N("td"),b(d.$$.fragment),k=B(),this.h()},l(u){t=C(u,"TD",{class:!0});var i=D(t);I(r.$$.fragment,i),i.forEach(m),e=R(u),l=C(u,"TD",{class:!0});var g=D(l);f=A(g,n),g.forEach(m),a=R(u),s=C(u,"TD",{class:!0});var H=D(s);I(c.$$.fragment,H),H.forEach(m),p=R(u),_=C(u,"TD",{class:!0});var W=D(_);I(d.$$.fragment,W),W.forEach(m),k=R(u),this.h()},h(){P(t,"class","max-md:hidden"),P(l,"class","max-lg:hidden"),P(s,"class","hover:text-blue-700 hover:underline"),P(_,"class","hover:text-blue-700 hover:underline")},m(u,i){h(u,t,i),T(r,t,null),h(u,e,i),h(u,l,i),y(l,f),h(u,a,i),h(u,s,i),T(c,s,null),h(u,p,i),h(u,_,i),T(d,_,null),h(u,k,i),S=!0},p(u,i){const g={};i&8&&(g.status=u[4].status),r.$set(g),(!S||i&8)&&n!==(n=u[4].name+"")&&X(f,n);const H={};i&10&&(H.href=O({namespace:u[1],workflow:u[4].id,run:u[4].runId})),i&136&&(H.$$scope={dirty:i,ctx:u}),c.$set(H);const W={};i&10&&(W.href=O({namespace:u[1],workflow:u[4].id,run:u[4].runId})),i&136&&(W.$$scope={dirty:i,ctx:u}),d.$set(W)},i(u){S||($(r.$$.fragment,u),$(c.$$.fragment,u),$(d.$$.fragment,u),S=!0)},o(u){w(r.$$.fragment,u),w(c.$$.fragment,u),w(d.$$.fragment,u),S=!1},d(u){u&&(m(t),m(e),m(l),m(a),m(s),m(p),m(_),m(k)),v(r),v(c),v(d)}}}function ue(o){let t,r;return t=new ee({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&138&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ye(o){let t,r,e=te(o[3]),l=[];for(let f=0;f<e.length;f+=1)l[f]=ue(ce(o,e,f));const n=f=>w(l[f],1,1,()=>{l[f]=null});return{c(){for(let f=0;f<l.length;f+=1)l[f].c();t=U()},l(f){for(let a=0;a<l.length;a+=1)l[a].l(f);t=U()},m(f,a){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(f,a);h(f,t,a),r=!0},p(f,a){if(a&10){e=te(f[3]);let s;for(s=0;s<e.length;s+=1){const c=ce(f,e,s);l[s]?(l[s].p(c,a),$(l[s],1)):(l[s]=ue(c),l[s].c(),$(l[s],1),l[s].m(t.parentNode,t))}for(F(),s=e.length;s<l.length;s+=1)n(s);z()}},i(f){if(!r){for(let a=0;a<e.length;a+=1)$(l[a]);r=!0}},o(f){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);r=!1},d(f){f&&m(t),$e(l,f)}}}function Ze(o){let t,r=E("workflows.child-workflows")+"",e;return{c(){t=N("caption"),e=L(r),this.h()},l(l){t=C(l,"CAPTION",{class:!0,slot:!0});var n=D(t);e=A(n,r),n.forEach(m),this.h()},h(){P(t,"class","sr-only"),P(t,"slot","caption")},m(l,n){h(l,t,n),y(t,e)},p:V,d(l){l&&m(t)}}}function xe(o){let t,r=E("common.status")+"",e,l,n,f=E("common.type")+"",a,s,c,p=E("workflows.child-id")+"",_,d,k,S=E("workflows.child-run-id")+"",u;return{c(){t=N("th"),e=L(r),l=B(),n=N("th"),a=L(f),s=B(),c=N("th"),_=L(p),d=B(),k=N("th"),u=L(S),this.h()},l(i){t=C(i,"TH",{class:!0});var g=D(t);e=A(g,r),g.forEach(m),l=R(i),n=C(i,"TH",{class:!0});var H=D(n);a=A(H,f),H.forEach(m),s=R(i),c=C(i,"TH",{});var W=D(c);_=A(W,p),W.forEach(m),d=R(i),k=C(i,"TH",{});var q=D(k);u=A(q,S),q.forEach(m),this.h()},h(){P(t,"class","max-md:hidden"),P(n,"class","max-lg:hidden")},m(i,g){h(i,t,g),y(t,e),h(i,l,g),h(i,n,g),y(n,a),h(i,s,g),h(i,c,g),y(c,_),h(i,d,g),h(i,k,g),y(k,u)},p:V,d(i){i&&(m(t),m(l),m(n),m(s),m(c),m(d),m(k))}}}function et(o){let t,r;return t=new x({props:{slot:"headers",$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&128&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function tt(o){let t,r;return t=new Z({props:{class:"w-full",$$slots:{headers:[et],caption:[Ze],default:[Ye]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&138&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function rt(o){let t;return{c(){t=N("div"),this.h()},l(r){t=C(r,"DIV",{slot:!0}),D(t).forEach(m),this.h()},h(){P(t,"slot","pagination-top")},m(r,e){h(r,t,e)},p:V,d(r){r&&m(t)}}}function lt(o){let t,r;return t=new _e({props:{items:o[0],"aria-label":E("workflows.child-workflows"),pageSizeSelectLabel:E("common.per-page"),previousButtonLabel:E("common.previous"),nextButtonLabel:E("common.next"),$$slots:{"pagination-top":[rt],default:[tt,({visibleItems:e})=>({3:e}),({visibleItems:e})=>e?8:0]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,[l]){const n={};l&1&&(n.items=e[0]),l&138&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function nt(o,t,r){let e,l;Q(o,re,f=>r(2,l=f));let{children:n=[]}=t;return o.$$set=f=>{"children"in f&&r(0,n=f.children)},o.$$.update=()=>{o.$$.dirty&4&&r(1,{namespace:e}=l.params,e)},[n,e,l]}class ot extends J{constructor(t){super(),K(this,t,nt,lt,G,{children:0})}}function st(o){let t,r;return t=new Y({props:{copyIconTitle:E("common.copy-icon-title"),copySuccessIconTitle:E("common.copy-success-icon-title"),content:o[0].workflowId,visible:!0}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&1&&(n.content=e[0].workflowId),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ft(o){let t,r;return t=new Y({props:{copyIconTitle:E("common.copy-icon-title"),copySuccessIconTitle:E("common.copy-success-icon-title"),content:o[0].runId,visible:!0}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&1&&(n.content=e[0].runId),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function at(o){let t,r,e,l,n,f;return r=new j({props:{href:O({namespace:o[1]??o[2],workflow:o[0].workflowId,run:o[0].runId}),$$slots:{default:[st]},$$scope:{ctx:o}}}),n=new j({props:{href:O({namespace:o[1]??o[2],workflow:o[0].workflowId,run:o[0].runId}),$$slots:{default:[ft]},$$scope:{ctx:o}}}),{c(){t=N("td"),b(r.$$.fragment),e=B(),l=N("td"),b(n.$$.fragment)},l(a){t=C(a,"TD",{});var s=D(t);I(r.$$.fragment,s),s.forEach(m),e=R(a),l=C(a,"TD",{});var c=D(l);I(n.$$.fragment,c),c.forEach(m)},m(a,s){h(a,t,s),T(r,t,null),h(a,e,s),h(a,l,s),T(n,l,null),f=!0},p(a,s){const c={};s&7&&(c.href=O({namespace:a[1]??a[2],workflow:a[0].workflowId,run:a[0].runId})),s&9&&(c.$$scope={dirty:s,ctx:a}),r.$set(c);const p={};s&7&&(p.href=O({namespace:a[1]??a[2],workflow:a[0].workflowId,run:a[0].runId})),s&9&&(p.$$scope={dirty:s,ctx:a}),n.$set(p)},i(a){f||($(r.$$.fragment,a),$(n.$$.fragment,a),f=!0)},o(a){w(r.$$.fragment,a),w(n.$$.fragment,a),f=!1},d(a){a&&(m(t),m(e),m(l)),v(r),v(n)}}}function ct(o){let t,r;return t=new ee({props:{class:"hover:text-blue-700 hover:underline",$$slots:{default:[at]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&15&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ut(o){let t,r=E("workflows.parent-workflow")+"",e;return{c(){t=N("caption"),e=L(r),this.h()},l(l){t=C(l,"CAPTION",{class:!0,slot:!0});var n=D(t);e=A(n,r),n.forEach(m),this.h()},h(){P(t,"class","sr-only"),P(t,"slot","caption")},m(l,n){h(l,t,n),y(t,e)},p:V,d(l){l&&m(t)}}}function it(o){let t,r=E("workflows.parent-id")+"",e,l,n,f=E("workflows.parent-run-id")+"",a;return{c(){t=N("th"),e=L(r),l=B(),n=N("th"),a=L(f)},l(s){t=C(s,"TH",{});var c=D(t);e=A(c,r),c.forEach(m),l=R(s),n=C(s,"TH",{});var p=D(n);a=A(p,f),p.forEach(m)},m(s,c){h(s,t,c),y(t,e),h(s,l,c),h(s,n,c),y(n,a)},p:V,d(s){s&&(m(t),m(l),m(n))}}}function mt(o){let t,r;return t=new x({props:{slot:"headers",$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&8&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function pt(o){let t,r;return t=new Z({props:{class:"w-full",$$slots:{headers:[mt],caption:[ut],default:[ct]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,[l]){const n={};l&15&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function $t(o,t,r){let{parent:e}=t,{parentNamespaceName:l}=t,{namespace:n}=t;return o.$$set=f=>{"parent"in f&&r(0,e=f.parent),"parentNamespaceName"in f&&r(1,l=f.parentNamespaceName),"namespace"in f&&r(2,n=f.namespace)},[e,l,n]}class _t extends J{constructor(t){super(),K(this,t,$t,pt,G,{parent:0,parentNamespaceName:1,namespace:2})}}function ht(o){let t,r;return t=new Y({props:{copyIconTitle:E("common.copy-icon-title"),copySuccessIconTitle:E("common.copy-success-icon-title"),content:o[0],visible:!0}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&1&&(n.content=e[0]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function wt(o){let t,r,e;return r=new j({props:{href:le({namespace:o[1],scheduleId:o[0]}),$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){t=N("td"),b(r.$$.fragment)},l(l){t=C(l,"TD",{});var n=D(t);I(r.$$.fragment,n),n.forEach(m)},m(l,n){h(l,t,n),T(r,t,null),e=!0},p(l,n){const f={};n&3&&(f.href=le({namespace:l[1],scheduleId:l[0]})),n&5&&(f.$$scope={dirty:n,ctx:l}),r.$set(f)},i(l){e||($(r.$$.fragment,l),e=!0)},o(l){w(r.$$.fragment,l),e=!1},d(l){l&&m(t),v(r)}}}function dt(o){let t,r;return t=new ee({props:{class:"hover:text-blue-700 hover:underline",$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&7&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function gt(o){let t,r=E("schedules.schedule")+"",e;return{c(){t=N("caption"),e=L(r),this.h()},l(l){t=C(l,"CAPTION",{class:!0,slot:!0});var n=D(t);e=A(n,r),n.forEach(m),this.h()},h(){P(t,"class","sr-only"),P(t,"slot","caption")},m(l,n){h(l,t,n),y(t,e)},p:V,d(l){l&&m(t)}}}function kt(o){let t,r=E("schedules.schedule")+"",e;return{c(){t=N("th"),e=L(r)},l(l){t=C(l,"TH",{});var n=D(t);e=A(n,r),n.forEach(m)},m(l,n){h(l,t,n),y(t,e)},p:V,d(l){l&&m(t)}}}function bt(o){let t,r;return t=new x({props:{slot:"headers",$$slots:{default:[kt]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&4&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function It(o){let t,r;return t=new Z({props:{class:"w-full",$$slots:{headers:[bt],caption:[gt],default:[dt]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,[l]){const n={};l&7&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Tt(o,t,r){let{scheduleId:e}=t,{namespace:l}=t;return o.$$set=n=>{"scheduleId"in n&&r(0,e=n.scheduleId),"namespace"in n&&r(1,l=n.namespace)},[e,l]}class vt extends J{constructor(t){super(),K(this,t,Tt,It,G,{scheduleId:0,namespace:1})}}function Et(o){let t,r=E("workflows.no-relationships")+"",e;return{c(){t=N("p"),e=L(r)},l(l){t=C(l,"P",{});var n=D(t);e=A(n,r),n.forEach(m)},m(l,n){h(l,t,n),y(t,e)},p:V,i:V,o:V,d(l){l&&m(t)}}}function Nt(o){let t,r,e,l,n,f,a,s,c=o[3]&&ie(o),p=o[8]&&me(o),_=(o[9]||o[4]||o[5])&&pe(o);const d=[Dt,Ct],k=[];function S(u,i){return u[2].length?0:u[11]?1:-1}return~(n=S(o))&&(f=k[n]=d[n](o)),{c(){t=N("div"),c&&c.c(),r=B(),p&&p.c(),e=B(),_&&_.c(),l=B(),f&&f.c(),a=U(),this.h()},l(u){t=C(u,"DIV",{class:!0});var i=D(t);c&&c.l(i),r=R(i),p&&p.l(i),e=R(i),_&&_.l(i),i.forEach(m),l=R(u),f&&f.l(u),a=U(),this.h()},h(){P(t,"class","flex w-full flex-wrap gap-4")},m(u,i){h(u,t,i),c&&c.m(t,null),y(t,r),p&&p.m(t,null),y(t,e),_&&_.m(t,null),h(u,l,i),~n&&k[n].m(u,i),h(u,a,i),s=!0},p(u,i){u[3]?c?(c.p(u,i),i&8&&$(c,1)):(c=ie(u),c.c(),$(c,1),c.m(t,r)):c&&(F(),w(c,1,1,()=>{c=null}),z()),u[8]?p?(p.p(u,i),i&256&&$(p,1)):(p=me(u),p.c(),$(p,1),p.m(t,e)):p&&(F(),w(p,1,1,()=>{p=null}),z()),u[9]||u[4]||u[5]?_?(_.p(u,i),i&560&&$(_,1)):(_=pe(u),_.c(),$(_,1),_.m(t,null)):_&&(F(),w(_,1,1,()=>{_=null}),z());let g=n;n=S(u),n===g?~n&&k[n].p(u,i):(f&&(F(),w(k[g],1,1,()=>{k[g]=null}),z()),~n?(f=k[n],f?f.p(u,i):(f=k[n]=d[n](u),f.c()),$(f,1),f.m(a.parentNode,a)):f=null)},i(u){s||($(c),$(p),$(_),$(f),s=!0)},o(u){w(c),w(p),w(_),w(f),s=!1},d(u){u&&(m(t),m(l),m(a)),c&&c.d(),p&&p.d(),_&&_.d(),~n&&k[n].d(u)}}}function ie(o){let t,r;return t=new vt({props:{scheduleId:o[3],namespace:o[13]}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&8&&(n.scheduleId=e[3]),l&8192&&(n.namespace=e[13]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function me(o){let t,r;return t=new _t({props:{parent:o[8],parentNamespaceName:o[7],namespace:o[13]}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&256&&(n.parent=e[8]),l&128&&(n.parentNamespaceName=e[7]),l&8192&&(n.namespace=e[13]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function pe(o){let t,r;return t=new Ke({props:{first:o[9],previous:o[4],next:o[5],workflow:o[12],namespace:o[13]}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&512&&(n.first=e[9]),l&16&&(n.previous=e[4]),l&32&&(n.next=e[5]),l&4096&&(n.workflow=e[12]),l&8192&&(n.namespace=e[13]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ct(o){let t,r;return t=new Be({props:{children:o[6],pendingChildren:o[0].workflow.pendingChildren,namespace:o[1].params.namespace}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&64&&(n.children=e[6]),l&1&&(n.pendingChildren=e[0].workflow.pendingChildren),l&2&&(n.namespace=e[1].params.namespace),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Dt(o){let t,r;return t=new ot({props:{children:o[2]}}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},p(e,l){const n={};l&4&&(n.children=e[2]),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function Ht(o){let t,r,e,l;const n=[Nt,Et],f=[];function a(s,c){return s[10]?0:1}return r=a(o),e=f[r]=n[r](o),{c(){t=N("div"),e.c(),this.h()},l(s){t=C(s,"DIV",{class:!0});var c=D(t);e.l(c),c.forEach(m),this.h()},h(){P(t,"class","flex flex-col gap-4")},m(s,c){h(s,t,c),f[r].m(t,null),l=!0},p(s,[c]){let p=r;r=a(s),r===p?f[r].p(s,c):(F(),w(f[p],1,1,()=>{f[p]=null}),z(),e=f[r],e?e.p(s,c):(e=f[r]=n[r](s),e.c()),$(e,1),e.m(t,null))},i(s){l||($(e),l=!0)},o(s){w(e),l=!1},d(s){s&&m(t),f[r].d()}}}function Pt(o,t,r){let e,l,n,f,a,s,c,p,_,d,k,S,u,i,g,H,W;Q(o,be,M=>r(16,i=M)),Q(o,ke,M=>r(17,g=M)),Q(o,Ie,M=>r(0,H=M)),Q(o,re,M=>r(1,W=M));let q=[];return we(async()=>{r(2,q=await ge(l,e))}),o.$$.update=()=>{o.$$.dirty&2&&r(12,{workflow:e,namespace:l}=W.params,e,(r(13,l),r(1,W))),o.$$.dirty&1&&r(15,{workflow:n}=H,n),o.$$.dirty&229376&&r(14,f=Te(n,g,i)),o.$$.dirty&16384&&r(11,{hasChildren:a,hasRelationships:s,first:c,parent:p,parentNamespaceName:_,children:d,next:k,previous:S,scheduleId:u}=f,a,(r(10,s),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(9,c),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(8,p),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(7,_),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(6,d),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(5,k),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(4,S),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)),(r(3,u),r(14,f),r(15,n),r(17,g),r(16,i),r(0,H)))},[H,W,q,u,S,k,d,_,p,c,s,a,e,l,f,n,i,g]}class St extends J{constructor(t){super(),K(this,t,Pt,Ht,G,{})}}function Lt(o){let t,r;return t=new St({}),{c(){b(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,l){T(t,e,l),r=!0},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function At(o){let t,r,e,l;return t=new de({props:{title:`${E("workflows.relationships")} | ${o[1]}`,url:o[0].url.href}}),e=new ve({props:{$$slots:{default:[Lt]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment),r=B(),b(e.$$.fragment)},l(n){I(t.$$.fragment,n),r=R(n),I(e.$$.fragment,n)},m(n,f){T(t,n,f),h(n,r,f),T(e,n,f),l=!0},p(n,[f]){const a={};f&1&&(a.url=n[0].url.href),t.$set(a);const s={};f&4&&(s.$$scope={dirty:f,ctx:n}),e.$set(s)},i(n){l||($(t.$$.fragment,n),$(e.$$.fragment,n),l=!0)},o(n){w(t.$$.fragment,n),w(e.$$.fragment,n),l=!1},d(n){n&&m(r),v(t,n),v(e,n)}}}function Wt(o,t,r){let e;Q(o,re,n=>r(0,e=n));const l=e.params.workflow;return[e,l]}class er extends J{constructor(t){super(),K(this,t,Wt,At,G,{})}}export{er as component};
