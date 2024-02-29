import{s as oe,A as ue,e as w,t as te,a as C,b as I,d as N,f as le,g as v,h as R,j as p,O as pe,B,C as be,k as F,l as b,X as se,m as X,n as ne,af as fe,v as Y,E as Ie,F as ge,G as he,_ as Ne,x as q,c as De,p as He,$ as Oe,u as Se,q as Ve,r as Le}from"./scheduler.yuwC4fMQ.js";import{S as Pe,i as Te,g as re,b as O,e as ie,t as S,h as Ue,c as Z,a as $,m as x,d as ee}from"./index.m6evPz-M.js";import{C as Ae}from"./code-block.OYUpeB9y.js";import{g as je}from"./tw-merge.k1eX69SP.js";import{o as ve,t as G}from"./translate.eu_ZgPaL.js";import{L as Be}from"./loading.zgfbl5xF.js";import{f as ae}from"./index.P_qKp-Pr.js";import{d as We}from"./events.xl5q5wCS.js";import{s as ke}from"./parse-with-big-int.jPY5aC0s.js";import{P as Xe}from"./payload-decoder.WuJR0T3i.js";function Ce(s){let l,t,e,a,o,d,f,_,h=(s[0]??"")+"",c,g,r,L,D,V,k,y,P,m,W,K,u,U,H,E,J,j=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:s[3]},{max:s[4]},{step:L=s[12].step},ve(s[13],"class")],z={};for(let n=0;n<j.length;n+=1)z=ue(z,j[n]);return{c(){l=w("div"),t=w("div"),e=w("div"),a=w("span"),o=te(s[3]),d=C(),f=w("div"),_=w("output"),c=te(h),g=C(),r=w("input"),D=C(),V=w("span"),k=te(s[4]),y=C(),P=w("div"),m=w("input"),K=C(),u=w("label"),U=te(s[1]),this.h()},l(n){l=I(n,"DIV",{class:!0});var i=N(l);t=I(i,"DIV",{class:!0});var T=N(t);e=I(T,"DIV",{class:!0});var A=N(e);a=I(A,"SPAN",{class:!0});var Q=N(a);o=le(Q,s[3]),Q.forEach(v),d=R(A),f=I(A,"DIV",{class:!0});var M=N(f);_=I(M,"OUTPUT",{class:!0,style:!0,for:!0});var ce=N(_);c=le(ce,h),ce.forEach(v),g=R(M),r=I(M,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),M.forEach(v),D=R(A),V=I(A,"SPAN",{class:!0});var de=N(V);k=le(de,s[4]),de.forEach(v),A.forEach(v),y=R(T),P=I(T,"DIV",{class:!0});var _e=N(P);m=I(_e,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),_e.forEach(v),K=R(T),u=I(T,"LABEL",{class:!0,for:!0});var me=N(u);U=le(me,s[1]),me.forEach(v),T.forEach(v),i.forEach(v),this.h()},h(){p(a,"class","absolute -bottom-6 left-0 text-xs font-normal"),p(_,"class","absolute -top-6 text-center text-xs font-normal"),pe(_,"left","calc("+s[7]+"% - ("+s[9]+"px))"),p(_,"for","range"),B(_,"hidden",!s[8]),be(r,z),B(r,"svelte-7ioe6n",!0),p(f,"class","relative flex items-center"),p(V,"class","absolute -bottom-6 right-0 text-xs font-normal"),p(e,"class","relative w-auto grow"),p(m,"id",s[5]),p(m,"class","numeric-input svelte-7ioe6n"),p(m,"type","number"),p(m,"inputmode","numeric"),p(m,"min",s[3]),p(m,"max",s[4]),p(m,"step",W=s[12].step),B(m,"invalid",!s[8]),p(P,"class","flex shrink"),p(u,"class","flex shrink text-sm"),p(u,"for",s[5]),B(u,"sr-only",s[2]),p(t,"class","range-input-container svelte-7ioe6n"),p(l,"class",H="w-full px-1 py-4 "+s[12].class+" svelte-7ioe6n")},m(n,i){F(n,l,i),b(l,t),b(t,e),b(e,a),b(a,o),b(e,d),b(e,f),b(f,_),b(_,c),s[14](_),b(f,g),b(f,r),r.autofocus&&r.focus(),se(r,s[0]),b(e,D),b(e,V),b(V,k),b(t,y),b(t,P),b(P,m),se(m,s[0]),b(t,K),b(t,u),b(u,U),E||(J=[X(window,"resize",s[11]),X(r,"change",s[15]),X(r,"input",s[15]),X(r,"input",s[10]),X(m,"input",s[16]),X(m,"input",s[10])],E=!0)},p(n,[i]){i&8&&ne(o,n[3]),i&1&&h!==(h=(n[0]??"")+"")&&ne(c,h),i&640&&pe(_,"left","calc("+n[7]+"% - ("+n[9]+"px))"),i&256&&B(_,"hidden",!n[8]),be(r,z=je(j,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},i&8&&{min:n[3]},i&16&&{max:n[4]},i&4096&&L!==(L=n[12].step)&&{step:L},i&8192&&ve(n[13],"class")])),i&1&&se(r,n[0]),B(r,"svelte-7ioe6n",!0),i&16&&ne(k,n[4]),i&32&&p(m,"id",n[5]),i&8&&p(m,"min",n[3]),i&16&&p(m,"max",n[4]),i&4096&&W!==(W=n[12].step)&&p(m,"step",W),i&1&&fe(m.value)!==n[0]&&se(m,n[0]),i&256&&B(m,"invalid",!n[8]),i&2&&ne(U,n[1]),i&32&&p(u,"for",n[5]),i&4&&B(u,"sr-only",n[2]),i&4096&&H!==(H="w-full px-1 py-4 "+n[12].class+" svelte-7ioe6n")&&p(l,"class",H)},i:Y,o:Y,d(n){n&&v(l),s[14](null),E=!1,Ie(J)}}}function Re(s,l,t){let e,a;const o=["label","labelHidden","min","max","id","value"];let d=ge(l,o),{label:f}=l,{labelHidden:_=!1}=l,{min:h=void 0}=l,{max:c=void 0}=l,{id:g=void 0}=l,{value:r=Math.round((h+c)/2)}=l,L=!0,D;const V=u=>{if(Number.isNaN(u.currentTarget.valueAsNumber)){t(0,r=h);return}t(8,L=u.currentTarget.valueAsNumber>=h&&u.currentTarget.valueAsNumber<=c)},k=({value:u,min:U,max:H})=>(u-U)*100/(H-U),y=({outputElement:u,outputXPos:U})=>{var H;const E=(H=u==null?void 0:u.clientWidth)!==null&&H!==void 0?H:15;return Math.floor(U*E/100)},P=()=>{t(7,e=k({value:r,min:h,max:c})),t(9,a=y({outputElement:D,outputXPos:e}))};function m(u){Ne[u?"unshift":"push"](()=>{D=u,t(6,D)})}function W(){r=fe(this.value),t(0,r)}function K(){r=fe(this.value),t(0,r)}return s.$$set=u=>{t(12,l=ue(ue({},l),he(u))),t(13,d=ge(l,o)),"label"in u&&t(1,f=u.label),"labelHidden"in u&&t(2,_=u.labelHidden),"min"in u&&t(3,h=u.min),"max"in u&&t(4,c=u.max),"id"in u&&t(5,g=u.id),"value"in u&&t(0,r=u.value)},s.$$.update=()=>{s.$$.dirty&25&&t(7,e=k({value:r,min:h,max:c})),s.$$.dirty&217&&(r?(t(7,e=k({value:r,min:h,max:c})),t(9,a=y({outputElement:D,outputXPos:e}))):(t(7,e=0),t(9,a=0))),s.$$.dirty&192&&t(9,a=y({outputElement:D,outputXPos:e}))},l=he(l),[r,f,_,h,c,g,D,e,L,a,V,P,l,d,m,W,K]}class Ke extends Pe{constructor(l){super(),Te(this,l,Re,Ce,oe,{label:1,labelHidden:2,min:3,max:4,id:5,value:0})}}const qe=s=>({}),ye=s=>({});function ze(s){let l,t,e,a,o,d,f,_,h,c,g,r,L,D,V,k,y,P,m,W,K;function u(n){s[5](n)}let U={label:G("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:s[0].length};s[1]!==void 0&&(U.value=s[1]),e=new Ke({props:U}),Ne.push(()=>Ue(e,"value",u));const H=s[4].decode,E=He(H,s,s[8],ye),J=[Ge,Fe],j=[];function z(n,i){return n[2]?0:1}return k=z(s),y=j[k]=J[k](s),{c(){l=w("div"),t=w("div"),Z(e.$$.fragment),o=C(),d=w("div"),f=w("button"),_=w("span"),c=C(),g=w("button"),r=w("span"),D=C(),E&&E.c(),V=C(),y.c(),P=q(),this.h()},l(n){l=I(n,"DIV",{class:!0});var i=N(l);t=I(i,"DIV",{class:!0});var T=N(t);$(e.$$.fragment,T),o=R(T),d=I(T,"DIV",{class:!0});var A=N(d);f=I(A,"BUTTON",{class:!0,"aria-label":!0});var Q=N(f);_=I(Q,"SPAN",{class:!0}),N(_).forEach(v),Q.forEach(v),c=R(A),g=I(A,"BUTTON",{class:!0,"aria-label":!0});var M=N(g);r=I(M,"SPAN",{class:!0}),N(r).forEach(v),M.forEach(v),A.forEach(v),T.forEach(v),D=R(i),E&&E.l(i),i.forEach(v),V=R(n),y.l(n),P=q(),this.h()},h(){p(_,"class","arrow arrow-left svelte-1ryp6u1"),B(_,"arrow-left-disabled",s[1]===1),p(f,"class","caret svelte-1ryp6u1"),f.disabled=h=s[1]===1,p(f,"aria-label",G("common.previous")),p(r,"class","arrow arrow-right svelte-1ryp6u1"),B(r,"arrow-right-disabled",s[1]===s[0].length),p(g,"class","caret svelte-1ryp6u1"),g.disabled=L=s[1]===s[0].length,p(g,"aria-label",G("common.next")),p(d,"class","flex items-center justify-center gap-3"),p(t,"class","flex w-full gap-4"),p(l,"class","flex gap-4 max-sm:flex-col")},m(n,i){F(n,l,i),b(l,t),x(e,t,null),b(t,o),b(t,d),b(d,f),b(f,_),b(d,c),b(d,g),b(g,r),b(l,D),E&&E.m(l,null),F(n,V,i),j[k].m(n,i),F(n,P,i),m=!0,W||(K=[X(f,"click",s[6]),X(g,"click",s[7])],W=!0)},p(n,i){const T={};i&1&&(T.max=n[0].length),!a&&i&2&&(a=!0,T.value=n[1],Oe(()=>a=!1)),e.$set(T),(!m||i&2)&&B(_,"arrow-left-disabled",n[1]===1),(!m||i&2&&h!==(h=n[1]===1))&&(f.disabled=h),(!m||i&3)&&B(r,"arrow-right-disabled",n[1]===n[0].length),(!m||i&3&&L!==(L=n[1]===n[0].length))&&(g.disabled=L),E&&E.p&&(!m||i&256)&&Se(E,H,n,n[8],m?Le(H,n[8],i,qe):Ve(n[8]),ye);let A=k;k=z(n),k===A?j[k].p(n,i):(re(),O(j[A],1,1,()=>{j[A]=null}),ie(),y=j[k],y?y.p(n,i):(y=j[k]=J[k](n),y.c()),S(y,1),y.m(P.parentNode,P))},i(n){m||(S(e.$$.fragment,n),S(E,n),S(y),m=!0)},o(n){O(e.$$.fragment,n),O(E,n),O(y),m=!1},d(n){n&&(v(l),v(V),v(P)),ee(e),E&&E.d(n),j[k].d(n),W=!1,Ie(K)}}}function Me(s){let l,t;return l=new Be({}),{c(){Z(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p:Y,i(e){t||(S(l.$$.fragment,e),t=!0)},o(e){O(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Fe(s){let l=s[1],t,e,a=Ee(s);return{c(){a.c(),t=q()},l(o){a.l(o),t=q()},m(o,d){a.m(o,d),F(o,t,d),e=!0},p(o,d){d&2&&oe(l,l=o[1])?(re(),O(a,1,1,Y),ie(),a=Ee(o),a.c(),S(a,1),a.m(t.parentNode,t)):a.p(o,d)},i(o){e||(S(a),e=!0)},o(o){O(a),e=!1},d(o){o&&v(t),a.d(o)}}}function Ge(s){let l=[s[1],s[2]],t,e,a=we(s);return{c(){a.c(),t=q()},l(o){a.l(o),t=q()},m(o,d){a.m(o,d),F(o,t,d),e=!0},p(o,d){d&6&&oe(l,l=[o[1],o[2]])?(re(),O(a,1,1,Y),ie(),a=we(o),a.c(),S(a,1),a.m(t.parentNode,t)):a.p(o,d)},i(o){e||(S(a),e=!0)},o(o){O(a),e=!1},d(o){o&&v(t),a.d(o)}}}function Ee(s){let l,t;return l=new Ae({props:{content:ke(ae(s[0][s[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:G("common.copy-icon-title"),copySuccessIconTitle:G("common.copy-success-icon-title")}}),{c(){Z(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&3&&(o.content=ke(ae(e[0][e[1]-1]),void 0,2)),l.$set(o)},i(e){t||(S(l.$$.fragment,e),t=!0)},o(e){O(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Je(s){let l,t;return l=new Ae({props:{content:s[9],testId:"event-history-json",copyIconTitle:G("common.copy-icon-title"),copySuccessIconTitle:G("common.copy-success-icon-title")}}),{c(){Z(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&512&&(o.content=e[9]),l.$set(o)},i(e){t||(S(l.$$.fragment,e),t=!0)},o(e){O(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function we(s){let l,t;return l=new Xe({props:{value:ae(s[0][s[1]-1]),$$slots:{default:[Je,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:s}}}),{c(){Z(l.$$.fragment)},l(e){$(l.$$.fragment,e)},m(e,a){x(l,e,a),t=!0},p(e,a){const o={};a&3&&(o.value=ae(e[0][e[1]-1])),a&768&&(o.$$scope={dirty:a,ctx:e}),l.$set(o)},i(e){t||(S(l.$$.fragment,e),t=!0)},o(e){O(l.$$.fragment,e),t=!1},d(e){ee(l,e)}}}function Qe(s){let l,t,e,a,o,d;const f=[Me,ze],_=[];function h(c,g){return c[0].length?1:0}return l=h(s),t=_[l]=f[l](s),{c(){t.c(),e=q()},l(c){t.l(c),e=q()},m(c,g){_[l].m(c,g),F(c,e,g),a=!0,o||(d=X(window,"keydown",s[3]),o=!0)},p(c,[g]){let r=l;l=h(c),l===r?_[l].p(c,g):(re(),O(_[r],1,1,()=>{_[r]=null}),ie(),t=_[l],t?t.p(c,g):(t=_[l]=f[l](c),t.c()),S(t,1),t.m(e.parentNode,e))},i(c){a||(S(t),a=!0)},o(c){O(t),a=!1},d(c){c&&v(e),_[l].d(c),o=!1,d()}}}function Ye(s,l,t){let e;De(s,We,r=>t(2,e=r));let{$$slots:a={},$$scope:o}=l,{events:d=[]}=l,f=1;function _(r){switch(r.code){case"ArrowRight":case"KeyL":r.preventDefault(),r.stopPropagation(),f<d.length&&t(1,f+=1);break;case"ArrowLeft":case"KeyH":r.preventDefault(),r.stopPropagation(),f>1&&t(1,f-=1);break}}function h(r){f=r,t(1,f)}const c=()=>{t(1,f-=1)},g=()=>{t(1,f+=1)};return s.$$set=r=>{"events"in r&&t(0,d=r.events),"$$scope"in r&&t(8,o=r.$$scope)},[d,f,e,_,a,h,c,g,o]}class rt extends Pe{constructor(l){super(),Te(this,l,Ye,Qe,oe,{events:0})}}export{rt as W};
