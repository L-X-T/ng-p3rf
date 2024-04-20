import { Component, ElementRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlinkService } from '../shared/blink.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
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
