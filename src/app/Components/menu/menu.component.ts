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
      confirmButtonText:'Terminado.',
      padding: '3em',
      background: 'url("../../../assets/img/background-abstract-texture-fabric.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/5 (2).gif")
        left top      
        no-repeat   `
      
    }).then((result) => {
      if(result.value){
        Swal.fire({
        title: 'GRACIAS POR TOMARTE TU TIEMPO Y CONTRIBUIR A ESTA CAUSA.',
        icon: 'success',
        timer:5000,
        backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/4.gif")
        left top      
        no-repeat   `
        })
      }
    })
    

  }
  carton=()=>{
    Swal.fire({
      title: 'Carton.',
      width: 600,
      padding: '3em',
      background: 'url("../../../assets/img/background-abstract-texture-fabric.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/planet.gif")
        left top
        no-repeat
      `
    })
    

  }
  organic=()=>{
    Swal.fire({
      title: 'Orgánicos.',
      width: 600,
      padding: '3em',
      background: 'url("../../../assets/img/background-abstract-texture-fabric.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/plant.gif")
        left top
        no-repeat
      `
    })
    

  }
  white=()=>{
    Swal.fire({
      title: 'Vidrios.',
      width: 600,
      padding: '3em',
      background: 'url("../../../assets/img/background-abstract-texture-fabric.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/recycle.gif")
        left top
        no-repeat
      `
    })
    

  }
  yellow=()=>{
    Swal.fire({
      title: 'Vidrios.',
      width: 600,
      padding: '3em',
      background: 'url("../../../assets/img/background-abstract-texture-fabric.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/recycle.gif")
        left top
        no-repeat
      `
    })
    

  }
  black=()=>{
    Swal.fire({
      title: 'Vidrios.',
      width: 600,
      padding: '3em',
      background: 'url("../../../assets/img/background-abstract-texture-fabric.jpg")',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../../../assets/gif/recycle.gif")
        left top
        no-repeat
      `
    })
    

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

}
