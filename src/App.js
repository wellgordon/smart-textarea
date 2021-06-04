import * as React from 'react'
import './App.css';
import { Container, TextArea, CharacterCountDiv, CharacterCountColumn, MessageContainer, Message, Button } from './StyleComponents'


function App() {

  const maxLen = 280
  const [bufferText, setBufferText] = React.useState('')
  const [messages, setMessages] = React.useState([])

  function handleSubmit() {
    if(messages.length < 2 & bufferText.length > 0) {
      setMessages([...messages, bufferText])
      let textarea = document.getElementById('text-input')
      textarea.value = ''
    }
  }

  return (
    <div className="App">
      <Container>
          <MessageContainer>
            {messages.map(message => {
              return <Message key={message}>{message}</Message>
            })}
          </MessageContainer>
          <TextArea 
            id='text-input'
            placeholder='start typing a message less than 280 characters...' 
            onChange={(e) => setBufferText(e.target.value)}
            maxLength={maxLen}
          />
          <CharacterCountDiv>
            <CharacterCountColumn>
              <p style={maxLen - bufferText.length < 29 ? {color: 'red'} : {color: 'black'}}>
                {maxLen - bufferText.length}
              </p>
            </CharacterCountColumn>
            <CharacterCountColumn>
              <Button onClick={handleSubmit}>
                Tweet It!
              </Button>
            </CharacterCountColumn>
            <CharacterCountColumn>
              <p>
                {(maxLen - bufferText.length) / 280 <= .1 && `${Math.floor((maxLen - bufferText.length) / 280 * 100)}% left`}
              </p>
            </CharacterCountColumn>          
          </CharacterCountDiv>
      </Container>
    </div>
  );
}

export default App;
