import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  albums: any = [];

  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((content) => {
        this.albums = content;
      });
  }
}
