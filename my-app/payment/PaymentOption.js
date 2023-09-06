import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PaymentOption = ({ option, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardType}>{option.cardType}</Text>
            <Text style={styles.cardNumber}>{option.cardNumber}</Text>
            <View style={styles.expiryCvvContainer}>
              <Text style={styles.cardExpiry}>EXPIRY {option.expiry}</Text>
              <Text style={styles.cvv}>CVV_ _ _ {option.cvv}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
  },
  card: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    height: 160,
  },
  cardInfo: {
    marginLeft: 16,
  },
  cardType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  expiryCvvContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  cardExpiry: {
    fontSize: 14,
  },
  cvv: {
    fontSize: 14,
    marginLeft: 166,
  },
});

export default PaymentOption;
