import MessageForm from "./MessageForm"
import TheirMessage from "./TheirMessage"
import MyMessage from "./MyMessage"

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat]

    const renderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map(( key, index) => {
            const message =messages[key];
            const lastMessageKey = index === 0 ? null: key[index -1]
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className='message-block'>
                        {
                            isMyMessage
                            ?
                            <MyMessage />
                            :
                            <TheirMessage />

                        }

                    </div>
                </div>
            )
        })

    } 
    renderMessages()

    console.log(chat, userName, messages)
    
    return (
        <div>
            this is your chat feed
        </div>
    )
}

export default ChatFeed