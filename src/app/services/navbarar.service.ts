import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbararService {

  public language = true;
  public menus: Menuvar[] = [
    {
      title: 'Logros',
      path: '/achievements',
      icon: './../../assets/img/achievements-icon.png'
    }, {
      title: 'Estudios',
      path: '/studies',
      icon: './../../assets/img/studies.png'
    }, {
      title: 'Trabajos',
      path: '/jobs',
      icon: './../../assets/img/job.png'
    }, {
      title: 'Lenguajes de Programación',
      path: '/programming-language',
      icon: './../../assets/img/language.png'
    }, {
      title: 'Proyectos',
      path: '/projects',
      icon: './../../assets/img/project.png'
    },
  ];

  public engmenu: Menuvar[] = [
    {
      title: 'Achievements',
      path: '/achievements',
      icon: './../../assets/img/achievements-icon.png'
    }, {
      title: 'Studies',
      path: '/studies',
      icon: './../../assets/img/studies.png'
    }, {
      title: 'Jobs',
      path: '/jobs',
      icon: './../../assets/img/job.png'
    }, {
      title: 'Programming Language',
      path: '/programming-language',
      icon: './../../assets/img/language.png'
    }, {
      title: 'Projects',
      path: '/projects',
      icon: './../../assets/img/project.png'
    },
  ];


  constructor() { }

  setLanguage = () => {
    if (this.language){
      return false;
    }else{
      return true;
    }
  }
}


export interface Menuvar{
  title: string;
  path: string;
  icon: string;
}
