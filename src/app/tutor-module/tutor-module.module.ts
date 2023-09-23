import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorModuleRoutingModule } from './tutor-module-routing.module';
import { TutorListComponent } from '../tutor-list/tutor-list.component';
import { FormsModule } from '@angular/forms';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { TutorService } from '../tutor.service';


@NgModule({
  declarations: [
    TutorListComponent,
    TutorRegistrationComponent

  ],
  imports: [
    CommonModule,
    TutorModuleRoutingModule,
    FormsModule
    ],
    exports: [
      TutorRegistrationComponent
    ],
    providers:[TutorService]
})
export class TutorModuleModule { }
