import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ExecutionResultsRoutingModule } from './execution-results-routing.module';
import { ExecutionResultsComponent } from './execution-results.component';
import { ExecutionResultsHeaderComponent } from './execution-results-header/execution-results-header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ExecutionResultsRoutingModule,
        NgxDatatableModule,
        NgSelectModule
    ],
    declarations: [ExecutionResultsComponent, ExecutionResultsHeaderComponent]
})
export class ExecutionResultsModule {}
