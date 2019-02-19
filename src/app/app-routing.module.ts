import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component'

const routes: Routes = [
{ path: 'faculty', component: FacultyComponent },
{ path: 'student', component: StudentComponent },
{ path: '', component: HomeComponent },
{ path: '',   redirectTo: '/AppComponent', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
