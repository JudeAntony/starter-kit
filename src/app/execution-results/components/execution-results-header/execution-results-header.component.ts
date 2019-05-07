import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-execution-results-header',
    templateUrl: './execution-results-header.component.html',
    styleUrls: ['./execution-results-header.component.scss']
})
export class ExecutionResultsHeaderComponent implements OnInit {
    @Input() public pageHeader: string;
    @Input() public pageSubHeader: string;
    @Input() public pageIcon: string;
    @Input() public pageDescription: string;
    @Input() public pageButtonText: string;
    @Input() public buttonDetails: any[];

    @Output() public buttonAction = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    public onClick(buttonText: string) {
        this.buttonAction.emit(buttonText);
    }
}
