import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'application-components',
    templateUrl : 'app/components/application.component.html',
    styleUrls : [''],
    encapsulation : ViewEncapsulation.None
})
export default class ApplicationComponent {

    title : string ;
    constructor () {
        this.title = 'I compiled! ';
    }
}