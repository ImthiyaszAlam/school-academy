import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 2,
    paddingRight: 12,
  },
  right: {
    flex: 1,
    alignItems: 'center',
  },
  quote: {
    fontSize: 20,
    lineHeight: 30,
    color: '#111827',
    fontWeight: '600',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    marginBottom: 12,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  role: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d5db',
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: '#0f172a',
    width: 20,
    borderRadius: 10,
  },
});
