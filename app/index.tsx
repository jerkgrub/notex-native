import "react-native-reanimated";
import { Button, H1, H3, Input, View, XStack, YStack } from "tamagui";

export default function index() {
  return (
    <View>
      <YStack 
      justifyContent="center"
      alignItems="center"
      p={'$5'}
      >
      
      {/* top container for label, search and new note button */}
      <XStack
      gap={'$5'}
      flex={1}
      width={'100%'}
      alignItems="center"
      >
      <H3
      style={{ whiteSpace: 'nowrap' }}
      >My Notes</H3>
      <Input 
      width={'100%'}
      placeholder={'Search..'}
      />
      <Button
      bc="#CCCCCC"
      fontWeight={'bold'}
      >Create New Note</Button>
      </XStack>
      

      </YStack>
    </View>
  );
}
