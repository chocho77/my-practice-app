import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    title: any  = "Navbar Component";
    number:number = 3.33;
    number1:number = 4.33;
    result:number = this.number+this.number1;


    constructor() {

    }

}