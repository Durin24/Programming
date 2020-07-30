import { Injectable, Component, OnInit } from '@angular/core';
import { firebase } from '@firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tippleadas',
  templateUrl: './tippleadas.component.html',
  styleUrls: ['./tippleadas.component.css']
})

@Injectable({providedIn: 'root'})
export class TippleadasComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private authService: AuthService) { }

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyAUfhqXj3eKVTjfx6JaR_BFi7kE1LeBo60",
      authDomain: "prediction-times.firebaseapp.com",
      databaseURL: "https://prediction-times.firebaseio.com",
      projectId: "prediction-times",
      storageBucket: "prediction-times.appspot.com",
      messagingSenderId: "343006750532",
      appId: "1:343006750532:web:7575e66753fd3e6d2b5911",
      measurementId: "G-XZ66782HMD"
    };
    var user = this.authService.user;
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
    var dbRef = this.db.list('/Users').valueChanges();
    dbRef.subscribe( valueOfItems => {console.log(valueOfItems)});

  }

}
