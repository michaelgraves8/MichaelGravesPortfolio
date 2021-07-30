import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HunchComponent } from './hunch/hunch.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { XcapeFactoryComponent } from './xcape-factory/xcape-factory.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'xcapeFactory',
    component: XcapeFactoryComponent,
  },
  {
    path: 'hunch',
    component: HunchComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
