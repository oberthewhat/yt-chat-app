import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'


const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID='94e71981-37ab-401e-8a86-d8478bfcc471'
      userName='oberthewhat'
      userSecret='ajwo0416'
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  )
}

export default App;