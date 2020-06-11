({
	doInit : function(component, event, helper) {
        
        console.log("OverrideModalLookup.doInit: entered");
        
        
        var modalBody;
        var modalFooter;
        
        $A.createComponents([
        ["c:OverrideModalContent",{"valueFromParent":"some id from parent" }],
        ["c:OverrideModalFooter",{}]
    ],
           function(components, status){
        if (status === "SUCCESS") {
            modalBody = components[0];
            modalFooter = components[1];
            component.find('overlayLib').showCustomModal({
               header: "New Interviewer",
               body: modalBody,
               footer: modalFooter,
               showCloseButton: true,
               cssClass: "my-modal,my-custom-class,my-other-class",
               closeCallback: function() {
                   alert('You closed the alert!');
               }
           })
        }
    }
   );
        
        console.log("OverrideModalLookup.doInit: exit");
        
    },
})