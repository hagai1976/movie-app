import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular/angular-material.module';
import { AngularFlexLayoutModule } from '../../angular/angular-flex-layout.module';
import { FormSlideToggleComponent } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-slide-toggle/form-slide-toggle.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        AngularFlexLayoutModule
    ],
    declarations: [
        FormSlideToggleComponent
    ],
    exports:[
        FormSlideToggleComponent
    ]
})
export class FormSlideToggleModule { }