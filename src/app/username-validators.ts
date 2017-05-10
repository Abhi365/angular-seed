import { FormControl } from '@angular/forms';

export class UsernameValidators {

    static shouldBeUnique(formControl: FormControl) {
        return new Promise((resolve,reject) => {
            setTimeout(function(){
if (formControl.value == "mosh")
resolve({shouldBeUnique:true});
else resolve(null);
            },1000)
        });
    }

    static cannotContainSpace(formControl: FormControl) {
        if(formControl.value.indexOf(' ')>=0)
        return { cannotContainSpace: true };

        return null;

    }
}
