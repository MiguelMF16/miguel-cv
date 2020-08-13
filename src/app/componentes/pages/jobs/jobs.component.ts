import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  ayuntamientotexto: string;
  orangetexto: string;
  asirtectexto: string;
  lenguajesasirtec: string[] = ['PHP', 'HTML5', 'CSS', 'TypeScript', 'Bootstrap'];
  constructor() {
    this.ayuntamientotexto = 'Copias de seguridad de los datos, reparación y montaje de equipos';
    this.orangetexto = 'Soporte técnico de asistencia telefónica: Diagnostico de red fibra/adsl, Teléfono y Televisión (No explico mucho más por una clausula de confidencialidad).';
    this.asirtectexto = 'Desarrollo Web de E-commerce (No explico mucho más por una clausula de confidencialidad).';
   }

  ngOnInit(): void {
  }

}
