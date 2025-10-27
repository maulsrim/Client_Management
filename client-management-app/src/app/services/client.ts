import { Injectable, signal } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // ✅ Using signals for reactive data
  private _clients = signal<Client[]>([
    
  ]);

  readonly clients = this._clients.asReadonly();

  addClient(client: Client) {
    const current = this._clients();
    this._clients.set([...current, { ...client }]);
  }
}
export type { Client };

