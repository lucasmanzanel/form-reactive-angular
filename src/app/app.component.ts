import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formIncluit!: FormGroup;

  constructor(private fb:FormBuilder){

    this.formIncluit = this.fb.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.max(180)]],
      empresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })

  }


  get email() { return this.formIncluit.get('email')}
  get edad () {return this.formIncluit.get('edad')}
  get empresa () {return this.formIncluit.get('empresa')}
  get nombre () {return this.formIncluit.get('nombre')}



  enviar(){
    console.log(this.formIncluit.value)
  }
  
}
