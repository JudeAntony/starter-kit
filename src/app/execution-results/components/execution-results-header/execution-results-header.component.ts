import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-execution-results-header',
    templateUrl: './execution-results-header.component.html',
    styleUrls: ['./execution-results-header.component.scss']
})
export class ExecutionResultsHeaderComponent implements OnInit {
    @Input() public pageHeader: String;
    @Input() public pageSubHeader: String;
    @Input() public pageIcon: String;
    @Input() public pageDescription: String;
    @Input() public pageButtonText: String;

    @Output() public buttonAction = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    public onClick() {
        this.buttonAction.emit();
    }
}
