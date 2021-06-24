import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private fs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.fs.collection(`test`).valueChanges().subscribe(console.log);
  }


}
