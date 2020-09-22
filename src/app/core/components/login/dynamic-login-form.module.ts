import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// MATERIAL DESIGN + FLEX-LAYOUT
import { AngularMaterialModule } from '../../../shared/modules/angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../../shared/modules/angular/angular-flex-layout.module';


// DYNAMIC FORM DIRECTIVE
import { DynamicFieldModule } from '../../../shared/modules/dynamic-forms/directives/dynamic-field.module';


// DYNAMIC FORM FIELD MODULES
import { FormInputTextModule } from 'src/app/shared/modules/dynamic-forms/form-elemets/form-input-text.module';
import { FormInputPasswordModule } from '../../../shared/modules/dynamic-forms/form-elemets/form-input-password.module';
import { FormButtonSubmitModule } from '../../../shared/modules/dynamic-forms/form-elemets/form-button-submit.module';


import { DynamicLoginFormComponent } from './dynamic-login-form/dynamic-login-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        AngularMaterialModule,
        AngularFlexLayoutModule,

        // dynamic form directive
        DynamicFieldModule,

        // dynamic form fields
        FormInputTextModule,
        FormInputPasswordModule,
        FormButtonSubmitModule,
    ],
    declarations: [
        DynamicLoginFormComponent

    ],
    exports: [
        DynamicLoginFormComponent
    ]
})
export class DynamicLoginFormModule {}