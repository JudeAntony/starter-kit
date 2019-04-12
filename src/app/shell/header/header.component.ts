import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, I18nService } from '@app/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() public toggleSideNav = new EventEmitter();

    menuHidden = true;
    public projectsList: String[] = [
        'Ruelela A',
        'Ruelela B',
        'Ruelela C',
        'Ruelela D'
    ];
    public selectedProject: String = this.projectsList[0];

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private i18nService: I18nService
    ) {}

    ngOnInit() {}

    public loadProjectData() {
        return;
    }

    toggleMenu() {
        this.menuHidden = !this.menuHidden;
        this.toggleSideNav.emit();
    }

    setLanguage(language: string) {
        this.i18nService.language = language;
    }

    logout() {
        this.authenticationService
            .logout()
            .subscribe(() =>
                this.router.navigate(['/login'], { replaceUrl: true })
            );
    }

    get currentLanguage(): string {
        return this.i18nService.language;
    }

    get languages(): string[] {
        return this.i18nService.supportedLanguages;
    }

    get username(): string | null {
        const credentials = this.authenticationService.credentials;
        return credentials ? credentials.username : null;
    }
}
