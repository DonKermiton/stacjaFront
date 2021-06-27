import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CarModel} from '../../../share/models/car.model';
import {CarService} from '../../services/car.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  // @ts-ignore
  carInfo: CarModel;
  constructor(private route: ActivatedRoute,
              private carService: CarService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap((params: Params) =>
          this.carService.getSelectedCarByVin(params.id)
        )
      )
      .subscribe((car: CarModel[]) => {
        this.carInfo = car[0];
      });
  }

  delete(): void {

  }
}
