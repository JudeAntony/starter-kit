import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        AboutRoutingModule,
        NgxDatatableModule
    ],
    declarations: [AboutComponent, DashboardHeaderComponent]
})
export class AboutModule {}
