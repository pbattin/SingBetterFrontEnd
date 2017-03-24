import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../pages/results/results';
import { MediaPlugin } from 'ionic-native';
import {Platform} from "ionic-angular/index";

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

 title: string
 media = new MediaPlugin('../assets/Dio.wav');
audio = new AudioRecorder;

 startRecordings(){
    this.media.startRecord()
}

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
    this.title  = this.navParams.get('title');
    
    
  }

  ionViewDidLoad() {
    this.audio.startPlayback();
  }

}
export class AudioRecorder {
  mediaPlugin: MediaPlugin = null;

  get MediaPlugin(): MediaPlugin {
    if (this.mediaPlugin == null) {
      this.mediaPlugin = new MediaPlugin('../assets/Dio.wav');
      console.log(this.mediaPlugin + "Testing this")
    }

    return this.mediaPlugin;
  }

  startRecording() {
    this.MediaPlugin.startRecord();
  }

  stopRecording() {
    this.MediaPlugin.stopRecord();
  }

  startPlayback() {
    this.MediaPlugin.play();
  }

  stopPlayback() {
    this.MediaPlugin.stop();
  }
}