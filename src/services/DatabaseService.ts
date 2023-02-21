import firestore from '@react-native-firebase/firestore';
import {Note} from '../models/Note';

class DatabaseService {
  public read = async (collection: string) => {
    try {
      const querySnapshot = await firestore().collection(collection).get();

      if (querySnapshot.empty) {
        return [];
      }

      return querySnapshot.docs.map(snapshot => {
        const noteData = snapshot.data();
        return new Note(
          snapshot.id,
          noteData.title,
          noteData.note,
          noteData.createdAt,
        );
      });
    } catch (e) {
      console.log('Read', e);
    }
  };

  public readOneById = async (collection: string, id: string) => {
    const querySnapshot = await firestore()
      .collection(collection)
      .doc(id)
      .get();

    if (!querySnapshot.exists) {
      return null;
    }

    const noteData = querySnapshot.data();

    if (!noteData) {
      return null;
    }

    return new Note(
      querySnapshot.id,
      noteData.title,
      noteData.note,
      noteData.createdAt,
    );
  };

  public add = async (collection: string, data: any) => {
    try {
      await firestore().collection(collection).add(data);
    } catch (e) {
      console.log('Add', e);
    }
  };
}

export const databaseService = new DatabaseService();
