import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-execution-results-table',
    templateUrl: 'execution-results-table.component.html'
})
export class ExecutionResultsTableComponent implements OnInit {
    @Input() public rows: any;
    @Input() public rowsPerPage: string[];

    constructor() {}

    ngOnInit() {}
}
