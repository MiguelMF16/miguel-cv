import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextosService {
  
  // language true = español, false = inglés
  language: boolean = true;
  finalistatexto = 'Finalista del campeonato de ciberseguridad en equipos del I.E.S Alberti (Siendo el único que se presentó en solitario). [2017]';
  crecimientotexto = 'Encontré mi primer trabajo a los meses de salir de estudiar y reuní el dinero para sacarme el carnet de conducir y pagarme un grado superior de Desarrollo de Aplicaciones Multiplataforma en un centro privado. [2017]';
  estudiostexto = 'Matrícula de Honor en el Grado Superior teniendo de nota 10 en todas las asignaturas durante los 2 años, excepto en proyecto final que saqué un 9. [2018-2020]';
  constructor() {

  }

  setLanguage(){
    if ( this.language ){
      // textos de Achievements
      this.language = false;
      return 'Finalist in the tournamet of cibersegurity for teams in the Rafael Alberti';
    }else{
      this.language = true;
      return 'Finalista del campeonato de ciberseguridad en equipos del I.E.S Alberti (Siendo el único que se presentó en solitario). [2017]';
    }
  }

}
