import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private db: AngularFirestore, private af:AngularFireAuth) { }

  authGuard(){
    return (localStorage.getItem('isLogin') === 'true'? true:false);
  }


  async get(table) {
    console.log(table);
    let docList: any = [];
    await this.db.collection(table).snapshotChanges().subscribe(doc => {
      doc.forEach(e => {
        docList.push(this.getDocDetails(table, e.payload.doc.id));
      });
      
    })
    return docList;
  }

  async authLogin(table, userID, password){
    let docId:any; 
   await this.af.auth.signInWithEmailAndPassword(userID, password).then(res=>{
      docId = res;
    }).catch(err=>{
       console.log(err.message);
    })
    console.log(userID, password, docId);
    return docId;
  }

  // emailSignUp(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
  //   return this.af.auth.createUser(credentials)
  //     .then(() => console.log("success"))
  //     .catch(error => console.log(error));
  // }
 
  // emailLogin(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
  //    return this.af.auth.login(credentials,
  //      { provider: AuthProviders.Password,
  //        method: AuthMethods.Password
  //       })
  //      .then(() => console.log("success"))
  //      .catch(error => console.log(error));
  // }

  async getDocDetails(table, docId) {
    let details: any;
    await this.db.collection(table).doc(docId).ref.get().then(data=>{
        details = data.data();
        console.log(data.data());
    });
    return details;
  }

  async addData(table, body){
    let result:any;
    await this.db.collection(table).add(body).then(res=>{
        result = res; 
    });
    return result;
  }

  async updateData(table,docId ,body){
    let status:any;
        await this.db.collection(table).ref.doc(docId).update(body).then(res=>{
          status = res;
        });
        return status;
  }

  async deleteData(table, docId){
    let status:any;
    await this.db.collection(table).ref.doc(docId).delete().then(res=>{
      status = res;
    }).catch(err=>{
      status = err;
    });
    return status;
  }

}
