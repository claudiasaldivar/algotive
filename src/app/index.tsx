//Component
import AppUI from './AppUI';

//Context
import { VideoProvider } from '../context/VideoContext';

function App() {
  return (
    <VideoProvider>
      <AppUI />
    </VideoProvider>
  )
}

export default App;
