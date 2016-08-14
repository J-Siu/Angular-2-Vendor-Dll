import {Component} from '@angular/core';

@Component({
	selector: 'app-component',
	template: `
		<h1>{{title}}</h1>
		<div>This project aim to be a basic starting point to create Angular2 application using a vendor dll (vendor.js) containing the base Angular2 modules.</div>`
})
export class AppComponent {
	title = 'Starter - Angular 2 Vendor Dll';
}
