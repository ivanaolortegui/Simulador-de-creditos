import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  forma: FormGroup;
  get name(){
    return this.forma.get('name')
  }
  get cel(){
    return this.forma.get('cel')
  }
  constructor(private _builder: FormBuilder) {
    this.forma = this._builder.group({
      name: ['',Validators.required],
      email:['', Validators.compose([Validators.email, Validators.required])],
      cel: ['', [Validators.required,Validators.minLength(9)]],
      protection: [true],   
      commercial: [true],
    })
  }

  ngOnInit() {
  }

send(values){
  console.log(values);
  
}
}
