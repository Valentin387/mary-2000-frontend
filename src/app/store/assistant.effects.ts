import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AssistantActions from './assistant.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class AssistantEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AssistantActions.submitForm),
      mergeMap(({ mealType, preferences }) =>
        this.apiService.recommendMeal(mealType, preferences).pipe(
          map(response => AssistantActions.submitFormSuccess(response)),
          catchError(error => of(AssistantActions.submitFormFailure({ error: error.message })))
        )
      )
    )
  );

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AssistantActions.sendMessage),
      mergeMap(({ message }) =>
        this.apiService.chat(message).pipe(
          map(response => AssistantActions.sendMessageSuccess(response)),
          catchError(error => of(AssistantActions.submitFormFailure({ error: error.message })))
        )
      )
    )
  );
}