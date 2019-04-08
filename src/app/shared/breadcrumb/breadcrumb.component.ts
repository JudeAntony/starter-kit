import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from './breadcrumb.interface';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
    @Input() public breadcrumbs: Breadcrumb[];

    constructor() {}

    ngOnInit() {}
}
