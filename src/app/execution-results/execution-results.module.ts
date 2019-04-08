import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ExecutionResultsRoutingModule } from './execution-results-routing.module';
import { ExecutionResultsComponent } from './execution-results.component';
// tslint:disable-next-line:max-line-length
import { ExecutionResultsHeaderComponent } from './components/execution-results-header/execution-results-header.component';
import { ExecutionResultsTableComponent } from './components/execution-results-table/execution-results-table.component';
import { ExecutionDetailsComponent } from './pages/execution-details/execution-details.component';
import { SharedModule } from '@app/shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ExecutionResultsRoutingModule,
        NgxDatatableModule,
        NgSelectModule,
        SharedModule
    ],
    declarations: [
        ExecutionResultsComponent,
        ExecutionResultsHeaderComponent,
        ExecutionResultsTableComponent,
        ExecutionDetailsComponent
    ]
})
export class ExecutionResultsModule {}
