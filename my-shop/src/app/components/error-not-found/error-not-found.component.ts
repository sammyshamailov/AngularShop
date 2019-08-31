import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.css']
})
export class ErrorNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  moveToHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
