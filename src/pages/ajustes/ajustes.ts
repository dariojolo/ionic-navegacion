import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }
activarPrincipal(){
  this.navCtrl.parent.select(2);
}
mostrarModal(){
let modal =   this.modalCtrl.create ( ModalPage, { nombre:"Dario", edad:40} );
  modal.present();
  modal.onDidDismiss( parametros => {
    if (parametros){
    console.log("Data del modal ");
    console.log(parametros);
  }else{
    console.log("Se cerro sin parametros");
  }
  })
}
}
