
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal:'15%',
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: '#363535',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  galleryRow: {
    marginTop:30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  gallerySection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
    height: 600, // Set a fixed height for percentage/flex to work; adjust as needed
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  photo40: {
    flex: 4,
    width: '100%',
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  photo60: {
    flex: 6,
    width: '100%',
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
    photo50: {
    flex: 5,
    width: '100%',
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  emptyText: {
    color: '#888',
    fontStyle: 'italic',
    padding: 20,
    textAlign: 'center',
  },
});
