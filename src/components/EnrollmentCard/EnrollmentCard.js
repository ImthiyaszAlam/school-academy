import React, { useMemo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './EnrollmentCard.style';
import Button from '../util/Button';

const DEFAULT_SUBTITLE = 'Fill in your details to get started.';

const EnrollmentCard = ({
  subtitle = DEFAULT_SUBTITLE,
  onEnroll,
  onClose,
  style,
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const payload = useMemo(
    () => ({
      name,
      phoneNumber,
      course,
      message,
    }),
    [name, phoneNumber, course, message]
  );

  const handleEnrollPress = () => {
    if (typeof onEnroll === 'function') onEnroll(payload);
    if (typeof onClose === 'function') onClose();
  };

  return (
    <View style={[styles.card, style]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Start your Enrollment</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            accessibilityLabel="Name"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            placeholderTextColor="#9E9E9E"
            keyboardType="phone-pad"
            style={styles.input}
            accessibilityLabel="Phone Number"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Choose course</Text>
          <TextInput
            value={course}
            onChangeText={setCourse}
            placeholder="e.g. Computer Science"
            placeholderTextColor="#9E9E9E"
            style={styles.input}
            accessibilityLabel="Choose course"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Type Message</Text>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Your message"
            placeholderTextColor="#9E9E9E"
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            accessibilityLabel="Type Message"
          />
        </View>

        <Button
          title="Enroll Now"
          onPress={handleEnrollPress}
          style={styles.enrollButton}
        />
      </View>
    </View>
  );
};

export default EnrollmentCard;

