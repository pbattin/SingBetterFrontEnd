import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {ResultsPage} from '../pages/results/results';
import { MediaPlugin } from 'ionic-native';
import {Platform} from "ionic-angular/index";
import { Http, Headers } from '@angular/http';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

/*
  Generated class for the StartSinging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start-singing',
  templateUrl: 'start-singing.html',
  providers: [File, Transfer]
})
export class StartSingingPage {
 accuracy: any = 0;
 media: MediaPlugin; 
 title: string;

 

  constructor(public file: File,private transfer: Transfer,public http: Http,public alertCtrl: AlertController,public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
   this.title  = this.navParams.get('title');}

  ionViewDidLoad() {}
  ionViewDidEnter(){
    this.media = new MediaPlugin('../Library/NoCloud/recording.wav');
  }

upload() {
  const fileTransfer: TransferObject = this.transfer.create();
  let options: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'recording.wav',
      mimeType: "multipart/form-data",
     headers: {}
     
  }

if(this.title == 'Holy Diver'){
  fileTransfer.upload('cdvfile://localhost/persistent/../Library/NoCloud/recording.wav', 'https://singbetter.herokuapp.com/holyDiver', options, true)
   .then((data) => {
    this.accuracy = data.response;
   }, (err) => {
     // error
   })
}
else if(this.title == 'Smells Like Teen Spirit'){
  fileTransfer.upload('cdvfile://localhost/persistent/../Library/NoCloud/recording.wav', 'https://singbetter.herokuapp.com/teenSpirit', options, true)
   .then((data) => {
    this.accuracy = data.response;
   }, (err) => {
     // error
   })
}

else if(this.title == 'ABC'){
  fileTransfer.upload('cdvfile://localhost/persistent/../Library/NoCloud/recording.wav', 'https://singbetter.herokuapp.com/abc', options, true)
   .then((data) => {
    this.accuracy = data.response;
   }, (err) => {
     // error
   })
}
}


  showAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}


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

