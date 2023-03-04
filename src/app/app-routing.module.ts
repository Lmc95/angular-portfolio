import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/exp-edu/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/exp-edu/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/exp-edu/new-educacion.component';
import { NewExperienciaComponent } from './componentes/exp-edu/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditPerfilComponent } from './componentes/portada/edit-perfil.component';
import { NewProjectsComponent } from './componentes/proyectos/new-projects.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'nueva-habilidad', component: NewSkillsComponent },
  { path: 'editskill/:id', component: EditSkillsComponent},
  { path: 'editperfil/:id', component: EditPerfilComponent},
  { path: 'nuevo-proyecto', component: NewProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
