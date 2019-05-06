import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-execution-results-table',
    templateUrl: 'execution-results-table.component.html'
})
export class ExecutionResultsTableComponent implements OnInit {
    @Input() public rows: any;
    @Input() public rowsPerPage: string[];
    @ViewChild('myTable') table: any;

    constructor() {}

    ngOnInit() {}

    onDetailToggle(row: any) {
        console.log('Toggled Expand Row!', row);
    }

    toggleExpandRow(row: any) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
}
