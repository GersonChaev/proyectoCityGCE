import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  cambio(){
    alert("Redirigiendo a la página de búsquedas");
    this.router.navigate(['./search']);
  }

}

