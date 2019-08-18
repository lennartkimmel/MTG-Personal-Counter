import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.page.html',
  styleUrls: ['./game-setup.page.scss'],
})
export class GameSetupPage implements OnInit {

  startingLife = 0
  playerCount = 2


  constructor(private alertCtrl: AlertController) {
    
   }

  ngOnInit() {
  }

  setPlayerTotalUp(players: number) {
    this.playerCount++
  }

  setPlayerTotalDown(players: number) {
    this.playerCount--
  }

  setStartingLife(lives: number) {
    this.startingLife = lives;
  }

  onCustomButtonClick(lives: number){
    this.startingLife = lives;
    alert('hoi')
  }

    async showCustomLiveInput() {
      let alert = await this.alertCtrl.create({
        inputs: [
          {
            name: 'Lives',
            placeholder: '40',
            type: 'number'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Submit',
            handler: data => {
            this.startingLife = data.Lives;
            }
          }
        ]
      });
      alert.present();
    }
  }