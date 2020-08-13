import { Component, OnInit } from '@angular/core';
import { TextosService } from '../../../services/textos.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
// true = español
  language: boolean = true;

  finalistatexto: string;
  crecimientotexto: string;
  estudiostexto: string;
  explicacion: string;
 constructor(private textosServices: TextosService) {
    this.finalistatexto = textosServices.finalistatexto;
    this.crecimientotexto = textosServices.crecimientotexto;
    this.estudiostexto = textosServices.estudiostexto;
    this.explicacion = 'Aun tengo mucho recorrido por delante y estoy seguro de que pronto empezaré a llenar este apartado con temas mas orientados al desarrollo';

 }

 setLanguage(){
  if ( this.language ){
    this.language = false;
    // textos de Achievements
    console.log(this.finalistatexto);
    this.finalistatexto = this.textosServices.setLanguage();
  }else{
    this.language = true;
    console.log('ingles');
    this.finalistatexto = this.textosServices.finalistatexto;
  }
}
  ngOnInit(): void {
  }

}
