// albums.component.ts
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(
      () => {
        // Remove the deleted album from the local array
        this.albums = this.albums.filter(album => album.id !== id);
      },
      (error) => {
        console.error('Error deleting album:', error);
      }
    );
  }
}
