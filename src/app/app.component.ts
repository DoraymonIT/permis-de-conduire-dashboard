import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'permis-de-conduire-dashboard';
  showPayment: boolean = false;

showPaymentForm() {
  this.showPayment = true;
}

}
