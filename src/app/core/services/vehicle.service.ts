import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'https://64a46b29c3b509573b5780f1.mockapi.io/pub/v1';
  private resource = 'veiculos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/${this.resource}`).pipe(
      retry(2),
      catchError(error => {
        console.error('Erro ao buscar veículos:', error);
        return of([]);
      })
    );
  }
}