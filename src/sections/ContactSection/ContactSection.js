import React from 'react';
import { View, Text, TouchableOpacity, Alert, Linking, ImageBackground } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './ContactSection.styles';
import { colors } from '../../theme';
import ContactCard from './components/ContactCard/ContactCard';

export default function ContactSection() {

  const openWhatsApp = () => {
    const phone = '1234567890';
    const message = 'Hello, I would like to inquire about admissions.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => Alert.alert('Unable to open WhatsApp'));
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} pointerEvents="none" />
      <View style={styles.contentWrapper}>
        <View style={styles.inner}>
        <View style={styles.left}>
          <Text style={styles.heading}>Contact Us</Text>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.text}>123 School Street</Text>
          <Text style={styles.text}>Cityville, ST 12345</Text>
          <Text style={styles.text}>Country</Text>

          <TouchableOpacity
            style={styles.whatsappIcon}
            onPress={openWhatsApp}
            accessibilityLabel="Open WhatsApp"
            accessibilityRole="button"
          >
            <FontAwesome name="whatsapp" size={26} color="#25D366" />
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <ContactCard />
        </View>
        </View>
      </View>
    </ImageBackground>
  );
}
