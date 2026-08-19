<<<<<<< Updated upstream
=======
import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
 
import { auth } from '../config/firebase.config';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private provider = new GoogleAuthProvider();
 
  async loginWithGoogle(): Promise<User | null> {
    try {
      const result = await signInWithPopup(auth, this.provider);
 
      console.log('Logged in user:', result.user);
 
      return result.user;
 
    } catch (error:any) {
        console.error('Google login error:', error);
        console.log('Error Code:', error?.code);
        console.log('Error Message:', error?.message);
        console.log('Error:', error);

        return null;
    }
  }
 
  async logout(): Promise<void> {
    await signOut(auth);
  }
 
  getCurrentUser(): User | null {
    return auth.currentUser;
  }
 
  isLoggedIn(): Promise<boolean> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
  }
}
>>>>>>> Stashed changes
