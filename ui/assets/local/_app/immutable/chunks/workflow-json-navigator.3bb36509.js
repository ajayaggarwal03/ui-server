import{S as Ne,i as Ie,s as oe,Z as ie,k as E,q as te,a as C,l as N,m as I,r as le,h,c as K,n as p,p as pe,D as R,_ as be,b as J,F as b,G as se,H as j,u as ne,$ as De,al as fe,R as Z,J as Pe,a0 as ge,a1 as ve,w as Te,e as z,v as re,d as S,f as ue,g as V,C as He,P as Se,K as Ve,y as Y,z as $,A as x,Q as Le,L as Oe,M as Ue,N as Be,B as ee}from"./index.df672b57.js";import{C as Ae}from"./code-block.1331d677.js";import{o as he,t as F}from"./translate.fa4eeabe.js";import{L as Re}from"./loading.da021c84.js";import{f as ae}from"./index.dc243288.js";import{d as We}from"./events.8e81e285.js";import{s as ke}from"./parse-with-big-int.b2dd742c.js";import{P as je}from"./payload-decoder.c763d46d.js";function Ce(s){let l,t,e,a,o,_,f,d,v=(s[0]??"")+"",c,g,r,O,D,L,k,y,P,m,W,X,i,U,H,w,G,B=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:s[3]},{max:s[4]},{step:O=s[12].step},he(s[13],"class")],M={};for(let n=0;n<B.length;n+=1)M=ie(M,B[n]);return{c(){l=E("div"),t=E("div"),e=E("div"),a=E("span"),o=te(s[3]),_=C(),f=E("div"),d=E("output"),c=te(v),g=C(),r=E("input"),D=C(),L=E("span"),k=te(s[4]),y=C(),P=E("div"),m=E("input"),X=C(),i=E("label"),U=te(s[1]),this.h()},l(n){l=N(n,"DIV",{class:!0});var u=I(l);t=N(u,"DIV",{class:!0});var T=I(t);e=N(T,"DIV",{class:!0});var A=I(e);a=N(A,"SPAN",{class:!0});var Q=I(a);o=le(Q,s[3]),Q.forEach(h),_=K(A),f=N(A,"DIV",{class:!0});var q=I(f);d=N(q,"OUTPUT",{class:!0,style:!0,for:!0});var ce=I(d);c=le(ce,v),ce.forEach(h),g=K(q),r=N(q,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),q.forEach(h),D=K(A),L=N(A,"SPAN",{class:!0});var _e=I(L);k=le(_e,s[4]),_e.forEach(h),A.forEach(h),y=K(T),P=N(T,"DIV",{class:!0});var de=I(P);m=N(de,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),de.forEach(h),X=K(T),i=N(T,"LABEL",{class:!0,for:!0});var me=I(i);U=le(me,s[1]),me.forEach(h),T.forEach(h),u.forEach(h),this.h()},h(){p(a,"class","absolute -bottom-6 left-0 text-xs font-normal"),p(d,"class","absolute -top-6 text-center text-xs font-normal"),pe(d,"left","calc("+s[7]+"% - ("+s[9]+"px))"),p(d,"for","range"),R(d,"hidden",!s[8]),be(r,M),R(r,"svelte-7ioe6n",!0),p(f,"class","relative flex items-center"),p(L,"class","absolute -bottom-6 right-0 text-xs font-normal"),p(e,"class","relative w-auto grow"),p(m,"id",s[5]),p(m,"class","numeric-input svelte-7ioe6n"),p(m,"type","number"),p(m,"inputmode","numeric"),p(m,"min",s[3]),p(m,"max",s[4]),p(m,"step",W=s[12].step),R(m,"invalid",!s[8]),p(P,"class","flex shrink"),p(i,"class","flex shrink text-sm"),p(i,"for",s[5]),R(i,"sr-only",s[2]),p(t,"class","range-input-container svelte-7ioe6n"),p(l,"class",H="w-full px-1 py-4 "+s[12].class+" svelte-7ioe6n")},m(n,u){J(n,l,u),b(l,t),b(t,e),b(e,a),b(a,o),b(e,_),b(e,f),b(f,d),b(d,c),s[14](d),b(f,g),b(f,r),r.autofocus&&r.focus(),se(r,s[0]),b(e,D),b(e,L),b(L,k),b(t,y),b(t,P),b(P,m),se(m,s[0]),b(t,X),b(t,i),b(i,U),w||(G=[j(window,"resize",s[11]),j(r,"change",s[15]),j(r,"input",s[15]),j(r,"input",s[10]),j(m,"input",s[16]),j(m,"input",s[10])],w=!0)},p(n,[u]){u&8&&ne(o,n[3]),u&1&&v!==(v=(n[0]??"")+"")&&ne(c,v),u&640&&pe(d,"left","calc("+n[7]+"% - ("+n[9]+"px))"),u&256&&R(d,"hidden",!n[8]),be(r,M=De(B,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},u&8&&{min:n[3]},u&16&&{max:n[4]},u&4096&&O!==(O=n[12].step)&&{step:O},u&8192&&he(n[13],"class")])),u&1&&se(r,n[0]),R(r,"svelte-7ioe6n",!0),u&16&&ne(k,n[4]),u&32&&p(m,"id",n[5]),u&8&&p(m,"min",n[3]),u&16&&p(m,"max",n[4]),u&4096&&W!==(W=n[12].step)&&p(m,"step",W),u&1&&fe(m.value)!==n[0]&&se(m,n[0]),u&256&&R(m,"invalid",!n[8]),u&2&&ne(U,n[1]),u&32&&p(i,"for",n[5]),u&4&&R(i,"sr-only",n[2]),u&4096&&H!==(H="w-full px-1 py-4 "+n[12].class+" svelte-7ioe6n")&&p(l,"class",H)},i:Z,o:Z,d(n){n&&h(l),s[14](null),w=!1,Pe(G)}}}function Ke(s,l,t){let e,a;const o=["label","labelHidden","min","max","id","value"];let _=ge(l,o),{label:f}=l,{labelHidden:d=!1}=l,{min:v=void 0}=l,{max:c=void 0}=l,{id:g=void 0}=l,{value:r=Math.round((v+c)/2)}=l,O=!0,D;const L=i=>{if(Number.isNaN(i.currentTarget.valueAsNumber)){t(0,r=v);return}t(8,O=i.currentTarget.valueAsNumber>=v&&i.currentTarget.valueAsNumber<=c)},k=({value:i,min:U,max:H})=>(i-U)*100/(H-U),y=({outputElement:i,outputXPos:U})=>{var H;const w=(H=i==null?void 0:i.clientWidth)!==null&&H!==void 0?H:15;return Math.floor(U*w/100)},P=()=>{t(7,e=k({value:r,min:v,max:c})),t(9,a=y({outputElement:D,outputXPos:e}))};function m(i){Te[i?"unshift":"push"](()=>{D=i,t(6,D)})}function W(){r=fe(this.value),t(0,r)}function X(){r=fe(this.value),t(0,r)}return s.$$set=i=>{t(12,l=ie(ie({},l),ve(i))),t(13,_=ge(l,o)),"label"in i&&t(1,f=i.label),"labelHidden"in i&&t(2,d=i.labelHidden),"min"in i&&t(3,v=i.min),"max"in i&&t(4,c=i.max),"id"in i&&t(5,g=i.id),"value"in i&&t(0,r=i.value)},s.$$.update=()=>{s.$$.dirty&25&&t(7,e=k({value:r,min:v,max:c})),s.$$.dirty&217&&(r?(t(7,e=k({value:r,min:v,max:c})),t(9,a=y({outputElement:D,outputXPos:e}))):(t(7,e=0),t(9,a=0))),s.$$.dirty&192&&t(9,a=y({outputElement:D,outputXPos:e}))},l=ve(l),[r,f,d,v,c,g,D,e,O,a,L,P,l,_,m,W,X]}class Xe extends Ne{constructor(l){super(),Ie(this,l,Ke,Ce,oe,{label:1,labelHidden:2,min:3,max:4,id:5,value:0})}}const ze=s=>({}),ye=s=>({});function Me(s){let l,t,e,a,o,_,f,d,v,c,g,r,O,D,L,k,y,P,m,W,X;function i(n){s[5](n)}let U={label:F("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:s[0].length};s[1]!==void 0&&(U.value=s[1]),e=new Xe({props:U}),Te.push(()=>Se(e,"value",i));const H=s[4].decode,w=Ve(H,s,s[8],ye),G=[Fe,Je],B=[];function M(n,u){return n[2]?0:1}return k=M(s),y=B[k]=G[k](s),{c(){l=E("div"),t=E("div"),Y(e.$$.fragment),o=C(),_=E("div"),f=E("button"),d=E("span"),c=C(),g=E("button"),r=E("span"),D=C(),w&&w.c(),L=C(),y.c(),P=z(),this.h()},l(n){l=N(n,"DIV",{class:!0});var u=I(l);t=N(u,"DIV",{class:!0});var T=I(t);$(e.$$.fragment,T),o=K(T),_=N(T,"DIV",{class:!0});var A=I(_);f=N(A,"BUTTON",{class:!0,"aria-label":!0});var Q=I(f);d=N(Q,"SPAN",{class:!0}),I(d).forEach(h),Q.forEach(h),c=K(A),g=N(A,"BUTTON",{class:!0,"aria-label":!0});var q=I(g);r=N(q,"SPAN",{class:!0}),I(r).forEach(h),q.forEach(h),A.forEach(h),T.forEach(h),D=K(u),w&&w.l(u),u.forEach(h),L=K(n),y.l(n),P=z(),this.h()},h(){p(d,"class","arrow arrow-left svelte-1ryp6u1"),R(d,"arrow-left-disabled",s[1]===1),p(f,"class","caret svelte-1ryp6u1"),f.disabled=v=s[1]===1,p(f,"aria-label",F("common.previous")),p(r,"class","arrow arrow-right svelte-1ryp6u1"),R(r,"arrow-right-disabled",s[1]===s[0].length),p(g,"class","caret svelte-1ryp6u1"),g.disabled=O=s[1]===s[0].length,p(g,"aria-label",F("common.next")),p(_,"class","flex items-center justify-center gap-3"),p(t,"class","flex w-full gap-4"),p(l,"class","flex gap-4 max-sm:flex-col")},m(n,u){J(n,l,u),b(l,t),x(e,t,null),b(t,o),b(t,_),b(_,f),b(f,d),b(_,c),b(_,g),b(g,r),b(l,D),w&&w.m(l,null),J(n,L,u),B[k].m(n,u),J(n,P,u),m=!0,W||(X=[j(f,"click",s[6]),j(g,"click",s[7])],W=!0)},p(n,u){const T={};u&1&&(T.max=n[0].length),!a&&u&2&&(a=!0,T.value=n[1],Le(()=>a=!1)),e.$set(T),(!m||u&2)&&R(d,"arrow-left-disabled",n[1]===1),(!m||u&2&&v!==(v=n[1]===1))&&(f.disabled=v),(!m||u&3)&&R(r,"arrow-right-disabled",n[1]===n[0].length),(!m||u&3&&O!==(O=n[1]===n[0].length))&&(g.disabled=O),w&&w.p&&(!m||u&256)&&Oe(w,H,n,n[8],m?Be(H,n[8],u,ze):Ue(n[8]),ye);let A=k;k=M(n),k===A?B[k].p(n,u):(re(),S(B[A],1,1,()=>{B[A]=null}),ue(),y=B[k],y?y.p(n,u):(y=B[k]=G[k](n),y.c()),V(y,1),y.m(P.parentNode,P))},i(n){m||(V(e.$$.fragment,n),V(w,n),V(y),m=!0)},o(n){S(e.$$.fragment,n),S(w,n),S(y),m=!1},d(n){n&&h(l),ee(e),w&&w.d(n),n&&h(L),B[k].d(n),n&&h(P),W=!1,Pe(X)}}}function qe(s){let l,t;return l=new Re({}),{c(){Y(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p:Z,i(e){t||(V(l.$$.fragment,e),t=!0)},o(e){S(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Je(s){let l=s[1],t,e,a=we(s);return{c(){a.c(),t=z()},l(o){a.l(o),t=z()},m(o,_){a.m(o,_),J(o,t,_),e=!0},p(o,_){_&2&&oe(l,l=o[1])?(re(),S(a,1,1,Z),ue(),a=we(o),a.c(),V(a,1),a.m(t.parentNode,t)):a.p(o,_)},i(o){e||(V(a),e=!0)},o(o){S(a),e=!1},d(o){o&&h(t),a.d(o)}}}function Fe(s){let l=[s[1],s[2]],t,e,a=Ee(s);return{c(){a.c(),t=z()},l(o){a.l(o),t=z()},m(o,_){a.m(o,_),J(o,t,_),e=!0},p(o,_){_&6&&oe(l,l=[o[1],o[2]])?(re(),S(a,1,1,Z),ue(),a=Ee(o),a.c(),V(a,1),a.m(t.parentNode,t)):a.p(o,_)},i(o){e||(V(a),e=!0)},o(o){S(a),e=!1},d(o){o&&h(t),a.d(o)}}}function we(s){let l,t;return l=new Ae({props:{content:ke(ae(s[0][s[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:F("common.copy-icon-title"),copySuccessIconTitle:F("common.copy-success-icon-title")}}),{c(){Y(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&3&&(o.content=ke(ae(e[0][e[1]-1]),void 0,2)),l.$set(o)},i(e){t||(V(l.$$.fragment,e),t=!0)},o(e){S(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Ge(s){let l,t;return l=new Ae({props:{content:s[9],testId:"event-history-json",copyIconTitle:F("common.copy-icon-title"),copySuccessIconTitle:F("common.copy-success-icon-title")}}),{c(){Y(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&512&&(o.content=e[9]),l.$set(o)},i(e){t||(V(l.$$.fragment,e),t=!0)},o(e){S(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Ee(s){let l,t;return l=new je({props:{value:ae(s[0][s[1]-1]),$$slots:{default:[Ge,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:s}}}),{c(){Y(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&3&&(o.value=ae(e[0][e[1]-1])),a&768&&(o.$$scope={dirty:a,ctx:e}),l.$set(o)},i(e){t||(V(l.$$.fragment,e),t=!0)},o(e){S(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Qe(s){let l,t,e,a,o,_;const f=[qe,Me],d=[];function v(c,g){return c[0].length?1:0}return l=v(s),t=d[l]=f[l](s),{c(){t.c(),e=z()},l(c){t.l(c),e=z()},m(c,g){d[l].m(c,g),J(c,e,g),a=!0,o||(_=j(window,"keydown",s[3]),o=!0)},p(c,[g]){let r=l;l=v(c),l===r?d[l].p(c,g):(re(),S(d[r],1,1,()=>{d[r]=null}),ue(),t=d[l],t?t.p(c,g):(t=d[l]=f[l](c),t.c()),V(t,1),t.m(e.parentNode,e))},i(c){a||(V(t),a=!0)},o(c){S(t),a=!1},d(c){d[l].d(c),c&&h(e),o=!1,_()}}}function Ze(s,l,t){let e;He(s,We,r=>t(2,e=r));let{$$slots:a={},$$scope:o}=l,{events:_=[]}=l,f=1;function d(r){switch(r.code){case"ArrowRight":case"KeyL":r.preventDefault(),r.stopPropagation(),f<_.length&&t(1,f+=1);break;case"ArrowLeft":case"KeyH":r.preventDefault(),r.stopPropagation(),f>1&&t(1,f-=1);break}}function v(r){f=r,t(1,f)}const c=()=>{t(1,f-=1)},g=()=>{t(1,f+=1)};return s.$$set=r=>{"events"in r&&t(0,_=r.events),"$$scope"in r&&t(8,o=r.$$scope)},[_,f,e,d,a,v,c,g,o]}class at extends Ne{constructor(l){super(),Ie(this,l,Ze,Qe,oe,{events:0})}}export{at as W};
