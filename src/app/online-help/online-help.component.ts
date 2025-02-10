import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Store} from "../models/store.model";

@Component({
  selector: 'app-online-help',
  templateUrl: './online-help.component.html',
  styleUrls: ['./../../assets/scss/main.scss']
})
export class OnlineHelpComponent implements OnInit, AfterViewInit {

  public popularVideos: Array<any> = [];
  public newVideos: Array<any> = [];
  public questions: Array<any>;
  public activeVideos: Array<any>;
  public selectedQuestion: any;
  public showPopularVideos = true;
  @ViewChild('track') track!: ElementRef;
  public isPrevDisabled = true;
  public isNextDisabled = false;

  constructor(private cdRef: ChangeDetectorRef) {
  }
  ngOnInit() {

    this.popularVideos = [
      {
        id: 1,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 2,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 3,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 4,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 5,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 6,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 7,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 8,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 9,
        title: 'Teste',
        duration: '2.3h'
      }
    ];


    this.newVideos = [
      {
        id: 1,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 2,
        title: 'Teste',
        duration: '2.3h'
      },
      {
        id: 3,
        title: 'Teste',
        duration: '2.3h'
      },
    ];


    this.questions = [
      {
        id: 1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 2,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 4,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 5,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 6,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 7,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 8,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 9,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 10,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 11,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 12,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 13,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 14,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }
    ];

    this.activeVideos = this.popularVideos;

    // if (this.questions && this.questions.length > 0) {
    //   this.selectedQuestion = this.questions[0];
    // }
  }

  ngAfterViewInit() {
    this.track.nativeElement.addEventListener('scroll', () => this.checkScrollPosition());
    // this.checkOverflow();
  }

  scrollPrev() {
    const track = this.track.nativeElement;
    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: 'smooth'
    });
  }

  scrollNext() {
    const track = this.track.nativeElement;
    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: 'smooth'
    });
  }

  checkScrollPosition() {
    const track = this.track.nativeElement;
    const { scrollLeft, scrollWidth, clientWidth } = track;

    this.isPrevDisabled = scrollLeft <= 0;
    this.isNextDisabled = scrollLeft + clientWidth >= scrollWidth;
  }

  onDownloadUserManual() {
    const anchor = document.createElement('a')
    anchor.href = 'data:' + 'here is filetype' + ';base64,' + 'here is the file bytes';
    anchor.setAttribute('download', 'fileName here');
    anchor.click();
  }

  resetTrack() {
    this.isPrevDisabled = true;
    this.isNextDisabled = false;
    const track = this.track.nativeElement;
    track.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
    this.checkOverflow();
  }

  switchToPopular() {
    this.showPopularVideos = !this.showPopularVideos;
    this.activeVideos = this.popularVideos;
    this.resetTrackAndCheckOverflow();
  }

  switchToNew() {
    this.showPopularVideos = !this.showPopularVideos;
    this.activeVideos = this.newVideos;
    this.resetTrackAndCheckOverflow();
  }

  checkOverflow() {
    const track = this.track.nativeElement;
    const isOverflowing = track.scrollWidth > track.clientWidth;
    this.isNextDisabled = !isOverflowing;
    // this.isPrevDisabled = !isOverflowing;
  }

  resetTrackAndCheckOverflow() {
    this.cdRef.detectChanges();  // Force Angular to detect changes in DOM
    this.resetTrack();  // Scroll to the start of the track
    setTimeout(() => this.checkOverflow(), 0);  // Check overflow after the view has updated
  }

  onPlayVideo() {

  }
}
