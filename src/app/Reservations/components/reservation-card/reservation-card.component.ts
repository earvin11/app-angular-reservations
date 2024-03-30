import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reservation } from '../../interfaces/reservation.interface';


@Component({
  selector: 'reservation-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css'
})
export class ReservationCardComponent {

  @Input() public reservation?: Reservation;

}
