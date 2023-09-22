import {FlatList, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import ProfileHeader from '../../screens/ProfileScreen/ProfileHeader';
import GridItem from './GridItem';

interface IGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const GridView = ({data, ListHeaderComponent}: IGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <GridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default GridView;
