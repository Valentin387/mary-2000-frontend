import { createReducer, on } from '@ngrx/store';
import * as AssistantActions from './assistant.actions';

export type MessageRole = 'assistant' | 'you';

export interface Message {
  role: MessageRole;
  content: string;
}

export interface AssistantState {
  messages: Message[];
  chatInputText: string;
  threadId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AssistantState = {
  messages: [],
  chatInputText: '',
  threadId: null,
  loading: false,
  error: null
};

export const assistantReducer = createReducer(
  initialState,
  on(AssistantActions.submitForm, state => ({ ...state, loading: true, error: null })),
  on(AssistantActions.submitFormSuccess, (state, { threadId, recommendation, sources }) => ({
    ...state,
    messages: [{ role: 'assistant' as MessageRole, content: `${recommendation}${sources.length ? ` sources: ${sources.join(', ')}` : ''}` }],
    threadId,
    loading: false
  })),
  on(AssistantActions.submitFormFailure, (state, { error }) => ({
    ...state,
    messages: [{ role: 'assistant'  as MessageRole, content: `Error: ${error}` }],
    loading: false
  })),
  on(AssistantActions.sendMessage, state => ({ ...state, loading: true })),
  on(AssistantActions.sendMessageSuccess, (state, { response, sources }) => ({
    ...state,
    messages: [...state.messages, { role: 'you'  as MessageRole, content: state.chatInputText }, { role: 'assistant'  as MessageRole, content: `${response}${sources.length ? ` sources: ${sources.join(', ')}` : ''}` }],
    chatInputText: '',
    loading: false
  })),
  on(AssistantActions.updateChatInput, (state, { text }) => ({ ...state, chatInputText: text })),
  on(AssistantActions.resetChat, () => initialState)
);