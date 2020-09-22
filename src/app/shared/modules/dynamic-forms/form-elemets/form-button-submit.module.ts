import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../angular/angular-flex-layout.module';


import { FormButtonSubmitComponent } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-button-submit/form-button-submit.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        AngularFlexLayoutModule
    ],
    declarations: [
        FormButtonSubmitComponent
    ],
    exports:[
        FormButtonSubmitComponent
    ]
})
export class FormButtonSubmitModule { }