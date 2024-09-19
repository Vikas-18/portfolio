import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'skills',component:SkillsComponent},
  {path:'achievement',component:AchievementsComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
