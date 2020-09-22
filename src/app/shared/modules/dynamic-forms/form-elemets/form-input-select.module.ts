import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../../angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../angular/angular-flex-layout.module';
import { FormControlMessagesModule } from './form-control-messages.module';


import { FormInputSelectComponent } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-input-select/form-input-select.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        AngularFlexLayoutModule,
        FormControlMessagesModule
    ],
    declarations: [
        FormInputSelectComponent
    ],
    exports:[
        FormInputSelectComponent
    ],
    entryComponents: [
        FormInputSelectComponent
    ]
})
export class FormInputSelectModule { }