import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
   path:'about',
   component:AboutComponent
  },
  {
    path:'contect',
    component:ContactComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
  {
    path:'work',
    component:WorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
