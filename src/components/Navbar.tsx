import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import randomImage from '../assets/random.jpg'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'15px'}>
        <Image src={randomImage}  boxSize={'100px'}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
