import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    HeaderComponent,
    FooterComponent,
    MatButtonModule
  ],
})
export class LoginComponent {
// Inject the Router in the constructor
constructor(private router: Router) {}

// Add the method to navigate to the landing page
goToLandingPage() {
  this.router.navigate(['/landing']);
}
}
