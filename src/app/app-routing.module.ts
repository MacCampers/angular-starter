import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/screens/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/screens/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/screens/landingpage/landingpage.component";
import { AuthGuard } from "src/services/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full",
  },
  { path: "design-kit", 
    component: IndexComponent,
    //canActivate: [AuthGuard] 
  },
  {
    path: "profile",
    component: ProfilepageComponent,
    //canActivate: [AuthGuard],
  },
  { path: "register", component: RegisterpageComponent },
  {
    path: "landing",
    component: LandingpageComponent,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
