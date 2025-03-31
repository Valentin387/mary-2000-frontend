import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantComponent } from './components/assistant/assistant.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/assistant', pathMatch: 'full' },
  { path: 'assistant', component: AssistantComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }