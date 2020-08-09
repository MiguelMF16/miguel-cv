import { Component, OnInit } from '@angular/core';
import { NavbararService, Menuvar } from '../../../services/navbarar.service';

@Component({
  selector: 'app-navbarar',
  templateUrl: './navbarar.component.html',
  styleUrls: ['./navbarar.component.css']
})
export class NavbararComponent implements OnInit {

  menus: Menuvar[] = [];
  // esta variable controla true=español false=inglés
  idioma: boolean = true;

  constructor(private navbararServices: NavbararService) {
    this.menus = navbararServices.menus;
    this.idioma = navbararServices.language;
  }

  public setLanguage = () =>{
    this.navbararServices.setLanguage();
  }

  ngOnInit(): void {
  }

}
