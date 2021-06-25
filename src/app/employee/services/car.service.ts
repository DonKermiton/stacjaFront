import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {CarModel} from '../../share/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private afs: AngularFirestore) {
  }

  public AddCar(car: any): Observable<any> {
    return from(this.afs.collection('cars').add(car));
  }

  public getAllCars(): Observable<CarModel[]> {
    return this.afs.collection<CarModel>('cars').valueChanges({idField: true});
  }
}
