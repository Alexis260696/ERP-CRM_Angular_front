import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component'; // ✅ Importación correcta

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
