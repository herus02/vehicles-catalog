import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VehiclesComponent } from "./features/vehicles/vehicles.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VehiclesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Catálogo de Veículos';
}
