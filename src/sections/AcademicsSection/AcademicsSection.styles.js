import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';

export default StyleSheet.create({
      container: {
        paddingHorizontal:spacing.paddingHorizontal,
        height: layout.sectionHeight,
        backgroundColor: colors.academicsBg,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.large,
      },
      title: {
        ...typography.headingLarge,
        color: colors.text,
        textAlign: 'center',
      },
      subtitle: {
        ...typography.body,
        color: colors.textSecondary || colors.text,
        textAlign: 'center',
        marginBottom: spacing.md,
      },
});
