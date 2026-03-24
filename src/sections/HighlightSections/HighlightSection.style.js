import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.large,
    backgroundColor: colors.background,
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: spacing.large,
    width: '100%',
  },
  highlightCard: {
    width: '48%',
    marginBottom: spacing.large,
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
  highlightCardMobile: {
    width: '100%',
  },
  iconContainer: {
    fontSize: 40,
    marginBottom: spacing.small,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  highlightDescription: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;
