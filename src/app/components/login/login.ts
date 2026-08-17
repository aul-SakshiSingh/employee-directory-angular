import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 
  private authService = inject(AuthService);
  private router = inject(Router);
 
  loading = false;
  error = '';
 
  async loginWithGoogle(): Promise<void> {
 
    this.loading = true;
    this.error = '';
 
    const user = await this.authService.loginWithGoogle();
 
    if (user) {
      console.log('Authentication successful');
      console.log('User:', user);
 
      this.router.navigate(['/employee-list']);
    } else {
      this.error = 'Google authentication failed. Please try again.';
    }
 
    this.loading = false;
  }
}