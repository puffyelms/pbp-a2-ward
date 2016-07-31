import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService} from './customer.service';
import {Observable} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err);   //Don't do this, show the user a nice message
                return Observable.of(err); // now we eat it.
                // but only if the message has been commicated to the user
            });
    }

}
