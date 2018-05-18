import firebase from 'firebase';

export class AuthService {

  signup(email: string, password: string) {
    let firebaseAuth = firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('-- AuthService.signup - firebaseAuth', firebaseAuth);
    return firebaseAuth;
  }
}
