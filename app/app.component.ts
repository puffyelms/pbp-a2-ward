import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    // [ ] means property binding - C to D
    // ( ) means event binding - D to C

    title = 'Customer App';
    name = 'Ward';
    wardsColor = 'blue';

    changeSuitColor() {
        this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
    }
}
