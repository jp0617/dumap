import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  constructor() {
    this.intro();
  }
  
  ngOnInit(): void {
  }
  
  
  
  aprovechables=()=>{
    Swal.fire({
      title: '¿DESEA SABER QUÉ SE RECICLA EN ESTA SECCIÓN?',
      width: 600,      
      confirmButtonText:'¡Sí, vamos a reciclar!',
      showCancelButton:true,
      cancelButtonText:'No, retroceder',
      cancelButtonColor:'#d33',
      confirmButtonColor:'green',
      padding: '3em',
      background: 'url("../../../assets/img/azulpalido.png")',
      backdrop: `
      rgba(0,0,123,0.4)
      url("../../../assets/gif/5 (2).gif")
      left top
      no-repeat   `
      
    }).then((result) =>{
      if(result.value){
        Swal.fire({
          title: 'APROVECHABLES',
          text:'Residuos aprovechables como plástico, botellas, latas, vidrio, metales, papel y cartón.',
          imageUrl: 'https://i.ibb.co/BPxBhth/aprovechables.png',
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: 'Custom image',
          confirmButtonText:'¡He terminado!',
          showCancelButton:true,
          cancelButtonText:'No quiero continuar',
          cancelButtonColor:'#d33',
          confirmButtonColor:'green',
          backdrop: `
          rgba(0,0,123,0.4)
          url("../../../assets/gif/3.gif")
          right top
          no-repeat   `
        }).then((result2) => {
          if(result2.value){
            Swal.fire({
              title: 'GRACIAS POR TOMARTE TU TIEMPO Y CONTRIBUIR A ESTA CAUSA.',
              icon: 'success',
              timer:5000,
              timerProgressBar:true,
              backdrop: `
              rgba(0,0,123,0.4)
              url("../../../assets/gif/4.gif")
              left top
              no-repeat   `
            })
          }
        })
      }
    })
  }
  
  noAprovechables=()=>{
    Swal.fire({
      title: '¿DESEA SABER QUÉ SE RECICLA EN ESTA SECCIÓN?',
      width: 600,
      confirmButtonText:'¡Sí, vamos a reciclar!',
      showCancelButton:true,
      cancelButtonText:'No, retroceder',
      cancelButtonColor:'#d33',
      confirmButtonColor:'green',
      padding: '3em',
      background: 'url("../../../assets/img/confirm.png")',
      backdrop: `
      rgba(0,0,123,0.4)
      url("../../../assets/gif/planet2.gif")
      left 
      no-repeat   `
    }).then((result) =>{
      if(result.value){
        Swal.fire({
          title: 'NO APROVECHABLES',
          text:'Residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros.',
          imageUrl: 'https://i.ibb.co/d6S1VZs/no-Aprovechables.png',
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: 'Custom image',
          confirmButtonText:'¡He terminado!',
          showCancelButton:true,
          cancelButtonText:'No quiero continuar',
          cancelButtonColor:'#d33',
          confirmButtonColor:'green',
          backdrop: `
          rgba(0,0,123,0.4)
          url("../../../assets/gif/1.gif")
          right top
          no-repeat   `
        }).then((result2) => {
          if(result2.value){
            Swal.fire({
              title: 'GRACIAS POR TOMARTE TU TIEMPO Y CONTRIBUIR A ESTA CAUSA.',
              icon: 'success',
              timer:5000,
              timerProgressBar:true,
              backdrop: `
              rgba(0,0,123,0.4)
              url("../../../assets/gif/2.gif")
              left top
              no-repeat   `
            })
          }
        })
        
      }
    })
  }
  organic=()=>{
    Swal.fire({
      title: '¿DESEA SABER QUÉ SE RECICLA EN ESTA SECCIÓN?',
      width: 600,
      confirmButtonText:'¡Sí, vamos a reciclar!',
      showCancelButton:true,
      cancelButtonText:'No, retroceder',
      cancelButtonColor:'#d33',
      confirmButtonColor:'green',
      padding: '3em',
      background: 'url("../../../assets/img/cafe-palido.png")',
      backdrop: `
      rgba(0,0,123,0.4)
      url("../../../assets/gif/leaf.gif")
      left bottom
      no-repeat   `
    }).then((result) =>{
      if(result.value){
        Swal.fire({
          title: 'ORGÁNICOS',
          text:'Residuos orgánicos aprovechables como los restos de comida, desechos agrícolas etc.',
          imageUrl: 'https://i.ibb.co/R62SQb7/organicos.png',
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: 'Custom image',
          confirmButtonText:'¡He terminado!',
          showCancelButton:true,
          cancelButtonText:'No quiero continuar',
          cancelButtonColor:'#d33',
          confirmButtonColor:'green',
          backdrop: `
          rgba(0,0,123,0.4)
          url("../../../assets/gif/organic.gif")
          right top
          no-repeat   `
        }).then((result2) => {
          if(result2.value){
            Swal.fire({
              title: 'GRACIAS POR TOMARTE TU TIEMPO Y CONTRIBUIR A ESTA CAUSA.',
              icon: 'success',
              timer:5000,
              timerProgressBar:true,
              backdrop: `
              rgba(0,0,123,0.4)
              url("../../../assets/gif/confirmgif.gif")
              left top
              no-repeat   `
            })
          }
        })
        
      }
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
  intro=()=>{
    Swal.fire({
      title: '',
      imageUrl:'url("")',
      imageHeight: 250,
      padding: '3em',
      timer:4000,
      showConfirmButton:false,
      timerProgressBar:true,
      background:'url("")',
      backdrop: `
      url("../../../assets/gif/intro.gif")
      center
      no-repeat
      `
    })
  }
}
