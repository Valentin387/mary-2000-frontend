import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectThreadId } from '../store/assistant.selectors';
import { GlobalComponent } from '../global-component';
import { switchMap } from 'rxjs/operators';

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
    return this.http.post<{ threadId: string; recommendation: string; sources: string[] }>(
      `${this.baseUrl}/recommend-meal`,
      { meal_type: mealType, preferences }
    );
  }

  chat(userMessage: string): Observable<{ response: string; sources: string[] }> {
    return this.threadId$.pipe(
      switchMap(threadId => {
        if (threadId === null) {
          throw new Error('Thread ID is not available');
        }
        return this.http.post<{ response: string; sources: string[] }>(
          `${this.baseUrl}/chat/${threadId}`,
          { user_message: userMessage }
        );
      })
    );
  }
}