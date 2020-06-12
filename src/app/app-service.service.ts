import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  dataList:Subject<any[]> = new Subject<any[]>();
  loader:Subject<any[]> = new BehaviorSubject<any[]>([{toogle:false}]);
  constructor(
    private readonly db: AngularFireDatabase , 
    private readonly fs: AngularFirestore,
    private af:AngularFireAuth
  ) { }

  authGuard(){
    return (localStorage.getItem('isLogin') === 'true'? true:false);
  }


  async getData(table) {
    this.loaderFn(true);
     return await new Promise<any>((resolve, reject) => {
      this.fs.collection(table).snapshotChanges()
      .subscribe(snapshots => {
        this.loaderFn(false);
       let list = snapshots.map(items=>{
          return {data:items.payload.doc.data(), id:items.payload.doc.id}
        })
        resolve(list)
      })
    });
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
    await this.fs.collection(table).doc(docId).ref.get().then(data=>{
        details = data.data();
        console.log(data.data());
    });
    return details;
  }

  async addData(table, body){
    let result:any;
    return await new Promise((resolve, reject)=>{
      this.fs.collection(table).add(body).then(res=>{
        resolve(res);
      });
    });
  }

  async updateData(table,docId ,body){
    let status:any;
        await this.fs.collection(table).ref.doc(docId).update(body).then(res=>{
          status = res;
        });
        return status;
  }

  async deleteData(table, docId){
    let status:any;
    await this.fs.collection(table).ref.doc(docId).delete().then(res=>{
      status = res;
    }).catch(err=>{
      status = err;
    });
    return status;
  }

  loaderFn(val:boolean){
    this.loader.next([{toggle:val}]);
    this.loader.subscribe(res=>{

      console.log(res, val)
    })
    
    return this.loader;
  }

  

}
