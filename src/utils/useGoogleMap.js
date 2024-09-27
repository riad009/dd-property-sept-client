import { useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyBlM2fB21KV6xmzHDyhbuoOmBbnxR3qnYQ"; // API key hardcoded

const useGoogleMapsLoader = (libraries = ["places"], version = "weekly") => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    version,
    libraries,
  });

  return { isLoaded, loadError };
};

export default useGoogleMapsLoader;
