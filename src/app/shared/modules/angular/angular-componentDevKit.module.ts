import { NgModule } from '@angular/core';

import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
    exports: [
        DragDropModule,
        PortalModule,
        ScrollingModule,
        OverlayModule
    ]
})
export class AngularComponentDevKitModule {}