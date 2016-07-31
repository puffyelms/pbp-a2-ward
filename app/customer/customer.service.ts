import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
            {id: 1, name: 'Ward'},
            {id: 2, name: 'Kevin'},
            {id: 3, name: 'Sally'},
            {id: 4, name: 'Emmet'},
            {id: 5, name: 'Eric'}
        ];
    }
}
