import { Component, OnInit } from '@angular/core';
import * as stepsList from 'assets/mock-data/test-case-steps.json';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-case-details',
    templateUrl: 'case-details.component.html',
    styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
    public steps: any[];
    public selectedStep: any;
    public openOptions: Boolean = true;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        console.log('Case details component');
        this.route.params.subscribe(() => {
            this.steps = [...stepsList.rows];
        });
    }

    public setSelectedStep(step: string) {
        this.selectedStep = step;
    }
}
