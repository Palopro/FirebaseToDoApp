import React, {FC, memo, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StatusBar,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '../../navigation/Routes';
import {databaseService} from '../../services/DatabaseService';
import {NoteRow} from './components/NoteRow/NoteRow';
import {Divider} from './components/Divider/Divider';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';

interface HomeScreenProps extends NativeStackScreenProps<Routes.Home> {}

export const HomeScreen: FC<HomeScreenProps> = memo(({navigation}) => {
  const [notesList, setNotesList] = useState<Array<any>>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      const toDo = await databaseService.read('ToDo');
      if (toDo) {
        setNotesList(toDo);
      }
    };

    if (isFocused) {
      fetchData();
    }
  }, [isFocused, navigation]);

  const renderRow = ({item}: ListRenderItemInfo<any>) => (
    <NoteRow note={item} />
  );

  const handleNewPress = () => navigation.navigate(Routes.CreateNew);

  return (
    <SafeAreaView style={[styles.element]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />

      <View style={styles.list}>
        <FlatList
          style={styles.listWrapper}
          data={notesList}
          renderItem={renderRow}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={Divider}
        />
      </View>

      <View>
        <View style={styles.tabView}>
          <View style={styles.buttonWrapper}>
            <Pressable style={styles.fab} onPress={handleNewPress}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});
