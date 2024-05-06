import{d as u,r as Z,w as k}from"./entry.B2JvGEmv.js";import{p as y}from"./stores._uu45Ir7.js";import{t as h}from"./translate.HrioCK44.js";import{v as V,C as E}from"./scheduler.78ThUSKQ.js";import{r as d,a as l,b as oo,p as to,c as no,d as ro,e as eo}from"./route-for-api.9tC7kZbF.js";import{A as p}from"./workflow-actions.-K4W_iAA.js";import{h as so}from"./decode-payload.oUZWO1gO.js";import{f as ao}from"./screaming-enums.NBZzZ07O.js";import{w as io}from"./write-actions-are-allowed.eirmjb9F.js";import{s as co}from"./simplify-attributes.Qlhp3Owl.js";import{a as N}from"./auth-user.AJhf3QyC.js";import{i as Q,m as z}from"./version-check.HLZIw2tw.js";import{c as U,t as W}from"./versions.Ea-cu0pN.js";import{s as fo}from"./filters.LDj2VSXF.js";import{e as uo}from"./encode-payload.FE7CNyZ9.js";import{s as T}from"./parse-with-big-int.e3oI4SEy.js";import{i as lo,d as wo,e as q,h as mo}from"./format-time.9b2gxOCN.js";import{v as ko}from"./toaster.nKwyiEDQ.js";const yo=async(o,t,n=fetch)=>{let r=0;try{const e=d("workflows.count",{namespace:o}),s=await l(e,{params:t?{query:t}:{},onError:V,handleError:V,request:n});r=parseInt((s==null?void 0:s.count)||"0")}catch{}return{count:r}},ct=async({namespace:o,query:t})=>{const n="GROUP BY ExecutionStatus",r=d("workflows.count",{namespace:o}),{count:e,groups:s}=await l(r,{params:{query:t?`${t} ${n}`:`${n}`},notifyOnError:!1});return{count:e??"0",groups:s}},ho=(o=[])=>o.map(t=>{const n=co(t,!0),r=t.activityId;return{...n,id:r}}),Eo=o=>!o||!o.indexedFields?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:so(e)}),{})},A=o=>{var P,R,v,$,O,B,F;const t=Eo(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.memo,r=o.workflowExecutionInfo.type.name,e=o.workflowExecutionInfo.execution.workflowId,s=o.workflowExecutionInfo.execution.runId,a=o.workflowExecutionInfo.startTime,i=o.workflowExecutionInfo.closeTime,w=o.workflowExecutionInfo.executionTime,f=ao(o.workflowExecutionInfo.status),m=f==="Running",g=o.workflowExecutionInfo.historyLength,c=o.workflowExecutionInfo.historySizeBytes,x=`/workflows/${e}/${s}`,I=((R=(P=o==null?void 0:o.executionConfig)==null?void 0:P.taskQueue)==null?void 0:R.name)||((v=o==null?void 0:o.workflowExecutionInfo)==null?void 0:v.taskQueue),G=($=o==null?void 0:o.workflowExecutionInfo)==null?void 0:$.mostRecentWorkerVersionStamp,_=(O=o==null?void 0:o.workflowExecutionInfo)==null?void 0:O.parentNamespaceId,Y=(B=o==null?void 0:o.workflowExecutionInfo)==null?void 0:B.parentExecution,H=o.workflowExecutionInfo.stateTransitionCount,J=(F=o.executionConfig)==null?void 0:F.defaultWorkflowTaskTimeout,M=ho(o.pendingActivities),X=(o==null?void 0:o.pendingChildren)??[];return{name:r,id:e,runId:s,startTime:a,endTime:i,executionTime:w,status:f,historyEvents:g,historySizeBytes:c,searchAttributes:t,memo:n,url:x,taskQueue:I,mostRecentWorkerVersionStamp:G,pendingActivities:M,pendingChildren:X,parentNamespaceId:_,parent:Y,stateTransitionCount:H,isRunning:m,defaultWorkflowTaskTimeout:J,get canBeTerminated(){return m&&io()}}},L=o=>(o.executions||[]).map(t=>A({workflowExecutionInfo:t})),po=(o,t)=>{var n;return((n=o==null?void 0:o.visibilityStore)==null?void 0:n.includes("elasticsearch"))||Q(t,"1.19")},xo=o=>{var t;return(t=o==null?void 0:o.visibilityStore)==null?void 0:t.includes("elasticsearch")},S=u([y],([o])=>{var t,n,r;return(r=(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.runtimeEnvironment)==null?void 0:r.isCloud}),D=u([U,W,S],([o,t,n])=>po(o,t)||n);u([U,S],([o,t])=>xo(o)||t);const Io={workflowId:"WorkflowId",workflowType:"WorkflowType",timeRange:"StartTime",executionStatus:"ExecutionStatus",closeTime:"CloseTime"},go=["workflowId","workflowType","timeRange","executionStatus","closeTime"],bo=o=>!(o===null||o===void 0||o===""||typeof o=="string"&&o==="undefined"),Wo=o=>{if(typeof o!="string")return!1;for(const t of go)if(t===o)return!0;return!1},To=(o,t,n)=>{const r=Io[o];return t==="All"?"":lo(t)||wo(t)?n||E(D)?`${r} > "${q(t)}"`:`${r} BETWEEN "${q(t)}" AND "${mo()}"`:`${r}="${t}"`},Ao=(o,t)=>Object.entries(o).map(([n,r])=>{if(Wo(n)&&bo(r))return To(n,r,t)}).filter(Boolean),So=(o,t=!1)=>Ao(o,t).join(" and ");function Co(o){console.error("Unhandled action:",o)}const Po=(o,t)=>{let n;switch(o){case p.Cancel:n=h("workflows.canceled");break;case p.Reset:n=h("workflows.reset");break;case p.Terminate:n=h("workflows.terminated");break;default:Co(o)}return t?h("workflows.workflow-action-reason-placeholder-with-email",{action:n,email:t}):h("workflows.workflow-action-reason-placeholder",{action:n})},j=({action:o,reason:t,email:n})=>{const r=Po(o,n);return t?[t.trim(),r].join(" "):r},C=async(o,t,n=fetch,r=!1)=>{const e=t.query||So(t,r);let s;try{s=decodeURIComponent(e)}catch{s=e}const a=r?"workflows.archived":"workflows";let i="";const w=c=>{var x,I;no(c),(x=c==null?void 0:c.body)!=null&&x.message||c!=null&&c.status?i=((I=c==null?void 0:c.body)==null?void 0:I.message)??`Error fetching workflows: ${c.status}: ${c.statusText}`:i="Error fetching workflows: Server failed to respond"},f=d(a,{namespace:o}),{executions:m,nextPageToken:g}=await l(f,{params:{query:s},onError:w,handleError:w,request:n})??{executions:[],nextPageToken:""};return{workflows:L({executions:m}),nextPageToken:String(g),error:i}},ft=async({namespace:o,workflowId:t,url:n},r=fetch)=>{var m;const e="workflows",s=n??oo(o),a=to(e,{namespace:o}),i=s+a,{executions:w}=await l(i,{params:{query:`WorkflowId="${t}"`,pageSize:"1"},request:r})??{executions:[]},f=(m=L({executions:w}))==null?void 0:m[0];return{runId:f==null?void 0:f.runId}},ut=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const s=i=>{(ro(i)||eo(i))&&(e=!1)},a=d(r,{namespace:o});return await l(a,{params:{pageSize:"1"},onError:s,handleError:s,request:t}),{authorized:e}},lt=async(o,t,n=fetch)=>C(o,t,n,!0);async function wt(o,t=fetch){const n=d("workflow",{namespace:o.namespace,workflowId:o.workflowId});return l(n,{request:t,notifyOnError:!1,params:{"execution.runId":o.runId}}).then(r=>({workflow:A(r)})).catch(r=>({error:r}))}async function dt({workflow:o,namespace:t,reason:n}){const r=d("workflow.terminate",{namespace:t,workflowId:o.id}),e=E(N).email,s=j({reason:n,action:p.Terminate,email:e});return await l(r,{options:{method:"POST",body:T({reason:s,...e&&{identity:e}})},notifyOnError:!1,params:{"execution.runId":o.runId}})}async function mt({namespace:o,workflow:{id:t,runId:n}},r=fetch){const e=d("workflow.cancel",{namespace:o,workflowId:t});return l(e,{request:r,notifyOnError:!1,options:{method:"POST"},params:{"execution.runId":n}})}async function kt({namespace:o,workflow:{id:t,runId:n},name:r,input:e}){const s=d("workflow.signal",{namespace:o,workflowId:t,signalName:r}),a=await uo(e),i=E(y).data.settings,w=(i==null?void 0:i.version)??"",m=Q(w,"2.22")?{signalName:r,workflowExecution:{workflowId:t,runId:n},input:{payloads:a}}:{signalName:r,input:{payloads:a},params:{"execution.runId":n}};return l(s,{notifyOnError:!1,options:{method:"POST",body:T(m)}})}async function yt({namespace:o,workflow:{id:t,runId:n},eventId:r,reason:e,reapplyType:s}){const a=d("workflow.reset",{namespace:o,workflowId:t}),i=E(N).email,w=j({action:p.Reset,reason:e,email:i}),f={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:s,requestId:ko(),reason:w};return l(a,{notifyOnError:!1,options:{method:"POST",body:T(f)},params:{"execution.runId":n}})}async function ht(o,t=fetch){const n=e=>{console.error(e)},r=d("workflow",o);return l(r,{request:t,onError:n,handleError:n}).then(A)}async function Et(o,t,n){if(!E(K))return[];try{let r=`ParentWorkflowId = "${t}"`;n&&(r+=` AND ParentRunId = "${n}"`);const{workflows:e}=await C(o,{query:r});return e}catch{return[]}}const Ro=300,vo=async(o,t,n)=>{t.set(!0);try{await n()}catch(r){console.error(r)}o.set(!1),setTimeout(()=>{t.set(!1)},Ro)},$o=u([y],([o])=>{var t,n,r;return!!((r=(n=(t=o.data)==null?void 0:t.systemInfo)==null?void 0:n.capabilities)!=null&&r.countGroupByExecutionStatus)}),pt=u([y,W],([o,t])=>{var e,s,a;const n=z("1.23.0",t),r=!!((a=(s=(e=o.data)==null?void 0:e.systemInfo)==null?void 0:s.capabilities)!=null&&a.prefixSearch);return n||r}),Oo=k(0),Bo=u([y],([o])=>{var t,n;return(n=(t=o.data)==null?void 0:t.settings)==null?void 0:n.hideWorkflowQueryErrors}),K=u([S,W],([o,t])=>o||z("1.23.0",t)),Fo=u([y],([o])=>o.url.searchParams.get("query")),Vo=u([Fo,K,fo],([o,t,n])=>t&&!n?o?`ParentWorkflowId is NULL AND ${o}`:"ParentWorkflowId is NULL":o),qo=u([y],([o])=>o.params.namespace),No=u([qo,Vo,Oo,D,Bo],([o,t,n,r,e])=>({namespace:o,query:t,refresh:n,supportsAdvancedVisibility:r,hideWorkflowQueryErrors:e})),Qo=o=>{Do.set({...o,newCount:0})},zo=o=>No.subscribe(({namespace:t,query:n,supportsAdvancedVisibility:r,hideWorkflowQueryErrors:e})=>{vo(Lo,Uo,async()=>{const{workflows:s,error:a}=await C(t,{query:n});if(o(s),r&&!E($o)){const i=await yo(t,n);Qo(i)}a?e?b.set(h("workflows.workflows-error-querying")):b.set(a):b.set("")})}),xt=k(""),Uo=k(!0),Lo=k(!0),Do=k({count:0,newCount:0}),b=k(""),It=Z([],zo),gt=k("");export{b as A,ut as a,Et as b,mt as c,ct as d,lt as e,ft as f,So as g,xt as h,yt as i,wt as j,ht as k,$o as l,gt as m,Po as n,S as o,D as p,Vo as q,Oo as r,kt as s,dt as t,pt as u,K as v,Do as w,It as x,Lo as y,Uo as z};