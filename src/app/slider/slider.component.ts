import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./../../assets/scss/main.scss']
})
export class SliderComponent implements OnInit {
  @Input() items: any[];
  @Input() itemsPerPage: number = 3;
  currentSlide: number = 0;
  showButtons: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  nextSlide() {
    if (this.currentSlide < this.items.length - this.itemsPerPage) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
