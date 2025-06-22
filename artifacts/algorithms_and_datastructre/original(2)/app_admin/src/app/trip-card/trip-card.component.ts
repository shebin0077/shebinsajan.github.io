import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Trip } from '../models/trip';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule,RouterModule], // Add RouterModule here
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})

export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;
  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
  }

  public isLoggedIn():boolean {
    return this.authenticationService.isLoggedIn();
  }
  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['/edit-trip', trip.code]);
  }
}