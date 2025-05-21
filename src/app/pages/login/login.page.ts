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
  nik = '';
  password = '';

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async onLogin() {
    if (this.nik !== '123' || this.password !== '123') {
      const toast = await this.toastController.create({
        message: '[LOGIN GAGAL] Nomor induk atau password salah!',
        duration: 3000,
        position: 'top',
        color: 'danger',
      });
      await toast.present();
    } else {
      // Navigasi ke halaman dashboard
      this.router.navigateByUrl('/dashboard', { replaceUrl: true });
    }
  }
}
