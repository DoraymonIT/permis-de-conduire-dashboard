import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  creditCardNumber: string = '';
  expiryDate: string = '';
  cvc: string = '';

  submitPayment() {
    // Implement logic to submit payment to your chosen payment gateway here
    // Ensure that you securely handle payment processing on the server side
  }
}
