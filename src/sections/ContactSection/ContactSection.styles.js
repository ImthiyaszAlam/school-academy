import { StyleSheet } from 'react-native';
import { colors, spacing, typography,layout } from '../../theme';

export default StyleSheet.create({
  backgroundImage: {
    width: '100%',
    paddingVertical: spacing.large,
    height: layout.sectionHeight,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)', 
    zIndex: 0,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingVertical: spacing.large,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    zIndex: 1,
  },
  root: {
    justifyContent: 'center',
  },
  inner: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  left: {
    flex: 1,
    minWidth: 220,
    maxWidth: 420,
    paddingRight: 12,
  },
  right: {
    flex: 1,
    minWidth: 220,
    maxWidth: 520,
  },
  heading: {
    fontSize: typography.large + 2,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  label: {
    fontSize: typography.small,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 6,
  },
  text: {
    color: colors.textSecondary,
    marginTop: 4,
    fontSize: typography.medium,
  },
  whatsapp: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappText: {
    fontSize: 16,
  },
  whatsappNumber: {
    marginLeft: 8,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  formHeading: {
    fontSize: typography.medium + 2,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border || '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    color: colors.textPrimary,
    backgroundColor: colors.backgroundElevated || '#fff',
  },
  textarea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  submitText: {
    color: colors.onPrimary || '#fff',
    fontWeight: '700',
  },
});
