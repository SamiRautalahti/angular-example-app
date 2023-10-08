import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  errorMessage = 'Page not found. Please check the URL.';
  showBackToHomeLink = true; // Lisätty showBackToHomeLink-ominaisuus


  constructor() { }

  ngOnInit(): void {
  }

}
