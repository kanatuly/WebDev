// album-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = 1;
  album: any;
  editedTitle: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      this.fetchAlbumDetails();
    });
  }

  fetchAlbumDetails(): void {
    this.albumsService.getAlbumById(this.albumId).subscribe(
      (album) => {
        this.album = album;
        this.editedTitle = album.title; // Initialize the editedTitle with the current title
      },
      (error) => {
        console.error('Error fetching album details:', error);
      }
    );
  }

  saveChanges(): void {
    // Update the album title
    this.albumsService.updateAlbum(this.albumId, { title: this.editedTitle }).subscribe(
      () => {
        // Redirect to the album detail page with the updated data
        this.router.navigate(['/albums', this.albumId]);
      },
      (error) => {
        console.error('Error updating album title:', error);
      }
    );
  }
}
