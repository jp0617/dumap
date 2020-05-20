import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  info=()=>{
    Swal.fire({
      title: '',
      imageUrl:'url("")',
      imageHeight: 250,
      padding: '3em',
      background:'url("")',
      backdrop: `
      url("../../../assets/gif/proceso.gif")
      center
      no-repeat
      `
      
    })
  }

  login=()=>{
    Swal.fire({
      title: 'Iniciar sesión',
      html:
    '<input id="strId" class="swal2-input" placeholder="Identificación">' +
    '<input type="password" id="strPass" class="swal2-input" placeholder="Contraseña">',
      showCancelButton: true,
      confirmButtonText: 'Iniciar Sesión',
      cancelButtonColor:'#d33',
      confirmButtonColor:'green',
      cancelButtonText:'Cancelar',
      showLoaderOnConfirm: true,
      padding: '3em',
      backdrop: `
      rgba(119,221,119,0.3)
      url("../../../assets/img/logoArbol.png")
      left bottom
      no-repeat`
    })
  }

  register=()=>{
    Swal.fire({
      title: 'Registrarse',
      html:
      '<input id="strNombre" class="swal2-input" placeholder="Nombre">'+
      '<input id="strApellido" class="swal2-input" placeholder="Apellido">'+
      '<input id="strEmail" class="swal2-input" placeholder="Email">'+
      '<input id="strId" class="swal2-input" placeholder="Identificación">'+
      '<input id="strTelefono" class="swal2-input" placeholder="Teléfono">'+
      '<input type="password" id="strPass" class="swal2-input" placeholder="Contraseña">'+
      '<input type="password" id="strRePass" class="swal2-input" placeholder="Repetir contraseña">',
      showCancelButton: true,
      confirmButtonText: 'Registrarse',
      cancelButtonColor:'#d33',
      confirmButtonColor:'green',
      cancelButtonText:'Cancelar',
      showLoaderOnConfirm: true,
      padding: '3em',
      backdrop: `
      rgba(119,221,119,0.3)
      url("../../../assets/img/logoArbol.png")
      left bottom
      no-repeat`
    })
  }
}
