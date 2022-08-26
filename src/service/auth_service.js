import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    // return signInWithPopup(this.firebaseAuth, authProvider);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'GitHub':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}

export default AuthService;
