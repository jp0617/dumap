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
      title: 'Bienvenido.',
      width: 600,
      padding: '3em',
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/unnamed.gif")
        left top
        no-repeat
      `
    })

  }

}
