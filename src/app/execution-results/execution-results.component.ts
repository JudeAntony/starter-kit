import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

import * as executionResults from 'assets/mock-data/run-results.json';

@Component({
    selector: 'app-about',
    templateUrl: './execution-results.component.html',
    styleUrls: ['./execution-results.component.scss']
})
export class ExecutionResultsComponent implements OnInit {
    public entries: String[] = ['10', '20', '30', '40'];
    public rowsPerPage: String = '10';
    public rows = executionResults.rows;
    constructor() {}

    ngOnInit() {}
}
