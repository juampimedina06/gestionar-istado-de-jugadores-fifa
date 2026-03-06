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

  private getHeaders() {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  private clearCache() {
    this.cachePlayers = null;
    localStorage.removeItem('players_cache');
  }

  getPlayers(forceRefresh = false): Observable<Player[]> {
    if (!forceRefresh) {
      if (this.cachePlayers) {
        return of(this.cachePlayers);
      }

      const saved = localStorage.getItem('players_cache');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.cachePlayers = parsed;
          return of(parsed);
        } catch (e) {
          console.error('Error al parsear el caché de localstorage', e);
        }
      }
    }

    return this.http.get<Player[]>(this.apiUrl, { headers: this.getHeaders() }).pipe(
      tap(players => {
        this.cachePlayers = players;
        try {
          localStorage.setItem('players_cache', JSON.stringify(players));
        } catch (e) {
          console.warn('No se pudo guardar en localStorage (probablemente muchos jugadores en base a la cuota permitida)', e);
        }
      })
    );
  }

  postPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player, { headers: this.getHeaders() }).pipe(
      tap(() => this.clearCache())
    );
  }

  getPlayerById(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Player>(url, { headers: this.getHeaders() });
  }

  putPlayer(id: number, player: Player): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Player>(url, player, { headers: this.getHeaders() }).pipe(
      tap(() => this.clearCache())
    );
  }
}
