import { collection, getDocs } from 'firebase/firestore';

// For development, using dummy config. Replace with real config when deploying.
// const firebaseConfig = {
//   apiKey: "demo-api-key",
//   authDomain: "demo-project.firebaseapp.com",
//   projectId: "demo-project",
//   storageBucket: "demo-project.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abcdef123456789",
// };

// let app: FirebaseApp | null = null;
// let db: Firestore | null = null;
// let storage: FirebaseStorage | null = null;
// let auth: Auth | null = null;

// try {
//   app = initializeApp(firebaseConfig);
//   db = getFirestore(app);
//   storage = getStorage(app);
//   auth = getAuth(app);
// } catch (error) {
//   console.warn('Firebase initialization failed. Using mock services for development.');
// }

export {};

// Fetch all documents from a "content" collection
export const getContent = async () => {
  if (!db) {
    console.warn('Firestore not available. Returning mock data.');
    return [];
  }
  try {
    const querySnapshot = await getDocs(collection(db, "content"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.warn('Error fetching content:', error);
    return [];
  }
};

export function updateContent(id: string, updatedData: any) {
  console.warn('updateContent called but Firebase not properly configured');
  return Promise.resolve();
}

