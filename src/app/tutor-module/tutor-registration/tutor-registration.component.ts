import { Component } from '@angular/core';
import { TutorService } from 'src/app/tutor.service';
import { Tutor } from '../model/tutor';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent {

constructor(public ts : TutorService){

}

  tutor1 : Tutor = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    location: '',
    username: '',
    password: '',
    experience: 0
  }

  registerTutor(tutor : Tutor){

    console.log("inside the register component");
    this.ts.registerTutor(tutor).subscribe((response) => {
      console.log(response);
      window.location.reload();
      // do something with the response
    }, (error) => {
      console.log(error);
      // handle the error
    });
  }
}
