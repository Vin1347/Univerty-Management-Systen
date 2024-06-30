import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // styleUrl is not a valid property, use styleUrls instead
})
export class DashboardComponent implements OnInit {

  username: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {} // inject Router

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || localStorage.getItem('username') || 'user';
    });
  }
}