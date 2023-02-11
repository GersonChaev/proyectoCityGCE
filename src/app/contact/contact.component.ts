import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router){}
  submit(f: NgForm){
    if(f.value.email!='' && f.value.pwd!=''){
      alert("Su mensaje se ha enviado correctamente.");
      return
    }
    alert("Ingrese los datos requeridos.")
  }

}
