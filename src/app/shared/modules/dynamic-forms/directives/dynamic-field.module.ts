import { NgModule } from '@angular/core';

import { DynamicFieldDirective } from '../../../components/dynamic-forms/dynamic-form-components/dynamic-field/dynamic-field.directive';

@NgModule({
    declarations: [
        DynamicFieldDirective
    ],
    exports:[
        DynamicFieldDirective
    ]
})
export class DynamicFieldModule { }