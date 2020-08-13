import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.css']
})
export class ProgrammingLanguageComponent implements OnInit {

  frameworkslist: string[] = ['Angular', 'Ionic', 'Wordpress'];
  languagelist: string[] = ['Java', 'TypeScript', 'HTML', 'CSS', 'PHP', 'SQL'];
  entornoslist: string[] = ['Eclipse', 'Android Studio', 'Netbeans'];

  lenguajes: Lenguaje[] = [
    {
      icon: './../../../../assets/img/angular.png',
      nombre: 'Angular',
      nivel: '**',
      tiempo: 'Tiempo que llevo usándolo: 3 semanas',
      historia: ' Empecé a estudiar Ionic con dos compañeros a finales de Julio, vimos que en el curso enseñaba bases de Angular, pero hemos decidido estudiar más a fondo y llevamos desde principios de Agosto estudiando 7 horas diarias de Lunes a Domingo, esta Web está hecha en Angular. '
    },
    {
      icon: './../../../../assets/img/java.png',
      nombre: 'Java',
      nivel: '****',
      tiempo: 'Tiempo que llevo usándolo: 2 años',
      historia: 'Cuando empecé a estudiar el grado Superior, este fue el lenguaje que mi profesora, a la que tengo alta estima, empezó a enseñarnos, me encanta y me divierte, tambien se usarlo en Android Studio y tengo ya pagado y pendiente de ver el curso de Java Spring'
    },
    {
      icon: './../../../../assets/img/mysql.png',
      nombre: '',
      nivel: '',
      tiempo: 'Tiempo que llevo usándolo: 1 años',
      historia: 'Este lenguaje está en mi top de útiles, aunque de momento solo he trabajado con modelos entidad-relación, me encanta meterle a mis aplicaciones bases de datos, me encantan las estadísticas.'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Lenguaje{
  icon: string;
  nombre: string;
  nivel: string;
  tiempo: string;
  historia: string;
}