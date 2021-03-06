import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { ExecutionResultsComponent } from './execution-results.component';
import { ExecutionDetailsComponent } from './pages/execution-details/execution-details.component';
import { extract } from '@app/core';
import { CaseDetailsComponent } from './pages/case-details/case-details.component';

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'execution-results',
            component: ExecutionResultsComponent,
            data: { title: extract('Executions') }
        },
        {
            path: 'execution-results/details/:runId',
            component: ExecutionDetailsComponent,
            data: { title: extract('Execution-Details') },
            children: [
                {
                    path: 'test-case/:caseId',
                    component: CaseDetailsComponent,
                    data: { title: extract('Case-Details') }
                }
            ]
        }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ExecutionResultsRoutingModule {}
