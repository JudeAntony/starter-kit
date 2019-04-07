import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionResultsTableComponent } from './execution-results-table.component';

describe('ExecutionResultsTableComponent', () => {
    let component: ExecutionResultsTableComponent;
    let fixture: ComponentFixture<ExecutionResultsTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExecutionResultsTableComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExecutionResultsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
