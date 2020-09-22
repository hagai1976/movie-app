import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// MATERIAL DESIGN + FLEX-LAYOUT
import { AngularMaterialModule } from '../../angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../angular/angular-flex-layout.module';



// DYNAMIC FORM DIRECTIVE
import { DynamicFieldModule } from '../directives/dynamic-field.module';


// DYNAMIC FORM FIELD MODULES
import { FormInputTextModule } from '../form-elemets/form-input-text.module';
import { FormButtonSubmitModule } from '../form-elemets/form-button-submit.module';
import { FormInputNumberModule } from '../form-elemets/form-input-number.module';
import { FormInputSelectModule } from '../form-elemets/form-input-select.module';

// NOT ACTIVE
import { FormInputDateModule } from '../form-elemets/form-input-date.module';
import { FormInputEmailModule } from '../form-elemets/form-input-email.module';
import { FormInputPasswordModule } from '../form-elemets/form-input-password.module';
import { FormInputTextareaModule } from '../form-elemets/form-input-textarea.module';
import { FormSlideToggleModule } from '../form-elemets/form-slide-toggle.module';
import { FormControlMessagesModule } from '../form-elemets/form-control-messages.module';


import { DynamicMovieFormComponent } from 'src/app/features/movies/forms/dynamic-movie-form/dynamic-movie-form.component';



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
        FormButtonSubmitModule,
        FormInputTextModule,
        FormInputNumberModule,
        FormInputEmailModule,
        FormInputSelectModule,
        // FormInputDateModule,
        // FormInputPasswordModule,
        // FormInputTextareaModule,
        FormSlideToggleModule,
        // FormControlMessagesModule
    ],
    declarations: [
        DynamicMovieFormComponent
    ],
    exports: [
        DynamicMovieFormComponent
    ]
})
export class DynamicMovieFormModule {}