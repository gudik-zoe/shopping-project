import { AbstractControl } from '@angular/forms';

export class Custome{

    static confirmation(control: AbstractControl){
        let password = control.get('password').value;
        let confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword){
            control.get('confirmPassword').setErrors({ hello: true });
        }
        else {
            return null
        }

    }
    static number(control: AbstractControl){
        let streetNumber = control.get('streetNumber').value
        if(isNaN(streetNumber )){
            control.get('streetNumber').setErrors({hey:true})
        }
        else{
            return null
        }
    }
}