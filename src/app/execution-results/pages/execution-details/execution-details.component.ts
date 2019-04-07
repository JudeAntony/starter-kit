import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'execution-details.component.html'
})
export class ExecutionDetailsComponent implements OnInit {
    public currentRunId: String = '';
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentRunId = params['runId'];
        });
    }
}
