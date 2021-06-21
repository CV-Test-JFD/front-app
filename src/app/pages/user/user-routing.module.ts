import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: ManageUserComponent },
    { path: 'create', component: CreateUserComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
