import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.css']
})
export class FloatMenuComponent implements OnInit {
  options = 'miguel-floatpanel';
  ventanaabierta = true;
  instruccion = 'Cerrar';
  constructor() { }

  ngOnInit(): void {
    this.options = 'miguel-floatpanel';
  }

  setAbrirCerrar(){
    if (this.ventanaabierta){
      this.options = 'invisible-m';
      console.log('clase cambiada a invisible-m');
      this.instruccion = 'Abrir Bio';
      this.ventanaabierta = false;
      return false;
    }else{
      this.options = 'miguel-floatpanel';
      this.instruccion = 'Cerrar';
      console.log('clase cambiada a mce-floatpanel');
      this.ventanaabierta = true;
      return true;
    }
  }

}
