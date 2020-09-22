import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../../angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../angular/angular-flex-layout.module';

import { FormControlMessagesModule } from './form-control-messages.module';


import { FormInputEmailComponent } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-input-email/form-input-email.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        AngularFlexLayoutModule,
        FormControlMessagesModule
    ],
    declarations: [
        FormInputEmailComponent
    ],
    exports:[
        FormInputEmailComponent
    ],
    entryComponents: [
        FormInputEmailComponent
    ]
})
export class FormInputEmailModule { }