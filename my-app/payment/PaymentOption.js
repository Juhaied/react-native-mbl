import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the WhatsApp icon from FontAwesome

const PaymentOption = ({ option, onPress }) => {
  return (
    <View>
      <View style={styles.helpTextContainer}>
        <Text style={styles.helpText}>Help</Text>
      </View>
      <Text style={styles.paymentOptionText}>Payment Option</Text>
      <TouchableOpacity
        onPress={() => {
          // Handle WhatsApp button press
          // You can use a library like 'react-native-linking' to open WhatsApp
          // Example: Linking.openURL('whatsapp://send?text=Hello%20World');
        }}
        style={styles.whatsappButton}
      >
        <Icon name="whatsapp" size={24} color="#25D366" />
      </TouchableOpacity>

      
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
    </View>
  );
};

const styles = StyleSheet.create({
  helpTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10, // Adjust the margin as needed
    marginBottom: 10, // Adjust the margin as needed
  },
  helpText: {
    marginTop:30,
    fontSize: 20, // Adjust the font size as needed
    color: '#555', // Adjust the color as needed
    marginLeft:290,
    fontWeight:'bold',
  },
  paymentOptionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -35,
    marginBottom: 60,
    textAlign: 'center',
  },
  whatsappButton: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    marginTop: 10,
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
    height: 200,
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
