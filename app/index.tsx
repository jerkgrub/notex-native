import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import "react-native-reanimated";
import { Platform, StyleSheet } from "react-native";
import { Button, H1, H3, Image, Input, Text, View, XStack, YStack } from "tamagui";
import { Activity, Airplay, Plus } from "@tamagui/lucide-icons";

export default function index() {
  return (
    <View alignItems="center" p={"$5"}>
      <YStack p={"$1"} width={"100%"} height={"100%"}>
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
        

        <Image
        mt={"$15"}
        alignSelf="center"
      source={{
        uri: 'https://i.imgur.com/Zm00itL.png',
        width: 200,
        height: 300,
      }}
    />
      </YStack>


      



    

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
