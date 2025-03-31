import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { assistantReducer } from './assistant.reducer';
import { AssistantEffects } from './assistant.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ assistant: assistantReducer }),
    EffectsModule.forRoot([AssistantEffects])
  ]
})
export class StateModule {}