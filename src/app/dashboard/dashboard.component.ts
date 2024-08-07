import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
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