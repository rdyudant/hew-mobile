import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username = '';
  password = '';

  constructor(private toastCtrl: ToastController, private router: Router) {}

  async login() {
    if (!this.username || !this.password) {
      const toast = await this.toastCtrl.create({
        message: 'Username dan Password wajib diisi!',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
      return;
    }

    // Simulasi login berhasil
    const toast = await this.toastCtrl.create({
      message: 'Login berhasil!',
      duration: 2000,
      color: 'success',
    });
    toast.present();

    this.router.navigateByUrl('/dashboard', { replaceUrl: true });
  }
}