import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import { NlpComponent } from './components/nlp/nlp.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TokenizationComponent } from './components/nlp/tokenization/tokenization.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, NlpComponent,
   PricingComponent, TestimonialsComponent, 
    GalleryComponent, NavComponent,  FooterComponent, TokenizationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
