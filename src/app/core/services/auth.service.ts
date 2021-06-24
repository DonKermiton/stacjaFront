import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, from, Observable, ObservedValueOf} from 'rxjs';
import firebase from 'firebase';
import {mergeMap, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // @ts-ignore
  public loggedUser: BehaviorSubject<UserDtoModel> = new BehaviorSubject<UserDtoModel>(null);


  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
  }

  public isUserLogged(): Observable<any> {
    return from(this.afAuth.authState);
  }

  public logout(): Observable<any> {
    return from(this.afAuth.signOut());
  }

  public logViaEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        tap((e) => {
          console.log(e.user);
        })
      );
  }

  public getLoggedUser(): void {
    this.afAuth.user.subscribe((e) => {
      console.log(e?.email);
    });
  }

  public getLoggedUserData(uid: string): void {
    this.afs.doc(`users/${uid}`).valueChanges().pipe(
      tap((e) => {
        this.loggedUser.next(e as UserDtoModel);
      })
    );
  }

  public createUserViaEmail(user: UserDtoModel | any): Observable<void> {
    return from(this.afAuth.createUserWithEmailAndPassword(user.email, user.password))
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        mergeMap((credentials) => {
          console.log(user);
          return this.updateUserData(credentials, user);
        })
      );
  }

  private updateUserData(user: ObservedValueOf<Promise<firebase.auth.UserCredential>>,
                         user1: any): Observable<ObservedValueOf<Promise<void>>> {
    const obj: UserDtoModel = {
      first_name: user1.first_name,
      phone_number: user1.phone_number,
      second_name: user1.second_name,
      email: user.user?.email,
      role: 'user',
    };


    return from(this.afs.doc(`users/${user.user?.uid}`).set(obj));
  }
}

export interface UserDtoModel {
  first_name: string | null | undefined;
  second_name: string | null | undefined;
  email: string | null | undefined;
  phone_number: string | null | undefined;
  role: 'user' | 'employee' | 'admin';
}
