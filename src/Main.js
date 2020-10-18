import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
  TextInput,
} from 'react-native';
import {ProductCard} from './components';
import productData from './product_data.json'; //we can use any Name

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState(productData);
  const renderListItem = ({item}) => <ProductCard product={item} />;

  // useEffect(() => {
  //   Alert.alert('Clarushop', 'Welcome to our shop');
  // }, []);

  useEffect(() => {
    setDisplayList(productData);
  }, []);

  useEffect(() => {
    const filteredValue = productData.filter((item) => {
      const text = searchValue.toUpperCase();
      const productTitle = item.title.toUpperCase();

      return productTitle.indexOf(text) !== -1;
    });
    setDisplayList(filteredValue);
  }, [searchValue]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'purple'}}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <View style={styles.header}>
          <Text style={styles.title}>Clarushop</Text>
        </View>

        <View style={styles.search_area}>
          <TextInput
            value={searchValue}
            style={styles.inputText}
            placeholder="🔎  Search a product"
            onChangeText={(val) => {
              setSearchValue(val);
            }}
          />
        </View>

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={displayList}
          renderItem={renderListItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  search_area: {
    backgroundColor: '#38006b',
    padding: 15,
    borderTopColor: 'yellow',
    borderTopWidth: 1,
  },
  inputText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
