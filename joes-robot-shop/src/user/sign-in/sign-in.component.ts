import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [FormsModule, CommonModule]
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: ''};
  signInError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  signIn() {
    this.signInError = false;
    this.userService
    .signIn(this.credentials)
    .subscribe({
      next: () => {
        this.router.navigate(['/catalog/']);
      },
      error: (err) => {
        this.signInError = true;
      }
    })
  }
}
