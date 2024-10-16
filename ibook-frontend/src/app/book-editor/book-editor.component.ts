import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuillEditorComponent } from 'ngx-quill';
import { Book } from '../models/book.model';
import { updateBook, createBook } from '../store/actions/book.actions';
import { selectAllBooks } from '../store/selectors/book.selectors';
import { WordLookupService } from '../services/word-lookup.service';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {
  @ViewChild(QuillEditorComponent, { static: true }) editor!: QuillEditorComponent;

  book: Book = { id: 0, title: '', description: '', content: '' };
  isNewBook: boolean = true;
  selectedWord: string = '';
  wordInfo: any = null;

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  };

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private wordLookupService: WordLookupService
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.isNewBook = false;
      this.store.select(selectAllBooks).subscribe(books => {
        const foundBook = books.find(b => b.id === +bookId);
        if (foundBook) {
          this.book = { ...foundBook };
        }
      });
    }

    this.editor.onContentChanged.subscribe(() => {
      this.book.content = this.editor.quillEditor.root.innerHTML;
    });

    this.editor.quillEditor.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        this.onContentChange(this.editor.quillEditor.root.innerHTML);
      }
    });

    this.editor.quillEditor.root.addEventListener('dblclick', this.handleDoubleClick.bind(this));
  }

  onSave() {
    if (this.isNewBook) {
      this.store.dispatch(createBook({ book: this.book }));
    } else {
      this.store.dispatch(updateBook({ book: this.book }));
    }
  }

  onContentChange(content: string) {
    this.book.content = content;
  }

  handleDoubleClick(event: MouseEvent) {
    const range = this.editor.quillEditor.getSelection();
    if (range) {
      const text = this.editor.quillEditor.getText(range.index, range.length);
      this.selectedWord = text.trim();
      this.lookupWord(this.selectedWord);
    }
  }

  lookupWord(word: string) {
    this.wordLookupService.getWordInfo(word).subscribe(
      info => {
        this.wordInfo = info;
      },
      error => {
        console.error('Error looking up word:', error);
        this.wordInfo = null;
      }
    );
  }
}
