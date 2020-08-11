import { Component, OnInit } from '@angular/core';
import { StudiesService } from '../../../services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {


  mostrarocultar = 'Mostrar';
  mostrar = false;
  mostrarocultar2 = 'Mostrar';
  mostrar2 = false;
  mostrarocultar3 = 'Mostrar';
  mostrar3 = false;
  constructor() { }

  setMostrar(){
    if (this.mostrar){
      this.mostrar = false;
      this.mostrarocultar = 'Ocultar';
    }else{
      this.mostrar = true;
      this.mostrarocultar = 'Mostrar';
    }
  }

  setMostrar2(){
    if (this.mostrar2){
      this.mostrar2 = false;
      this.mostrarocultar2 = 'Mostrar';
    }else{
      this.mostrar2 = true;
      this.mostrarocultar2 = 'Ocultar';
    }
  }

  setMostrar3(){
    if (this.mostrar3){
      this.mostrar3 = false;
      this.mostrarocultar3 = 'Mostrar';
    }else{
      this.mostrar3 = true;
      this.mostrarocultar3 = 'Ocultar';
    }
  }
  ngOnInit(): void {
  }

}
