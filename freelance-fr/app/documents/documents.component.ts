import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [ 
    {
      title: "The First Doc",
      description: 'asdfasdfasdf asdf',
      file_url: 'http://google.com',
      updated_at: '12/08/17',
      image_url: 'http://google.com'
    },
    {
      title: "The Second Doc",
      description: 'asdfasdfasdf asdf',
      file_url: 'http://google.com',
      updated_at: '12/08/17',
      image_url: 'http://google.com'
    },
    {
      title: "The Third Doc",
      description: 'asdfasdfasdf asdf',
      file_url: 'http://google.com',
      updated_at: '12/08/17',
      image_url: 'http://google.com'
    }
  ]
}