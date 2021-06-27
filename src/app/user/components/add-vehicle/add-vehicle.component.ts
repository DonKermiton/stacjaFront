import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddVehicleEnum} from '../../../employee/components/add-vehicle/add-vehicle.enum';
import {CarService} from '../../services/car.service';
import {CarModel} from '../../../share/models/car.model';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  addVehicleForm: FormGroup;
  carInfoEnum: typeof AddVehicleEnum = AddVehicleEnum;
  // @ts-ignore
  car: CarModel;


  constructor(private fb: FormBuilder,
              private carService: CarService) {
    this.addVehicleForm = fb.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  public findCar(): void {
    const lookCar: { vin: string; plate: string; review_date: string } = this.addVehicleForm.getRawValue();

    console.log(lookCar);

    this.carService.getSelectedCarByVinPlate(lookCar).subscribe((car) => {
      this.car = car[0];
    });
  }

  public addCar(): void {
    this.carService.addCarToUser(this.car)
      .subscribe();
  }

  private initForm(): void {
    this.addVehicleForm = this.fb.group({
      [this.carInfoEnum.VIN]: ['', [Validators.required]],
      [this.carInfoEnum.PLATE]: ['', [Validators.required]],
      [this.carInfoEnum.REVIEW_DATE]: ['', [Validators.required]]
    });
  }
}
