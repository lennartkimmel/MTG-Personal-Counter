import { Component, OnInit } from '@angular/core';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-deck-modal',
  templateUrl: './deck-modal.page.html',
  styleUrls: ['./deck-modal.page.scss'],
})
export class DeckModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async dismissModal() {

    alert('hoi')

    await modalController.dismiss({
      'dismissed': true
    });
  }

}
