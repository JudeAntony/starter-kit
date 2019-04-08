import { Params } from '@angular/router';

export interface Breadcrumb {
    label: String;
    params?: Params;
    url?: String;
}
