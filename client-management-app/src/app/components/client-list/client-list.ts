import { Component, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.scss']
})
export class ClientListComponent implements OnInit {
  clients = computed(() => this.clientService.clients());

  constructor(private clientService: ClientService) {}

  ngOnInit() {}
}
