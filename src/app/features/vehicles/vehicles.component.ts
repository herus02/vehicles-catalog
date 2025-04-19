import { Component, OnInit, signal } from '@angular/core';
import { Vehicle } from '../../core/models/vehicle.model';
import { VehicleService } from '../../core/services/vehicle.service';
import { VehicleCardComponent } from "./components/vehicle-card/vehicle-card.component";

@Component({
  selector: 'app-vehicles',
  imports: [VehicleCardComponent],
  providers: [VehicleService],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements OnInit {
  vehicles = signal<Vehicle[]>([]);
  displayedVehicles = signal<Vehicle[]>([]);
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);

  constructor(private vehicleService: VehicleService) {}
  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.isLoading.set(true);
    this.hasError.set(false);
    
    this.vehicleService.getAll().subscribe({
      next: (data: Vehicle[]) => {
        this.vehicles.set(data);
        this.isLoading.set(false);
        this.displayedVehicles.set(this.vehicles());
      },
      error: (error: unknown) => {
        console.error('Erro ao carregar veículos:', error);
        this.hasError.set(true);
        this.isLoading.set(false);
      }
    });
  }

  retryLoading(): void {
    this.loadVehicles();
  }
}
