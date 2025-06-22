// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';
// import { User } from '../models/user';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   public formError: string = '';
//   submitted = false;
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

//   public onLoginSubmit(): void {
//     this.formError = '';
//     if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
//       this.formError = 'All fields are required, please try again';
//       this.router.navigateByUrl('#');
//     } else {
//       this.doLogin();
//     }
//   }

//   private doLogin(): void {
//     const newUser = {
//       name: this.credentials.name,
//       email: this.credentials.email
//     } as User;

//     this.authenticationService.login(newUser, this.credentials.password);

//     if (this.authenticationService.isLoggedIn()) {
//       this.router.navigate(['']);
//     } else {
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[FormsModule,CommonModule],
  standalone: true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { name: '', email: '' };
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']); // Navigate to the home page on success
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', err);
      }
    });
  }
}