({
	doInit : function(cmp, event, helper) {
		console.log('SpartaNewRecordOverride - donit - entered');

		var modalBody;
		$A.createComponent("c:spartaNewRecordWrapper", 
		{
			parentId : ' ',
			"onfilterchange": cmp.getReference("c.closeQA")
		},
           function(content, status) {
               if (status === "SUCCESS") {
                   modalBody = content;
                   cmp.find('overlayLib').showCustomModal({
                       header: "New Quality Event",
                       body: modalBody,
                       showCloseButton: false,
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
