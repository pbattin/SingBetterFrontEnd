import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StartSingingPage} from '../start-singing/start-singing'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the PickASongPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pick-a-song-page',
  templateUrl: 'pick-a-song-page.html'
})
export class PickASongPage {

  songArray : any[]; 
  songs : string = "https://singbetter.herokuapp.com/getSongs";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
         
         this.http.get(this.songs).map(res => res.json()).subscribe(data => {
           this.songArray = data})
         
  }

  ionViewDidLoad() {
    
  }

  startSong(name:string){
    this.navCtrl.push(StartSingingPage, {
      title: name,
    });
    
  }

}


