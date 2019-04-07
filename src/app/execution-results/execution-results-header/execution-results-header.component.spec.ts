import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionResultsHeaderComponent } from './execution-results-header.component';

describe('ExecutionResultsHeaderComponent', () => {
    let component: ExecutionResultsHeaderComponent;
    let fixture: ComponentFixture<ExecutionResultsHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExecutionResultsHeaderComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExecutionResultsHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
