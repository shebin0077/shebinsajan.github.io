

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