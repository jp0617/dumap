import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  prueba=()=>{
    Swal.fire({
    icon: "info",
    showCancelButton: false,
    text:"Bienvenido" 
    })

  }

}
