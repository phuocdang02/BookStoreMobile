import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Image, Icon } from "react-native-elements";

import { BOOKS } from "../shared/books";

class RenderBook extends Component {
  render() {
    const book = this.props.book;
    if (book != null) {
      return (
        <View>
          <Image
            source={book.imageLink}
            style={{
              width: "100%",
              height: "100%",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.FeaturedTitle style={{ 
              textAlign: "center", 
              color: "#ffd9dd" }}>
              {book.title}
            </Card.FeaturedTitle>
          </Image>
          <Text
          style={{}}>
            Description</Text>
          <Text style={{ margin: 10 }}>{book.description}</Text>
          <Icon
            raised
            reverse
            type="font-awesome"
            color="#ffcdd2"
            name={this.props.favorite ? "heart" : "heart-o"}
            onPress={() => this.props.onPressFavorite()}
          />
        </View>
      );
    }
    return <View />;
  }
}

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
      favorites: [],
    };
  }
  render() {
    const bookId = parseInt(this.props.route.params.bookId);
    const book = this.state.books[bookId];
    const favorite = this.state.favorites.some((el) => el === bookId);
    return (
      <ScrollView>
        <RenderBook
          book={book}
          favorite={favorite}
          onPressFavorite={() => this.markFavorite(bookId)}
        />
      </ScrollView>
    );
  }

  markFavorite(bookId) {
    this.setState({ favorites: this.state.favorites.concat(bookId) });
  }
}
export default Book;
