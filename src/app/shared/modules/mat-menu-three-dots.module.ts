import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './angular/angular-material.module';
import { AngularFlexLayoutModule } from './angular/angular-flex-layout.module';

import { MatMenuThreeDotsComponent } from '../components/mat-menu-three-dots/mat-menu-three-dots.component';


@NgModule({
    declarations: [
        MatMenuThreeDotsComponent
    ],
    imports: [
        CommonModule,
        AngularFlexLayoutModule,
        AngularMaterialModule
    ],
    exports: [
        MatMenuThreeDotsComponent
    ]
})
export class MatMenuThreeDotsModule {}