import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SplashPage implements OnInit {

  constructor(
  private animationCtrl: AnimationController,
  private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      const leavingAnimation = this.animationCtrl
        .create()
        .addElement(document.querySelector('ion-content')!)
        .duration(2000)
        .easing('ease-out')
        .fromTo('opacity', '1', '0');

      leavingAnimation.play().then(() => {
        this.router.navigateByUrl('/login');
      });
    }, 2000);
  }

}