import { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Card, ScrollView, Text } from "tamagui";
import { Button, H3, XStack, YStack } from "tamagui";
import AxiosInstance from "@/components/backend/AxiosInstance";

export default function Edit() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        console.log(`Fetching note with id: ${id}`); // Add logging here
        const response = await AxiosInstance.get(`/note/${id}`);
        console.log("Fetched note data:", response.data); // Add logging here
        setNote(response.data.Note);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    if (id) fetchNote();
  }, [id]);

  if (!note) {
    return (
      <ScrollView p={"$5"}>
        <Text>Loading...</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView p={"$5"}>
      <YStack mb={"$5"}>
        {/* top container for label, search and new note button */}
        <XStack gap={"$5"} alignItems="center" justifyContent="space-between">
          <H3 style={{ whiteSpace: "nowrap" }}>
            You are now editing {note.note_title}
          </H3>

          <XStack gap={"$2"}>
            <Button bc="#CCCCCC" onPress={() => router.back()}>
              Back
            </Button>
            <Button bc="#CCCCCC">Save</Button>
          </XStack>
        </XStack>
      </YStack>

      <YStack>
        <Card bc="lemonchiffon" width={"100%"} flex={1} height={"100vh"}>
          <Text>{note.note_content}</Text>
        </Card>
      </YStack>
    </ScrollView>
  );
}
