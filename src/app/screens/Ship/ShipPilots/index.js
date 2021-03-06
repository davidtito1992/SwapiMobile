import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import styles from './styles';

const ShipPilots = (props) => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { shipPilots } = useSelector((state) => state?.shipPilots);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.pilotContainer}
        onPress={() => {
          props.refRBSheet.current.close();
          props.navigation.navigate('Pilot', { item });
        }}>
        <Text style={styles.pilotContent}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const loadPage = (pageNumber = page, shouldRefresh = false) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const data = shipPilots?.slice(pageNumber * 10, pageNumber * 10 + 10);
    setFeed((feed) => (shouldRefresh ? data : [...feed, ...data]));
    setPage((page) => page + 1);
    setLoading(false);
  };

  const refreshList = () => {
    setRefreshing(true);
    setPage(0);
    setFeed([]);
    loadPage(0, true);
    setRefreshing(false);
  };

  useEffect(() => {
    if (shipPilots?.length > 0) {
      setFeed(shipPilots);
    }
  }, [shipPilots]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="shipPilots"
        data={feed}
        keyExtractor={(item) => item?.name?.toString()}
        renderItem={renderItem}
        // onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 15,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.5}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading && <Loading />}
        initialNumToRender={5}
        maxToRenderPerBatch={2}
      />
    </SafeAreaView>
  );
};

export default ShipPilots;
