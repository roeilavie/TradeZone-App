import { Text, Card } from "@rneui/themed";
import { Image, View, Linking, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NewsItem({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];
  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  return (
    <Card containerStyle={{ borderRadius: 10, backgroundColor: "#1F2A40" }}>
      <Pressable onPress={() => Linking.openURL(item.url)}>
        <Card.Title
          style={{
            textAlign: "left",
            color: "#fff",
            fontFamily: "OpenSansBold",
          }}
        >
          {item.title}
        </Card.Title>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 20, width: 20, marginBottom: 10 }}
            source={{
              uri: `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website}&size=20`,
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              color: "#e0e0e0",
              fontFamily: "OpenSansBold",
            }}
          >
            {item.source.name}
          </Text>
        </View>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, borderRadius: 10 }}
          source={{
            uri: item.urlToImage,
          }}
        />
        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
            color: "#fff",
            fontFamily: "OpenSans",
          }}
        >
          {item.description}
        </Text>
      </Pressable>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{ marginTop: 5, color: "#e0e0e0", fontFamily: "OpenSansBold" }}
        >
          Published at: {formatTime}
        </Text>
        <Ionicons
          name="heart-outline"
          size={25}
          style={{ textAlign: "right", color: "#fff" }}
        />
      </View>
    </Card>
  );
}
