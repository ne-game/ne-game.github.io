import { useState } from 'react';
import './App.css';
import { Container, Button, Text, ScaleFade } from '@chakra-ui/react';

import Screen from './components/Screen';

function App() {
  const [ currentScreen, setCurrentScreen ] = useState(0);
  const [ isOpen, setIsOpen ] = useState(true);

  const updateScreen = (newScreen) => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentScreen(newScreen);
      setIsOpen(true);
    }, 100);
  };

  return (
    <ScaleFade initialScale={0.9} in={isOpen}>
      <Container maxW='3xl' h='100%' py='50px' centerContent>
        <Text as='b' my='5'>{currentScreen}</Text>
        {
          currentScreen === 0
          ? <>
              <Text fontSize='4xl' as='b' my='20px'>NE Game</Text>
              <Button
                colorScheme='blue'
                size='lg'
                w='200px'
                onClick={() => updateScreen(1)}
              >Start</Button>
            </>
          : <Screen currentScreen={currentScreen} onUpdateScreen={updateScreen} />
        }
      </Container>
    </ScaleFade>
  );
}

export default App;
