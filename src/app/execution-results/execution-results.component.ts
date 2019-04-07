import { Component, OnInit } from '@angular/core';
import * as executionResults from 'assets/mock-data/run-results.json';

@Component({
    templateUrl: './execution-results.component.html',
    styleUrls: ['./execution-results.component.scss']
})
export class ExecutionResultsComponent implements OnInit {
    public entries: String[] = ['10', '20', '30', '40'];
    public rowsPerPage: String = '10';
    public rows = executionResults.rows;
    constructor() {}

    ngOnInit() {}

    public refreshResults() {
        // invoke API to refresh results
    }
}
