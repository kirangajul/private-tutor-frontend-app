import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchForTutorComponent } from './search-for-tutor/search-for-tutor.component';
import { HomeComponent } from './home/home.component';
import { TutorModuleModule } from './tutor-module/tutor-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TutorService } from './tutor.service';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
  
    SearchForTutorComponent,
       HomeComponent,
       NavbarComponent,
       FooterComponent,
       SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [TutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
