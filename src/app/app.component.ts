import { afterNextRender, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslocoService } from '@jsverse/transloco';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavbarComponent, FooterComponent],
  selector: 'app-performance-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {
    afterNextRender(() => {
      console.log('switch');
      this.translocoService.setActiveLang('de');
    });
  }
}
