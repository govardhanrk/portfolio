import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSectionComponent } from '../../components/contact-section/contact-section';
import { BackToHomeComponent } from '../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactSectionComponent,
    BackToHomeComponent
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {}
