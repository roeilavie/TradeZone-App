import NewsItem from "./NewsItem";
import { View } from "react-native";

export default function NewsGrid({ items }) {
  return (
    <View className="news-grid">
      {items.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </View>
  );
}
