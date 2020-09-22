import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlMessagesComponent } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-control-messages/form-control-messages.component';


@NgModule({
    declarations: [
        FormControlMessagesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FormControlMessagesComponent
    ]
})
export class FormControlMessagesModule {}