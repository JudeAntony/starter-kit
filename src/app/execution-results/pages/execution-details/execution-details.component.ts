import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@app/shared/breadcrumb/breadcrumb.interface';
import * as resultDetails from 'assets/mock-data/execution-details.json';

@Component({
    templateUrl: 'execution-details.component.html',
    styleUrls: ['execution-details.component.scss']
})
export class ExecutionDetailsComponent implements OnInit {
    public currentRunId: String = '';
    public breadcrumbs: Breadcrumb[] = [];

    public resultDetails: any[] = resultDetails;
    public detailRows: any[] = resultDetails.rows;
    public currentTestCase: any = null;
    public buttonDetails = [
        {
            text: 'App Log',
            type: 'secondary'
        },
        {
            text: 'Tech Log',
            type: 'secondary'
        }
    ];

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
        if (this.route.firstChild) {
            this.route.firstChild.params.subscribe((params: any) => {
                const caseId = params['caseId'];
                this.currentTestCase = this.detailRows.find(
                    row => row.test_case_id === caseId
                );
            });
        }
    }

    public onButtonClick(buttonText: string) {
        switch (buttonText) {
            case 'App Log': {
                this.appLog();
                break;
            }
            case 'Tech Log': {
                this.techLog();
                break;
            }
            default: {
                break;
            }
        }
    }

    public setCurrentTestCase(selectedCase: any) {
        this.currentTestCase = selectedCase;
    }
    private appLog() {
        // code to handle click of app log button
    }

    private techLog() {
        // code to handle click of tech log button
    }
}
