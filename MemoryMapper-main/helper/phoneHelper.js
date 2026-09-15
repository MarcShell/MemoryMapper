import {
  launchImageLibraryAsync,
  launchCameraAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { getCurrentPositionAsync } from "expo-location";

const pickImage = async (callback) => {
  let result = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    callback(result.assets[0].uri);
  }
};

const pickImageFromCamera = async (callback) => {
  let result = await launchCameraAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    callback(result.assets[0].uri);
  }
};

const getCurrentLocationAndSetStates = async (callbackLongitude, callbackLatitude) => {
  try {
    let location = await getCurrentPositionAsync({});

    callbackLongitude(location.coords.longitude.toString());
    callbackLatitude(location.coords.latitude.toString());
  } catch (error) {
    console.error("Error getting location:", error);
  }
};

export { pickImage, pickImageFromCamera, getCurrentLocationAndSetStates };
