import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NlpComponent } from './components/nlp/nlp.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    {title: "MLM | Home", path:'' , component: HeaderComponent},
    {title: "MLM | Home", path:'home' , component: HeaderComponent},
    {title: "MLM | NLP", path:'nlp' , component: NlpComponent},
    {title: "MLM | DATA MINING", path:'dm' , component: PricingComponent},
    {title: "MLM | OPEN AI", path:'oai' , component: TestimonialsComponent},
    {title: "MLM | MACHINE LEARNING", path:'ml' , component: GalleryComponent},
    {title: "MLM | Not Found", path:'**' , component: NotfoundComponent},

];
