import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule } from 'ngx-bootstrap/carousel';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    FooterComponent, NavbarComponent, HomeComponent, ResumeComponent, ContactComponent, PortfolioComponent, ProjectCardComponent, ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }