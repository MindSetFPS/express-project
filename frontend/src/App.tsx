import { useState } from 'react'
import { Container, Flex, Text, Button, Heading } from "@radix-ui/themes";
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar/>
      <Flex direction="column" gap="2">
        <Heading color='pink' size="9" >Hello from Radix Themes :)</Heading>
        <Button>Let's go</Button>
      </Flex>
    </Container>
  )
}

export default App
