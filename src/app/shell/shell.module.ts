import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    imports: [CommonModule, TranslateModule, NgbModule, RouterModule],
    declarations: [
        HeaderComponent,
        ShellComponent,
        SideNavComponent,
        BreadcrumbComponent
    ]
})
export class ShellModule {}
