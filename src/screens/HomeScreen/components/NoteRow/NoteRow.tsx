import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Note} from '../../../../models/Note';

interface NoteRowProps {
  note: Note;
}

export const NoteRow: FC<NoteRowProps> = memo(({note}) => (
  <View style={styles.element}>
    {note.title && (
      <Text
        numberOfLines={4}
        lineBreakMode={'tail'}
        ellipsizeMode={'tail'}
        style={styles.titleText}>
        {note.title}
      </Text>
    )}
    <Text
      lineBreakMode={'tail'}
      ellipsizeMode={'tail'}
      style={styles.noteText}
      numberOfLines={5}>
      {note.note}
    </Text>
  </View>
));
