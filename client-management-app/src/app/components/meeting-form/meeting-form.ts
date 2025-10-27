import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meeting-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meeting-form.html',
  styleUrls: ['./meeting-form.scss']
})
export class MeetingFormComponent {
  form!: FormGroup; // ✅ Declare only

  constructor(private fb: FormBuilder) {
    // ✅ Initialize inside constructor
    this.form = this.fb.group({
      topic: ['', Validators.required],
      participants: [1, [Validators.required, Validators.min(1)]],
      startTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const meeting = this.form.value;
      alert(`Meeting "${meeting.topic}" scheduled successfully on ${meeting.startTime}`);
      this.form.reset();
    } else {
      alert('Please fill all meeting details properly.');
    }
  }
}
