import { Plus, Square } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import "react-native-reanimated";
import { Card, ScrollView, Text, TextArea } from "tamagui";
import { Button, H1, H3, Input, View, XStack, YStack } from "tamagui";

export default function note_id() {
  return (
    <ScrollView p={"$5"}>
      <YStack
      mb={'$5'}
      >
        {/* top container for label, search and new note button */}
        <XStack gap={"$5"} alignItems="center" justifyContent="space-between">
          <H3 style={{ whiteSpace: "nowrap" }}>
            You are now viewing (note title)
          </H3>

          <XStack gap={"$2"}>
            <Link href="/" asChild>
              <Button bc="#CCCCCC">Back</Button>
            </Link>

            <Button bc="#CCCCCC">Edit Note</Button>
          </XStack>
        </XStack>
      </YStack>

      <YStack
        
      >
        <Card
        bc="lemonchiffon"
        width={'100%'}
        flex={1}
        height={'100vh'}
        >
            <Text>
                Note Content
            </Text>
        </Card>

      </YStack>
    </ScrollView>
  );
}
