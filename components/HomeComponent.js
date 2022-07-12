import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Card, Image } from "react-native-elements";

import { BOOKS } from "../shared/books";

class RenderItem extends Component {
  render() {
    const book = this.props.book;
    if (book != null) {
      return (
        <Card>
          <Image
            source={book.imageLink}
            style={{
              width: "100%",
              height: 100,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.FeaturedTitle>{book.name}</Card.FeaturedTitle>
            <Card.FeaturedSubtitle>{book.author}</Card.FeaturedSubtitle>
          </Image>
          <Text style={{ margin: 10 }}>{book.description}</Text>
        </Card>
      );
    }
    return <View />;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
    };
  }
  render() {
    const book = this.state.books.filter((book) => book.feature === true)[0];
    return (
      <ScrollView>
        <RenderItem book={book} />
        <RenderItem book={book} />
        <RenderItem book={book} />
      </ScrollView>
    );
  }
}
export default Home;
