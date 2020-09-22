import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../../angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../angular/angular-flex-layout.module';

import { FormInputTextComponent } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-input-text/form-input-text.component';


import { FormControlMessagesModule } from './form-control-messages.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        AngularFlexLayoutModule,
        FormControlMessagesModule
    ],
    declarations: [
        FormInputTextComponent
    ],
    exports:[
        FormInputTextComponent
    ],
    entryComponents: [
        FormInputTextComponent
    ]
})
export class FormInputTextModule { }