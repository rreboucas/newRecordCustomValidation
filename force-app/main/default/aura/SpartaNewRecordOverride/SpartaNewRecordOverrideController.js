({
	doInit : function(cmp, event, helper) {
		console.log('SpartaNewRecordOverride - donit - entered');
		var recId = cmp.get("v.recordId")
		console.log('SpartaNewRecordOverride - donit - parentId: ' + recId);

		var modalBody;
		$A.createComponent("c:spartaNewRecordWrapper", 
		{
			parentId : recId,
			"onfilterchange": cmp.getReference("c.closeQA")
		},
           function(content, status) {
               if (status === "SUCCESS") {
                   modalBody = content;
                   cmp.find('overlayLib').showCustomModal({
                       header: "New Quality Event",
                       body: modalBody,
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                           //alert('You closed the alert!');
                       }
                   })
               }
           });
		
	},

	closeQA : function(cmp, event, helper) {
		console.log('SpartaNewRecordOverride - closeQA - entered');
		// Close the action panel
        $A.get("e.force:closeQuickAction").fire();
	}
})
