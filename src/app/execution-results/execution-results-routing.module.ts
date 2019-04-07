import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { ExecutionResultsComponent } from './execution-results.component';
import { ExecutionDetailsComponent } from './pages/execution-details/execution-details.component';

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'execution-results',
            component: ExecutionResultsComponent,
            data: { title: 'nuTan - Executions' }
        },
        {
            path: 'execution-results/details/:runId',
            component: ExecutionDetailsComponent,
            data: { title: 'nuTan - ExecutionDetails' }
        }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ExecutionResultsRoutingModule {}
