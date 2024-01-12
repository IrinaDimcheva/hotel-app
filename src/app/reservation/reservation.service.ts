import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter((res) => res.id !== id);
  }

  updateReservation(updatedReservation: Reservation): void {
    const index = this.reservations.findIndex(
      (res) => res.id === updatedReservation.id
    );
    this.reservations[index] = updatedReservation;
  }
}
