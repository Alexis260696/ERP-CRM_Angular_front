import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component'; // ✅ Importación correcta
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private _testService: TestService
  ) { }

  ngOnInit(): void {
    this._testService.prueba_test().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
