import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userEmail = "";
  constructor(
    private afa: AngularFireAuth
  ) { }

  async emailLogin(email:string, password:string) {
    console.log(email)
    var login = this.afa.signInWithEmailAndPassword(email, password)
      .then(data => {
        return data;
      })
      .catch(err => {
        if(err.code == "auth/email-already-in-use")
        {
          return this.afa.createUserWithEmailAndPassword(email,password);
        }
        return err;
      });
    return login;
  }

  async crear(email:string, password:string){
    return await this.afa.createUserWithEmailAndPassword(email,password);
  }
  async SignOut() {
    return await this.afa.signOut();
  }

  consultarStatusSesion() {
    return this.afa.authState.pipe(first()).toPromise();
  }
}
