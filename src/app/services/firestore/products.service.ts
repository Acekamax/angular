import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  public get_products(documentId: string) {
    return this.firestore.collection('products').doc(documentId).snapshotChanges();
  }

  public get_products_list() {
    
    const snapshot = this.firestore.collection('products').get();
    return snapshot
  }
}