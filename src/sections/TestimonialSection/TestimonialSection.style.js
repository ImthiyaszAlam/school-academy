import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';


export default StyleSheet.create({
    container: {
        padding: spacing.md,
        paddingHorizontal: '10%',
        minHeight: layout.sectionHeight,
        backgroundColor: colors.surface,
    },
    title: {
        ...typography.headingMedium,
        color: colors.textPrimary,
        marginBottom: spacing.sm,
    },
});