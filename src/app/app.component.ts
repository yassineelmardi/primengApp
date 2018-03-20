import { Component } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private confirmationService: ConfirmationService) {}

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
