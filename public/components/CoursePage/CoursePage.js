import { View, ScrollView, Image, FlatList } from "react-native";
import * as React from "react";
import { Button, List, MD3Colors, Text } from "react-native-paper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import { WebView } from 'react-native-webview'
import { Video } from "expo-av";
import styles from "./styles";
import indi from "../../../app/indexStyle";
import HorizontalLine from "../Parts/HorizontalLine";

const CoursePage = () => {
  return (
    <View>
      <View>
        <Video
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          style={styles.video}
        />
      </View>
      <View style={[indi.contNormalVCenter]}>
        <Button mode="text" onPress={() => console.log("Pressed")}>
          <FontAwesomeIcon name="thumbs-up" size={20} color="black" />
        </Button>
        <Button mode="text" onPress={() => console.log("Pressed")}>
          <FontAwesomeIcon name="comment" size={20} color="black" />
        </Button>
        <Button mode="text" onPress={() => console.log("Pressed")}>
          <FontAwesomeIcon name="share" size={20} color="black" />
        </Button>
      </View>
      <HorizontalLine />
      <View>
        <View>
          <Text variant="headlineMedium" style={[indi.mgL50]}>
            Description
          </Text>
          <View
            style={[indi.contNormal, indi.mgL100, { backgroundColor: "white" }]}
          >
            <Text variant="bodySmall">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
      <View style={indi.P20}>
        <List.Section>
          <List.Subheader>Suggestions</List.Subheader>
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
        </List.Section>

        {/* can remove after this till scrollview  */}
      </View>
    </View>
  );
};

export default CoursePage;
