import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TriplistingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    { path: 'add-trip', component: AddTripComponent },
    { path: '', component: TriplistingComponent, pathMatch: 'full' },
    { path: 'edit-trip/:tripCode', component: EditTripComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
