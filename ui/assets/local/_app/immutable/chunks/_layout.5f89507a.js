import{r as ae}from"./index.b1f5b21f.js";import{c as oe}from"./cluster.2ab2aa40.js";import{r as ie,a as se}from"./route-for-api.ef413737.js";import{f as le}from"./namespaces-service.464eed9d.js";import{f as ce}from"./settings-service.87153a48.js";import{s as ue,g as ge}from"./auth-user.587c210b.js";import{B as X,e as fe}from"./route-for.dc3a7a75.js";import{a as he}from"./atob.f3c36b74.js";import{p as de,c as K}from"./parse-with-big-int.bccd89af.js";/* empty css            */const pe=async(h,u=fetch)=>{if(h.runtimeEnvironment.isCloud)return;const g=ie("cluster");return await se(g,{request:u}).then(c=>(oe.set(c),c))},me=async(h=fetch)=>{try{const u=await h("https://api.github.com/repos/temporalio/ui-server/releases"),g=await u.json();if(!u.ok)return;let c;if(g.length>0){const{tag_name:d}=g[0];c=d.replace("v","")}return c}catch{return""}},z="user",ve=(h=X)=>{if(!h)return{};const u=document.cookie.split(";");let g=0,c=u.find(v=>v.includes(z+g)),d="";for(;c;){const[v,f]=c.split("=");d+=f,g++,c=u.find(i=>i.includes(z+g))}if(d)try{const v=he(d),f=de(v);return{accessToken:f==null?void 0:f.AccessToken,idToken:f==null?void 0:f.IDToken,name:f==null?void 0:f.Name,picture:f==null?void 0:f.Picture,email:f==null?void 0:f.Email}}catch(v){console.error(v)}return{}},ye=(h=X)=>{if(!h)return;const u=document.cookie.split(";");let g=0,c=u.find(d=>d.includes(z+g));for(;c;){const[d]=c.split("=");document.cookie=`${d}=; max-age=-1; path=/`,g++,c=u.find(v=>v.includes(z+g))}},be=(h,u)=>!h.auth.enabled||Boolean(u==null?void 0:u.accessToken);var Q={},ke={get exports(){return Q},set exports(h){Q=h}};(function(h){var u=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},g=function(c){var d=/\blang(?:uage)?-([\w-]+)\b/i,v=0,f={},i={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof w?new w(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,a){var n,r;switch(a=a||{},i.util.type(e)){case"Object":if(r=i.util.objId(e),a[r])return a[r];for(var s in n={},a[r]=n,e)e.hasOwnProperty(s)&&(n[s]=t(e[s],a));return n;case"Array":return r=i.util.objId(e),a[r]?a[r]:(n=[],a[r]=n,e.forEach(function(o,l){n[l]=t(o,a)}),n);default:return e}},getLanguage:function(t){for(;t&&!d.test(t.className);)t=t.parentElement;return t?(t.className.match(d)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(t,e){var a=i.util.clone(i.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){var r=(n=n||i.languages)[t],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==e)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);a.hasOwnProperty(o)||(s[o]=r[o])}var p=n[t];return n[t]=s,i.languages.DFS(i.languages,function(x,N){N===p&&x!=t&&(this[x]=s)}),s},DFS:function t(e,a,n,r){r=r||{};var s=i.util.objId;for(var o in e)if(e.hasOwnProperty(o)){a.call(e,o,e[o],n||o);var l=e[o],p=i.util.type(l);p!=="Object"||r[s(l)]?p!=="Array"||r[s(l)]||(r[s(l)]=!0,t(l,a,o,r)):(r[s(l)]=!0,t(l,a,null,r))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var r,s=0;r=n.elements[s++];)i.highlightElement(r,e===!0,n.callback)},highlightElement:function(t,e,a){var n=i.util.getLanguage(t),r=i.languages[n];t.className=t.className.replace(d,"").replace(/\s+/g," ")+" language-"+n;var s=t.parentElement;s&&s.nodeName.toLowerCase()==="pre"&&(s.className=s.className.replace(d,"").replace(/\s+/g," ")+" language-"+n);var o={element:t,language:n,grammar:r,code:t.textContent};function l(x){o.highlightedCode=x,i.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i.hooks.run("after-highlight",o),i.hooks.run("complete",o),a&&a.call(o.element)}if(i.hooks.run("before-sanity-check",o),(s=o.element.parentElement)&&s.nodeName.toLowerCase()==="pre"&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!o.code)return i.hooks.run("complete",o),void(a&&a.call(o.element));if(i.hooks.run("before-highlight",o),o.grammar)if(e&&c.Worker){const x=i.filename??`${window.location.origin}/src/lib/vendor/prism/prism.cjs`;var p=new Worker(x);p.onerror=function(){l(i.highlight(o.code,o.grammar,o.language))},p.onmessage=function(N){l(N.data)},p.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(i.highlight(o.code,o.grammar,o.language));else l(i.util.encode(o.code))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};return i.hooks.run("before-tokenize",n),n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),w.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var r=new Y;return P(r,r.head,t),function s(o,l,p,x,N,y){for(var O in p)if(p.hasOwnProperty(O)&&p[O]){var E=p[O];E=Array.isArray(E)?E:[E];for(var _=0;_<E.length;++_){if(y&&y.cause==O+","+_)return;var b=E[_],H=b.inside,G=!!b.lookbehind,R=!!b.greedy,ee=b.alias;if(R&&!b.pattern.global){var te=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,te+"g")}for(var V=b.pattern||b,m=x.next,k=N;m!==l.tail&&!(y&&k>=y.reach);k+=m.value.length,m=m.next){var j=m.value;if(l.length>o.length)return;if(!(j instanceof w)){var A,T=1;if(R){if(!(A=$(V,k,o,G)))break;var W=A.index,ne=A.index+A[0].length,S=k;for(S+=m.value.length;S<=W;)m=m.next,S+=m.value.length;if(S-=m.value.length,k=S,m.value instanceof w)continue;for(var L=m;L!==l.tail&&(S<ne||typeof L.value=="string");L=L.next)T++,S+=L.value.length;T--,j=o.slice(k,S),A.index-=k}else if(!(A=$(V,0,j,G)))continue;var W=A.index,I=A[0],F=j.slice(0,W),J=j.slice(W+I.length),q=k+j.length;y&&q>y.reach&&(y.reach=q);var M=m.prev;F&&(M=P(l,M,F),k+=F.length),Z(l,M,T);var re=new w(O,H?i.tokenize(I,H):I,ee,I);if(m=P(l,M,re),J&&P(l,m,J),1<T){var U={cause:O+","+_,reach:q};s(o,l,p,m.prev,k,U),y&&U.reach>y.reach&&(y.reach=U.reach)}}}}}}(t,r,e,r.head,0),function(s){for(var o=[],l=s.head.next;l!==s.tail;)o.push(l.value),l=l.next;return o}(r)},hooks:{all:{},add:function(t,e){var a=i.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=i.hooks.all[t];if(a&&a.length)for(var n,r=0;n=a[r++];)n(e)}},Token:w};function w(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=0|(n||"").length}function $(t,e,a,n){t.lastIndex=e;var r=t.exec(a);if(r&&n&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function Y(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function P(t,e,a){var n=e.next,r={value:a,prev:e,next:n};return e.next=r,n.prev=r,t.length++,r}function Z(t,e,a){for(var n=e.next,r=0;r<a&&n!==t.tail;r++)n=n.next;(e.next=n).prev=e,t.length-=r}if(c.Prism=i,w.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(p){n+=t(p,a)}),n}var r={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),i.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+o+">"+r.content+"</"+r.tag+">"},!c.document)return c.addEventListener&&(i.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,r=e.immediateClose;c.postMessage(i.highlight(n,i.languages[a],a)),r&&c.close()},!1)),i;var C=i.util.currentScript();function B(){i.manual||i.highlightAll()}if(C&&(i.filename=C.src,C.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var D=document.readyState;D==="loading"||D==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",B):window.requestAnimationFrame?window.requestAnimationFrame(B):window.setTimeout(B,16)}return i}(u);h.exports&&(h.exports=g),typeof K<"u"&&(K.Prism=g),g.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},g.languages.webmanifest=g.languages.json})(ke);const we=async function({fetch:h}){const u=await ce(h),g=ve();g!=null&&g.accessToken&&(ue(g),ye());const c=ge();if(!be(u,c))throw ae(302,fe());le(u,h);const d=await pe(u,h),v={current:u.version,recommended:u.notifyOnNewVersion?await me(h):void 0};return{user:c,uiVersionInfo:v,settings:u,cluster:d}},Pe=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));export{Pe as _,we as l};
