import React from 'react'
import './App.css';
import Message from './Message.js';
import { AUTHORS } from './constants'

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

    return (
        <div className="app">
                {messageList.map((message, index) => (
                    <Message 
                        key={index}
                        text={message.text}
                        author={message.author}
                    />
                ))} 
            <form className="app__form" onSubmit={handleMessageSubmit}>
                <input
                    required
                    className="bordered"
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onChange={handleMessageChange}
                />
                <button>Отправить</button>
            </form>
        </div>
    )
}
export default App;