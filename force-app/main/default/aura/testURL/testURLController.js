({
	incrementCount : function(component, event, helper) {
        
        var selectedItem = event.currentTarget;
        console.log("selectedItem: " + selectedItem);
        var SelectedRecordID = selectedItem.dataset.record;
        console.log('Selected Record ID = '+ SelectedRecordID);
		
	}
})