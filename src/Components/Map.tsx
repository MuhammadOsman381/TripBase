import * as React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Mapbox from '@rnmapbox/maps';

// Initialize Mapbox
// Mapbox.setAccessToken("");

export default function Map({ closeBottom }) {
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const [hasUserInteracted, setHasUserInteracted] = React.useState(false);
  const mapRef = React.useRef<Mapbox.MapView>(null);
  const cameraRef = React.useRef<Mapbox.Camera>(null);
  const rotationRef = React.useRef(0);
  const animationFrameRef = React.useRef<number>();
  const lastTimeRef = React.useRef(Date.now());

  const handleUserInteraction = React.useCallback(() => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [hasUserInteracted]);

  const handleBottomSheetClose = () => {
    console.log('Atmosphere clicked!');
    closeBottom();
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Mapbox.MapView
          ref={mapRef}
          style={styles.map}
          styleURL={Mapbox.StyleURL.Satellite}
          projection="globe"
          pitchEnabled={true}
          rotateEnabled={true}
          zoomEnabled={true}
          scrollEnabled={true}
          onDidFinishLoadingMap={() => setMapLoaded(true)}
          onTouchStart={handleUserInteraction}
          onPanStart={handleUserInteraction}
          onPinchStart={handleUserInteraction}
          scaleBarEnabled={false}
          attributionEnabled={false}
          logoEnabled={false}
        // onPress={handleBottomSheetClose}
        >
          <Mapbox.Camera
            ref={cameraRef}
            defaultSettings={{
              centerCoordinate: [0, 0],
              zoomLevel: 0.8,
              pitch: 0,
              heading: 0,
              padding: { top: 0, bottom: 0, left: 0, right: 0 },
            }}
            animationMode="easeTo"
            animationDuration={0}
          />
          {/* Clickable Atmosphere */}
          <TouchableWithoutFeedback onPress={handleBottomSheetClose}>
              <Mapbox.Atmosphere
                style={{
                  color: 'rgb(186, 210, 235)',
                  highColor: 'rgb(36, 92, 223)',
                  horizonBlend: 0.015,
                  spaceColor: 'rgb(11, 11, 25)',
                  starIntensity: 0.4,
                }}

              />
          </TouchableWithoutFeedback>
        </Mapbox.MapView>
      </View>

      {!mapLoaded && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Loading globe...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  map: {
    flex: 1,
  },
  atmosphereContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    padding: 8,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 14,
    color: '#ffffff',
  },
});
