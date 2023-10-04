const o={ACTIVITY:"activity",CHILD_WORKFLOW:"child-workflow",COMMAND:"command",LOCAL_ACTIVITY:"local-activity",MARKER:"marker",SIGNAL:"signal",TIMER:"timer",UPDATE:"update",WORKFLOW:"workflow"},l={ActivityTaskCanceled:o.ACTIVITY,ActivityTaskCancelRequested:o.ACTIVITY,ActivityTaskCompleted:o.ACTIVITY,ActivityTaskFailed:o.ACTIVITY,ActivityTaskScheduled:o.ACTIVITY,ActivityTaskStarted:o.ACTIVITY,ActivityTaskTimedOut:o.ACTIVITY,ChildWorkflowExecutionCanceled:o.CHILD_WORKFLOW,ChildWorkflowExecutionCompleted:o.CHILD_WORKFLOW,ChildWorkflowExecutionFailed:o.CHILD_WORKFLOW,ChildWorkflowExecutionStarted:o.CHILD_WORKFLOW,ChildWorkflowExecutionTerminated:o.CHILD_WORKFLOW,ChildWorkflowExecutionTimedOut:o.CHILD_WORKFLOW,StartChildWorkflowExecutionFailed:o.CHILD_WORKFLOW,StartChildWorkflowExecutionInitiated:o.CHILD_WORKFLOW,MarkerRecorded:o.MARKER,SignalExternalWorkflowExecutionFailed:o.SIGNAL,SignalExternalWorkflowExecutionInitiated:o.SIGNAL,WorkflowExecutionSignaled:o.SIGNAL,TimerCanceled:o.TIMER,TimerFired:o.TIMER,TimerStarted:o.TIMER,WorkflowExecutionCanceled:o.WORKFLOW,WorkflowExecutionCancelRequested:o.WORKFLOW,WorkflowExecutionCompleted:o.WORKFLOW,WorkflowExecutionContinuedAsNew:o.WORKFLOW,WorkflowExecutionFailed:o.WORKFLOW,WorkflowExecutionStarted:o.WORKFLOW,WorkflowExecutionTerminated:o.WORKFLOW,WorkflowExecutionTimedOut:o.WORKFLOW,WorkflowTaskCompleted:o.WORKFLOW,WorkflowTaskFailed:o.WORKFLOW,WorkflowTaskScheduled:o.WORKFLOW,WorkflowTaskStarted:o.WORKFLOW,WorkflowTaskTimedOut:o.WORKFLOW,ExternalWorkflowExecutionCancelRequested:o.WORKFLOW,ExternalWorkflowExecutionSignaled:o.WORKFLOW,RequestCancelExternalWorkflowExecutionFailed:o.WORKFLOW,RequestCancelExternalWorkflowExecutionInitiated:o.WORKFLOW,UpsertWorkflowSearchAttributes:o.COMMAND,WorkflowExecutionUpdateAccepted:o.UPDATE,WorkflowExecutionUpdateCompleted:o.UPDATE},t=[{label:"category-all",option:void 0},{label:"category-activity",option:o.ACTIVITY,color:"#8B5CF6"},{label:"category-child-workflow",option:o.CHILD_WORKFLOW,color:"#F59E0B"},{label:"category-command",option:o.COMMAND,color:"#10B981"},{label:"category-local-activity",option:o.LOCAL_ACTIVITY},{label:"category-marker",option:o.MARKER,color:"#EC4899"},{label:"category-signal",option:o.SIGNAL,color:"#DD6B20"},{label:"category-timer",option:o.TIMER,color:"#1D4ED8"},{label:"category-update",option:o.UPDATE},{label:"category-workflow",option:o.WORKFLOW,color:"#10B981"}],i=[void 0,o.ACTIVITY,o.LOCAL_ACTIVITY,o.CHILD_WORKFLOW,o.SIGNAL,o.TIMER,o.MARKER,o.UPDATE],W=t.filter(({option:e})=>i.includes(e)),a=[o.ACTIVITY,o.LOCAL_ACTIVITY,o.CHILD_WORKFLOW,o.COMMAND,o.MARKER,o.SIGNAL,o.TIMER,o.UPDATE];t.filter(({option:e})=>a.includes(e));const r=e=>l[e];export{o as C,t as a,W as c,r as g};