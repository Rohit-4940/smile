import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  imports: [NgFor, NgIf],
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {
  images: string[] = [
    'assets/image/gallery/1.jpg',
    'assets/image/gallery/2.jpg',
    'assets/image/gallery/3.jpg',
    'assets/image/gallery/4.jpg',
    'assets/image/gallery/5.jpg',
    'assets/image/gallery/6.jpg',
    'assets/image/gallery/7.jpg',
    'assets/image/gallery/8.jpg',
    'assets/image/gallery/9.jpg',
    'assets/image/gallery/10.jpg',
  ];
  isModalOpen: boolean = false;
  currentImage: string = '';
  openModal(image: string): void {
    this.currentImage = image;
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
    this.currentImage = '';
  }
}
