import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: spacing.medium,
    padding: spacing.medium,
    backgroundColor: colors.white,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardContainerMobile: {
    flex: 1,
  },
  iconContainer: {
    fontSize: 48,
    marginBottom: spacing.medium,
  },
  numberText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary || '#1976D2',
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary || '#333',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default styles;
