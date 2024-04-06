import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {}
