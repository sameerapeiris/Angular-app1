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
@Component({
  selector: 'app-landing',
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
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
