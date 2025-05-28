import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})
export class TriplistingComponent implements OnInit {
  trips!: Trip[]; // Corrected variable name from trips1 to trips
  message: string = '';
  constructor(
    private tripDataService: TripDataService,
    private router: Router) {
    console.log('trip-listing constructor');
  }
  public addTrip(): void {
    this.router.navigate(['/add-trip']).then(() => {
      // Refresh the trip list after navigating back
      this.getStuff();
    });
  }

  private getStuff(): void {
    this.tripDataService.getAllTrips() // Replace 'defaultCode' with the actual code you want to use
      .subscribe({
        next: (value: Trip[]) => {
          this.trips = value;
          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          }
          else {
            this.message = 'There were no trips retireved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}