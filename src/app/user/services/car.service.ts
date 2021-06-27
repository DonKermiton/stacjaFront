import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {CarModel} from '../../share/models/car.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
  }

  public getSelectedCarByVin(vin: string): Observable<CarModel[]> {
    return this.afs.collection<CarModel>('cars', query => query.where('vin', '==', vin)).valueChanges();
  }

  public getSelectedCarByVinPlate(car: { vin: string; plate: string; review_date: string }): Observable<CarModel[]> {
    return this.afs.collection<CarModel>('cars', query =>
      query.where('vin', '==', car.vin)
        .where('plate', '==', car.plate)
        .where('review_date', '==', car.review_date)
    ).valueChanges();
  }

  public addCarToUser(car: CarModel): Observable<void> {
    let id: string | undefined;

    return this.afAuth.user
      .pipe(
        mergeMap((user) => {
          id = user?.uid;
          return this.afs.collection<CarModel>('cars', ref => ref.where('vin', '==', car.vin)).valueChanges({idField: 'doc'});
        }),
        mergeMap((cars: CarModel[]) => {
          cars[0].ownerId = id;

          return from(this.afs.doc(`cars/${cars[0].doc}`).set(cars[0]));
        })
      );
  }

  getAllCars(): Observable<CarModel[]> {
    return this.afAuth.user
      .pipe(
        mergeMap((user) => {
          return this.afs.collection<CarModel>('cars', ref => ref.where('ownerId', '==', user?.uid)).valueChanges();
        })
      );
  }
}
