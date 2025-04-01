import { Action, createReducer, on } from '@ngrx/store';
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

export const _assistantReducer = createReducer(
  initialState,
  on(AssistantActions.submitForm, state => ({ ...state, loading: true, error: null })),
  on(AssistantActions.submitFormSuccess, (state, action) => {
    //console.log('submitFormSuccess action payload:', action);
    //console.log('Reducer updating state with threadId:', action.threadId);
    return {
      ...state,
      messages: [{ role: 'assistant' as MessageRole, content: `${action.recommendation}${action.sources.length ? ` sources: ${action.sources.join(', ')}` : ''}` }],
      threadId: action.threadId,
      loading: false
    };
  }),
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


export function assistantReducer(state: AssistantState | undefined, action: Action) {
  return _assistantReducer(state, action);
}