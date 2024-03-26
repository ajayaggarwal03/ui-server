import{_ as g,a as v,i as y}from"../chunks/i18next.dQ3wfJvm.js";import{L as se}from"../chunks/layout.3Pqjj6R9.js";var w=[],b=w.forEach,S=w.slice;function T(a){return b.call(S.call(arguments,1),function(t){if(t)for(var e in t)a[e]===void 0&&(a[e]=t[e])}),a}var u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,W=function(t,e,o){var r=o||{};r.path=r.path||"/";var i=encodeURIComponent(e),n="".concat(t,"=").concat(i);if(r.maxAge>0){var s=r.maxAge-0;if(Number.isNaN(s))throw new Error("maxAge should be a Number");n+="; Max-Age=".concat(Math.floor(s))}if(r.domain){if(!u.test(r.domain))throw new TypeError("option domain is invalid");n+="; Domain=".concat(r.domain)}if(r.path){if(!u.test(r.path))throw new TypeError("option path is invalid");n+="; Path=".concat(r.path)}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+="; Expires=".concat(r.expires.toUTCString())}if(r.httpOnly&&(n+="; HttpOnly"),r.secure&&(n+="; Secure"),r.sameSite){var d=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(d){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return n},f={create:function(t,e,o,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};o&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+o*60*1e3)),r&&(i.domain=r),document.cookie=W(t,encodeURIComponent(e),i)},read:function(t){for(var e="".concat(t,"="),o=document.cookie.split(";"),r=0;r<o.length;r++){for(var i=o[r];i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(e)===0)return i.substring(e.length,i.length)}return null},remove:function(t){this.create(t,"",-1)}},A={name:"cookie",lookup:function(t){var e;if(t.lookupCookie&&typeof document<"u"){var o=f.read(t.lookupCookie);o&&(e=o)}return e},cacheUserLanguage:function(t,e){e.lookupCookie&&typeof document<"u"&&f.create(e.lookupCookie,t,e.cookieMinutes,e.cookieDomain,e.cookieOptions)}},C={name:"querystring",lookup:function(t){var e;if(typeof window<"u"){var o=window.location.search;!window.location.search&&window.location.hash&&window.location.hash.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));for(var r=o.substring(1),i=r.split("&"),n=0;n<i.length;n++){var s=i[n].indexOf("=");if(s>0){var d=i[n].substring(0,s);d===t.lookupQuerystring&&(e=i[n].substring(s+1))}}}return e}},l=null,h=function(){if(l!==null)return l;try{l=window!=="undefined"&&window.localStorage!==null;var t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{l=!1}return l},x={name:"localStorage",lookup:function(t){var e;if(t.lookupLocalStorage&&h()){var o=window.localStorage.getItem(t.lookupLocalStorage);o&&(e=o)}return e},cacheUserLanguage:function(t,e){e.lookupLocalStorage&&h()&&window.localStorage.setItem(e.lookupLocalStorage,t)}},c=null,p=function(){if(c!==null)return c;try{c=window!=="undefined"&&window.sessionStorage!==null;var t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{c=!1}return c},E={name:"sessionStorage",lookup:function(t){var e;if(t.lookupSessionStorage&&p()){var o=window.sessionStorage.getItem(t.lookupSessionStorage);o&&(e=o)}return e},cacheUserLanguage:function(t,e){e.lookupSessionStorage&&p()&&window.sessionStorage.setItem(e.lookupSessionStorage,t)}},N={name:"navigator",lookup:function(t){var e=[];if(typeof navigator<"u"){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)e.push(navigator.languages[o]);navigator.userLanguage&&e.push(navigator.userLanguage),navigator.language&&e.push(navigator.language)}return e.length>0?e:void 0}},I={name:"htmlTag",lookup:function(t){var e,o=t.htmlTag||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(e=o.getAttribute("lang")),e}},R={name:"path",lookup:function(t){var e;if(typeof window<"u"){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array)if(typeof t.lookupFromPathIndex=="number"){if(typeof o[t.lookupFromPathIndex]!="string")return;e=o[t.lookupFromPathIndex].replace("/","")}else e=o[0].replace("/","")}return e}},B={name:"subdomain",lookup:function(t){var e=typeof t.lookupFromSubdomainIndex=="number"?t.lookupFromSubdomainIndex+1:1,o=typeof window<"u"&&window.location&&window.location.hostname&&window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[e]}};function D(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}}var m=function(){function a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v(this,a),this.type="languageDetector",this.detectors={},this.init(t,e)}return g(a,[{key:"init",value:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=T(o,this.options||{},D()),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(A),this.addDetector(C),this.addDetector(x),this.addDetector(E),this.addDetector(N),this.addDetector(I),this.addDetector(R),this.addDetector(B)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var o=this;e||(e=this.options.order);var r=[];return e.forEach(function(i){if(o.detectors[i]){var n=o.detectors[i].lookup(o.options);n&&typeof n=="string"&&(n=[n]),n&&(r=r.concat(n))}}),this.services.languageUtils.getBestMatchFromCodes?r:r.length>0?r[0]:null}},{key:"cacheUserLanguage",value:function(e,o){var r=this;o||(o=this.options.caches),o&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||o.forEach(function(i){r.detectors[i]&&r.detectors[i].cacheUserLanguage(e,r.options)}))}}]),a}();m.type="languageDetector";const P="batch",L={"nav-title":"Batch","list-page-title":"Batch Operations","describe-page-title":"Batch Operation","empty-state-title":"No Batch Operations","back-link":"Back to Batch Operations","operation-type":"Operation Type",details:"Operation Details",identity:"Identity","total-operations":"Total Operations","operations-failed":"{{ count, number }} failed","operations-succeeded":"{{ count, number }} succeeded","operations-progress":"{{ percent }}% complete",results:"Operation Results","max-concurrent-alert-title":"Maximum concurrent Batch Operations met","max-concurrent-alert-description":"Only 1 in progress Batch Operation is permitted. If you are attempting to create a new Batch Operation while there is one currently running, it will fail.","job-id-input-hint":"Job ID must be unique. If left blank, a randomly generated UUID will be used.","job-id-input-error":"Job ID must only contain URL safe characters"},O="common",U={loading:"Loading...",filtering:"filtering","unknown-error":"An unknown error occurred.",search:"Search",apply:"Apply",query:"Query",ago:"ago","all-time":"All Time",custom:"Custom","start-time":"Start Time","end-time":"End Time","close-time":"Close Time",relative:"Relative",utc:"UTC",local:"Local",cancel:"Cancel","clear-all":"Clear all","clear-all-capitalized":"Clear All","ante-meridiem":"AM","post-meridiem":"PM",ascending:"Ascending",descending:"Descending",start:"Start",end:"End",true:"True",false:"False",after:"After",before:"Before",between:"Between","in-last":"In Last","starts-with":"Starts with",equals:"Equals","greater-than":"Greater Than","greater-than-or-equal-to":"Greater than or equal to","less-than":"Less than","less-than-or-equal-to":"Less than or equal to",is:"Is","is-not":"Is Not",all:"All",submit:"Submit",reason:"Reason","reason-placeholder":"Enter a reason",confirm:"Confirm",summary:"Summary",scheduled:"Scheduled","show-all":"Show all","date-and-time":"Date & Time",event:"Event","collapse-all":"Collapse All","expand-all":"Expand All",id:"ID",yes:"Yes",no:"No",maybe:"Maybe",refresh:"Refresh","error-occurred":"An Error Occurred",save:"Save","workflow-type":"Workflow Type","workflow-id":"Workflow ID","run-id":"Run ID","task-queue":"Task Queue",preview:"Preview",status:"Status",created:"Created: {{created}}","last-updated":"Last Updated: {{updated}}",edit:"Edit",delete:"Delete",memo:"Memo",notes:"Notes",add:"Add","from-now":"from now","hour-abbreviated":"hr.","hours-abbreviated":"hrs.","minutes-abbreviated":"min.","seconds-abbreviated":"sec.",days:"days","number-input-placeholder":"Enter a number",enter:"Enter","no-results":"No results","type-or-paste-in":"Type or paste in","per-page":"Per Page","next-page":"Next Page","previous-page":"Previous Page","go-to-page":"Go to page {{page}}","next-row":"Next Row","previous-row":"Previous Row",today:"Today",close:"Close",deprecated:"Deprecated",namespaces:"Namespaces",cluster:"Cluster","codec-server":"Codec Server",workflows:"Workflows","workflows-plural_one":"Workflow","workflows-plural_other":"Workflows",schedules:"Schedules",archive:"Archive",import:"Import",feedback:"Feedback","log-out":"Log out",details:"Details",unknown:"Unknown",key:"Key",type:"Type",disabled:"Disabled",enabled:"Enabled",primary:"Primary",previous:"Previous",next:"Next",name:"Name",version:"Version",main:"Main","select-all":"Select All",absolute:"Absolute","copy-icon-title":"Click to copy content","copy-success-icon-title":"Content copied to clipboard","filter-workflows":"Filter workflows","event-category-filter-label":"Open event category filter menu","event-date-filter-label":"Open event date filter menu","date-time-menu-label":"Open time format menu","workflow-filter-label":"Open {{attribute}} filter menu","workflow-status-filter-label":"Open execution status filter menu","clear-input-button-label":"Clear input","keyboard-shortcuts":"Keyboard Shortcuts","close-keyboard-shortcuts":"Close keyboard shortcuts",none:"None","user-profile":"User Profile","arrow-key-up":"Arrow key up","arrow-key-down":"Arrow key down","arrow-key-left":"Arrow key left","arrow-key-right":"Arrow key right",on:"On",off:"Off",labs:"Labs",experimental:"Experimental",timezone:"Timezone {{ timezone }}","time-unit":"Time Unit","time-format":"Time Format","time-range":"Time Range","based-on-time-preface":"Based on","download-json":"Download JSON","skip-nav":"Skip to Main Content",timeline:"Timeline","equal-to":"Equal to","not-equal-to":"Not equal to","encode-failed":"Data encoding failed","decode-failed":"Data decoding failed","job-id":"Job ID","auto-refresh":"Auto refresh","auto-refresh-tooltip":"{{ interval }} second page refresh","view-more":"View More...","view-all-runs":"View All Runs",download:"Download","search-attributes":"Search Attributes","history-size-bytes":"History Size (Bytes)","execution-details":"Execution Details"},q="data-encoder",F={"endpoint-title":"Codec Server browser endpoint","endpoint-description":"Enter a Codec Server endpoint for this browser. This will be stored in your browser and will only be accessible by you.","endpoint-placeholder":"Paste your endpoint here","pass-access-token-label":"Pass the user access token with your endpoint.","include-cross-origin-credentials-label":"Include cross-origin credentials.","include-cross-origin-credentials-warning":"Warning: Pre-flight checks will be done and could result in failure to decode if incorrectly configured.","port-title":"tctl plugin port ","port-info":"If both are set, the Codec Server endpoint will be used.","access-token-https-error":"Endpoint must be https:// if passing access token","prefix-error":"Endpoint must start with http:// or https://","codec-server-description-prefix":"A ","codec-server-description-suffix":" decodes your data. A Codec Server endpoint can be set at the {{level}} level, or locally in your browser.","browser-override-description":"Use my browser setting and ignore {{level}}-level setting.","no-browser-override-description":"Use {{level}}-level setting, where available.","codec-server-configured":"Codec Server is configured","codec-server-error":"Codec Server could not connect","codec-server-success":"Codec Server succesfully converted content","configure-codec-server":"Configure Codec Server","encode-error":"Codec Server failed to encode"},M="events",_={"empty-state-title":"No Events Match","empty-state-description":"There are no events that match your filters or selected view. Adjust your filters or view to see your events.","group-empty-state-title":"Event Group Not Found","sort-ascending":"Sort 1-9","sort-descending":"Sort 9-1","date-and-time":"Date & Time","show-elapsed-time":"Show Elapsed Time & Duration","event-type":"Event Type","workflow-events":"Workflow Events",category:{all:"All",activity:"Activity","child-workflow":"Child Workflow",command:"Command","local-activity":"Local Activity",marker:"Marker",signal:"Signal",timer:"Timer",update:"Update",workflow:"Workflow"},"attribute-group":{activity:"Activity",parent:"Parent","retry-policy":"Retry Policy",schedule:"Schedule","search-attributes":"Search Attributes",summary:"Summary","task-queue":"Task Queue",workflow:"Workflow"},"event-group":"Events related to {{eventName}}","error-event":"Error Event","import-event-history":"Import Event History","import-event-history-file-upload":"Select an event history JSON file to upload","event-history-view":"Event History View","api-history-link":"View in Github","history-expected-formats":"Expected JSON formats","event-history-import-error":"Could not create event history from JSON","event-history-load-error":"Could not parse JSON","event-classification":{unspecified:"Unspecified",scheduled:"Scheduled",open:"Open",new:"New",started:"Started",initiated:"Initiated",running:"Running",completed:"Completed",fired:"Fired",cancelrequested:"Cancel Requested",timedout:"Timed Out",signaled:"Signaled",canceled:"Canceled",failed:"Failed",terminated:"Terminated"},"decode-event-history":"Decode Event History"},Q="namespaces",$={"namespace-select-header":"Select a Namespace","namespace-select-empty-state":"No Namespaces","namespace-label":"Select a Namespace","namespaces-empty-state-title":"No Namespaces Found","namespaces-empty-state-content":"You do not have access to a Namespace. Contact your Administrator for assistance.",namespace:"Namespace",versions:"Versions",owner:"Owner",global:"Global","retention-period":"Retention Period","history-archival":"History Archival","visibility-archival":"Visibility Archival","failover-version":"Failover Version",clusters:"Clusters","client-actions":"Client Actions","signal-workflow":"Signal Workflow","unauthorized-namespace-error":"You do not have access to this namespace.","select-namespace-welcome":"Welcome to Temporal","select-namespace":"Select a Namespace to get started.","search-namespaces":"Search Namespaces","select-namespace-empty-state":"No Namespaces. Contact your admin to create one."},z="schedules",H={edit:"Edit Schedule",create:"Create Schedule",editing:"Editing Schedule...",creating:"Creating Schedule...","back-to-schedule":"Back to Schedule","back-to-schedules":"Back to Schedules",name:"Schedule Name",schedule:"Schedule",frequency:"Frequency","schedule-spec":"Schedule Spec","schedule-input":"Schedule Input","empty-state-title":"No Schedules Found","empty-state-description":"Try a different search","error-message-fetching":"Error fetching schedules","recent-runs":"Recent Runs","recent-runs-empty-state-title":"No Recent Runs","upcoming-runs":"Upcoming Runs",loading:"Loading Schedule...",deleting:"Deleting Schedule...","delete-schedule-error":"Cannot delete schedule. {{error}}",pause:"Pause",unpause:"Unpause","schedule-actions":"Schedule Actions","pause-modal-title":"Pause Schedule?","pause-modal-confirmation":"Are you sure you want to pause {{schedule}}?","pause-reason":"Enter a reason for pausing the schedule.","unpause-modal-title":"Unpause Schedule?","unpause-modal-confirmation":"Are you sure you want to unpause {{schedule}}?","unpause-reason":"Enter a reason for unpausing the schedule.",trigger:"Trigger","trigger-modal-title":"Trigger Immediately","trigger-unspecified-title":"Use Policy","trigger-unspecified-description":"Use the Schedule's overlap policy.","trigger-skip-title":"Skip","trigger-skip-description":"When the workflow completes, the next occurrence that is scheduled after that time is considered.","trigger-buffer-one-title":"Buffer One","trigger-buffer-one-description":"Start the workflow again as soon as the current workflow completes, but buffer only one start. If another start is scheduled to happen while the workflow is running, and a workflow is already buffered, only the first workflow starts after the running workflow completes.","trigger-buffer-all-title":"Buffer All","trigger-buffer-all-description":"Buffer any number of workflow starts to happen sequentially, beginning immediately after the running workflow completes.","trigger-cancel-other-title":"Cancel Other","trigger-cancel-other-description":"If another workflow is running, cancel it. After the previous workflow completes cancellation, start the new workflow.","trigger-terminate-other-title":"Terminate Other","trigger-terminate-other-description":"If another workflow is running, terminate it and start the new workflow immediately.","trigger-allow-all-title":"Allow All","trigger-allow-all-description":"Start any number of concurrent workflows. Last completion result and last failure aren't available because the workflows aren't sequential.","delete-modal-title":"Delete Schedule?","delete-modal-confirmation":"Are you sure you want to delete {{schedule}}?","advanced-settings":"Advanced Settings ","start-time":"Schedule Start Time: ","end-time":"Schedule End Time: ",jitter:"Jitter: ","exclusion-calendar":"Exclusion Calendar: ","remaining-actions":"Remaining Actions: ","overlap-policy":"Overlap Policy: ","recurring-dates-heading":"Recurring date(s)","recurring-dates-description":"Select the specific dates for the schedule to always run on.","recurring-days-heading":"Recurring day(s)","recurring-days-description":"Select the day(s) of the week this schedule will always run on.","time-view-heading":"Time","time-view-description":"Specify the time (UTC) for this schedule to run. By default, the schedule will run at 12:00am UTC if left blank.","interval-view-heading":"Recurring Time","interval-view-description":"Specify the time interval for this schedule to run (for example every 5 minutes).","offset-heading":"Offset","offset-unit":"Offset Unit","offset-description":"Specify the time to offset when this schedule will run (for example 15 min past the hour).","cron-view-title":"String","cron-view-description":"Write or paste in a cron string to generate a schedule.","error-title":"Error Message","name-label":"Name*","workflow-id-label":"Workflow Id*","workflow-type-label":"Workflow Type*","task-queue-label":"Task Queue*","getting-started-docs-link-preface":"Go to","getting-started-docs-link":"docs","getting-started-cli-link-preface":"or get started with"},V="typed-errors",J={"link-preface":"Learn more about ",Unspecified:{title:"Unspecified",description:"The Workflow Task failed. See error for details."},UnhandledCommand:{title:"Unhandled Command",description:"The Workflow Task failed because there are new available events since the last Workflow Task started. A retry Workflow Task has been scheduled and the Workflow will have a chance to handle those new events."},BadScheduleActivityAttributes:{title:"Bad Schedule Activity Attributes",description:"The Workflow Task failed because of missing or incorrect ScheduleActivity attributes."},BadRequestCancelActivityAttributes:{title:"Bad Request Cancel Activity Attributes",description:"The Workflow Task failed because of bad RequestCancelActivity attributes. An Activity was scheduled to cancel, but the scheduled event id was never set."},BadStartTimerAttributes:{title:"Bad Start Timer Attributes",description:"The Workflow Task failed because the scheduled event is missing a timer id."},BadCancelTimerAttributes:{title:"Bad Cancel Timer Attributes",description:"The Workflow Task failed when trying to cancel a timer due to an unset timer id."},BadRecordMarkerAttributes:{title:"Bad Record Marker Attributes",description:"The Workflow Task failed because of a missing or invalid Marker name."},BadCompleteWorkflowExecutionAttributes:{title:"Bad Complete Workflow Execution Attributes",description:"The Workflow Task failed because of an unset attribute on CompleteWorkflowExecution."},BadFailWorkflowExecutionAttributes:{title:"Bad Fail Workflow Execution Attributes",description:"The Workflow Task failed because of an unset FailWorkflowExecution attribute or failure."},BadCancelWorkflowExecutionAttributes:{title:"Bad Cancel Workflow Execution Attributes",description:"The Workflow Task failed because of an unset attribute on CancelWorkflowExecution."},BadRequestCancelExternalAttributes:{title:"Bad Request Cancel External Attributes",description:"The Workflow Task failed due to an invalid attribute on a request to cancel an external Workflow. Check the Failure Message for more details."},BadContinueAsNewAttributes:{title:"Bad Continue As New Attributes",description:"The Workflow Task failed because it failed to validate on a ContinueAsNew attribute. Check the Failure Message for more details."},StartTimerDuplicateId:{title:"Start Timer Duplicate ID",description:"The Workflow Task failed because a timer with the given timer id has already started."},ResetStickyTaskQueue:{title:"Reset Sticky Task Queue",description:"The Workflow Task failed because the Sticky Task Queue needs to be reset. The system will automatically retry."},WorkflowWorkerUnhandledFailure:{title:"Workflow Worker Unhandled Failure",description:"The Workflow Task failed due to an unhandled failure from the Workflow code.",action:"deterministic constraints",link:"https://docs.temporal.io/workflows/#deterministic-constraints"},WorkflowTaskHeartbeatError:{title:"Workflow Task Heartbeat Error",description:"The Workflow Task failed to send a heartbeat while executing long-running local Activities. These local Activities will re-execute on the next Workflow Task attempt. If this error is persistent, these local Activities will run repeatedly until the Workflow times out."},BadSignalWorkflowExecutionAttributes:{title:"Bad Signal Workflow Execution Attributes",description:"The Workflow Task failed to validate attributes for SignalWorkflowExecution. Check the Failure Message for more details."},BadStartChildExecutionAttributes:{title:"Bad Start Child Execution Attributes",description:"The Workflow Task failed to validate attributes needed for StartChildWorkflowExecution. Check the Failure Message for more details."},ForceCloseCommand:{title:"Force Close Command",description:"The Workflow Task was forced to close. A retry will be scheduled if the error is recoverable."},FailoverCloseCommand:{title:"Failover Close Command",description:"The Workflow Task was forced to close due to a Namespace failover. A retry will be scheduled automatically."},BadSignalInputSize:{title:"Bad Signal Input Size",description:"The payload has exceeded the available input size on a Signal."},ResetWorkflow:{title:"Reset Workflow",description:"The system failed this Workflow Task. If a reset for this Workflow was requested check the progress on the new Workflow, otherwise reset this Workflow."},BadBinary:{title:"Bad Binary",description:"The system failed this Workflow Task because the deployment of this Worker is marked as bad binary."},ScheduleActivityDuplicateId:{title:"Schedule Activity Duplicate ID",description:"The Workflow Task failed because the Activity ID is already in use, please check if you have specified the same Activity ID in your workflow."},BadSearchAttributes:{title:"Bad Search Attributes",description:"A Search attribute is either missing or the value exceeds the limit. This might cause Workflow tasks to continue to retry without success.",action:"configuring search attributes",link:"https://docs.temporal.io/visibility#search-attribute"},NonDeterministicError:{title:"Non Deterministic Error",description:"A non-deterministic error has caused the Workflow Task to fail. This usually means the workflow code has a non-backward compatible change without a proper versioning branch."},BadModifyWorkflowPropertiesAttributes:{title:"Bad Modify Workflow Properties Attributes",description:"The Workflow Task failed to validate attributes on ModifyWorkflowProperty on the upsert memo. Check the Failure Message for more details."},PendingChildWorkflowsLimitExceeded:{title:"Pending Child Workflows Limit Exceeded",description:"The capacity for pending child Workflows has been reached. The Workflow Task was failed to prevent any more child Workflows from being added."},PendingActivitiesLimitExceeded:{title:"Pending Activities Limit Exceeded",description:"The capacity for pending Activities has been reached. The Workflow Task was failed to prevent another Activity from being created."},PendingSignalsLimitExceeded:{title:"Pending Signals Limit Exceeded",description:"The capacity for pending Signals to be sent from this Workflow has been reached."},PendingRequestCancelLimitExceeded:{title:"Pending Request Cancel Limit Exceeded",description:"The capacity for pending requests to cancel other Workflows has been reached."},BadUpdateWorkflowExecutionMessage:{title:"Bad Update",description:"A Workflow Execution tried to complete before receiving an Update."},UnhandledUpdate:{title:"Unhandled Update",description:"A Workflow Update was received by the Temporal Server while a Workflow Task was being processed on a Worker."}},j="workers",G={workers:"Workers",version:"Version",retirability:"Retirability",default:"Default",overall:"Overall","compatible-build-ids":"Compatible Build IDs","version-sets":"Version Sets","no-version-sets-found":"No Version Sets found","last-used-version":"Last used version","next-version":"Next version","ready-to-be-retired":"Ready to be Retired","max-version-sets-title":"Limit reached for Compatible Version Sets","max-version-sets-description":"You can increase the number of Compatible Version sets via the limit.versionCompatibleSetsPerQueue dynamic config property."},Y="workflows",Z={"loading-workflows":"Loading workflows","recent-workflows":"Recent Workflows","recent-workflows-link":"View Recent Workflows","workflows-count_one":"{{count, number}} workflow","workflows-count_other":"{{count, number}} workflows","workflows-error-querying":"A error has occurred while querying for Workflows.","filtered-workflows-count":"Results {{filtered, number}} of {{total, number}} workflows",terminate:"Terminate","batch-terminate-modal-title":"Terminate Workflows","batch-cancel-modal-title":"Cancel Workflows","workflow-action-reason-placeholder":"{{action}} from the Web UI","workflow-action-reason-placeholder-with-email":"{{action}} from the Web UI by {{email}}","batch-operation-confirmation-all":"Are you sure you want to {{action}} all workflows matching the following query? This action cannot be undone.","batch-operation-count-disclaimer":'Note: The actual count of workflows that will be affected is the total number of running workflows matching this query at the time of clicking "{{action}}".',"batch-cancel-confirmation_one":"Are you sure you want to cancel {{count, number}} running workflow?","batch-cancel-confirmation_other":"Are you sure you want to cancel {{count, number}} running workflows?","batch-terminate-confirmation_one":"Are you sure you want to terminate {{count, number}} running workflow?","batch-terminate-confirmation_other":"Are you sure you want to terminate {{count, number}} running workflows?","batch-operation-confirmation-input-hint":'If you supply a custom reason, "{{placeholder}}" will be appended to it.',"batch-terminate-all-success":"The batch terminate request is processing in the background.","batch-cancel-all-success":"The batch cancel request is processing in the background.","configure-workflows":"Configure Workflow List","open-configure-workflows":"Open workflow list configuration","close-configure-workflows":"Close workflow list configuration","configure-workflows-description":"Add (<1></1>), re-arrange (<2></2>), and remove (<3></3>), Workflow Headings to personalize the Workflow List Table.","all-statuses":"All Statuses",running:"Running","timed-out":"Timed Out",completed:"Completed",failed:"Failed","contd-as-new":"Cont'd as New","continued-as-new":"Continued as New",terminated:"Terminated",canceled:"Canceled",paused:"Paused",reset:"Reset",signal:"Send a Signal","n-selected":"{{count, number}} selected","all-selected":"All {{count, number}} selected.","select-all":"select all {{count, number}}","request-cancellation":"Request Cancellation","back-to-workflows":"Back to Workflows",input:"Input","input-and-results":"Input and Results","continued-as-new-with-input":"Continued as New with Input",results:"Results","event-history-view":"Event History View","event-history":"Event History",history:"History",compact:"Compact",json:"JSON",download:"Download","workflow-actions":"Workflow Actions","reset-disabled":"Resetting workflows is not enabled, please contact your administrator for assistance.","reset-disabled-pending-children":"Cannot reset workflows with pending children.","reset-disabled-no-events":"Cannot reset workflows without WorkflowTaskStarted, WorkflowTaskCompleted, or WorkflowTaskTimedOut events.","signal-disabled":"Signaling workflows is not enabled, please contact your administrator for assistance.","terminate-disabled":"Terminating workflows is not enabled, please contact your adminstrator for assistance.","terminate-success":"Workflow terminated.","cancel-success":"Workflow canceled.","signal-success":"Workflow signaled.","reset-modal-title":"Reset Workflow","reset-event-radio-group-description":"Choose an Event to reset to","reset-reapply-type-label":"Reapply Signals that happened after the Reset point","cancel-modal-title":"Cancel Workflow","cancel-modal-confirmation":"Are you sure you want to cancel this workflow? This action cannot be undone.","terminate-modal-title":"Terminate Workflow","terminate-modal-confirmation":"Are you sure you want to terminate this workflow? This action cannot be undone.","signal-modal-title":"Send a Signal","signal-name-label":"Signal name","signal-payload-input-label":"Input","signal-payload-input-label-hint":"(only single JSON payload supported)","cancel-request-sent":"Cancel Request Sent","cancel-request-sent-description":"The request to cancel this Workflow Execution has been sent. If the Workflow uses the cancellation API, it'll cancel at the next available opportunity.","reset-success-alert-title":"This Workflow has been reset","reset-success-alert-description":"You can find the resulting Workflow Execution <1>here</1>.","history-tab":"History","workflow-history":"Workflow History","workers-tab":"Workers","pending-activities-tab":"Pending Activities","call-stack-tab":"Call Stack","queries-tab":"Queries","workflow-404-title":"This is not the Workflow you are looking for","workflow-error-title":"We are having technical difficulties retrieving this Workflow","workflow-error-no-workers-title":"No Workers Running","workflow-error-no-workers-description":"There are no Workers polling the {{taskQueue}} Task Queue.","workflow-error-no-compatible-workers-title":"No Compatible Workers Running","workflow-error-no-compatible-workers-description":"There are no compatible Workers polling the {{taskQueue}} Task Queue.","state-transitions":"State Transitions","start-and-close-time":"Start & Close Time",relationships:"Relationships",parents_zero:"0 Parents",parents_one:"1 Parent","pending-children_one":"1 Pending Child","pending-children_other":"{{count}} Pending Children",children_one:"1 Child",children_other:"{{count}} Children",first:"{{count}} First",previous:"{{count}} Previous",next:"{{count}} Next","no-relationships":"This workflow doesn't have any relationships","parent-id":"Parent Workflow ID","parent-run-id":"Parent Run ID","parent-workflow":"Parent Workflow","first-execution":"First Execution","previous-execution":"Previous Execution","next-execution":"Next Execution","child-id":"Child Workflow ID","child-run-id":"Child Run ID","pending-activities":"Pending Activities","pending-activities-canceled":"Pending activities have been canceled.","activity-type":"Activity Type","last-heartbeat":"Last Heartbeat",attempt:"Attempt","attempts-left":"Attempts Left","next-retry":"Next Retry",expiration:"Expiration","heartbeat-details":"Heartbeat Details","last-failure":"Last Failure","last-accessed":"Last Accessed","workflow-task-handler":"Workflow Task Handler","activity-handler":"Activity Handler","workers-empty-state":"No Workers Found","call-stack-empty-state":"No Call Stacks Found","no-workers-failure-message":"This will fail if you have no workers running.","no-workers-running-message":"Please make sure you have at least one worker running.","call-stack-alert":"This is a call stack showing each location where Workflow code is waiting.","call-stack-at":"Call Stack at","call-stack-link-preface":"To enable ","call-stack-link":"call stacks","call-stack-link-postface":", run a Worker on the {{taskQueue}} Task Queue.","json-formatting":"JSON Formatting","query-type":"Query Type","pending-activities-empty-state":"No Pending Activities","activity-id":"Activity ID",details:"Details","maximum-attempts":"Maximum Attempts","retry-expiration":"Retry Expiration",state:"State","last-started-time":"Last Started Time","scheduled-time":"Scheduled Time","last-worker-identity":"Last Worker Identity",unlimited:"Unlimited","no-expiration":"No Expiration","no-retry":"None",filter:"Filter","view-search-input":"View Search Input","select-time":"Select Time","search-placeholder":"Enter a query","child-workflows":"Child Workflows","retry-workflows":"Retry Workflows","workflow-name":"Workflow Name","filter-by":"filter by {{workflowName}} type","select-all-workflows":"Select all Workflows","select-workflow":"Select Workflow {{workflow}}","empty-state-title":"No Workflows Found","empty-state-description":"If you have filters applied, try adjusting them. Otherwise please check your syntax and try again.","remove-filter-label":"Remove {{attribute}} filter","remove-keyword-label":"Remove {{keyword}} keyword","move-column-up-label":"Move {{column}} column up","move-column-down-label":"Move {{column}} column down","add-column-label":"Add {{column}} column","remove-column-label":"Remove {{column}} column","pin-column-label":"Pin {{column}} column","unpin-column-label":"Unpin {{column}} column","all-headings-in-view":"All available headings are in view","no-headings-in-view":"No headings in view","archived-workflows":"Archived Workflows",archival:"Archival","workflow-query-empty-state-title":"No Results","workflow-query-empty-state-preface":"There are no results for the applied filters.","workflow-query-empty-state-postface":"Try adjusting or clearing the filters to see the Workflows running on this Namespace.","workflow-query-error-state":"There is an error with filtering Workflows.","workflow-empty-state-title":"No Workflows running in this Namespace","workflow-empty-state-description":"You can populate the Web UI with sample Workflows. You can find a complete list of executable code samples at","visibility-disabled-archival":"This namespace is currently enabled for archival but visibility is not enabled.","archival-link-preface":"To enable ","archival-link":"archival visibility","archival-disabled-title":"This namespace is currently not enabled for archival.","archival-disabled-details":"Run this command to enable archival visibility for event histories","archival-empty-state-description":"No results found for archival visibility.","basic-search":"Basic Search","advanced-search":"Advanced Search","time-range":"Time Range","pending-activities-link":"Show all Pending Activities","duration-filter-placeholder":'e.g. "2h45m", "hh:mm:ss", or "1000" nanoseconds'},K="en",X={[P]:L,[O]:U,[Y]:Z,[V]:J,[M]:_,[z]:H,[q]:F,[Q]:$,[j]:G},k={[K]:X},ee=Object.keys(k.en),te=!1,oe=async function(){y.use(m).init({fallbackLng:"en",load:"languageOnly",ns:ee,defaultNS:"common",detection:{order:["querystring","localStorage","navigator"],caches:["localStorage"],lookupQuerystring:"lng",lookupLocalStorage:"locale"},resources:k})},ie=Object.freeze(Object.defineProperty({__proto__:null,load:oe,ssr:te},Symbol.toStringTag,{value:"Module"}));export{se as component,ie as universal};
