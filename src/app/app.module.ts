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
import { ProjectsComponent } from './componentes/pages/projects/projects.component';
import { APP_ROUTING } from './app.routes';

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
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
