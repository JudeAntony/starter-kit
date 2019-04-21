import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-execution-details-table',
    templateUrl: 'execution-details-table.component.html',
    styleUrls: ['./execution-details-table.component.scss']
})
export class ExecutionDetailsTableComponent implements OnInit {
    @Input() public rows: any[];

    @Output() public selectedCase = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {
        console.log('ExecutionDetailsTable');
        console.log('Input: ', this.rows);
    }

    public onSelectCase(caseObj: any) {
        this.selectedCase.emit(caseObj);
    }
}
