import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
  sidebarVisible = false;

  private readonly document = inject(DOCUMENT);

  sidebarToggle(): void {
    const body = this.document.getElementsByTagName('body')[0];

    if (!this.sidebarVisible) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      body.classList.remove('nav-open');
      this.sidebarVisible = false;
    }
  }
}
