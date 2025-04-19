import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../core/models/vehicle.model';

@Component({
  selector: 'app-vehicle-card',
  imports: [CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent {
  @Input() vehicle!: Vehicle;

}