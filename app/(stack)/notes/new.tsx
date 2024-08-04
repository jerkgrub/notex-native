import AxiosInstance from "@/components/backend/AxiosInstance";
import NavTool from "@/components/navigation/NavTool";
import { Plus, Square } from "@tamagui/lucide-icons";
import axios from "axios";
import { Link } from "expo-router";
import { useState } from "react";
import "react-native-reanimated";
import { ScrollView, Text } from "tamagui";
import { Button, H1, H3, Input, View, XStack, YStack, TextArea } from "tamagui";

export default function NewNote() {
  const { navigateTo } = NavTool();
  const [createdNote, setCreatedNote] = useState({
    note_title: "",
    note_content: "",
    tags: [],
    user_id: "",
    is_favorite: false,
    is_archived: false,
  });

  const handleCreateNote = () => {
    AxiosInstance.post('/note/new', createdNote)
      .then((response) => {
        console.log("Note created successfully:", response.data);
        navigateTo('/', true)
      })
      .catch((error) => {
        console.error("Error creating note:", error);
      });
  };

  return (
    <ScrollView p={"$5"}>
      <YStack>
        {/* top container for label, search and new note button */}
        <XStack gap={"$5"} alignItems="center">
          <H3 style={{ whiteSpace: "nowrap" }}>Create New Note</H3>
        </XStack>
      </YStack>

      <YStack width={"100%"} gap={"$3"}>
        <YStack>
          <Text>Note Title</Text>
          <Input
            onChangeText={(text) =>
              setCreatedNote({ ...createdNote, note_title: text })
            }
            value={createdNote.note_title}
            width={"100%"}
          />
        </YStack>

        <YStack>
          <Text>Note Content</Text>
          <TextArea
            onChangeText={(text) =>
              setCreatedNote({ ...createdNote, note_content: text })
            }
            value={createdNote.note_content}
          />
        </YStack>

        <XStack alignSelf="flex-end" gap={"$2"}>
          <Link href="/" asChild>
            <Button bc="#CCCCCC">Cancel</Button>
          </Link>
          <Button onPress={handleCreateNote} bc="#F4FFA1">
            Create Note
          </Button>
        </XStack>
      </YStack>
    </ScrollView>
  );
}