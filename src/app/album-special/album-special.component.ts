import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-special',
  templateUrl: './album-special.component.html',
  styleUrls: ['./album-special.component.css']
})
export class AlbumSpecialComponent {
  photos: any = [];

  albumId = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //GET https://jsonplaceholder.typicode.com/photos?albumId=9
    this.route.params.subscribe((params: any) => {
      this.albumId = params.id;
      fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + params.id)
        .then((res) => res.json())
        .then((content) => {
          if (content.length === 0) {
            this.router.navigate(['/albums']);
            return;
          }

          this.photos = content;
        })
    })
  }
}
