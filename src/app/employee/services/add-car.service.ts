import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  constructor(private afs: AngularFirestore) {
  }

  public AddCar(car: any): Observable<any> {
    return from(this.afs.collection('cars').add(car));
  }
}
