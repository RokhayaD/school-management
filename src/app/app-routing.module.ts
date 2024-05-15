import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { StudentManagementComponent } from './components/student-management/student-management.component';

const routes: Routes = [
  { path: 'classes', component: ClassManagementComponent },
  { path: 'students', component: StudentManagementComponent },
  { path: '', redirectTo: '/classes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
