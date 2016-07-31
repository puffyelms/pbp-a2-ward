import {Component} from '@angular/core';
// import { CustomersComponent } from './customer/customers.component';

import { CustomersComponent } from './customer/index'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent]
})
export class AppComponent {

    // [ ] means property binding - C to D
    // ( ) means event binding - D to C

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'green';


    changeSuitColor() {
        this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
    }
}
