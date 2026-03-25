

import React from 'react';
import { View, Text, Image, Pressable, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import IconButton from '../util/IconButton/IconButton';
import styles from './Navbar.styles';
import logo from '../../../assets/icon.png';

const NAV_ITEMS = [
  { label: 'Home', key: 'home' },
  { label: 'About Us', key: 'about' },
  { label: 'Academics', key: 'academics' },
  { label: 'Admissions', key: 'admissions' },
  { label: 'Blog', key: 'blog' },
  { label: 'Mission', key: 'mission' },
  { label: 'Teachers', key: 'teachers' },
];

const Navbar = ({ onNavPress, onApplyNow }) => {
  return (
    <View style={styles.container}>
      {/* Left: Logo */}
      <View style={styles.left}>
        <Image source={logo} style={styles.logo} resizeMode="contain" accessibilityLabel="School Logo" />
      </View>

      {/* Center: Navigation Items */}
      <View style={styles.center}>
        {NAV_ITEMS.map((item) => (
          <Pressable
            key={item.key}
            style={({ hovered }) => [styles.navItem, hovered && styles.navItemHovered]}
            android_ripple={Platform.OS === 'android' ? { color: 'transparent' } : undefined}
            accessibilityRole="link"
            accessibilityLabel={item.label}
            onPress={() => onNavPress && onNavPress(item.key)}
          >
            <Text style={styles.navItemText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>

      {/* Right: Apply Now Button */}
      <View style={styles.right}>
        <IconButton icon="send" text="Apply Now" onPress={onApplyNow} />
      </View>
    </View>
  );
};

export default Navbar;
