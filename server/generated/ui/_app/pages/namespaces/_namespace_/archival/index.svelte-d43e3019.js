import{S as U,i as Y,s as z,e as D,t as A,c as S,a as T,h as F,d as _,b as P,g as h,Q as E,K as g,l as I,o as v,p as V,q as w,n as j,k as R,w as W,m as x,x as N,y as C,B as H,F as O,G as X,ai as G,H as Z,aj as ee,aY as te}from"../../../../chunks/vendor-65a13680.js";import{b as J}from"../../../../chunks/workflow-status-0ab8c462.js";import{W as le,a as ae,b as re}from"../../../../chunks/_workflow-filters-678bc407.js";import{E as oe}from"../../../../chunks/empty-state-2f566652.js";import{C as M}from"../../../../chunks/code-block-42e1c65a.js";import"../../../../chunks/route-for-api-b49f7bca.js";import"../../../../chunks/navigation-093db9e2.js";import"../../../../chunks/singletons-a6a7384f.js";import"../../../../chunks/notifications-866bf5f8.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-c9edcdb4.js";import"../../../../chunks/simplify-attributes-9946b918.js";import"../../../../chunks/format-date-ed6dde30.js";import"../../../../chunks/filter-select-93776261.js";import"../../../../chunks/stores-5dcfac01.js";import"../../../../chunks/select-731f635f.js";function ie(n){let e,l,t;return{c(){e=D("tr"),l=D("td"),t=A("Loading"),this.h()},l(a){e=S(a,"TR",{});var i=T(e);l=S(i,"TD",{colspan:!0,class:!0});var r=T(l);t=F(r,"Loading"),r.forEach(_),i.forEach(_),this.h()},h(){P(l,"colspan","5"),P(l,"class","m-auto p-12 text-center font-extralight text-2xl")},m(a,i){h(a,e,i),E(e,l),E(l,t)},p:g,i:g,o:g,d(a){a&&_(e)}}}class ne extends U{constructor(e){super();Y(this,e,null,ie,z,{})}}function K(n){n[8]=n[9].workflows}function se(n){let e,l,t,a,i,r,f,o,m,b,d,u,s,p,y;f=new M({props:{content:"tctl --namespace default namespace update --has enabled",language:"text"}});let k=!n[2]&&Q();return{c(){e=D("h2"),l=A("This namespace is currently not enabled for archival."),t=R(),a=D("p"),i=A("Run this command to enable Archival for Event Histories:"),r=R(),W(f.$$.fragment),o=R(),k&&k.c(),m=R(),b=D("p"),d=A("For more details please check out "),u=D("a"),s=A("Archival Docs"),p=A("."),this.h()},l(c){e=S(c,"H2",{class:!0});var $=T(e);l=F($,"This namespace is currently not enabled for archival."),$.forEach(_),t=x(c),a=S(c,"P",{});var q=T(a);i=F(q,"Run this command to enable Archival for Event Histories:"),q.forEach(_),r=x(c),N(f.$$.fragment,c),o=x(c),k&&k.l(c),m=x(c),b=S(c,"P",{});var L=T(b);d=F(L,"For more details please check out "),u=S(L,"A",{class:!0,href:!0,target:!0});var B=T(u);s=F(B,"Archival Docs"),B.forEach(_),p=F(L,"."),L.forEach(_),this.h()},h(){P(e,"class","text-2xl"),P(u,"class","text-blue-700 underline"),P(u,"href","https://docs.temporal.io/docs/server/archive-data/"),P(u,"target","_blank")},m(c,$){h(c,e,$),E(e,l),h(c,t,$),h(c,a,$),E(a,i),h(c,r,$),C(f,c,$),h(c,o,$),k&&k.m(c,$),h(c,m,$),h(c,b,$),E(b,d),E(b,u),E(u,s),E(b,p),y=!0},p(c,$){c[2]?k&&(j(),v(k,1,1,()=>{k=null}),V()):k?$&4&&w(k,1):(k=Q(),k.c(),w(k,1),k.m(m.parentNode,m))},i(c){y||(w(f.$$.fragment,c),w(k),y=!0)},o(c){v(f.$$.fragment,c),v(k),y=!1},d(c){c&&_(e),c&&_(t),c&&_(a),c&&_(r),H(f,c),c&&_(o),k&&k.d(c),c&&_(m),c&&_(b)}}}function ce(n){let e,l,t,a,i,r,f,o,m;function b(s){n[7](s)}let d={};n[3]!==void 0&&(d.timeFormat=n[3]),a=new le({props:d}),O.push(()=>X(a,"timeFormat",b));let u={ctx:n,current:null,token:null,hasCatch:!1,pending:de,then:me,catch:fe,value:9,blocks:[,,,]};return G(o=n[4],u),{c(){e=D("h2"),l=A("Archived Workflows"),t=R(),W(a.$$.fragment),r=R(),f=I(),u.block.c(),this.h()},l(s){e=S(s,"H2",{class:!0});var p=T(e);l=F(p,"Archived Workflows"),p.forEach(_),t=x(s),N(a.$$.fragment,s),r=x(s),f=I(),u.block.l(s),this.h()},h(){P(e,"class","text-2xl")},m(s,p){h(s,e,p),E(e,l),h(s,t,p),C(a,s,p),h(s,r,p),h(s,f,p),u.block.m(s,u.anchor=p),u.mount=()=>f.parentNode,u.anchor=f,m=!0},p(s,p){n=s;const y={};!i&&p&8&&(i=!0,y.timeFormat=n[3],Z(()=>i=!1)),a.$set(y),u.ctx=n,p&16&&o!==(o=n[4])&&G(o,u)||ee(u,n,p)},i(s){m||(w(a.$$.fragment,s),w(u.block),m=!0)},o(s){v(a.$$.fragment,s);for(let p=0;p<3;p+=1){const y=u.blocks[p];v(y)}m=!1},d(s){s&&_(e),s&&_(t),H(a,s),s&&_(r),s&&_(f),u.block.d(s),u.token=null,u=null}}}function Q(n){let e,l,t,a,i;return a=new M({props:{content:"tctl --namespace default namespace update -vas enabled",language:"text"}}),{c(){e=D("p"),l=A("To enable Visibility Archival:"),t=R(),W(a.$$.fragment)},l(r){e=S(r,"P",{});var f=T(e);l=F(f,"To enable Visibility Archival:"),f.forEach(_),t=x(r),N(a.$$.fragment,r)},m(r,f){h(r,e,f),E(e,l),h(r,t,f),C(a,r,f),i=!0},i(r){i||(w(a.$$.fragment,r),i=!0)},o(r){v(a.$$.fragment,r),i=!1},d(r){r&&_(e),r&&_(t),H(a,r)}}}function fe(n){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function me(n){K(n);let e,l,t,a;const i=[pe,ue],r=[];function f(o,m){return o[8].length?0:1}return e=f(n),l=r[e]=i[e](n),{c(){l.c(),t=I()},l(o){l.l(o),t=I()},m(o,m){r[e].m(o,m),h(o,t,m),a=!0},p(o,m){K(o);let b=e;e=f(o),e===b?r[e].p(o,m):(j(),v(r[b],1,1,()=>{r[b]=null}),V(),l=r[e],l?l.p(o,m):(l=r[e]=i[e](o),l.c()),w(l,1),l.m(t.parentNode,t))},i(o){a||(w(l),a=!0)},o(o){v(l),a=!1},d(o){r[e].d(o),o&&_(t)}}}function ue(n){let e,l;return e=new oe({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){W(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){C(e,t,a),l=!0},p:g,i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function pe(n){let e,l;return e=new ae({props:{$$slots:{default:[be]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){C(e,t,a),l=!0},p(t,a){const i={};a&2073&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function _e(n){let e,l;return e=new re({props:{workflow:n[10],namespace:n[0],timeFormat:n[3]}}),{c(){W(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){C(e,t,a),l=!0},p(t,a){const i={};a&1024&&(i.workflow=t[10]),a&1&&(i.namespace=t[0]),a&8&&(i.timeFormat=t[3]),e.$set(i)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function be(n){let e,l;return e=new te({props:{items:n[8],$$slots:{default:[_e,({item:t})=>({10:t}),({item:t})=>t?1024:0]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){C(e,t,a),l=!0},p(t,a){const i={};a&16&&(i.items=t[8]),a&3081&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function de(n){let e,l;return e=new ne({}),{c(){W(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){C(e,t,a),l=!0},p:g,i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function ke(n){let e,l,t,a;const i=[ce,se],r=[];function f(o,m){return o[1]?0:1}return e=f(n),l=r[e]=i[e](n),{c(){l.c(),t=I()},l(o){l.l(o),t=I()},m(o,m){r[e].m(o,m),h(o,t,m),a=!0},p(o,[m]){let b=e;e=f(o),e===b?r[e].p(o,m):(j(),v(r[b],1,1,()=>{r[b]=null}),V(),l=r[e],l?l.p(o,m):(l=r[e]=i[e](o),l.c()),w(l,1),l.m(t.parentNode,t))},i(o){a||(w(l),a=!0)},o(o){v(l),a=!1},d(o){r[e].d(o),o&&_(t)}}}const Re=async function({params:n,url:e,stuff:l}){var t,a;const{searchParams:i}=e;i.has("time-range")||i.set("time-range","24 hours");const r=n.namespace,f=i.get("workflow-id"),o=i.get("workflow-type"),m=i.get("time-range"),b=i.get("status"),d={workflowId:f,workflowType:o,closeTime:m,executionStatus:b},s=l.namespaces.find(c=>c.namespaceInfo.name===r),p=((t=s==null?void 0:s.config)===null||t===void 0?void 0:t.historyArchivalState)==="Enabled",y=((a=s==null?void 0:s.config)===null||a===void 0?void 0:a.visibilityArchivalState)==="Enabled";return{props:{initialData:p?await J(r,d,fetch):Promise.resolve(null),namespace:r,parameters:d,archivalEnabled:p,visibilityArchivalEnabled:y}}};function he(n,e,l){let{namespace:t}=e,{initialData:a}=e,{parameters:i}=e,{archivalEnabled:r=!1}=e,{visibilityArchivalEnabled:f=!1}=e,o="UTC",m=a;function b(d){o=d,l(3,o)}return n.$$set=d=>{"namespace"in d&&l(0,t=d.namespace),"initialData"in d&&l(5,a=d.initialData),"parameters"in d&&l(6,i=d.parameters),"archivalEnabled"in d&&l(1,r=d.archivalEnabled),"visibilityArchivalEnabled"in d&&l(2,f=d.visibilityArchivalEnabled)},n.$$.update=()=>{n.$$.dirty&67&&r&&l(4,m=J(t,i))},[t,r,f,o,m,a,i,b]}class xe extends U{constructor(e){super();Y(this,e,he,ke,z,{namespace:0,initialData:5,parameters:6,archivalEnabled:1,visibilityArchivalEnabled:2})}}export{xe as default,Re as load};