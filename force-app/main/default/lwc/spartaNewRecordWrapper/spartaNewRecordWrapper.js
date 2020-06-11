import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CurrentPageReference } from 'lightning/navigation';
import { NavigationMixin } from 'lightning/navigation';
import PARENT_FIELD from '@salesforce/schema/Quality_Event__c.Quality_Event__c';
import NAME_FIELD from '@salesforce/schema/Quality_Event__c.Name';
import STATUS_FIELD from '@salesforce/schema/Quality_Event__c.Status__c';
import { getRecord } from 'lightning/uiRecordApi';


export default class SpartaNewRecordWrapper extends NavigationMixin(LightningElement) {
    
    @api recordId;
    parentId = ' ';
    record;
    error;
    canCreateChildren = true;

    fields = [NAME_FIELD, STATUS_FIELD];

    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
            if (currentPageReference.attributes.actionName == 'view' && this.parentId == ' ') 
            {
                this.parentId = currentPageReference.attributes.recordId ;
                console.log('SpartaNewRecordOverride - ParentId: ' + this.parentId);
            }
    }

    @wire(getRecord, { recordId: '$parentId', fields: ['testautonumdata__Quality_Event__c.testautonumdata__Status__c'] })
    wiredEvent({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            if (this.record.fields.testautonumdata__Status__c.value == 'No Children')
                this.canCreateChildren = false;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }

    connectedCallback() {
        console.log('SpartaNewRecordOverride - connectedCallback - parentId.size: ' + this.parentId.size);
    }

    handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        fields.testautonumdata__Quality_Event__c = this.parentId; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);
     }

     handleBackClick(){      // stop the form from submitting
        console.log('SpartaNewRecordOverride - handleBackClick - entered');

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.parentId,
                actionName: 'view'
            }
        });
     }

    handleSuccess(event) {
        console.log('SpartaNewRecordOverride - handleSuccess - entered');
        const evt = new ShowToastEvent({
            title: "Quality Event created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                actionName: 'view'
            }
        });
    }

    handleError(){
        console.log('SpartaNewRecordOverride - HandleError - entered');
    }

    handleCancel(event){
        console.log('SpartaNewRecordOverride - HandleCancel - entered');
        const filters = 'test'
        const filterChangeEvent = new CustomEvent('filterchange', {
            detail: { filters },
        });
        // Fire the custom event
        this.dispatchEvent(filterChangeEvent);
    }
}