import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-editpopup',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatLabel,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './editpopup.component.html',
  styleUrl: './editpopup.component.scss',
})
export class EditpopupComponent {}
