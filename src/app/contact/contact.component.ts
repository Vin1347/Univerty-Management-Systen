import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // Handle form submission logic here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    console.log('Form submitted!')
  }

}
