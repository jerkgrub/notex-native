import {
  Button,
  Card,
  CardHeader,
  H2,
  H3,
  Input,
  Paragraph,
  View,
  XStack,
  YStack,
} from "tamagui";
import { Link } from "expo-router";
import "react-native-reanimated";
import { Platform } from "react-native";
import { Plus } from "@tamagui/lucide-icons";
import AxiosInstance from "@/components/backend/AxiosInstance";
import { useEffect, useState } from "react";

export default function Index() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await AxiosInstance.get("/note/all");
        setNotes(response.data.notes || response.data.Notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <View alignItems="center" p={"$5"} gap={"$5"}>
      
      <YStack p={"$1"} width={"100%"}>
        {/* top container for label, search and new note button */}
        <XStack gap={"$2"} width={"100%"} justifyContent="space-between">
          <H3 style={{ whiteSpace: "nowrap" }}>My Notes</H3>
          <Input
            width={Platform.OS === "ios" ? "45%" : "100%"}
            placeholder={"Search.."}
          />

          <Link href="/(stack)/new_note" asChild>
            <Button bc="#CCCCCC" fontWeight={"bold"} icon={Plus}>
              New
            </Button>
          </Link>
        </XStack>
      </YStack>

      {/* notes container */}
      <XStack width={"100%"} height={"100%"} flexWrap="wrap">
        {notes.map((note) => (
          <Link href={`/note/${note._id}`} key={note._id}>
            <Card bordered bc={"lemonchiffon"}>
              <CardHeader padded>
                <H2>{note.note_title}</H2>
                <Paragraph>{note.note_content}</Paragraph>
              </CardHeader>
              <Card.Background></Card.Background>
            </Card>
          </Link>
        ))}
      </XStack>

    </View>
  );
}
