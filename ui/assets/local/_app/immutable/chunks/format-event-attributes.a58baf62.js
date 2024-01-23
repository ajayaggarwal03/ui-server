import{ac as w}from"./index.4e2fcbc7.js";import{t as T}from"./translate.d23a91ae.js";import{b as I,r as S,t as g}from"./time-format.d653b45d.js";import{c as u}from"./format-camel-case.887ffc78.js";import{i as A}from"./index.db7b3e66.js";import{a as D}from"./decode-payload.d5388d2d.js";import{h as y,i as h}from"./has.183130b0.js";import{C as R}from"./is-event-type.7aa6d0ba.js";const j={key:"",value:""},O=new Set(["activityId","attempt","binaryChecksum","identity","parentInitiatedEventId","requestId","scheduledEventId","startedEventId","lastHeartbeatTime","scheduledTime","expirationTime"]),st=t=>O.has(t),v=new Set(["suggestContinueAsNew","historySizeBytes"]),l=(t,e)=>!(e===null||e===void 0||e===""||e==="0s"||t==="type"||(!e||e==="0")&&v.has(t)),L=t=>!(t===null||t===void 0||t===""||Array.isArray(t)&&!t.length),it=t=>typeof t=="string"?t:[t==null?void 0:t.payloads,t==null?void 0:t.indexedFields,t==null?void 0:t.points,t].find(e=>e!==void 0),G=t=>{if(h(t)){if(y(t,"stackTrace")&&t.stackTrace)return t.stackTrace;for(const e in t)if(h(t[e]))return G(t[e])}},K=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],nt=t=>{for(const e of K)if(t===e)return!0;return!1},N=["taskQueueName"],at=t=>{for(const e of N)if(t===e)return!0;return!1},Q=["workflowExecutionWorkflowId","workflowExecutionRunId"],ct=(t,e)=>{const r=Boolean((e==null?void 0:e.workflowExecutionWorkflowId)&&(e==null?void 0:e.workflowExecutionRunId));for(const o of Q)if(t===o&&r)return!0;return!1},f=(t,e)=>{if(typeof e=="object"){const[r]=Object.keys(e);return r==="payloads"?{key:t,value:e}:{key:t+u(r),value:e[r]}}else return{key:t,value:e.toString()}},F=["failure","input","activityType","parentInitiatedEventId","workflowExecution","workflowType","taskQueue"],W=({attributes:t})=>{for(const[e,r]of Object.entries(t))if(l(e,r))return f(e,r)},C=t=>{if(y(t,"ActivityType"))return t.ActivityType;if(y(t,"activity_type"))return t.activity_type},P=t=>{var e,r,o;return!!((o=(r=(e=t.markerRecordedEventAttributes)==null?void 0:e.details)==null?void 0:r.type)!=null&&o.payloads)},x=t=>{var r,o,s,i,d,k;const e=W(t);if(R(t)){const n=(((s=(o=(r=t.markerRecordedEventAttributes)==null?void 0:r.details)==null?void 0:o.data)==null?void 0:s.payloads)||((k=(d=(i=t.markerRecordedEventAttributes)==null?void 0:i.details)==null?void 0:d.type)==null?void 0:k.payloads)||[]).map(b=>D(b)),a=n==null?void 0:n[0];if(P(t)&&a)return f("ActivityType",a);const p=C(a);if(p)return f("ActivityType",p)}for(const[c,n]of Object.entries(t.attributes))for(const a of F)if(c===a&&l(c,n))return f(c,n);return e},V=({lastEvent:t})=>x(t),ft=t=>t?A(t)?V(t):x(t):j,_=new Set(["header"]),$=new Set(["taskQueue","retryPolicy","parentWorkflowExecution","workflowExecution","meta"]),B=new Set(["maximumAttempts"]),m=T("workflows.unlimited"),q=T("workflows.no-expiration"),ut=(t,e)=>t===0?q:e,yt=(t,e)=>t?t-e:m,lt=t=>t||m,z=(t,e)=>t==="maximumAttempts"&&!e?m:e,M=(t,e)=>{if($.has(e)&&typeof t[e]=="object"){for(const[r,o]of Object.entries(t[e]))L(o)&&(B.has(r)?t[`${e}${u(r)}`]=z(r,o):t[`${e}${u(r)}`]=o);delete t[e]}},mt=(t,{compact:e}={compact:!1})=>{const r={};e&&(r.eventTime=I(t.eventTime,w(g),{relative:w(S)}));for(const[o,s]of Object.entries(t.attributes)){const i=l(o,s);!_.has(o)&&i&&(r[o]=s),M(r,o)}return r},E=["summary","parent","activity","taskQueue","schedule","retryPolicy","workflow","searchAttributes"],dt={activity:{label:"events.attribute-group.activity"},parent:{label:"events.attribute-group.parent"},retryPolicy:{label:"events.attribute-group.retry-policy"},schedule:{label:"events.attribute-group.schedule"},searchAttributes:{label:"events.attribute-group.search-attributes"},summary:{label:"events.attribute-group.summary"},taskQueue:{label:"events.attribute-group.task-queue"},workflow:{label:"events.attribute-group.workflow"}},H=(t,e)=>{var r,o;t.category==="activity"&&((r=e==null?void 0:e.activity)!=null&&r.length)&&(e.summary=[...e.activity,...e.summary],e.activity=[]),t.category==="activity"&&((o=e==null?void 0:e.workflow)!=null&&o.length)&&(e.summary=[...e.summary,...e.workflow],e.workflow=[])},J=t=>{const e=new Set(["summary","searchAttributes"]);for(const[r,o]of Object.entries(t))o.length===1&&!e.has(r)&&(t.summary=[...t.summary,...o],t[r]=[])},kt=(t,e)=>{const r={};E.forEach(o=>{o==="summary"?r[o]=Object.keys(e):r[o]=[]});for(const o in e){const s=E.find(i=>o.includes(i));s&&(r[s]=[o,...r[s]],r.summary=r.summary.filter(i=>i!==o))}return H(t,r),J(r),r};export{dt as a,G as b,ct as c,at as d,st as e,mt as f,it as g,kt as h,ft as i,ut as j,yt as k,lt as l,nt as s};