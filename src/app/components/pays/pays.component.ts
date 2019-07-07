import { Component, OnInit, AfterViewChecked, TemplateRef } from '@angular/core';
import {AuthenticationService} from '../../auth/authentication.service';
import {AnswersService} from '../../services/answers.service';
import {RatesService} from '../../services/rates.service';
import { Answers } from '../../../models/answers';
import { Rates } from '../../../models/rates';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Customers } from '../../../models/customers';
import { ToastrService } from 'ngx-toastr';
declare let paypal: any;

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['../home/home.component.css']
})
export class PaysComponent implements OnInit, AfterViewChecked 
{

	paypalLoad: boolean = true;
  	addScript: boolean = false;
  	payRealized: boolean = false;
  	selectedAnswer: Answers;

  constructor(private router: Router, private answers: AnswersService, private rates: RatesService, private auth: AuthenticationService, private http: HttpClient, private toastr: ToastrService)
  { 
  	this.selectedAnswer=this.answers.getSelectedAnswer();
  }

  //Variable paypalConfig:
  paypalConfig = {
    env: 'sandbox',

    style: {
      label: 'paypal',
      size:  'medium',    // small | medium | large | responsive
      shape: 'rect',     // pill | rect
      color: 'gold',     // gold | blue | silver | black
      tagline: false      
  },
    client: {
        sandbox: 'Af1IE-Fj2CReH0Clqa-0LoiRAYqz34XpPSOkTZdflsk0CShlWMRf7I7Wq55OfjC7cV7ARTp27Nkzcj8n',
        production: '<production-key>'
    },
    commit: true,
    payment: (data, actions) => {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: this.selectedAnswer.price , currency: 'USD' }
                    }
                ]
            }
        })
    },

    // onAuthorize() is called when the buyer approves the payment
    onAuthorize:(data, actions) => {
  
        // Make a call to the REST api to execute the payment
        return actions.payment.execute().then((payment) => {
            //window.alert('¡Pago Completado!');
            this.toastr.success('¡Pago Completado!');
            this.payRealized=true;
            this.answers.savePay(this.payRealized);
        })
    }
  };
  
  /**
  *Called after every check of the component's view. Applies to components only.
  */  
  ngAfterViewChecked(): void 
  {
    //Add 'implements AfterViewChecked' to the class
    if(!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = true;
      })
    }
  }

  /**
  *Renderiza el botón de Paypal.
  */ 
  addPaypalScript()
  {
      this.addScript = true;
      return new Promise((resolve, reject) => {
        let scriptElement = document.createElement('script');
        scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js'
        scriptElement.onload = resolve;
        document.body.appendChild(scriptElement);
      })
  }

  ngOnInit() {}

}
