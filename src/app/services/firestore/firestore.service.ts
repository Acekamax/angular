import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  public createCart() {
    var data={status:"pending"}
    return this.firestore.collection('carts').add(data);
  }
  //Obtiene un cart
  public getCart(documentId: string) {
    return this.firestore.collection('carts').doc(documentId).snapshotChanges();
  }
  public updateCart(documentId: string, data: any) {
    return this.firestore.collection('carts').doc(documentId).set(data);
  }
}