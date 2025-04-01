import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectThreadId } from '../store/assistant.selectors';
import { GlobalComponent } from '../global-component';
import { switchMap, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = GlobalComponent.API_URL; // Use the API URL from the global component
  private threadId$ = this.store.select(selectThreadId);

  constructor(
    private http: HttpClient, 
    private store: Store
  ) {}

  recommendMeal(mealType: string, preferences: string): Observable<{ threadId: string; recommendation: string; sources: string[] }> {
    return this.http.post<any>(`${this.baseUrl}/recommend-meal`, { meal_type: mealType, preferences }).pipe(
      map(response => ({
        threadId: response.thread_id, // Map thread_id to threadId
        recommendation: response.recommendation,
        sources: response.sources
      })),
      //tap(response => console.log('Mapped recommendMeal response:', response))
    );
  }

  chat(userMessage: string): Observable<{ response: string; sources: string[] }> {
    return this.threadId$.pipe(
      switchMap(threadId => {
        if (threadId === null) {
          throw new Error('Thread ID is not available');
        }
        // Build URL with query param
        const url = `${this.baseUrl}/chat/${threadId}`;
        let params = new HttpParams().set('user_message', userMessage);
        console.log('Chat request:', { url, params: params.toString() });
        return this.http.post<{ response: string; sources: string[] }>(url, null, { params });
      }),
      tap(response => console.log('Chat response:', response))
    );
  }
}