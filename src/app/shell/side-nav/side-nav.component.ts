import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    public showTestNavItems: Boolean = true;

    constructor() {}

    ngOnInit() {}

    public toggleSplitNav(toggle?: string) {
        this.showTestNavItems = toggle === 'testNav';
    }
}
