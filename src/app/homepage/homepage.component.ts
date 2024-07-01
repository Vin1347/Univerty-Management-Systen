import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

   username:string= '';
   password: string = '';

   constructor(private router: Router) {}

   onLogin() {
    console.log('Login button clicked!');
    localStorage.setItem('username', this.username);
    this.router.navigate(['/my-dashboard'],{ queryParams: { username: this.username } });
   }

}
