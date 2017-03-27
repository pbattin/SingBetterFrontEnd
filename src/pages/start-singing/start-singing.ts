import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {ResultsPage} from '../pages/results/results';
import { MediaPlugin } from 'ionic-native';
import {Platform} from "ionic-angular/index";
import { Http } from '@angular/http';

/*
  Generated class for the StartSinging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start-singing',
  templateUrl: 'start-singing.html'
})
export class StartSingingPage {
 
 media: MediaPlugin; 
 title: string

  constructor(public http: Http,public alertCtrl: AlertController,public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
   this.title  = this.navParams.get('title');}

  ionViewDidLoad() {}
  ionViewDidEnter(){
    this.media = new MediaPlugin('../Library/NoCloud/recording.wav');
  }

  showAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

//../assets/Dio.wav
startRecording(){
  try {
    this.media.startRecord();
  }
  catch (e) {
    this.showAlert('Could not start recording.');
  }
}

stopRecording() {
  try {
    this.media.stopRecord();
  }
  catch (e) {
    this.showAlert('Could not stop recording.');
  }
}

startPlayback() {
  try {
    this.media.play();
  }
  catch (e) {
    this.showAlert('Could not play recording.');
  }
}

stopPlayback() {
  try {
    this.media.stop();
  }
  catch (e) {
    this.showAlert('Could not stop playing recording.');
  }
}

}

