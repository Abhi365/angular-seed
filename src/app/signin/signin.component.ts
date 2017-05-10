import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from '../username-validators';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  constructor(fb: FormBuilder) {
   this.form= fb.group({
      username: ["",Validators.compose([Validators.required,UsernameValidators.cannotContainSpace]),UsernameValidators.shouldBeUnique],
      password: ["",Validators.required]
    })
   }

  ngOnInit() {
  }

  // form=new FormGroup({
  //   username: new FormControl("",Validators.required),
  //   password: new FormControl("",Validators.required)
  // });

  signIn() {
    console.log(this.form.value);
    
  }

}
