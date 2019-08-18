import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeckModalPage } from '../deck-modal/deck-modal.page';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  constructor(private modal: ModalController) {

   }

  ngOnInit() {
  }

async openModal() {
    // initialize controller
  
    // create the modal with the `modal-page` component
    const modalElement = await this.modal.create({
      component: DeckModalPage,
      componentProps: {},
      cssClass: ''
    });
    

    // present the modal
    await modalElement.present();
    const { data } = await modalElement.onWillDismiss();
    console.log(data);
  }
}
