import { StyleSheet } from 'react-native';

const CARD_HEIGHT = 120;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#722828',
    margin: 6,
    borderTopLeftRadius: CARD_HEIGHT / 2,
    borderTopRightRadius: CARD_HEIGHT / 2,
    borderBottomRightRadius: CARD_HEIGHT / 2,
    borderBottomLeftRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 12,
    minWidth: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 22,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#757575',
  },
});

export default styles;