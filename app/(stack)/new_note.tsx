import { Plus, Square } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import "react-native-reanimated";
import { ScrollView, Text, TextArea } from "tamagui";
import { Button, H1, H3, Input, View, XStack, YStack } from "tamagui";

export default function new_note() {
  return (
    <ScrollView
    p={"$5"}>

      <YStack>
        {/* top container for label, search and new note button */}
        <XStack
          gap={"$5"}
          alignItems="center"
        >
          <H3 style={{ whiteSpace: "nowrap" }}>Create New Note</H3>
        </XStack>
      </YStack>

      <YStack
      width={'100%'}
      gap={'$3'}
      >
        <YStack> 
        <Text>Note Title</Text>
        <Input width={'100%'}/>
        </YStack>

        <YStack> 
        <Text>Note Content</Text>
        <TextArea />
        </YStack>

        <XStack
        alignSelf="flex-end"
        gap={'$2'}
        >
        
        <Link href="/" asChild>
        <Button
        bc="#CCCCCC"
        >Cancel</Button>
        </Link>

        <Button
        bc="#F4FFA1"
        >Create Note</Button>
        </XStack>
      </YStack>

    </ScrollView>
  );
}
