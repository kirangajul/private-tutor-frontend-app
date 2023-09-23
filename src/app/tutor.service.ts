import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Tutor } from './tutor-module/model/tutor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutor : Tutor = {
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
  private apiUrl : string =  'http://localhost:8080/tutors';
  constructor(private http: HttpClient) { }

  registerTutor(tutor : Tutor) : Observable<Tutor>{

    console.log("inside the tutor service");
    return this.http.post<Tutor>(this.apiUrl, tutor);
  }
  
}
