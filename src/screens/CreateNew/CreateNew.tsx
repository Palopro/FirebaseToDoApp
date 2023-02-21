import React, {FC, memo, useCallback, useState} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {databaseService} from '../../services/DatabaseService';
import {styles} from './styles';

export const CreateNew: FC = memo(() => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleChangeTitle = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const handleChangeNote = useCallback((text: string) => {
    setNote(text);
  }, []);

  const handleSavePress = () => {
    Keyboard.dismiss();

    databaseService.add('ToDo', {
      title: title,
      note: note,
      createdAt: new Date(),
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback
          style={styles.content}
          onPress={Keyboard.dismiss}>
          <View style={styles.inputs}>
            <TextInput
              multiline
              value={title}
              onChangeText={handleChangeTitle}
              placeholder={'Title'}
            />
            <TextInput
              multiline
              value={note}
              onChangeText={handleChangeNote}
              placeholder={'Note'}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View>
        <Button title={'Save'} onPress={handleSavePress} />
      </View>
    </SafeAreaView>
  );
});
