import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import "react-native-reanimated";
import { Platform, Pressable, StyleSheet } from "react-native";
import {
  Button,
  Card,
  CardHeader,
  H1,
  H2,
  H3,
  Image,
  Input,
  Paragraph,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import { Activity, Airplay, Plus } from "@tamagui/lucide-icons";

export default function index() {
  return (
    <View alignItems="center" p={"$5"} gap={'$5'}>
      <YStack p={"$1"} width={"100%"}>
        {/* top container for label, search and new note button */}
        <XStack gap={"$2"} width={"100%"} justifyContent="space-between">
          <H3 style={{ whiteSpace: "nowrap" }}>My Notes</H3>
          <Input
            width={Platform.OS === "ios" ? "45%" : "100%"}
            placeholder={"Search.."}
          />

          <Link
            style={{ textDecorationLine: "none" }}
            href="/(stack)/new_note"
            asChild
          >
            <Button bc="#CCCCCC" fontWeight={"bold"} icon={Plus}>
              New
            </Button>
          </Link>
        </XStack>
      </YStack>
      <XStack width={"100%"} height={"100%"} 
      flexWrap="wrap"
      >
        <Link
        href={'/(stack)/note/[id]'}
        >
        <Card bordered
        bc={"lemonchiffon"}        
        >
          <Card.Header padded>
            <H2>Note Title</H2>
            <Paragraph>CHOIFS hiojijoiojio jiji</Paragraph>
          </Card.Header>
          {/* any other components */}
          <Card.Background>
          </Card.Background>
        </Card>
        </Link>

      </XStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
