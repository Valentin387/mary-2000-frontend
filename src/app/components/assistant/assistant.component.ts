import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as AssistantActions from '../../store/assistant.actions';
import { selectMessages, selectChatInputText, selectThreadId, selectLoading } from '../../store/assistant.selectors';
import { Message } from '../../store/assistant.reducer';
import { marked } from 'marked'; // Import marked

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss']
})
export class AssistantComponent implements OnInit, OnDestroy {
  @ViewChild('loading') loadingTemplate!: TemplateRef<any>;

  // Local state properties (updated via subscriptions)
  messages: Message[] = [];
  chatInputText: string = '';
  threadId: string | null = null;
  loading: boolean = false;

  // Form properties
  mealType = 'desayuno';
  preferences = '';

  // Hardcoded dictionary for meal types
  mealTypes: { value: string; display: string }[] = [
    { value: 'desayuno', display: 'Desayuno' },
    { value: 'almuerzo', display: 'Almuerzo' },
    { value: 'cena', display: 'Cena' },
    { value: 'salsa', display: 'Salsa' },
    { value: 'postre', display: 'Postre' },
  ];

  // Subject for unsubscribing
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store, 
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    // Subscribe to messages
    this.store.select(selectMessages)
      .pipe(takeUntil(this.destroy$))
      .subscribe(messages => {
        // Parse Markdown synchronously for each message
        this.messages = messages.map(msg => ({
          ...msg,
          content: marked.parse(msg.content) as string // Explicitly synchronous
        }));
        //console.log("messages: ", this.messages);
      });

    // Subscribe to chat input text
    this.store.select(selectChatInputText)
      .pipe(takeUntil(this.destroy$))
      .subscribe(chatInputText => {
        this.chatInputText = chatInputText;
        //console.log("chatInputText: ", this.chatInputText);
      });

    // Subscribe to threadId
    this.store.select(selectThreadId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(threadId => {
        this.threadId = threadId;
        //console.log("threadId: ", this.threadId);
      });

    // Subscribe to loading state (to control modal)
    this.store.select(selectLoading)
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => {
        this.loading = loading;
        //console.log("loading: ", this.loading);
        if (loading) {
          // Blur the active element before opening the modal
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          this.modalService.open(this.loadingTemplate, { centered: true });
        } else {
          this.modalService.dismissAll();
        }
      });
  }

  ngOnDestroy() {
    // Emit to unsubscribe from all subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    this.store.dispatch(AssistantActions.resetChat());
    this.store.dispatch(AssistantActions.submitForm({ mealType: this.mealType, preferences: this.preferences }));
  }

  updateChatInput(text: string) {
    this.store.dispatch(AssistantActions.updateChatInput({ text }));
  }

  sendMessage() {
    if (this.chatInputText.trim()) {
      this.store.dispatch(AssistantActions.sendMessage({ message: this.chatInputText }));
    }
  }

  preventEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) {
      keyboardEvent.preventDefault();
    }
  }
}