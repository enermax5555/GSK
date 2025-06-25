import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged as firebaseOnAuthStateChanged, User } from 'firebase/auth';

export const login = async (email: string, password: string) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const logout = async () => {
    try {
        const auth = getAuth();
        await signOut(auth);
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const register = async (email: string, password: string) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
    const auth = getAuth();
    return firebaseOnAuthStateChanged(auth, callback);
};

// Note: Admin functions like getUsers and deleteUser should be moved to a backend API
// For now, these are placeholder functions that would need to be implemented server-side
export const getUsers = async () => {
    // This would be an API call to your backend
    console.warn('getUsers should be implemented as a backend API call');
    return [];
};

export const deleteUser = async (uid: string) => {
    // This would be an API call to your backend
    console.warn('deleteUser should be implemented as a backend API call');
    return { success: true };
};