import { Component, inject, OnInit, signal } from '@angular/core';
import { Vehicle } from '../../core/models/vehicle.model';
import { VehicleService } from '../../core/services/vehicle.service';
import { VehicleCardComponent } from "./components/vehicle-card/vehicle-card.component";
import { VehiclePaginationComponent } from "./components/vehicle-pagination/vehicle-pagination.component";

@Component({
  selector: 'app-vehicles',
  imports: [VehicleCardComponent, VehiclePaginationComponent],
  providers: [VehicleService],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements OnInit {
  vehicles = signal<Vehicle[]>([]);
  displayedVehicles = signal<Vehicle[]>([]);
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);
  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(10);

  private vehicleService = inject(VehicleService);
  
  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.isLoading.set(true);
    this.hasError.set(false);
    
    this.vehicleService.getAll().subscribe({
      next: (data: Vehicle[]) => {
        this.vehicles.set(data);
        this.updateDisplayedVehicles();
        this.isLoading.set(false);
      },
      error: (error: unknown) => {
        console.error('Erro ao carregar veículos:', error);
        this.hasError.set(true);
        this.isLoading.set(false);
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.updateDisplayedVehicles();
  }

  private updateDisplayedVehicles(): void {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    this.displayedVehicles.set(this.vehicles().slice(start, end));
  }

  retryLoading(): void {
    this.loadVehicles();
  }
}