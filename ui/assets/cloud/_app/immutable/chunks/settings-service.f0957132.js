import{s as b}from"./settings.5d2cd092.js";import{r as D,a as k,g as A}from"./route-for-api.23cff4a3.js";function h(){return"cloud"}const v=/(tmprl\.cloud|tmprl-test\.cloud)$/,e=async(m=fetch)=>{var o,c,d,i,u,f;const w=D("settings"),a=await k(w,{request:m}),r=h(),l={auth:{enabled:!!((o=a==null?void 0:a.Auth)!=null&&o.Enabled),options:(c=a==null?void 0:a.Auth)==null?void 0:c.Options},baseUrl:A(),codec:{endpoint:(d=a==null?void 0:a.Codec)==null?void 0:d.Endpoint,passAccessToken:(i=a==null?void 0:a.Codec)==null?void 0:i.PassAccessToken,includeCredentials:(u=a==null?void 0:a.Codec)==null?void 0:u.IncludeCredentials,decodeEventHistoryDownload:(f=a==null?void 0:a.Codec)==null?void 0:f.DecodeEventHistoryDownload},defaultNamespace:(a==null?void 0:a.DefaultNamespace)||"default",disableWriteActions:!!(a!=null&&a.DisableWriteActions)||!1,workflowTerminateDisabled:!!(a!=null&&a.WorkflowTerminateDisabled),workflowCancelDisabled:!!(a!=null&&a.WorkflowCancelDisabled),workflowSignalDisabled:!!(a!=null&&a.WorkflowSignalDisabled),workflowResetDisabled:!!(a!=null&&a.WorkflowResetDisabled),batchActionsDisabled:!!(a!=null&&a.BatchActionsDisabled),showTemporalSystemNamespace:a==null?void 0:a.ShowTemporalSystemNamespace,notifyOnNewVersion:a==null?void 0:a.NotifyOnNewVersion,feedbackURL:a==null?void 0:a.FeedbackURL,runtimeEnvironment:{get isCloud(){return r==="cloud"},get isLocal(){return r==="local"},envOverride:Boolean(r)},version:a==null?void 0:a.Version};return b.set(l),l};export{e as f,v as i};