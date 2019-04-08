import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@app/shared/breadcrumb/breadcrumb.interface';

@Component({
    templateUrl: 'execution-details.component.html'
})
export class ExecutionDetailsComponent implements OnInit {
    public currentRunId: String = '';
    public breadcrumbs: Breadcrumb[] = [];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentRunId = params['runId'];
            this.breadcrumbs.push(
                {
                    label: 'Execution Results',
                    url: '/execution-results'
                },
                {
                    label: this.currentRunId
                }
            );
        });
    }
}
