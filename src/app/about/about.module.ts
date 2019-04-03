import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        AboutRoutingModule,
        NgxDatatableModule,
        NgSelectModule
    ],
    declarations: [AboutComponent, DashboardHeaderComponent]
})
export class AboutModule {}
