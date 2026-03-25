import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import styles from './ContactCard.style';
import AppButton from '../../../../components/util/AppButton';

const ContactCard = ({ onSend }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!name || !email || !message) {
      Alert.alert('Please fill all fields');
      return;
    }
    const payload = { name, email, phone, message };
    if (typeof onSend === 'function') onSend(payload);
    Alert.alert('Message sent', 'We will get back to you soon.');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Get in touch</Text>
        <Text style={styles.headerSubtitle}>We'd love to hear from you</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput value={name} onChangeText={setName} placeholder="Your name" placeholderTextColor="#9E9E9E" style={styles.input} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="#9E9E9E" keyboardType="email-address" style={styles.input} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} placeholder="Phone" placeholderTextColor="#9E9E9E" keyboardType="phone-pad" style={styles.input} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Message</Text>
          <TextInput value={message} onChangeText={setMessage} placeholder="Message" placeholderTextColor="#9E9E9E" style={[styles.input, styles.textArea]} multiline numberOfLines={4} textAlignVertical="top" />
        </View>

        <AppButton
          onPress={handleSend}
          title="Send"
          style={styles.sendButton}
          textStyle={styles.sendButtonText}
          accessibilityLabel="Send contact"
        />
      </View>
    </View>
  );
};

export default ContactCard;
