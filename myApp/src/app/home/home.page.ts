import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController) {

  }
  
  async userLogin() {
    let alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'Username',
          type: 'text',
          id: 'Username-id',
          placeholder: 'Username'
        },
        {
          name: 'Password',
          type: 'password',
          id: 'Password-id',
          placeholder: 'Password'
        } 
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    alert.present();
  }

}
