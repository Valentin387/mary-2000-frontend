import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssistantState } from './assistant.reducer';

const selectAssistantState = createFeatureSelector<AssistantState>('assistant');

export const selectMessages = createSelector(selectAssistantState, state => state.messages);
export const selectChatInputText = createSelector(selectAssistantState, state => state.chatInputText);
export const selectThreadId = createSelector(selectAssistantState, state => state.threadId);
export const selectLoading = createSelector(selectAssistantState, state => state.loading);
export const selectError = createSelector(selectAssistantState, state => state.error);