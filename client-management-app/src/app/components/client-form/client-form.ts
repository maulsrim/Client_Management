import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form.html',
  styleUrls: ['./client-form.scss']
})
export class ClientFormComponent {
  form!: FormGroup; // ✅ Declare only

  constructor(private fb: FormBuilder) {
    // ✅ Initialize inside constructor
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const client = this.form.value;
      alert(`Client "${client.name}" registered successfully!`);
      this.form.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
