import {Component, inject} from '@angular/core';
import {ProjectComponent} from '../project/project.component';
import {ContactMeComponent} from '../contact-me/contact-me.component';
import {WorksComponent} from '../work/works.component';
import {ChatService} from '../../../../shared-service/chat.service';
import {Router} from '@angular/router';
import {BlogListComponent} from '../blog-list/blog-list.component';
import {ImageGalleryComponent} from '../image-gallery/image-gallery.component';


@Component({
  selector: 'app-home',
  imports: [
    ProjectComponent,
    ContactMeComponent,
    WorksComponent,
    BlogListComponent,
    ImageGalleryComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  chatService: ChatService = inject(ChatService);
  router: Router = inject(Router);

  openChat() {
    this.chatService.toggleChat();
  }

  openAbout() {
    this.router.navigate(['/charity/about']);
  }
}
