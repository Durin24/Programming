import { Injectable, Component, OnInit } from '@angular/core';
import * as firebase from '@firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { AuthService } from '../auth/auth.service';
import { FirebaseConfig } from '../shared/loading-spinner/firebase-access/firebase-access.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tippleadas',
  templateUrl: './tippleadas.component.html',
  styleUrls: ['./tippleadas.component.css']
})

@Injectable({ providedIn: 'root' })
export class TippleadasComponent implements OnInit {
  users: any[];

  constructor(private db: AngularFireDatabase, private authService: AuthService, private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    /*   const firebaseConfig = { apiKey: 'AIzaSyAUfhqXj3eKVTjfx6JaR_BFi7kE1LeBo60',
      authDomain: 'prediction-times.firebaseapp.com',
      databaseURL: 'https://prediction-times.firebaseio.com',
      projectId: 'prediction-times',
      storageBucket: 'prediction-times.appspot.com',
      messagingSenderId: '343006750532',
      appId: '1:343006750532:web:7575e66753fd3e6d2b5911',
      measurementId: 'G-XZ66782HMD'}; */

    const user = this.authService.user;
    this.angularFireAuth.authState.subscribe((value) => {
      console.log(value);
    });
    this.angularFireAuth.signInWithEmailAndPassword("test@test.com", "test12").then((val) => {
      console.log(val);
    }, err => console.log(err));
    // Initialize Firebase
    /* firebase.initializeApp(firebaseConfig); */
    const dbRef = this.db.list('/Users').snapshotChanges()
      .subscribe(valueOfItems => {
        valueOfItems.forEach(items => {
          console.log(items);

        });
      }, err => console.log(err));
  }

}
