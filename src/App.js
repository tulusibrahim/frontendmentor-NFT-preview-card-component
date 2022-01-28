import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import mainImage from './images/image-equilibrium.jpg'
import ethIcon from './images/icon-ethereum.svg'
import timeIcon from './images/icon-clock.svg'
import viewIcon from './images/icon-view.svg'
import profileIcon from './images/image-avatar.png'
import { useState } from 'react'

function App() {
  const [isHover, setIsHover] = useState(false);
  return (
    <ChakraProvider>
      <Box fontFamily={'Outfit'} bg={'hsl(217, 54%, 11%)'} w={'100vw'} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box bg={'hsl(216, 50%, 16%)'} w={['80%', '60%', '25%']} h={'90%'} borderRadius={'15px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexDir={'column'}>
          <Box position={'relative'} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} w={'100%'} h={'50%'} display={'flex'} p={'15px'} justifyContent={'center'} alignItems={'center'}>
            {
              isHover ?
                <>
                  <Box bg={'hsl(178, 100%, 50%)'} borderRadius={'15px'} w={'92%'} h={'90%'} zIndex={2} position={'absolute'} opacity={.5}>
                    <Image position={'absolute'} top={'50%'} left={'50%'} zIndex={3} transform={'translate(-50%, -50%)'} src={viewIcon} borderRadius={'15px'} width={'20%'} height={'25%'} bgSize={'cover'} />
                  </Box>
                  <Image src={mainImage} zIndex={1} borderRadius={'15px'} width={'100%'} height={'100%'} />
                </>
                :
                <Image src={mainImage} borderRadius={'15px'} width={'100%'} height={'100%'} />
            }
          </Box>
          <Box color={'white'} w={'90%'} h={'25%'} display={'flex'} justifyContent={'space-between'} alignSelf={'center'} flexDir={'column'}>
            <Box fontWeight={'600'} fontSize={24} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
              Equilibrim #3429
            </Box>
            <Box color={'white'} fontSize={18}>
              Our Equilibrium collection promotes balance and calm.
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box display={'flex'} fontWeight={'bold'} flexDir={'row'} color={'hsl(178, 100%, 50%)'}>
                <Image src={ethIcon} /> &nbsp;
                0.014 ETH
              </Box>
              <Box display={'flex'} flexDir={'row'} color={'hsl(215, 51%, 70%)'}>
                <Image src={timeIcon} bgSize={'contain'} /> &nbsp;
                3 days left
              </Box>
            </Box>
          </Box>
          <Box h={'10%'} w={'90%'} display={'flex'} alignItems={'center'} borderTop={'1px hsl(215, 32%, 27%) solid'}>
            <Box w={'30px'} h={'30px'} display={'flex'} alignItems={'center'}>
              <Image w={'100%'} h={'100%'} border={'1px white solid'} borderRadius={'50px'} src={profileIcon} bgSize={'cover'} /> &nbsp;
            </Box>
            <Box color={'white'} pl={4} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
              Creation of <strong>Jules Wyvern</strong>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider >
  );
}

export default App;
