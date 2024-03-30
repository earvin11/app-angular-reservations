import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../interfaces/reservation.interface';
import { StatusReserveTypes } from '../../interfaces/status-reserve.interface';

@Component({
  selector: 'app-reservation-screen',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ReservationsService],
  templateUrl: './reservation-screen.component.html',
  styleUrl: './reservation-screen.component.css'
})
export class ReservationScreenComponent implements OnInit {
  public reservation?: Reservation

  constructor(
    private reservationsServices: ReservationsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // Cuando se monte el componente,
  // leer el id de la ruta usando el activatedRoute, te suscribes y usas el pipe
  // switchMap para retornar el valor de otro observable usando el id que recibe como param
  // sino obtenemos reservation retorna a la lista, sino retorna la reservation

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.reservationsServices.reservationById(id))
      )
      .subscribe(reservation => {
        if(!reservation) return this.router.navigate(['/reservations']);

        this.reservation = reservation;
        return;
      })
  }

  changeStatusInReservation(id: number, status: string) {
    this.reservationsServices.changeStatusInReservation(id, status)
      .subscribe()
      this.router.navigate(['/reservations'])
  }

  goBack() {
    this.router.navigate(['/reservations'])
  }
}
