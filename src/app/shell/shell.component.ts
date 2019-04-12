import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
    public hideSideNav: Boolean;

    constructor() {}

    ngOnInit() {}

    public toggleSideNav() {
        this.hideSideNav = !this.hideSideNav;
    }
}
