import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Player } from '../../models/player.model';
import { Observable, of, tap } from 'rxjs'; // 👈 faltaban estos imports (of, tap)

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:8080/player';
  private http = inject(HttpClient);

  private cachePlayers: Player[] | null = null;
  private lastFetchTime = 0; // ⏱️ para controlar expiración opcional del caché

  private getHeaders() {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getPlayers(forceRefresh = false): Observable<Player[]> {
  const now = Date.now();
  const cacheValido = this.cachePlayers && (now - this.lastFetchTime < 60000);

  if (cacheValido && !forceRefresh) {
    // Siempre devolvemos un array, nunca null
    return of(this.cachePlayers ?? []);
  }

  return this.http.get<Player[]>(this.apiUrl, { headers: this.getHeaders() }).pipe(
    tap(players => {
      this.cachePlayers = players;
      this.lastFetchTime = now;
    })
  );
}

  postPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player, { headers: this.getHeaders() });
  }

  getPlayerById(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Player>(url, { headers: this.getHeaders() });
  }

  putPlayer(id: number, player: Player): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Player>(url, player, { headers: this.getHeaders() });
  }
}
