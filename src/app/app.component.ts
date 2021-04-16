import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PARAGON TECH SOLUTIONS LTD';
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;

  services: Array<any> = [];
  trainings: Array<any> = [];
  recruitments: Array<any> =[];

  constructor() {
    this.loadServices();
    this.loadTrainings();
    this.loadRecruitments();
  }

  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 100) {
      document.getElementById("mainNav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    } else if (this.windowScrolled && verticalOffset < 10) {
      this.windowScrolled = false;
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    }
  }

  clickMenu = () => {
    this.ariaExpanded = !this.ariaExpanded;
  }

  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.classList.add('collapsed');
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarMenuContent").classList.remove('show');

    let offset = -10;
    if (target === '.careerTarget') {
      offset = -50;
    }

    this.ariaExpanded = false;
    jump(target, {
      offset: offset
    });
  }

  scrollToTop = () => {
    jump('.headerTarget');
  }

  loadServices = () => {
    this.services = [
      { icon: 'ion-ios-world-outline', title: 'Mobile & Web Development', caption: 'Native & Hybrid Application development' },
      { icon: 'ion-ios-paper-outline', title: 'AI & Data Science', caption: 'Data mining, machine learning and big data' },
      { icon: 'ion-ios-grid-view-outline', title: 'IOT', caption: 'Embedded with sensors and exchange data' },
      { icon: 'ion-ios-cloud-outline', title: 'Cloud Computing', caption: 'Data centers available to many users over the Internet.' },
      { icon: 'ion-ios-locked-outline', title: 'Cybersecurity & Block chain', caption: 'High level security for any software over internet' },
      { icon: 'ion-ios-color-wand-outline', title: 'Digital Transformation/IR4.0', caption: 'Transfrom your business process/Data exchange in manufacturing technologies' },
      { icon: 'ion-ios-barcode-outline', title: 'Information Security Management', caption: 'Information Security Management' },
      { icon: 'ion-ios-speedometer-outline', title: 'Cost Reduction & Process Improvement', caption: 'Make your organization more effective' },
      { icon: 'ion-ios-navigate-outline', title: 'Robot and Drone', caption: 'Metaphorical software robots or on artificial intelligence /digital workers' }
    ];
  }

  loadTrainings = () => {
    this.trainings = [
      { icon: 'ion-ios-book-outline', title: 'IR4.0 opportunities and challenges', caption: 'IR4.0 opportunities and challenges' },
      { icon: 'ion-ios-book-outline', title: 'IOT & Robotic System', caption: 'IOT & Robotic System' },
      { icon: 'ion-ios-book-outline', title: 'Program Logic Controller', caption: 'Program Logic Controller' },
      { icon: 'ion-ios-book-outline', title: 'Arduino/ Raspberry PI', caption: 'Arduino/ Raspberry PI' },
      { icon: 'ion-ios-book-outline', title: '3D Design and Printer', caption: '3D Design and Printer' },
      { icon: 'ion-ios-book-outline', title: 'AI & Python', caption: 'AI & Python' },
      { icon: 'ion-ios-book-outline', title: 'Java Development', caption: 'Java Development' },
      { icon: 'ion-ios-book-outline', title: 'Lean Six Sigma', caption: 'Lean Six Sigma' },
      { icon: 'ion-ios-book-outline', title: 'Marketing, Leadership etc ', caption: 'Marketing, Leadership etc ' }
    ];
  }

  loadRecruitments = () => {
    this.recruitments = [
      { icon: 'ion-ios-paper', title: 'Education', caption: 'IR4.0 opportunities and challenges' },
      { icon: 'ion-ios-people', title: 'Shared Services', caption: 'IOT & Robotic System' },
      { icon: 'ion-android-desktop', title: 'Information Technology', caption: 'Program Logic Controller' },
      { icon: 'ion-ios-medkit', title: 'Health Care', caption: 'Arduino/ Raspberry PI' },
      { icon: 'ion-ios-briefcase', title: 'Manufacturing', caption: '3D Design and Printer' },
      { icon: 'ion-cash', title: 'Banking, Finance & Tax', caption: 'AI & Python' },
    ];
  }

}
