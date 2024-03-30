import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation, ReservationResponse } from '../interfaces/reservation.interface';
import { CreateReservationDto } from '../interfaces/create-reservation.dto';
import { StatusReserveTypes } from '../interfaces/status-reserve.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private baseUrl = 'http://localhost:4000';

  constructor(
    private httpClient: HttpClient
  ) { }

  createReservation(createReservationDto: CreateReservationDto): Observable<Reservation> {
    return this.httpClient.post<Reservation>(`${ this.baseUrl }/reservations`, {
      ...createReservationDto
    });
  }

  allReservations(status?: string): Observable<ReservationResponse> {
    return this.httpClient.get<ReservationResponse>(`${ this.baseUrl}/reservations?state=${ status }`);
  }

  reservationById(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${ this.baseUrl }/reservations/${ id }`)
  }

  changeStatusInReservation(id: number, newStatus: string): Observable<Reservation> {
    return this.httpClient.patch<Reservation>(`${ this.baseUrl }/reservations/${ id }/change-status`, {
      status: newStatus
    })
  }
}
