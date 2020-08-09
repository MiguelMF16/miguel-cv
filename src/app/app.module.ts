import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbararComponent } from './componentes/shared/navbarar/navbarar.component';
import { BodyComponent } from './componentes/shared/body/body.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { FloatMenuComponent } from './componentes/shared/float-menu/float-menu.component';
import { AchievementsComponent } from './componentes/pages/achievements/achievements.component';
import { ProgrammingLanguageComponent } from './componentes/pages/programming-language/programming-language.component';
import { StudiesComponent } from './componentes/pages/studies/studies.component';
import { JobsComponent } from './componentes/pages/jobs/jobs.component';
import { ProyectsComponent } from './componentes/pages/proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbararComponent,
    BodyComponent,
    FooterComponent,
    FloatMenuComponent,
    AchievementsComponent,
    ProgrammingLanguageComponent,
    StudiesComponent,
    JobsComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
