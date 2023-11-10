import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbCollapse],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  isNavbarCollapsed = true;
}
