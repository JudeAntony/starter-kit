import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

import * as executionResults from 'assets/mock-data/run-results.json';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public version: string = environment.version;
    public rows = executionResults.rows;
    public columns = [
        { prop: 'run_id', name: 'Run Id' },
        { prop: 'execution_status', name: 'Status' },
        { prop: 'suite_case_name', name: 'Suite / Case' },
        { prop: 'update_user', name: 'User' }
    ];
    constructor() {}

    ngOnInit() {}
}
