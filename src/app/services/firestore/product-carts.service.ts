import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  product:any
  constructor(
    private firestore: AngularFirestore
  ) {}

  public create_product_carts(data:{product_id:string, cart_id:string, quantity:number}) {
    return this.firestore.collection('product_carts').add(data);
  }
  
  public get_product_carts(documentId: string) {
    return this.firestore.collection('product_carts').doc(documentId).snapshotChanges();
  }

  public get_product_carts_list(cart_id: string) {
    return this.firestore.collection('product_carts').doc(cart_id).snapshotChanges();
  }

  public update_product_carts(documentId: string, data: any) {
    return this.firestore.collection('product_carts').doc(documentId).set(data);
  }
  public create_cart(){
    var data={status:'pending'}
    return this.firestore.collection('carts').add(data);
  }
  /*problemas de asyncronia se arreglan con promise*/
  public async get_product_bysku(sku:string){
    await this.firestore.collection('products',ref=> ref.where('Sku', '==', sku)).get().toPromise().then((res)=> {
          this.product = res.docs[0].id
    })
    return this.product;
  }
  public update_carts(documentId: string, data: any) {
    return this.firestore.collection('carts').doc(documentId).set(data);
  }
}