import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { XcapeFactoryComponent } from './xcape-factory/xcape-factory.component';
import { HunchComponent } from './hunch/hunch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent,
    ProjectsComponent,
    XcapeFactoryComponent,
    HunchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
