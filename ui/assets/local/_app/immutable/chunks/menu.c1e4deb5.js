import{S as ee,i as te,s as le,K as q,Z as S,k as y,l as P,m as U,h as D,_ as H,b as J,T as ye,H as Y,L as B,M as K,N as z,$,g as L,d as A,J as oe,a0 as G,a5 as re,ah as Pe,a1 as ne,R as Ue,a7 as Ve,W,e as be,v as F,f as w,ag as fe,C as Q,a as X,c as Z,n as x,D as I,F as R,I as ce,y as de,z as me,A as _e,B as he,q as Ce,r as Ae,u as De,ac as qe,af as Be,U as Ke,V as ze,w as He}from"./index.df672b57.js";import{B as je}from"./badge.fae0ed54.js";import{I as Te}from"./icon.aeec2507.js";import{t as j}from"./tw-merge.1166cefb.js";import{f as Je}from"./index.c28627e1.js";import{w as ae}from"./singletons.426f19a7.js";function We(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click-outside"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}const Xe=t=>({open:t&2}),ge=t=>({open:t[1]});function Ze(t){let e,n,l,s,a;const _=t[5].default,m=q(_,t,t[4],ge);let f=[{class:n=j("relative",t[0])},t[3]],i={};for(let d=0;d<f.length;d+=1)i=S(i,f[d]);return{c(){e=y("div"),m&&m.c(),this.h()},l(d){e=P(d,"DIV",{class:!0});var b=U(e);m&&m.l(b),b.forEach(D),this.h()},h(){H(e,i)},m(d,b){J(d,e,b),m&&m.m(e,null),l=!0,s||(a=[ye(We.call(null,e)),Y(e,"click-outside",t[2])],s=!0)},p(d,[b]){m&&m.p&&(!l||b&18)&&B(m,_,d,d[4],l?z(_,d[4],b,Xe):K(d[4]),ge),H(e,i=$(f,[(!l||b&1&&n!==(n=j("relative",d[0])))&&{class:n},b&8&&d[3]]))},i(d){l||(L(m,d),l=!0)},o(d){A(m,d),l=!1},d(d){d&&D(e),m&&m.d(d),s=!1,oe(a)}}}const se="menu-context";function Ge(t,e,n){const l=["class","open"];let s=G(e,l),a,_=Ue,m=()=>(_(),_=Ve(b,v=>n(6,a=v)),b);t.$$.on_destroy.push(()=>_());let{$$slots:f={},$$scope:i}=e,{class:d=""}=e,{open:b=ae(!1)}=e;m();const o=ae(!1),h=ae(null),T=re(),E=()=>{a&&(T("close"),W(b,a=!1,a))};return Pe(se,{open:b,keepOpen:o,menuElement:h}),t.$$set=v=>{e=S(S({},e),ne(v)),n(3,s=G(e,l)),"class"in v&&n(0,d=v.class),"open"in v&&m(n(1,b=v.open)),"$$scope"in v&&n(4,i=v.$$scope)},[d,b,E,s,i,f]}class ht extends ee{constructor(e){super(),te(this,e,Ge,Ze,le,{class:0,open:1})}}const Qe=t=>({}),ve=t=>({}),Ye=t=>({}),ke=t=>({});function Fe(t){let e,n,l,s,a,_,m,f,i,d,b,o,h;const T=t[13].leading,E=q(T,t,t[12],ke),v=[$e,xe],O=[];function M(c,p){return c[5]?0:1}s=M(t),a=O[s]=v[s](t);let g=t[1]!==void 0&&Ee(t);const N=t[13].trailing,C=q(N,t,t[12],ve);let u=[{role:"menuitem"},{class:f=j("menu-item",t[0])},{"aria-hidden":i=t[3]?"true":"false"},{"aria-disabled":t[3]},{tabindex:d=t[3]?-1:0},t[11]],r={};for(let c=0;c<u.length;c+=1)r=S(r,u[c]);return{c(){e=y("li"),E&&E.c(),n=X(),l=y("div"),a.c(),_=X(),g&&g.c(),m=X(),C&&C.c(),this.h()},l(c){e=P(c,"LI",{role:!0,class:!0,"aria-hidden":!0,"aria-disabled":!0,tabindex:!0});var p=U(e);E&&E.l(p),n=Z(p),l=P(p,"DIV",{class:!0});var V=U(l);a.l(V),_=Z(V),g&&g.l(V),V.forEach(D),m=Z(p),C&&C.l(p),p.forEach(D),this.h()},h(){x(l,"class","menu-item-wrapper svelte-1m7mvoa"),I(l,"centered",t[6]),H(e,r),I(e,"destructive",t[2]),I(e,"disabled",t[3]),I(e,"selected",t[1]),I(e,"svelte-1m7mvoa",!0)},m(c,p){J(c,e,p),E&&E.m(e,null),R(e,n),R(e,l),O[s].m(l,null),R(l,_),g&&g.m(l,null),R(e,m),C&&C.m(e,null),b=!0,o||(h=[Y(e,"click",t[10]),Y(e,"keydown",ce(t[9]))],o=!0)},p(c,p){E&&E.p&&(!b||p&4096)&&B(E,T,c,c[12],b?z(T,c[12],p,Ye):K(c[12]),ke);let V=s;s=M(c),s===V?O[s].p(c,p):(F(),A(O[V],1,1,()=>{O[V]=null}),w(),a=O[s],a?a.p(c,p):(a=O[s]=v[s](c),a.c()),L(a,1),a.m(l,_)),c[1]!==void 0?g?(g.p(c,p),p&2&&L(g,1)):(g=Ee(c),g.c(),L(g,1),g.m(l,null)):g&&(F(),A(g,1,1,()=>{g=null}),w()),(!b||p&64)&&I(l,"centered",c[6]),C&&C.p&&(!b||p&4096)&&B(C,N,c,c[12],b?z(N,c[12],p,Qe):K(c[12]),ve),H(e,r=$(u,[{role:"menuitem"},(!b||p&1&&f!==(f=j("menu-item",c[0])))&&{class:f},(!b||p&8&&i!==(i=c[3]?"true":"false"))&&{"aria-hidden":i},(!b||p&8)&&{"aria-disabled":c[3]},(!b||p&8&&d!==(d=c[3]?-1:0))&&{tabindex:d},p&2048&&c[11]])),I(e,"destructive",c[2]),I(e,"disabled",c[3]),I(e,"selected",c[1]),I(e,"svelte-1m7mvoa",!0)},i(c){b||(L(E,c),L(a),L(g),L(C,c),b=!0)},o(c){A(E,c),A(a),A(g),A(C,c),b=!1},d(c){c&&D(e),E&&E.d(c),O[s].d(),g&&g.d(),C&&C.d(c),o=!1,oe(h)}}}function we(t){let e,n,l,s,a,_,m;const f=t[13].default,i=q(f,t,t[12],null);let d=[{href:t[4]},{role:"menuitem"},{class:n=j("menu-item",t[0])},{"aria-hidden":l=t[3]?"true":"false"},{"aria-disabled":t[3]},{tabindex:s=t[3]?-1:0},t[11]],b={};for(let o=0;o<d.length;o+=1)b=S(b,d[o]);return{c(){e=y("a"),i&&i.c(),this.h()},l(o){e=P(o,"A",{href:!0,role:!0,class:!0,"aria-hidden":!0,"aria-disabled":!0,tabindex:!0});var h=U(e);i&&i.l(h),h.forEach(D),this.h()},h(){H(e,b),I(e,"disabled",t[3]),I(e,"svelte-1m7mvoa",!0)},m(o,h){J(o,e,h),i&&i.m(e,null),a=!0,_||(m=Y(e,"keydown",ce(t[9])),_=!0)},p(o,h){i&&i.p&&(!a||h&4096)&&B(i,f,o,o[12],a?z(f,o[12],h,null):K(o[12]),null),H(e,b=$(d,[(!a||h&16)&&{href:o[4]},{role:"menuitem"},(!a||h&1&&n!==(n=j("menu-item",o[0])))&&{class:n},(!a||h&8&&l!==(l=o[3]?"true":"false"))&&{"aria-hidden":l},(!a||h&8)&&{"aria-disabled":o[3]},(!a||h&8&&s!==(s=o[3]?-1:0))&&{tabindex:s},h&2048&&o[11]])),I(e,"disabled",o[3]),I(e,"svelte-1m7mvoa",!0)},i(o){a||(L(i,o),a=!0)},o(o){A(i,o),a=!1},d(o){o&&D(e),i&&i.d(o),_=!1,m()}}}function xe(t){let e;const n=t[13].default,l=q(n,t,t[12],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,a){l&&l.m(s,a),e=!0},p(s,a){l&&l.p&&(!e||a&4096)&&B(l,n,s,s[12],e?z(n,s[12],a,null):K(s[12]),null)},i(s){e||(L(l,s),e=!0)},o(s){A(l,s),e=!1},d(s){l&&l.d(s)}}}function $e(t){let e,n,l,s,a;const _=t[13].default,m=q(_,t,t[12],null);return{c(){e=y("div"),m&&m.c(),n=X(),l=y("span"),s=Ce(t[5]),this.h()},l(f){e=P(f,"DIV",{class:!0});var i=U(e);m&&m.l(i),n=Z(i),l=P(i,"SPAN",{class:!0});var d=U(l);s=Ae(d,t[5]),d.forEach(D),i.forEach(D),this.h()},h(){x(l,"class","menu-item-description svelte-1m7mvoa"),x(e,"class","flex flex-col svelte-1m7mvoa")},m(f,i){J(f,e,i),m&&m.m(e,null),R(e,n),R(e,l),R(l,s),a=!0},p(f,i){m&&m.p&&(!a||i&4096)&&B(m,_,f,f[12],a?z(_,f[12],i,null):K(f[12]),null),(!a||i&32)&&De(s,f[5])},i(f){a||(L(m,f),a=!0)},o(f){A(m,f),a=!1},d(f){f&&D(e),m&&m.d(f)}}}function Ee(t){let e,n,l=t[1]&&Ie();return{c(){e=y("div"),l&&l.c(),this.h()},l(s){e=P(s,"DIV",{class:!0});var a=U(e);l&&l.l(a),a.forEach(D),this.h()},h(){x(e,"class","flex h-6 w-6 shrink-0 svelte-1m7mvoa")},m(s,a){J(s,e,a),l&&l.m(e,null),n=!0},p(s,a){s[1]?l?a&2&&L(l,1):(l=Ie(),l.c(),L(l,1),l.m(e,null)):l&&(F(),A(l,1,1,()=>{l=null}),w())},i(s){n||(L(l),n=!0)},o(s){A(l),n=!1},d(s){s&&D(e),l&&l.d()}}}function Ie(t){let e,n;return e=new Te({props:{name:"checkmark"}}),{c(){de(e.$$.fragment)},l(l){me(e.$$.fragment,l)},m(l,s){_e(e,l,s),n=!0},i(l){n||(L(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){he(e,l)}}}function et(t){let e,n,l,s;const a=[we,Fe],_=[];function m(f,i){return f[4]?0:1}return e=m(t),n=_[e]=a[e](t),{c(){n.c(),l=be()},l(f){n.l(f),l=be()},m(f,i){_[e].m(f,i),J(f,l,i),s=!0},p(f,[i]){let d=e;e=m(f),e===d?_[e].p(f,i):(F(),A(_[d],1,1,()=>{_[d]=null}),w(),n=_[e],n?n.p(f,i):(n=_[e]=a[e](f),n.c()),L(n,1),n.m(l.parentNode,l))},i(f){s||(L(n),s=!0)},o(f){A(n),s=!1},d(f){_[e].d(f),f&&D(l)}}}const ue='input, li[role="option"]:not([aria-disabled="true"]), li[role="menuitem"]:not([aria-disabled="true"])';function tt(t,e,n){const l=["class","selected","destructive","disabled","href","description","centered"];let s=G(e,l),a,_,{$$slots:m={},$$scope:f}=e,{class:i=""}=e,{selected:d=void 0}=e,{destructive:b=!1}=e,{disabled:o=!1}=e,{href:h=null}=e,{description:T=null}=e,{centered:E=!1}=e;const{keepOpen:v,open:O}=fe(se);Q(t,v,r=>n(15,_=r)),Q(t,O,r=>n(14,a=r));const M=re(),g=r=>{switch(r.key){case"Escape":W(O,a=!1,a);break;case"ArrowDown":case"ArrowRight":N(r.currentTarget);break;case"ArrowUp":case"ArrowLeft":C(r.currentTarget);break;case" ":case"Enter":M("click"),_||W(O,a=!1,a);break}},N=r=>{let c=r.nextElementSibling;for(;c&&!c.matches(ue);)c=c.nextElementSibling;c&&c instanceof HTMLLIElement&&c.focus()},C=r=>{let c=r.previousElementSibling;for(;c&&!c.matches(ue);)c=c.previousElementSibling;c&&c instanceof HTMLLIElement&&c.focus()},u=()=>{_||W(O,a=!1,a),M("click")};return t.$$set=r=>{e=S(S({},e),ne(r)),n(11,s=G(e,l)),"class"in r&&n(0,i=r.class),"selected"in r&&n(1,d=r.selected),"destructive"in r&&n(2,b=r.destructive),"disabled"in r&&n(3,o=r.disabled),"href"in r&&n(4,h=r.href),"description"in r&&n(5,T=r.description),"centered"in r&&n(6,E=r.centered),"$$scope"in r&&n(12,f=r.$$scope)},[i,d,b,o,h,T,E,v,O,g,u,s,f,m]}class bt extends ee{constructor(e){super(),te(this,e,tt,et,le,{class:0,selected:1,destructive:2,disabled:3,href:4,description:5,centered:6})}}const lt=t=>({}),Le=t=>({}),nt=t=>({}),pe=t=>({});function Me(t){let e,n,l;return n=new Te({props:{name:t[13]?"chevron-up":"chevron-down"}}),{c(){e=y("div"),de(n.$$.fragment),this.h()},l(s){e=P(s,"DIV",{class:!0});var a=U(e);me(n.$$.fragment,a),a.forEach(D),this.h()},h(){x(e,"class","flex")},m(s,a){J(s,e,a),_e(n,e,null),l=!0},p(s,a){const _={};a&8192&&(_.name=s[13]?"chevron-up":"chevron-down"),n.$set(_)},i(s){l||(L(n.$$.fragment,s),l=!0)},o(s){A(n.$$.fragment,s),l=!1},d(s){s&&D(e),he(n)}}}function Oe(t){let e,n;return e=new je({props:{class:"absolute right-0 top-0 origin-bottom-left translate-x-[10px] translate-y-[-10px]",type:"count",$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){de(e.$$.fragment)},l(l){me(e.$$.fragment,l)},m(l,s){_e(e,l,s),n=!0},p(l,s){const a={};s&2097156&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){n||(L(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){he(e,l)}}}function st(t){let e;return{c(){e=Ce(t[2])},l(n){e=Ae(n,t[2])},m(n,l){J(n,e,l)},p(n,l){l&4&&De(e,n[2])},d(n){n&&D(e)}}}function it(t){let e,n,l,s,a,_,m,f,i,d,b;const o=t[20].leading,h=q(o,t,t[21],pe),T=t[20].default,E=q(T,t,t[21],null);let v=t[4]&&Me(t);const O=t[20].trailing,M=q(O,t,t[21],Le);let g=t[2]>0&&Oe(t),N=[{id:t[5]},{disabled:t[3]},{type:"button"},{"aria-haspopup":m=!t[3]},{"aria-controls":t[1]},{"aria-expanded":t[13]},{"aria-label":t[6]},{class:f=j("menu-button",t[10],t[0])},t[18]],C={};for(let u=0;u<N.length;u+=1)C=S(C,N[u]);return{c(){e=y("button"),h&&h.c(),n=X(),l=y("div"),E&&E.c(),s=X(),v&&v.c(),a=X(),M&&M.c(),_=X(),g&&g.c(),this.h()},l(u){e=P(u,"BUTTON",{id:!0,type:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,class:!0});var r=U(e);h&&h.l(r),n=Z(r),l=P(r,"DIV",{class:!0});var c=U(l);E&&E.l(c),c.forEach(D),s=Z(r),v&&v.l(r),a=Z(r),M&&M.l(r),_=Z(r),g&&g.l(r),r.forEach(D),this.h()},h(){x(l,"class","flex grow items-center"),I(l,"justify-center",t[12]),I(l,"hidden",!t[19].default),H(e,C),I(e,"unroundLeft",t[9]),I(e,"unroundRight",t[8]),I(e,"active",t[11]),I(e,"unround",t[7]),I(e,"round",t[12]),I(e,"svelte-9dlgng",!0)},m(u,r){J(u,e,r),h&&h.m(e,null),R(e,n),R(e,l),E&&E.m(l,null),R(e,s),v&&v.m(e,null),R(e,a),M&&M.m(e,null),R(e,_),g&&g.m(e,null),e.autofocus&&e.focus(),i=!0,d||(b=[Y(e,"click",ce(qe(t[16]))),Y(e,"keydown",t[17])],d=!0)},p(u,[r]){h&&h.p&&(!i||r&2097152)&&B(h,o,u,u[21],i?z(o,u[21],r,nt):K(u[21]),pe),E&&E.p&&(!i||r&2097152)&&B(E,T,u,u[21],i?z(T,u[21],r,null):K(u[21]),null),(!i||r&4096)&&I(l,"justify-center",u[12]),(!i||r&524288)&&I(l,"hidden",!u[19].default),u[4]?v?(v.p(u,r),r&16&&L(v,1)):(v=Me(u),v.c(),L(v,1),v.m(e,a)):v&&(F(),A(v,1,1,()=>{v=null}),w()),M&&M.p&&(!i||r&2097152)&&B(M,O,u,u[21],i?z(O,u[21],r,lt):K(u[21]),Le),u[2]>0?g?(g.p(u,r),r&4&&L(g,1)):(g=Oe(u),g.c(),L(g,1),g.m(e,null)):g&&(F(),A(g,1,1,()=>{g=null}),w()),H(e,C=$(N,[(!i||r&32)&&{id:u[5]},(!i||r&8)&&{disabled:u[3]},{type:"button"},(!i||r&8&&m!==(m=!u[3]))&&{"aria-haspopup":m},(!i||r&2)&&{"aria-controls":u[1]},(!i||r&8192)&&{"aria-expanded":u[13]},(!i||r&64)&&{"aria-label":u[6]},(!i||r&1025&&f!==(f=j("menu-button",u[10],u[0])))&&{class:f},r&262144&&u[18]])),I(e,"unroundLeft",u[9]),I(e,"unroundRight",u[8]),I(e,"active",u[11]),I(e,"unround",u[7]),I(e,"round",u[12]),I(e,"svelte-9dlgng",!0)},i(u){i||(L(h,u),L(E,u),L(v),L(M,u),L(g),i=!0)},o(u){A(h,u),A(E,u),A(v),A(M,u),A(g),i=!1},d(u){u&&D(e),h&&h.d(u),E&&E.d(u),v&&v.d(),M&&M.d(u),g&&g.d(),d=!1,oe(b)}}}function at(t,e,n){const l=["class","controls","count","disabled","hasIndicator","id","label","unround","unroundRight","unroundLeft","variant","active","round"];let s=G(e,l),a,_,{$$slots:m={},$$scope:f}=e;const i=Be(m);let{class:d=""}=e,{controls:b}=e,{count:o=0}=e,{disabled:h=!1}=e,{hasIndicator:T=!1}=e,{id:E=null}=e,{label:v=null}=e,{unround:O=!1}=e,{unroundRight:M=!1}=e,{unroundLeft:g=!1}=e,{variant:N="secondary"}=e,{active:C=!1}=e,{round:u=!1}=e;const r=re(),{open:c,menuElement:p}=fe(se);Q(t,c,k=>n(13,_=k)),Q(t,p,k=>n(22,a=k));const V=()=>{c.update(k=>{let ie=k;return h||(ie=!k),r("click",{open:ie}),ie})},Se=k=>{switch(k.key){case"Escape":W(c,_=!1,_);break;case"ArrowDown":k.preventDefault(),_?Re():W(c,_=!0,_);break}},Re=()=>{const k=Array.from(a.querySelectorAll(ue));k&&k[0]&&requestAnimationFrame(()=>k[0].focus())};return t.$$set=k=>{e=S(S({},e),ne(k)),n(18,s=G(e,l)),"class"in k&&n(0,d=k.class),"controls"in k&&n(1,b=k.controls),"count"in k&&n(2,o=k.count),"disabled"in k&&n(3,h=k.disabled),"hasIndicator"in k&&n(4,T=k.hasIndicator),"id"in k&&n(5,E=k.id),"label"in k&&n(6,v=k.label),"unround"in k&&n(7,O=k.unround),"unroundRight"in k&&n(8,M=k.unroundRight),"unroundLeft"in k&&n(9,g=k.unroundLeft),"variant"in k&&n(10,N=k.variant),"active"in k&&n(11,C=k.active),"round"in k&&n(12,u=k.round),"$$scope"in k&&n(21,f=k.$$scope)},[d,b,o,h,T,E,v,O,M,g,N,C,u,_,c,p,V,Se,s,i,m,f]}class gt extends ee{constructor(e){super(),te(this,e,at,it,le,{class:0,controls:1,count:2,disabled:3,hasIndicator:4,id:5,label:6,unround:7,unroundRight:8,unroundLeft:9,variant:10,active:11,round:12})}}const Ne=t=>Array.from(t.querySelectorAll('[href], button, textarea, input, div[contentEditable="true"], select, [tabindex][tabindex="0"]')).filter(e=>!e.hasAttribute("disabled")&&e.getAttribute("tabindex")!=="-1"),vt=(t,e)=>{let n,l;const s=i=>{i.key==="Tab"&&(i.shiftKey?document.activeElement===n&&(l.focus(),i.preventDefault()):document.activeElement===l&&(n.focus(),i.preventDefault()))},a=(i=!1)=>{if(e===!1)return;const d=Ne(t);n=d[0],l=d[d.length-1],i||n==null||n.focus(),n==null||n.addEventListener("keydown",s),l==null||l.addEventListener("keydown",s)},_=()=>{n==null||n.removeEventListener("keydown",s),l==null||l.removeEventListener("keydown",s)},m=(i,d)=>(i.length&&(_(),a(!0)),d);return new MutationObserver(m).observe(t,{childList:!0,subtree:!0}),a(),{update(i){e=i,i?a():_()},destroy(){_()}}};function ut(t){let e,n,l,s,a,_,m;const f=t[13].default,i=q(f,t,t[12],null);let d=[{role:"menu"},{class:n=j("menu",t[3],t[1])},{"aria-labelledby":t[2]},{tabindex:l=-1},{id:t[2]},t[9]],b={};for(let o=0;o<d.length;o+=1)b=S(b,d[o]);return{c(){e=y("ul"),i&&i.c(),this.h()},l(o){e=P(o,"UL",{role:!0,class:!0,"aria-labelledby":!0,tabindex:!0,id:!0});var h=U(e);i&&i.l(h),h.forEach(D),this.h()},h(){H(e,b),I(e,"hidden",!t[4]),I(e,"svelte-1nprooz",!0)},m(o,h){J(o,e,h),i&&i.m(e,null),t[14](e),a=!0,_||(m=Y(e,"focusout",t[8]),_=!0)},p(o,[h]){i&&i.p&&(!a||h&4096)&&B(i,f,o,o[12],a?z(f,o[12],h,null):K(o[12]),null),H(e,b=$(d,[{role:"menu"},(!a||h&10&&n!==(n=j("menu",o[3],o[1])))&&{class:n},(!a||h&4)&&{"aria-labelledby":o[2]},{tabindex:l},(!a||h&4)&&{id:o[2]},h&512&&o[9]])),I(e,"hidden",!o[4]),I(e,"svelte-1nprooz",!0)},i(o){a||(L(i,o),s||Ke(()=>{s=ze(e,Je,{duration:100}),s.start()}),a=!0)},o(o){A(i,o),a=!1},d(o){o&&D(e),i&&i.d(o),t[14](null),_=!1,m()}}}function ot(t,e,n){let l,s;const a=["class","id","keepOpen","position","menuElement"];let _=G(e,a),m,f,i,{$$slots:d={},$$scope:b}=e,{class:o=""}=e,{id:h}=e,{keepOpen:T=!1}=e,{position:E="left"}=e,{menuElement:v=null}=e;const{keepOpen:O,menuElement:M,open:g}=fe(se);Q(t,O,u=>n(16,f=u)),Q(t,M,u=>n(17,i=u)),Q(t,g,u=>n(4,m=u));const N=u=>{!f&&u.target===s&&W(g,m=!1,m)};function C(u){He[u?"unshift":"push"](()=>{v=u,n(0,v)})}return t.$$set=u=>{e=S(S({},e),ne(u)),n(9,_=G(e,a)),"class"in u&&n(1,o=u.class),"id"in u&&n(2,h=u.id),"keepOpen"in u&&n(10,T=u.keepOpen),"position"in u&&n(3,E=u.position),"menuElement"in u&&n(0,v=u.menuElement),"$$scope"in u&&n(12,b=u.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&W(O,f=T,f),t.$$.dirty&1&&W(M,i=v,i),t.$$.dirty&1&&n(11,l=v?Ne(v):[]),t.$$.dirty&2048&&(s=l[l.length-1])},[v,o,h,E,m,O,M,g,N,_,T,l,b,d,C]}class kt extends ee{constructor(e){super(),te(this,e,ot,ut,le,{class:1,id:2,keepOpen:10,position:3,menuElement:0})}}export{ht as M,gt as a,kt as b,We as c,bt as d,vt as f};
