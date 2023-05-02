import{b as B}from"./decode-payload.f05c874c.js";import{c as P}from"./has.8da86d13.js";import{W as R,n as w}from"./index.16e2925e.js";import{s as Q}from"./settings.065e402a.js";import{s as U}from"./simplify-attributes.28929a11.js";import{r as l,a as f,b as $,i as q,c as N}from"./route-for-api.452bb9b7.js";import{t as _}from"./list-workflow-query.d662c11c.js";import{s as y}from"./parse-with-big-int.bccd89af.js";import{B as j}from"./route-for.29c17382.js";import{v as D}from"./toaster.fda32b20.js";const L=(o=Q)=>!R(o).disableWriteActions,G=(o=[])=>o.map(t=>{const n=U(t,!0),r=t.activityId;return{...n,id:r}}),H=o=>P(o)||P(o.indexedFields)?{}:{indexedFields:Object.entries(o.indexedFields).reduce((n,[r,e])=>({...n,[r]:B(e)}),{})},x=o=>{var I,g,T,b,W,A;const t=H(o.workflowExecutionInfo.searchAttributes),n=o.workflowExecutionInfo.type.name,r=o.workflowExecutionInfo.execution.workflowId,e=o.workflowExecutionInfo.execution.runId,i=o.workflowExecutionInfo.startTime,a=o.workflowExecutionInfo.closeTime,c=o.workflowExecutionInfo.executionTime,u=o.workflowExecutionInfo.status,d=o.workflowExecutionInfo.status==="Running",h=o.workflowExecutionInfo.historyLength,E=o.workflowExecutionInfo.historySizeBytes,s=`/workflows/${r}/${e}`,k=((g=(I=o==null?void 0:o.executionConfig)==null?void 0:I.taskQueue)==null?void 0:g.name)||((T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.taskQueue),m=(b=o==null?void 0:o.workflowExecutionInfo)==null?void 0:b.parentNamespaceId,v=(W=o==null?void 0:o.workflowExecutionInfo)==null?void 0:W.parentExecution,C=o.workflowExecutionInfo.stateTransitionCount,O=(A=o.executionConfig)==null?void 0:A.defaultWorkflowTaskTimeout,p=G(o.pendingActivities),z=(o==null?void 0:o.pendingChildren)??[];return{name:n,id:r,runId:e,startTime:i,endTime:a,executionTime:c,status:u,historyEvents:h,historySizeBytes:E,searchAttributes:t,url:s,taskQueue:k,pendingActivities:p,pendingChildren:z,parentNamespaceId:m,parent:v,stateTransitionCount:C,isRunning:d,defaultWorkflowTaskTimeout:O,get canBeTerminated(){return d&&L()}}},S=o=>(o.executions||[]).map(t=>x({workflowExecutionInfo:t})),J=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),F=(o,t=j)=>t?J(o):o,io=async(o,t,n=fetch)=>{let r=0,e=0;try{const i=l("workflows.count",{namespace:o});if(t){const a=f(i,{params:{query:t},onError:w,handleError:w,request:n}),c=f(i,{params:{query:""},onError:w,handleError:w,request:n}),[u,d]=await Promise.all([a,c]);e=u==null?void 0:u.count,r=d==null?void 0:d.count}else{const a=await f(i,{params:{},onError:w,handleError:w,request:n});r=a==null?void 0:a.count}}catch{}return{count:e,totalCount:r}},K=async(o,t,n=fetch,r=!1)=>{const e=t.query||_(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const a=r?"workflows.archived":"workflows";let c="";const u=s=>{var k,m;$(s),(k=s==null?void 0:s.body)!=null&&k.message||s!=null&&s.status?c=((m=s==null?void 0:s.body)==null?void 0:m.message)??`Error fetching workflows: ${s.status}: ${s.statusText}`:c="Error fetching workflows: Server failed to respond"},d=l(a,{namespace:o}),{executions:h,nextPageToken:E}=await f(d,{params:{query:i},onError:u,handleError:u,request:n})??{executions:[],nextPageToken:""};return{workflows:S({executions:h}),nextPageToken:String(E),error:c}},co=async(o,t=fetch)=>{var u;const{namespace:n,workflowId:r}=o,i=l("workflows",{namespace:n}),{executions:a}=await f(i,{params:{query:`WorkflowId="${r}"`,pageSize:"1"},request:t})??{executions:[]},c=(u=S({executions:a}))==null?void 0:u[0];return{runId:c==null?void 0:c.runId}},ao=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=c=>{(q(c)||N(c))&&(e=!1)},a=l(r,{namespace:o});return await f(a,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},so=async(o,t,n=fetch)=>K(o,t,n,!0);async function fo(o,t=fetch){const n=l("workflow",o);return f(n,{request:t}).then(x)}async function uo({workflow:o,namespace:t,reason:n}){const r=l("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await f(r,{options:{method:"POST",body:y({reason:n})},shouldRetry:!1,notifyOnError:!1})}async function lo({namespace:o,workflowId:t,runId:n},r=fetch){const e=l("workflow.cancel",{namespace:o,workflowId:t,runId:n});return f(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function wo({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e}){const i=l("workflow.signal",{namespace:o,workflowId:t,runId:n});return f(i,{notifyOnError:!1,options:{method:"POST",body:y({signalName:r,input:{payloads:e?[{metadata:{encoding:F("json/plain")},data:F(e)}]:null}})}})}async function ko({namespace:o,workflowId:t,runId:n,eventId:r,reason:e,resetReapplyType:i}){const a=l("workflow.reset",{namespace:o,workflowId:t,runId:n}),c={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,resetReapplyType:i,requestId:D(),reason:e};return f(a,{notifyOnError:!1,options:{method:"POST",body:y(c)}})}async function mo(o,t=fetch){const n=e=>{console.error(e)},r=l("workflow",o);return f(r,{request:t,onError:n,handleError:n}).then(x)}export{K as a,io as b,lo as c,ao as d,so as e,fo as f,mo as g,co as h,ko as r,wo as s,uo as t,L as w};
