import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { ImageBackground } from '@/components/ui/image-background';

import Login from '@/components/Login';

// import myImage from '@/assets/images/login.png'


export default function Index() {
    return (
        <Box className='flex flex-row'>

            <Image source={require('@/assets/images/login.png')}
                className='absolute md:relative w-full md:w-9/12 lg:w-8/12 h-screen'
            >
            </Image>
            <Login />
        </Box>
    )
}