import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { PaymentComponent } from './payment/payment.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { WalletsComponent } from './wallets/wallets.component';
import { UpiComponent } from './upi/upi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardPaymentComponent,
    PaymentComponent,
    DebitCardComponent,
    NetbankingComponent,
    WalletsComponent,
    UpiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
