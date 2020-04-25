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



  glass=()=>{
    Swal.fire({
      title: 'Vidrios.',
      width: 600,
      padding: '3em',
      background: 'url("../../../assets/img/green.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/recycle.gif")
        left top
        no-repeat
      `
    })

  }

}
