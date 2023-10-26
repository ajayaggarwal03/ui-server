import{a as dt}from"../chunks/namespaces-service.4fb5f89e.js";import{S as $t,b as ht,a as vt,C as J,c as I,m as p,w,e as Me,D as Q,d as C,p as _,q as m,x as g,k as s,u as V,E as X,f as E,L as f,y as M,j,g as W,h as _t,F as Y,K as Ve,o as Et,a5 as Tt,z as mt,a7 as bt,n as we}from"../chunks/index.9b814669.js";import{p as wt}from"../chunks/stores.6266e7a5.js";import{P as gt}from"../chunks/page-title.83a2b61d.js";import{B as be}from"../chunks/badge.d2eb64e3.js";import{C as Dt}from"../chunks/card.8d05bbe4.js";import{T as ze,a as At}from"../chunks/table-header-row.13d0ab5a.js";import{T as kt}from"../chunks/table-row.6cbd66b6.js";import{t as N}from"../chunks/translate.c28e5b4f.js";import{l as ft}from"../chunks/namespaces.d5190d4a.js";import{s as Rt}from"../chunks/search-attributes.cd42a7bf.js";import{t as It,u as Ct,s as St}from"../chunks/versions.26e71abe.js";import{s as it}from"../chunks/format-time.9c4cab4b.js";const Ht=o=>{var t,a;const e=(t=o==null?void 0:o.replicationConfig)==null?void 0:t.clusters,l=(a=o==null?void 0:o.replicationConfig)==null?void 0:a.activeClusterName;return e!=null&&e.length?e.map(({clusterName:r})=>r===l?`${r} (active)`:r).join(", "):"Unknown"},Nt=async function({params:o,url:e}){const{searchParams:l}=e;l.has("time-range")&&l.delete("time-range");const t=await dt(o.namespace),a=Ht(t);return{namespace:t,clusters:a}},hl=Object.freeze(Object.defineProperty({__proto__:null,load:Nt},Symbol.toStringTag,{value:"Module"}));function ct(o,e,l){const t=o.slice();return t[13]=e[l][0],t[14]=e[l][1],t}function Vt(o){var t;let e=((t=o[0])!=null&&t.isGlobalNamespace?N("common.yes"):N("common.no"))+"",l;return{c(){l=w(e)},l(a){l=g(a,e)},m(a,r){E(a,l,r)},p(a,r){var i;r&1&&e!==(e=((i=a[0])!=null&&i.isGlobalNamespace?N("common.yes"):N("common.no"))+"")&&M(l,e)},d(a){a&&s(l)}}}function Lt(o){var t,a;let e=((a=(t=o[0])==null?void 0:t.config)==null?void 0:a.historyArchivalState)+"",l;return{c(){l=w(e)},l(r){l=g(r,e)},m(r,i){E(r,l,i)},p(r,i){var u,n;i&1&&e!==(e=((n=(u=r[0])==null?void 0:u.config)==null?void 0:n.historyArchivalState)+"")&&M(l,e)},d(r){r&&s(l)}}}function yt(o){var t,a;let e=((a=(t=o[0])==null?void 0:t.config)==null?void 0:a.visibilityArchivalState)+"",l;return{c(){l=w(e)},l(r){l=g(r,e)},m(r,i){E(r,l,i)},p(r,i){var u,n;i&1&&e!==(e=((n=(u=r[0])==null?void 0:u.config)==null?void 0:n.visibilityArchivalState)+"")&&M(l,e)},d(r){r&&s(l)}}}function Pt(o){var Ke,Je,Qe,Xe,Ye,Ze,xe,et,tt,lt;let e,l,t=N("namespaces.owner")+"",a,r,i,u=(((Je=(Ke=o[0])==null?void 0:Ke.namespaceInfo)==null?void 0:Je.ownerEmail)||N("common.unknown"))+"",n,c,T,y,O=N("namespaces.global")+"",P,R,D,h,B,b,z,F=N("namespaces.retention-period")+"",Z,A,S,q=it((Xe=(Qe=o[0])==null?void 0:Qe.config)==null?void 0:Xe.workflowExecutionRetentionTtl.toString())+"",d,k,U,x,_e=N("namespaces.history-archival")+"",ae,ee,te,G,le,se,me,Ie=N("namespaces.visibility-archival")+"",de,re,ie,$,H,K,oe,fe=N("namespaces.failover-version")+"",ce,ue,pe,he=((Ye=o[0])==null?void 0:Ye.failoverVersion)+"",ge,$e,ne,ve,De=N("namespaces.clusters")+"",Ce,Se,Le,Ge,Ee;return h=new be({props:{class:"px-1 py-0",type:o[8]((Ze=o[0])==null?void 0:Ze.isGlobalNamespace,!1),$$slots:{default:[Vt]},$$scope:{ctx:o}}}),G=new be({props:{class:"px-1 py-0",type:o[7]((et=(xe=o[0])==null?void 0:xe.config)==null?void 0:et.historyArchivalState),$$slots:{default:[Lt]},$$scope:{ctx:o}}}),$=new be({props:{class:"px-1 py-0",type:o[7]((lt=(tt=o[0])==null?void 0:tt.config)==null?void 0:lt.visibilityArchivalState),$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){e=p("tr"),l=p("td"),a=w(t),r=I(),i=p("td"),n=w(u),c=I(),T=p("tr"),y=p("td"),P=w(O),R=I(),D=p("td"),J(h.$$.fragment),B=I(),b=p("tr"),z=p("td"),Z=w(F),A=I(),S=p("td"),d=w(q),k=I(),U=p("tr"),x=p("td"),ae=w(_e),ee=I(),te=p("td"),J(G.$$.fragment),le=I(),se=p("tr"),me=p("td"),de=w(Ie),re=I(),ie=p("td"),J($.$$.fragment),H=I(),K=p("tr"),oe=p("td"),ce=w(fe),ue=I(),pe=p("td"),ge=w(he),$e=I(),ne=p("tr"),ve=p("td"),Ce=w(De),Se=I(),Le=p("td"),Ge=w(o[1]),this.h()},l(v){e=_(v,"TR",{"data-testid":!0});var L=m(e);l=_(L,"TD",{});var He=m(l);a=g(He,t),He.forEach(s),r=C(L),i=_(L,"TD",{});var Ne=m(i);n=g(Ne,u),Ne.forEach(s),L.forEach(s),c=C(v),T=_(v,"TR",{"data-testid":!0});var Te=m(T);y=_(Te,"TD",{});var ye=m(y);P=g(ye,O),ye.forEach(s),R=C(Te),D=_(Te,"TD",{});var Pe=m(D);Q(h.$$.fragment,Pe),Pe.forEach(s),Te.forEach(s),B=C(v),b=_(v,"TR",{"data-testid":!0});var Ae=m(b);z=_(Ae,"TD",{});var Be=m(z);Z=g(Be,F),Be.forEach(s),A=C(Ae),S=_(Ae,"TD",{});var Oe=m(S);d=g(Oe,q),Oe.forEach(s),Ae.forEach(s),k=C(v),U=_(v,"TR",{"data-testid":!0});var ke=m(U);x=_(ke,"TD",{});var Ue=m(x);ae=g(Ue,_e),Ue.forEach(s),ee=C(ke),te=_(ke,"TD",{});var je=m(te);Q(G.$$.fragment,je),je.forEach(s),ke.forEach(s),le=C(v),se=_(v,"TR",{"data-testid":!0});var Re=m(se);me=_(Re,"TD",{});var Fe=m(me);de=g(Fe,Ie),Fe.forEach(s),re=C(Re),ie=_(Re,"TD",{});var at=m(ie);Q($.$$.fragment,at),at.forEach(s),Re.forEach(s),H=C(v),K=_(v,"TR",{"data-testid":!0});var We=m(K);oe=_(We,"TD",{});var st=m(oe);ce=g(st,fe),st.forEach(s),ue=C(We),pe=_(We,"TD",{});var rt=m(pe);ge=g(rt,he),rt.forEach(s),We.forEach(s),$e=C(v),ne=_(v,"TR",{"data-testid":!0});var qe=m(ne);ve=_(qe,"TD",{});var ot=m(ve);Ce=g(ot,De),ot.forEach(s),Se=C(qe),Le=_(qe,"TD",{});var nt=m(Le);Ge=g(nt,o[1]),nt.forEach(s),qe.forEach(s),this.h()},h(){V(e,"data-testid","namespace-owner"),V(T,"data-testid","namespace-global"),V(b,"data-testid","namespace-retention"),V(U,"data-testid","namespace-history"),V(se,"data-testid","namespace-visibility"),V(K,"data-testid","namespace-failover"),V(ne,"data-testid","namespace-clusters")},m(v,L){E(v,e,L),f(e,l),f(l,a),f(e,r),f(e,i),f(i,n),E(v,c,L),E(v,T,L),f(T,y),f(y,P),f(T,R),f(T,D),X(h,D,null),E(v,B,L),E(v,b,L),f(b,z),f(z,Z),f(b,A),f(b,S),f(S,d),E(v,k,L),E(v,U,L),f(U,x),f(x,ae),f(U,ee),f(U,te),X(G,te,null),E(v,le,L),E(v,se,L),f(se,me),f(me,de),f(se,re),f(se,ie),X($,ie,null),E(v,H,L),E(v,K,L),f(K,oe),f(oe,ce),f(K,ue),f(K,pe),f(pe,ge),E(v,$e,L),E(v,ne,L),f(ne,ve),f(ve,Ce),f(ne,Se),f(ne,Le),f(Le,Ge),Ee=!0},p(v,L){var ye,Pe,Ae,Be,Oe,ke,Ue,je,Re,Fe;(!Ee||L&1)&&u!==(u=(((Pe=(ye=v[0])==null?void 0:ye.namespaceInfo)==null?void 0:Pe.ownerEmail)||N("common.unknown"))+"")&&M(n,u);const He={};L&1&&(He.type=v[8]((Ae=v[0])==null?void 0:Ae.isGlobalNamespace,!1)),L&131073&&(He.$$scope={dirty:L,ctx:v}),h.$set(He),(!Ee||L&1)&&q!==(q=it((Oe=(Be=v[0])==null?void 0:Be.config)==null?void 0:Oe.workflowExecutionRetentionTtl.toString())+"")&&M(d,q);const Ne={};L&1&&(Ne.type=v[7]((Ue=(ke=v[0])==null?void 0:ke.config)==null?void 0:Ue.historyArchivalState)),L&131073&&(Ne.$$scope={dirty:L,ctx:v}),G.$set(Ne);const Te={};L&1&&(Te.type=v[7]((Re=(je=v[0])==null?void 0:je.config)==null?void 0:Re.visibilityArchivalState)),L&131073&&(Te.$$scope={dirty:L,ctx:v}),$.$set(Te),(!Ee||L&1)&&he!==(he=((Fe=v[0])==null?void 0:Fe.failoverVersion)+"")&&M(ge,he),(!Ee||L&2)&&M(Ge,v[1])},i(v){Ee||(j(h.$$.fragment,v),j(G.$$.fragment,v),j($.$$.fragment,v),Ee=!0)},o(v){W(h.$$.fragment,v),W(G.$$.fragment,v),W($.$$.fragment,v),Ee=!1},d(v){v&&s(e),v&&s(c),v&&s(T),Y(h),v&&s(B),v&&s(b),v&&s(k),v&&s(U),Y(G),v&&s(le),v&&s(se),Y($),v&&s(H),v&&s(K),v&&s($e),v&&s(ne)}}}function Bt(o){let e,l=`${N("namespaces.namespace")} ${N("common.details")}`,t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=_(a,"CAPTION",{class:!0,slot:!0});var r=m(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){E(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function Ot(o){let e,l,t;return{c(){e=p("tr"),l=p("th"),t=p("th"),this.h()},l(a){e=_(a,"TR",{slot:!0});var r=m(e);l=_(r,"TH",{class:!0}),m(l).forEach(s),t=_(r,"TH",{}),m(t).forEach(s),r.forEach(s),this.h()},h(){V(l,"class","w-1/2 lg:w-3/5"),V(e,"slot","headers")},m(a,r){E(a,e,r),f(e,l),f(e,t)},p:we,d(a){a&&s(e)}}}function Ut(o){let e,l,t,a,r,i,u,n,c,T,y,O,P;return{c(){e=p("tr"),l=p("td"),t=w("Temporal Server Version"),a=I(),r=p("td"),i=w(o[3]),u=I(),n=p("tr"),c=p("td"),T=w("Temporal UI Version"),y=I(),O=p("td"),P=w(o[4]),this.h()},l(R){e=_(R,"TR",{"data-testid":!0});var D=m(e);l=_(D,"TD",{});var h=m(l);t=g(h,"Temporal Server Version"),h.forEach(s),a=C(D),r=_(D,"TD",{});var B=m(r);i=g(B,o[3]),B.forEach(s),D.forEach(s),u=C(R),n=_(R,"TR",{"data-testid":!0});var b=m(n);c=_(b,"TD",{});var z=m(c);T=g(z,"Temporal UI Version"),z.forEach(s),y=C(b),O=_(b,"TD",{});var F=m(O);P=g(F,o[4]),F.forEach(s),b.forEach(s),this.h()},h(){V(e,"data-testid","server-version"),V(n,"data-testid","ui-version")},m(R,D){E(R,e,D),f(e,l),f(l,t),f(e,a),f(e,r),f(r,i),E(R,u,D),E(R,n,D),f(n,c),f(c,T),f(n,y),f(n,O),f(O,P)},p(R,D){D&8&&M(i,R[3]),D&16&&M(P,R[4])},d(R){R&&s(e),R&&s(u),R&&s(n)}}}function jt(o){let e,l=N("namespaces.versions")+"",t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=_(a,"CAPTION",{class:!0,slot:!0});var r=m(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){E(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function Ft(o){let e,l,t;return{c(){e=p("tr"),l=p("th"),t=p("th"),this.h()},l(a){e=_(a,"TR",{slot:!0});var r=m(e);l=_(r,"TH",{class:!0}),m(l).forEach(s),t=_(r,"TH",{}),m(t).forEach(s),r.forEach(s),this.h()},h(){V(l,"class","w-1/2 lg:w-3/4"),V(e,"slot","headers")},m(a,r){E(a,e,r),f(e,l),f(e,t)},p:we,d(a){a&&s(e)}}}function Gt(o){let e=o[9](o[5].disableWriteActions)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){E(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].disableWriteActions)+"")&&M(l,e)},d(t){t&&s(l)}}}function Wt(o){let e=o[9](o[5].workflowTerminateDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){E(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowTerminateDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function qt(o){let e=o[9](o[5].workflowCancelDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){E(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowCancelDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function zt(o){let e=o[9](o[5].workflowSignalDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){E(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowSignalDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function Mt(o){let e=o[9](o[5].workflowResetDisabled)+"",l;return{c(){l=w(e)},l(t){l=g(t,e)},m(t,a){E(t,l,a)},p(t,a){a&32&&e!==(e=t[9](t[5].workflowResetDisabled)+"")&&M(l,e)},d(t){t&&s(l)}}}function Kt(o){let e,l,t=N("namespaces.client-actions")+"",a,r,i,u,n,c,T,y=N("workflows.terminate-modal-title")+"",O,P,R,D,h,B,b,z=N("workflows.cancel-modal-title")+"",F,Z,A,S,q,d,k,U=N("namespaces.signal-workflow")+"",x,_e,ae,ee,te,G,le,se=N("workflows.reset-modal-title")+"",me,Ie,de,re,ie;return u=new be({props:{class:"px-1 py-0",type:o[8](o[5].disableWriteActions),$$slots:{default:[Gt]},$$scope:{ctx:o}}}),D=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowTerminateDisabled),$$slots:{default:[Wt]},$$scope:{ctx:o}}}),S=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowCancelDisabled),$$slots:{default:[qt]},$$scope:{ctx:o}}}),ee=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowSignalDisabled),$$slots:{default:[zt]},$$scope:{ctx:o}}}),re=new be({props:{class:"px-1 py-0",type:o[8](o[5].workflowResetDisabled),$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){e=p("tr"),l=p("td"),a=w(t),r=I(),i=p("td"),J(u.$$.fragment),n=I(),c=p("tr"),T=p("td"),O=w(y),P=I(),R=p("td"),J(D.$$.fragment),h=I(),B=p("tr"),b=p("td"),F=w(z),Z=I(),A=p("td"),J(S.$$.fragment),q=I(),d=p("tr"),k=p("td"),x=w(U),_e=I(),ae=p("td"),J(ee.$$.fragment),te=I(),G=p("tr"),le=p("td"),me=w(se),Ie=I(),de=p("td"),J(re.$$.fragment)},l($){e=_($,"TR",{});var H=m(e);l=_(H,"TD",{});var K=m(l);a=g(K,t),K.forEach(s),r=C(H),i=_(H,"TD",{});var oe=m(i);Q(u.$$.fragment,oe),oe.forEach(s),H.forEach(s),n=C($),c=_($,"TR",{});var fe=m(c);T=_(fe,"TD",{});var ce=m(T);O=g(ce,y),ce.forEach(s),P=C(fe),R=_(fe,"TD",{});var ue=m(R);Q(D.$$.fragment,ue),ue.forEach(s),fe.forEach(s),h=C($),B=_($,"TR",{});var pe=m(B);b=_(pe,"TD",{});var he=m(b);F=g(he,z),he.forEach(s),Z=C(pe),A=_(pe,"TD",{});var ge=m(A);Q(S.$$.fragment,ge),ge.forEach(s),pe.forEach(s),q=C($),d=_($,"TR",{});var $e=m(d);k=_($e,"TD",{});var ne=m(k);x=g(ne,U),ne.forEach(s),_e=C($e),ae=_($e,"TD",{});var ve=m(ae);Q(ee.$$.fragment,ve),ve.forEach(s),$e.forEach(s),te=C($),G=_($,"TR",{});var De=m(G);le=_(De,"TD",{});var Ce=m(le);me=g(Ce,se),Ce.forEach(s),Ie=C(De),de=_(De,"TD",{});var Se=m(de);Q(re.$$.fragment,Se),Se.forEach(s),De.forEach(s)},m($,H){E($,e,H),f(e,l),f(l,a),f(e,r),f(e,i),X(u,i,null),E($,n,H),E($,c,H),f(c,T),f(T,O),f(c,P),f(c,R),X(D,R,null),E($,h,H),E($,B,H),f(B,b),f(b,F),f(B,Z),f(B,A),X(S,A,null),E($,q,H),E($,d,H),f(d,k),f(k,x),f(d,_e),f(d,ae),X(ee,ae,null),E($,te,H),E($,G,H),f(G,le),f(le,me),f(G,Ie),f(G,de),X(re,de,null),ie=!0},p($,H){const K={};H&32&&(K.type=$[8]($[5].disableWriteActions)),H&131104&&(K.$$scope={dirty:H,ctx:$}),u.$set(K);const oe={};H&32&&(oe.type=$[8]($[5].workflowTerminateDisabled)),H&131104&&(oe.$$scope={dirty:H,ctx:$}),D.$set(oe);const fe={};H&32&&(fe.type=$[8]($[5].workflowCancelDisabled)),H&131104&&(fe.$$scope={dirty:H,ctx:$}),S.$set(fe);const ce={};H&32&&(ce.type=$[8]($[5].workflowSignalDisabled)),H&131104&&(ce.$$scope={dirty:H,ctx:$}),ee.$set(ce);const ue={};H&32&&(ue.type=$[8]($[5].workflowResetDisabled)),H&131104&&(ue.$$scope={dirty:H,ctx:$}),re.$set(ue)},i($){ie||(j(u.$$.fragment,$),j(D.$$.fragment,$),j(S.$$.fragment,$),j(ee.$$.fragment,$),j(re.$$.fragment,$),ie=!0)},o($){W(u.$$.fragment,$),W(D.$$.fragment,$),W(S.$$.fragment,$),W(ee.$$.fragment,$),W(re.$$.fragment,$),ie=!1},d($){$&&s(e),Y(u),$&&s(n),$&&s(c),Y(D),$&&s(h),$&&s(B),Y(S),$&&s(q),$&&s(d),Y(ee),$&&s(te),$&&s(G),Y(re)}}}function Jt(o){let e,l=N("namespaces.client-actions")+"",t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=_(a,"CAPTION",{class:!0,slot:!0});var r=m(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){E(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function Qt(o){let e,l,t;return{c(){e=p("tr"),l=p("th"),t=p("th"),this.h()},l(a){e=_(a,"TR",{slot:!0});var r=m(e);l=_(r,"TH",{class:!0}),m(l).forEach(s),t=_(r,"TH",{}),m(t).forEach(s),r.forEach(s),this.h()},h(){V(l,"class","w-1/2 lg:w-3/5"),V(e,"slot","headers")},m(a,r){E(a,e,r),f(e,l),f(e,t)},p:we,d(a){a&&s(e)}}}function Xt(o){let e,l,t=N("common.details")+"",a,r,i,u,n,c,T=N("namespaces.versions")+"",y,O,P,R,D,h,B=N("namespaces.client-actions")+"",b,z,F,Z;return i=new ze({props:{variant:"simple",$$slots:{headers:[Ot],caption:[Bt],default:[Pt]},$$scope:{ctx:o}}}),P=new ze({props:{variant:"simple",$$slots:{headers:[Ft],caption:[jt],default:[Ut]},$$scope:{ctx:o}}}),F=new ze({props:{variant:"simple",$$slots:{headers:[Qt],caption:[Jt],default:[Kt]},$$scope:{ctx:o}}}),{c(){e=p("article"),l=p("h3"),a=w(t),r=I(),J(i.$$.fragment),u=I(),n=p("article"),c=p("h3"),y=w(T),O=I(),J(P.$$.fragment),R=I(),D=p("article"),h=p("h3"),b=w(B),z=I(),J(F.$$.fragment),this.h()},l(A){e=_(A,"ARTICLE",{class:!0});var S=m(e);l=_(S,"H3",{class:!0});var q=m(l);a=g(q,t),q.forEach(s),r=C(S),Q(i.$$.fragment,S),S.forEach(s),u=C(A),n=_(A,"ARTICLE",{class:!0});var d=m(n);c=_(d,"H3",{class:!0});var k=m(c);y=g(k,T),k.forEach(s),O=C(d),Q(P.$$.fragment,d),d.forEach(s),R=C(A),D=_(A,"ARTICLE",{class:!0});var U=m(D);h=_(U,"H3",{class:!0});var x=m(h);b=g(x,B),x.forEach(s),z=C(U),Q(F.$$.fragment,U),U.forEach(s),this.h()},h(){V(l,"class","text-lg font-medium"),V(e,"class","namespace-info flex w-full flex-col"),V(c,"class","text-lg font-medium"),V(n,"class","namespace-info flex w-full flex-col"),V(h,"class","text-lg font-medium"),V(D,"class","namespace-info flex w-full flex-col")},m(A,S){E(A,e,S),f(e,l),f(l,a),f(e,r),X(i,e,null),E(A,u,S),E(A,n,S),f(n,c),f(c,y),f(n,O),X(P,n,null),E(A,R,S),E(A,D,S),f(D,h),f(h,b),f(D,z),X(F,D,null),Z=!0},p(A,S){const q={};S&131075&&(q.$$scope={dirty:S,ctx:A}),i.$set(q);const d={};S&131096&&(d.$$scope={dirty:S,ctx:A}),P.$set(d);const k={};S&131104&&(k.$$scope={dirty:S,ctx:A}),F.$set(k)},i(A){Z||(j(i.$$.fragment,A),j(P.$$.fragment,A),j(F.$$.fragment,A),Z=!0)},o(A){W(i.$$.fragment,A),W(P.$$.fragment,A),W(F.$$.fragment,A),Z=!1},d(A){A&&s(e),Y(i),A&&s(u),A&&s(n),Y(P),A&&s(R),A&&s(D),Y(F)}}}function ut(o){let e,l,t=N("events.attribute-group.search-attributes")+"",a,r,i,u;return i=new ze({props:{class:"w-full",$$slots:{headers:[tl],caption:[xt],default:[Zt]},$$scope:{ctx:o}}}),{c(){e=p("section"),l=p("h3"),a=w(t),r=I(),J(i.$$.fragment),this.h()},l(n){e=_(n,"SECTION",{});var c=m(e);l=_(c,"H3",{class:!0});var T=m(l);a=g(T,t),T.forEach(s),r=C(c),Q(i.$$.fragment,c),c.forEach(s),this.h()},h(){V(l,"class","my-4 text-lg font-medium")},m(n,c){E(n,e,c),f(e,l),f(l,a),f(e,r),X(i,e,null),u=!0},p(n,c){const T={};c&131136&&(T.$$scope={dirty:c,ctx:n}),i.$set(T)},i(n){u||(j(i.$$.fragment,n),u=!0)},o(n){W(i.$$.fragment,n),u=!1},d(n){n&&s(e),Y(i)}}}function Yt(o){let e,l=o[13]+"",t,a,r,i=o[14]+"",u,n;return{c(){e=p("td"),t=w(l),a=I(),r=p("td"),u=w(i),n=I()},l(c){e=_(c,"TD",{});var T=m(e);t=g(T,l),T.forEach(s),a=C(c),r=_(c,"TD",{});var y=m(r);u=g(y,i),y.forEach(s),n=C(c)},m(c,T){E(c,e,T),f(e,t),E(c,a,T),E(c,r,T),f(r,u),E(c,n,T)},p(c,T){T&64&&l!==(l=c[13]+"")&&M(t,l),T&64&&i!==(i=c[14]+"")&&M(u,i)},d(c){c&&s(e),c&&s(a),c&&s(r),c&&s(n)}}}function pt(o){let e,l;return e=new kt({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p(t,a){const r={};a&131136&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Zt(o){let e,l,t=Object.entries(o[6]),a=[];for(let i=0;i<t.length;i+=1)a[i]=pt(ct(o,t,i));const r=i=>W(a[i],1,1,()=>{a[i]=null});return{c(){for(let i=0;i<a.length;i+=1)a[i].c();e=Me()},l(i){for(let u=0;u<a.length;u+=1)a[u].l(i);e=Me()},m(i,u){for(let n=0;n<a.length;n+=1)a[n].m(i,u);E(i,e,u),l=!0},p(i,u){if(u&64){t=Object.entries(i[6]);let n;for(n=0;n<t.length;n+=1){const c=ct(i,t,n);a[n]?(a[n].p(c,u),j(a[n],1)):(a[n]=pt(c),a[n].c(),j(a[n],1),a[n].m(e.parentNode,e))}for(mt(),n=t.length;n<a.length;n+=1)r(n);_t()}},i(i){if(!l){for(let u=0;u<t.length;u+=1)j(a[u]);l=!0}},o(i){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)W(a[u]);l=!1},d(i){bt(a,i),i&&s(e)}}}function xt(o){let e,l=N("events.attribute-group.search-attributes")+"",t;return{c(){e=p("caption"),t=w(l),this.h()},l(a){e=_(a,"CAPTION",{class:!0,slot:!0});var r=m(e);t=g(r,l),r.forEach(s),this.h()},h(){V(e,"class","sr-only"),V(e,"slot","caption")},m(a,r){E(a,e,r),f(e,t)},p:we,d(a){a&&s(e)}}}function el(o){let e,l=N("common.key")+"",t,a,r,i=N("common.type")+"",u;return{c(){e=p("th"),t=w(l),a=I(),r=p("th"),u=w(i)},l(n){e=_(n,"TH",{});var c=m(e);t=g(c,l),c.forEach(s),a=C(n),r=_(n,"TH",{});var T=m(r);u=g(T,i),T.forEach(s)},m(n,c){E(n,e,c),f(e,t),E(n,a,c),E(n,r,c),f(r,u)},p:we,d(n){n&&s(e),n&&s(a),n&&s(r)}}}function tl(o){let e,l;return e=new At({props:{slot:"headers",$$slots:{default:[el]},$$scope:{ctx:o}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p(t,a){const r={};a&131072&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function ll(o){var z,F,Z,A,S,q;let e,l,t,a=N("namespaces.namespace")+"",r,i,u=((F=(z=o[0])==null?void 0:z.namespaceInfo)==null?void 0:F.name)+"",n,c,T,y=((A=(Z=o[0])==null?void 0:Z.namespaceInfo)==null?void 0:A.description)+"",O,P,R,D,h,B;e=new gt({props:{title:`${N("namespaces.namespace")} | ${(q=(S=o[0])==null?void 0:S.namespaceInfo)==null?void 0:q.name}`,url:o[2].url.href}}),R=new Dt({props:{class:"flex flex-col gap-4 lg:flex-row",$$slots:{default:[Xt]},$$scope:{ctx:o}}});let b=o[6]&&ut(o);return{c(){J(e.$$.fragment),l=I(),t=p("h1"),r=w(a),i=w(": "),n=w(u),c=I(),T=p("h2"),O=w(y),P=I(),J(R.$$.fragment),D=I(),b&&b.c(),h=Me(),this.h()},l(d){Q(e.$$.fragment,d),l=C(d),t=_(d,"H1",{class:!0,"data-testid":!0});var k=m(t);r=g(k,a),i=g(k,": "),n=g(k,u),k.forEach(s),c=C(d),T=_(d,"H2",{"data-testid":!0});var U=m(T);O=g(U,y),U.forEach(s),P=C(d),Q(R.$$.fragment,d),D=C(d),b&&b.l(d),h=Me(),this.h()},h(){V(t,"class","text-2xl"),V(t,"data-testid","namespace-title"),V(T,"data-testid","namespace-description")},m(d,k){X(e,d,k),E(d,l,k),E(d,t,k),f(t,r),f(t,i),f(t,n),E(d,c,k),E(d,T,k),f(T,O),E(d,P,k),X(R,d,k),E(d,D,k),b&&b.m(d,k),E(d,h,k),B=!0},p(d,[k]){var _e,ae,ee,te,G,le;const U={};k&1&&(U.title=`${N("namespaces.namespace")} | ${(ae=(_e=d[0])==null?void 0:_e.namespaceInfo)==null?void 0:ae.name}`),k&4&&(U.url=d[2].url.href),e.$set(U),(!B||k&1)&&u!==(u=((te=(ee=d[0])==null?void 0:ee.namespaceInfo)==null?void 0:te.name)+"")&&M(n,u),(!B||k&1)&&y!==(y=((le=(G=d[0])==null?void 0:G.namespaceInfo)==null?void 0:le.description)+"")&&M(O,y);const x={};k&131131&&(x.$$scope={dirty:k,ctx:d}),R.$set(x),d[6]?b?(b.p(d,k),k&64&&j(b,1)):(b=ut(d),b.c(),j(b,1),b.m(h.parentNode,h)):b&&(mt(),W(b,1,1,()=>{b=null}),_t())},i(d){B||(j(e.$$.fragment,d),j(R.$$.fragment,d),j(b),B=!0)},o(d){W(e.$$.fragment,d),W(R.$$.fragment,d),W(b),B=!1},d(d){Y(e,d),d&&s(l),d&&s(t),d&&s(c),d&&s(T),d&&s(P),Y(R,d),d&&s(D),b&&b.d(d),d&&s(h)}}}function al(o,e,l){let t,a,r,i,u,n,c,T;Ve(o,ft,h=>l(12,r=h)),Ve(o,wt,h=>l(2,i=h)),Ve(o,It,h=>l(3,u=h)),Ve(o,Ct,h=>l(4,n=h)),Ve(o,St,h=>l(5,c=h)),Ve(o,Rt,h=>l(6,T=h));let{data:y}=e;var O;(function(h){h[h.ARCHIVAL_STATE_UNSPECIFIED=0]="ARCHIVAL_STATE_UNSPECIFIED",h[h.ARCHIVAL_STATE_DISABLED=1]="ARCHIVAL_STATE_DISABLED",h[h.ARCHIVAL_STATE_ENABLED=2]="ARCHIVAL_STATE_ENABLED"})(O||(O={}));const P=h=>h===O.ARCHIVAL_STATE_ENABLED?"green":"default",R=(h,B=!0)=>B?h?"default":"green":h?"green":"default",D=h=>h?N("common.disabled"):N("common.enabled");return Et(()=>{var h;Tt(ft,r=(h=t==null?void 0:t.namespaceInfo)===null||h===void 0?void 0:h.name,r)}),o.$$set=h=>{"data"in h&&l(10,y=h.data)},o.$$.update=()=>{o.$$.dirty&1024&&l(0,{namespace:t,clusters:a}=y,t,(l(1,a),l(10,y)))},[t,a,i,u,n,c,T,P,R,D,y]}class vl extends $t{constructor(e){super(),ht(this,e,al,ll,vt,{data:10})}}export{vl as component,hl as universal};
