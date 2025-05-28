// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';
// import { User } from '../models/user';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   public formError: string = '';
//   credentials = {
//     name: '',
//     email: '',
//     password: ''
//   };

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//   ) {}

//   ngOnInit(): void {}

//   public onRegisterSubmit(): void {
//     this.formError = '';
//     if (!this.credentials.name || !this.credentials.email || !this.credentials.password) {
//       this.formError = 'All fields are required';
//     } else {
//       const user = { name: this.credentials.name, email: this.credentials.email } as User;
//       this.authenticationService.register(user, this.credentials.password);

//       setTimeout(() => {
//         if (this.authenticationService.isLoggedIn()) {
//           this.router.navigate(['']);
//         }
//       }, 3000);
//     }
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports:[FormsModule,CommonModule],
  standalone: true,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = { name: '', email: '' };
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.user, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']); // Navigate to the login page on success
      },
      error: (err) => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Registration error:', err);
      }
    });
  }
}