import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

export default StyleSheet.create({
  background: {
    height: layout.sectionHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: spacing.large,
    paddingLeft: '10%',
  },
  heading: {
    ...typography.headingLarge,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subheading: {
    ...typography.headingMedium,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  paragraph: {
    ...typography.body,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: spacing.lg,
    maxWidth: 400,
    opacity: 0.95,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  button: {
    minWidth: 120,
    marginHorizontal: spacing.xs,
  },
  buttonSecondary: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
  },
});
