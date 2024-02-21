import AppUI from './AppUI';
import { VideoProvider } from '../context/VideoContext';

function App() {
  return (
    <VideoProvider>
      <AppUI />
    </VideoProvider>
  )
}

export default App;
