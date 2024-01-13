import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  id: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      const reservation = this.reservationService.getReservation(this.id);
      reservation && this.reservationForm.patchValue(reservation);
    }
  }

  onSubmit() {
    if (!this.reservationForm.valid) {
      return;
    }

    const reservation: Reservation = this.reservationForm.value;

    if (this.id) {
      this.reservationService.updateReservation(this.id, reservation);
    } else {
      this.reservationService.addReservation(reservation);
    }
    this.router.navigate(['/list']);
  }
}
