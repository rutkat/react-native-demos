import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';

export default function App() {

  const srcURI = Platform.OS !== 'web' ? 'https://expo.dev' : '<iframe width="100%" height="50%" src="https://expo.dev" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'; 
  
  return (
    <WebView
      originWhitelist={['*']} 
      source={{uri: srcURI }}
      style={{marginTop: 20}}
    />
  )
}
