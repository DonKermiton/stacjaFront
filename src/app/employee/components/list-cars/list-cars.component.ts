import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Observable, of} from 'rxjs';
import {CarModel} from '../../../share/models/car.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  carList: Observable<CarModel[]>;
  // @ts-ignore
  selectedCar: CarModel;

  constructor(private carService: CarService) {
    this.carList = of();
  }

  ngOnInit(): void {
    this.carList = this.carService.getAllCars();
  }


  selectCar(car: CarModel): void {
    this.selectedCar = car;
  }

  delete(): void {
    console.log(window.confirm('jesteś pewny'));
  }
}
