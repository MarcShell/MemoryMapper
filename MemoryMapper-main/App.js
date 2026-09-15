import React from "react";
import Navigation from "./navigation/navigation";
import { useEffect } from "react";
import {
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { requestForegroundPermissionsAsync } from "expo-location";
import { initDatabase, insertDummyDataIfNeeded } from "./helper/databaseHelper";

function App() {
  useEffect(() => {
    (async () => {
      await requestCameraPermissionsAsync();
      await requestMediaLibraryPermissionsAsync();
      await requestForegroundPermissionsAsync();

      initDatabase();
      insertDummyDataIfNeeded();
    })();
  }, []);

  return <Navigation />;
}

export default App;
