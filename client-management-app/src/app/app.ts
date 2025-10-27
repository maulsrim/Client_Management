import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form';
import { MeetingFormComponent } from './components/meeting-form/meeting-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClientFormComponent, MeetingFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Client Management App';
}
