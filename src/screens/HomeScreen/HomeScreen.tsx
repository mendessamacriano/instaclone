import {useRef, useState} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';

import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json';
import CommentsScreen from '../CommentsScreen/CommentsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import user from '../../assets/data/user.json';
import EditProfileScreen from '../EditProfileScreen/EditProfileScreen';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewabilityItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return (
    // <FlatList
    //   data={posts}
    //   renderItem={({item}) => (
    //     <FeedPost post={item} isVisible={activePostId === item.id} />
    //   )}
    //   showsVerticalScrollIndicator={false}
    //   viewabilityConfig={viewabilityConfig}
    //   onViewableItemsChanged={onViewabilityItemsChanged.current}
    // />
    // <CommentsScreen />
    <EditProfileScreen />
  );
};

export default HomeScreen;
