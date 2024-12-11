import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import { useFonts, } from 'expo-font';

export default function AppLogo() {

  const [fontsLoaded] = useFonts({
    "Bagel-Fat-One": require('@/assets/fonts/BagelFatOne-Regular.ttf'),
  })

  return (
      <Heading
        className="
                font-['Bagel-Fat-One'] 
                bg-gradient-to-r 
                from-[#FF0F7B]  
              to-[#F89B29] 
                inline-block text-transparent bg-clip-text 
                px-2
                "
        size='2xl'
      >
        mefit
      </Heading>
  )
}