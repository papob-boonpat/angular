import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  appointment: Appointment = {
    date: new Date('2023-07-30'),
    id: 1,
    title: 'Take dog for walk',
  };
}
