import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [ 
    {
      title: "The First Doc",
      description: 'asdfasdfasdf asdf',
      file_url: 'http://google.com',
      updated_at: '12/08/17',
      image_url: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/1230310037952427074.jpg'
    },
    {
      title: "The Second Doc",
      description: 'asdfasdfasdf asdf',
      file_url: 'http://google.com',
      updated_at: '12/08/17',
      image_url: 'https://cdn.techjuice.pk/wp-content/uploads/2014/11/art-of-freelancing-1.jpg'
    },
    {
      title: "The Third Doc",
      description: 'asdfasdfasdf asdf',
      file_url: 'http://google.com',
      updated_at: '12/08/17',
      image_url: 'https://netdna.webdesignerdepot.com/uploads/2015/05/featured_freelance.jpg'
    }
  ]
}