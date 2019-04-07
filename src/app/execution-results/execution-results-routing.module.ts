import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ExecutionResultsComponent } from './execution-results.component';

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'execution-results',
            component: ExecutionResultsComponent,
            data: { title: 'nuTan - Executions' }
        }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ExecutionResultsRoutingModule {}
