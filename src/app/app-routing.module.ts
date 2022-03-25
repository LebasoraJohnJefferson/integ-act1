import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserEditorComponent } from './user/user-editor/user-editor.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { NavComponent } from './nav/nav.component';

const routes:Routes = [
  {path:'main',component:NavComponent,children:[
    {path:'add-user',component:UserEditorComponent},
    {path:'user-list',component:UserListComponent},
  ]},
  {path:'',redirectTo:'main',pathMatch:'full'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
