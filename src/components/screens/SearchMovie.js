import React, { Component } from 'react';
import {
    TextInput,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as globalStyles from '../../styles/global';

export default class SearchMovie extends Component {
    OMDB_SEARCH = 'http://www.omdbapi.com/?apikey=16bfb934&s=';
    IMAGE_PLACEHOLDER = 'http://theonyxtheatre.com/wp-content/themes/onyx/img/poster-placeholder.png';

    constructor(props) {
      super(props);
      this.state = {
        text: '',
        json: ''
      };
    }

    static navigationOptions = {
        title: 'Buscar Filmes na Api OMDB'
    };

    _onSubmitEditing = async (e) => {
      const res = await fetch(this.OMDB_SEARCH + this.state.text, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const movies = await res.json();
      this.setState({json: movies.Search});
    }

    showDetails = (item) => {
      this.props.navigation.navigate("Details", {movie: item});
    }

    _renderItem = ({item}) => (
      <Card>

        <CardItem>
          <Left>
            <Body>
              <Text>{item.Title}</Text>
              <Text note>{item.Year}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody button onPress={() => {this.showDetails(item)} }>
          <Image defaultSource={require('../../../res/poster-placeholder.png')} source={{uri: item.Poster}} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        {/* <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem> */}
      </Card>
    )

    _keyExtractor = (item, index) => item.imdbID;

    render() {
        return (
            <Container style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>

              <Content>
                <TextInput
                  style={{height: 40, fontSize: 17}}
                  placeholder="Digite o título do filme"
                  autoFocus = {true}
                  onChangeText={(text) => this.setState({text: text})}
                  onSubmitEditing={this._onSubmitEditing}
                />

                <FlatList
                  data={this.state.json}
                  extraData={this.state}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
              </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
