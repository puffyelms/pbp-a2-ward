import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    // This is Ward's preference, on Wednesday.  Wants promises when leaving service
    getCustomers() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err); //again, customize for user
                return Promise.reject(err);
            });
    }

    getCustomers_RxObservable() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }
}
