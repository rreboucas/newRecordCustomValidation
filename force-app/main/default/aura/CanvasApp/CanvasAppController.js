({
	doInit : function(component, event, helper) {
        
        console.log("CanvasAppController.doInit: entered");
        
        component.set("v.params", "{userName:'value1',firstName:'value2'}");

        console.log("CanvasAppController.doInit: exit");
        
    },
    
    handleApplicationEvent : function(component, event, helper) {
        
        console.log("CanvasApp.handleApplicationEvent: entered");
        
        //var params = event.getParams();
        //component.set("v.listName", params.recordId);

        
        

        console.log("CanvasApp.handleApplicationEvent: exit");
        
    }
})