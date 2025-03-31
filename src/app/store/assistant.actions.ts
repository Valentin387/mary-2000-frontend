import { createAction, props } from '@ngrx/store';

export const submitForm = createAction(
    '[Assistant] Submit Form', 
    props<{ mealType: string; preferences: string }>()
);

export const submitFormSuccess = createAction(
    '[Assistant] Submit Form Success', 
    props<{ threadId: string; recommendation: string; sources: string[] }>()
);

export const submitFormFailure = createAction(
    '[Assistant] Submit Form Failure', 
    props<{ error: string }>()
);

export const sendMessage = createAction(
    '[Assistant] Send Message', 
    props<{ message: string }>()
);

export const sendMessageSuccess = createAction(
    '[Assistant] Send Message Success', 
    props<{ response: string; sources: string[] }>()
);

export const updateChatInput = createAction(
    '[Assistant] Update Chat Input', 
    props<{ text: string }>()
);

export const resetChat = createAction(
    '[Assistant] Reset Chat'
);