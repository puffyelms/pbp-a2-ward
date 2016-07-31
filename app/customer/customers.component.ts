import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService} from './customer.service';
// import {Observable} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

    // customers: Observable<any[]>;
    // customers: Promise<any[]>;
    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {

        this._customerService.getCustomers()
            .then((customers) => this.customers = customers)
            .catch((err) => {
                console.log(err);   //Don't do this, show the user a nice message
            });

        // Rx Observable version with subscribe functioon to a customer array
        // this._customerService.getCustomers_RxObservable()
        //     .subscribe(
        //         // it worked
        //         (customers) => this.customers = customers),
        //         // error
        //         (err) => { console.log(err);}   //Don't do this, show the user a nice message
        //     });

        // Straight up promise to array
        // this._customerService.getCustomers()
        //     .then((customers) => this.customers = customers)
        //     .catch((err) => {
        //         console.log(err);   //Don't do this, show the user a nice message
        //     });

        // Promise version - needs | async in html
        // this.customers = this._customerService.getCustomers()
        //     .catch((err) => {
        //         console.log(err);   //Don't do this, show the user a nice message
        //     });

        // Rx observable version
        // this.customers = this._customerService.getCustomers_RxObservable()
        //     .catch((err) => {
        //         console.log(err);   //Don't do this, show the user a nice message
        //         return Observable.of(true); // now we eat it.
        //         // but only if the message has been commicated to the user
        //     });
    }

}
