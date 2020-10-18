import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
// {
//     "id": 1,
//     "title": "General Mobile GM 20",
//     "imgURL": "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
//     "price": "₺1.810,21",
//     "inStock": true
// }
const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text>{product.title}</Text>
        <Text style={{fontWeight: 'bold', color: 'brown'}}>
          {product.price}
        </Text>
      </View>
      <View style={[styles.stock, {transform: [{rotate: '-45deg'}]}]}>
        {product.inStock === false ? (
          <Text style={styles.stockText}>Not in stock</Text>
        ) : null}
      </View>
    </View>
  );
};
export {ProductCard};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  stock: {
    position: 'absolute',
    bottom: 60,
    left: -20,
    backgroundColor: 'rgba(176, 0, 58, 0.5)',
    width: 300,
  },
  stockText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
