import { Routes } from '@angular/router';
import { IndexReservationsComponent } from './Reservations/pages/index-reservations/index-reservations.component';
import { ReservationScreenComponent } from './Reservations/pages/reservation-screen/reservation-screen.component';
import { CreateReservationsComponent } from './Reservations/pages/create-reservations/create-reservations.component';

export const routes: Routes = [
   { path: 'reservations', component: IndexReservationsComponent },
   { path: 'reservations/create', component: CreateReservationsComponent },
   { path: 'reservations/:id', component: ReservationScreenComponent },
   { path: '*', component: IndexReservationsComponent }
];
