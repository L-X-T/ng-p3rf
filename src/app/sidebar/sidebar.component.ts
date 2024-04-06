import { Component, ElementRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlinkService } from '../shared/blink.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.scss',
})
export class SidebarComponent {
  private readonly blinkService = inject(BlinkService);
  private readonly elementRef = inject(ElementRef);

  blink(): void {
    this.blinkService.blinkElementsFirstChild(this.elementRef);
  }
}
