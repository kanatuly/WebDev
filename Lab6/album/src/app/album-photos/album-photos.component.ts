// album-photos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number = 1;
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    // Get the album ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      this.fetchPhotos();
    });
  }

  fetchPhotos(): void {
    this.albumsService.getAlbumById(this.albumId).subscribe(
        (album) => {
          // Assuming photos are a property of the album object
          this.photos = album.photos || [];
        },
        (error) => {
          console.error('Error fetching photos:', error);
        }
    );
  }
}
