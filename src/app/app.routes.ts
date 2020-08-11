import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './componentes/pages/achievements/achievements.component';
import { StudiesComponent } from './componentes/pages/studies/studies.component';
import { JobsComponent } from './componentes/pages/jobs/jobs.component';
import { ProgrammingLanguageComponent } from './componentes/pages/programming-language/programming-language.component';
import { ProjectsComponent } from './componentes/pages/projects/projects.component';



const ROUTES: Routes = [
    { path: 'achievements', component: AchievementsComponent },
    { path: 'studies', component: StudiesComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'programming-language', component: ProgrammingLanguageComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: '/achievements' },

];
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
