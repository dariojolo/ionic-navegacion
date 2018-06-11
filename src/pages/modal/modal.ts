import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

nombre:string="";
edad:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");
    console.log("Nombre: " + this.nombre + " edad: " + this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
cerrarConParametros(){
  let data = {
    nombre: "Juan Carlos",
    edad: 18,
    coords: {
      lat:10,
      lng: -10
    }
  };
  this.viewCtrl.dismiss({ data });
}
cerrarSinParametros(){
  this.viewCtrl.dismiss();
}
}
