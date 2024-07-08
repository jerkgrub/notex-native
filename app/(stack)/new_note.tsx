import "react-native-reanimated";
import { Button, H1, H3, Input, View, XStack, YStack } from "tamagui";

export default function new_note() {
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
      bc="#CCCCCC"
      alignItems="center"
      >
      <H3
      style={{ whiteSpace: 'nowrap' }}
      >Create New Note</H3>
      <Button
      marginLeft={'auto'}
      bc="#CCCCCC"
      fontWeight={'bold'}
      >Create New Note</Button>
      </XStack>
      

      </YStack>
    </View>
  );
}
