import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorRegistrationComponent } from './tutor-module/tutor-registration/tutor-registration.component';
import { SearchForTutorComponent } from './search-for-tutor/search-for-tutor.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
 { path : "search-tutor", component : SearchForTutorComponent},
 { path : "tutor-registration", component : TutorRegistrationComponent},
 { path : "sign-in", component : SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
