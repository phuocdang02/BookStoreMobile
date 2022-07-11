import React, { Component } from "react";
import { View, FlatList, Dimensions, ImageBackground, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { CARS } from "../shared/cars";
import styles from "../shared/styles";
import styles1 from "../shared/styles1";
class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.cars}
          renderItem={({ item,index }) => this.renderCarListItem(item, index)}
          showsVerticalScrollIndicator={false}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>
    );
  }

  renderCarListItem(item, index) {
    /* const { navigate } = this.props.navigation; */
    return (
      <ListItem
        key={index}
        onPress={() => navigate("CarItem", { carId: item.id })}
      >
        {/* <Avatar source={item.image} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.tagline}</ListItem.Subtitle>
        </ListItem.Content> */}
        <ListItem.Content style={styles.carContainer}>
          <ImageBackground source={item.image} style={styles.image} />

          <View style={styles.titles}>
            <Text style={styles.title}></Text>
            <Text style={styles.subtitle}>
              {item.tagline}{" "}
              <Text style={styles.subtitleCTA}>{item.taglineCTA}</Text>
            </Text>
          </View>

          {/* <View style={styles.buttonsContainer}>
            <styles1
              type="primary"
              content={"Custom Order"}
              onPress={() => {
                console.warn("Custom Order was pressed");
              }}
            />

            <styles1
              type="secondary"
              content={"Existing Inventory"}
              onPress={() => {
                console.warn("Existing Inventory was pressed");
              }}
            />
          </View> */}
        </ListItem.Content>
      </ListItem>
    );
  }
}
export default CarList;
