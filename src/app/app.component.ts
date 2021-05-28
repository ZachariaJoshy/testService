import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form:FormGroup;

  ngOnInit(){

    this.form = new FormGroup({
      'name':new FormControl(null, Validators.required),
      'email':new FormControl(null,  Validators.email),
      'status':new FormControl(null, Validators.required)




    })
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
