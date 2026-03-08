import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './PhotoGallerySection.styles';

const photos = [
  { uri: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { uri: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { uri: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { uri: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { uri: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { uri: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const PhotoGallerySection = () => {
  // Divide photos into three equal sections

  // Place two photos in each section vertically
  const sectionCount = 3;
  const sectionPhotos = [[], [], []];
  for (let i = 0; i < sectionCount; i++) {
    sectionPhotos[i] = photos.slice(i * 2, i * 2 + 2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Photo Gallery</Text>
      <View style={styles.galleryRow}>
        {[0, 1, 2].map((sectionIdx) => (
          <View style={styles.gallerySection} key={sectionIdx}>
            {sectionPhotos[sectionIdx].length === 0 ? (
              <Text style={styles.emptyText}>No photos</Text>
            ) : (
              sectionPhotos[sectionIdx].map((photo, idx) => (
                <Image key={idx} source={photo} style={styles.photo} />
              ))
            )}
          </View>
        ))}
      </View>
    </View>
  );
};


export default PhotoGallerySection;
