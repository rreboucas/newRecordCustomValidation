({
	clicked : function(cmp, event, helper) {

    var recordId = 'a0MB0000000cQXFMA2';
    
    $A.createComponent(
    'lightning:fileUpload',
    {
    label: 'Upload Stuff!!!',
    recordId: recordId,
    
    /*
    * If you remove this property, then the component succeeeds.
    */
    onuploadfinished: cmp.getReference('c.uploadDone'),
    
    },
    function(newUpload, status, errorMessage){
    debugger;
    if (status === 'SUCCESS'){
    var wrapper = cmp.find('wrapper');
    wrapper.set('v.body', newUpload);
    } else {
    console.error( errorMessage );
    }
    }
    );
    
    },
    uploadDone : function(cmp, event, helper){
    debugger;
    console.log('woot!');
    }
})