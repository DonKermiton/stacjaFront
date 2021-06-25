import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AddVehicleEnum } from './add-vehicle.enum';
import {AddCarService} from '../../services/add-car.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  public addForm: FormGroup;
  public addVehicleEnum: typeof AddVehicleEnum = AddVehicleEnum;

  constructor(private fb: FormBuilder,
              private addCarService: AddCarService) {
    this.addForm = fb.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onAdd(): void {
      // TODO: add me
    this.addCarService.AddCar(this.addForm.getRawValue()).subscribe(console.log);
  }

  private initForm(): void {
    this.addForm = this.fb.group({
      [this.addVehicleEnum.VIN]: [null, [Validators.required]],
      [this.addVehicleEnum.COMPANY]: [null, [Validators.required]],
      [this.addVehicleEnum.ENERGY_SOURCE]: [null],
      [this.addVehicleEnum.MODEL]: [null, [Validators.required]],
      [this.addVehicleEnum.TYPE]: [null, [Validators.required]],
      [this.addVehicleEnum.REVIEW_DATE]: [null, [Validators.required]],
      [this.addVehicleEnum.PRODUCTION_YEAR]: [null, [Validators.required]],
      [this.addVehicleEnum.CAPACITY]: [null, [Validators.required]],
      [this.addVehicleEnum.COMPANY]: [null, [Validators.required]],
      [this.addVehicleEnum.PLATE]: [null, [Validators.required]]
    });
  }
}
