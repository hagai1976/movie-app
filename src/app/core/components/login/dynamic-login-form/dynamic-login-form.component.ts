import { User } from './../../../types/user.interface';
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormControlMessagesValidationHelper } from 'src/app/shared/components/dynamic-forms/dynamic-form-components/form-control-messages/form-control-messages-validation.helper';

@Component({
    selector: 'app-dynamic-login-form',
    templateUrl: './dynamic-login-form.component.html',
    styleUrls: ['./dynamic-login-form.component.css']
})
export class DynamicLoginFormComponent implements OnInit {

    private readonly onDestroy = new Subject<void>();

    loginForm: FormGroup;

    @Input() loading: boolean = false;

    @Output() submitted = new EventEmitter<User>();

    formConfig = {
        username: {
                type: 'inputText',
                name: 'username',
                value: 'admin',
                placeholder: 'שם משתמש',
                maxLength: 70,
                    validators: [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(20),
                        FormControlMessagesValidationHelper.preventSpecialCharacters
                    ]
            },
        password: {
            type: 'inputPassword',
            name: 'password',
            value: 'admin',
            placeholder: 'סיסמה',
            hint: false,
            maxLength: 20,
            validators: [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(20),
                FormControlMessagesValidationHelper.preventSpecialCharacters
            ]
        }
    };

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit() {

        this.loginForm = this.createGroup(this.formConfig);

    }


    createGroup(config) {

        const group = this.fb.group({});
        for (let prop in config) {
			const control = this.fb.control(config[prop].value, config[prop].validators || []);
			group.addControl(config[prop].name, control);
		}

        return group;
    }


    ngOnDestroy(): void {
        this.onDestroy.next();
        this.onDestroy.complete();
    }

}