
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  public onSubmit() {
    this.submitted = true;
    console.log('Form Submitted:', this.addForm.value); // Log form data
    if (this.addForm.valid) {
      console.log('Form is valid');
      console.log(this.addForm); // Log before API call
      this.tripService.addTrip(this.addForm.value)
        .subscribe({
          next: (data: any) => {
            console.log('Trip Added:', data); // Log API response
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error:', error); // Log API error
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }
}