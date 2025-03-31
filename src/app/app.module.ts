import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // For modal
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AssistantComponent } from './components/assistant/assistant.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { assistantReducer } from './store/assistant.reducer'; // Updated to 'store'
import { AssistantEffects } from './store/assistant.effects'; // Updated to 'store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Optional, for debugging
import { GlobalComponent } from './global-component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AssistantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    StoreModule.forRoot({ assistant: assistantReducer }), // Root reducer for assistant feature
    EffectsModule.forRoot([AssistantEffects]), // Effects for assistant feature
    StoreDevtoolsModule.instrument({ // Optional: Remove in production if not needed
      maxAge: 25, // Retains last 25 states
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }