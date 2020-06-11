({
	fieldChanged : function(component, event, helper) {
        
        var fName = component.find("v.fName");
   
        var lName = component.find("lName");
        var eml = component.find("eml");
        
        console.log("FirstName: " + fName);
        console.log("LastName: " + lName);
        console.log("Email: " + eml);
        //var SelectedRecordID = selectedItem.dataset.record;
        //console.log('Selected Record ID = '+ SelectedRecordID);
		
	}
})