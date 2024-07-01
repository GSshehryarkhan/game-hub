import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import randomImage from '../assets/random.jpg'

const Navbar = () => {
  return (
    <HStack>
        <Image src={randomImage}  boxSize={'100px'}/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar
