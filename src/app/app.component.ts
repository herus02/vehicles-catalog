import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiclesComponent } from "./features/vehicles/vehicles.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiclesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Catálogo de Veículos';
}
