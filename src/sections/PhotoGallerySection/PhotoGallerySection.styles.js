import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal:'10%',
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  galleryRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  gallerySection: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
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
