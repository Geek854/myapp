import React from 'react'
import './App.css';
import Message from './Message.js';
import { AUTHORS } from './constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function App() {
    const [messageList, setMessageList] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')


    React.useEffect(() => {
        if (
            messageList.length&&
            messageList[messageList.length-  1].author !== AUTHORS.BOT
        ) {
            setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHORS.BOT, text: 'Привет' },
                    ]),
                1500
            )
        }
    }, [messageList])

    const handleMessageChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleMessageSubmit = (e) => {
        e.preventDefault()

        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: inputValue },
        ])
        setInputValue('')
    }
    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Чат 1' },
        { id: 'chat2', name: 'Чат 2' },
        { id: 'chat3', name: 'Чат 3' },
    ])
    const [currentChat, setCurrentChat] = React.useState(chats[0])
    const handleChangeChat = (chat) => setCurrentChat(chat)
    return (
        <div className="app">
            <div>
            <List>
                {chats.map((chat) => {
                    return (
                    <ListItem
                        button
                        key={chat.id}
                        selected={chat.id === currentChat.id}
                        onClick={() => handleChangeChat(chat)}
                    >
                        {chat.name}
                    </ListItem>)
                })}
            </List>
            </div>
            
            <div className="app__message">
                {messageList.map((message, index) => (
                <Message 
                    key={index}
                    text={message.text}
                    author={message.author}
                />
                ))} 
            <form className="app__form" onSubmit={handleMessageSubmit}>
            <TextField 
                fullWidth 
                required
                autoFocus
                label="Сообщение"
                placeholder="Введите сообщение"
                // variant="outlined"
                value={inputValue}
                onChange={handleMessageChange}
                />
                {/* <button>Отправить</button> */}
                <Button variant="contained" color="primary">
                Primary
                </Button>
            </form>
        </div>
                
        </div>
    )
}
export default App;












