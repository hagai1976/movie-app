import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// MODULE
import { AngularFlexLayoutModule } from 'src/app/shared/modules/angular/angular-flex-layout.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular/angular-material.module';
import { FormControlMessagesModule } from 'src/app/shared/modules/dynamic-forms/form-elemets/form-control-messages.module';


// COMPONENT
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DynamicLoginFormModule } from './components/login/dynamic-login-form.module';



@NgModule({
    declarations: [
        LoginComponent,
        WelcomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AngularFlexLayoutModule,
        AngularMaterialModule,
        DynamicLoginFormModule,
        FormControlMessagesModule
    ]
})

export class AuthenticationModule {}