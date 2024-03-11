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
import {MatTableModule} from '@angular/material/table';
import { PopupService } from '../popup.service';

export interface PeriodicElement {
  userName: string;
  position: number;
  email: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, userName: 'Hydrogen', email: 1.0079},
  {position: 2, userName: 'Helium', email: 4.0026},
  {position: 3, userName: 'Lithium', email: 6.941,},
  {position: 4, userName: 'Beryllium', email: 9.0122},
  {position: 5, userName: 'Boron', email: 10.811, },
  {position: 6, userName: 'Carbon', email: 12.0107, },
  {position: 7, userName: 'Nitrogen', email: 14.0067,},
  {position: 8, userName: 'Oxygen', email: 15.9994, },
  {position: 9, userName: 'Fluorine', email: 18.9984, },
  {position: 10, userName: 'Neon', email: 20.1797, },
];


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [

    MatCardModule,
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  displayedColumns: string[] = ['ID', 'User Name', 'Email', 'Action'];
  dataSource = ELEMENT_DATA;

  constructor(private popupService: PopupService) {}
  openPopup(): void {
    this.popupService.openPopup();
  }
}
