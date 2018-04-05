import React, { Component } from 'react';
import {
    TextInput,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as globalStyles from '../../styles/global';

export default class MovieDetails extends Component {
    OMDB_SEARCH_DETAILS = 'http://www.omdbapi.com/?apikey=16bfb934&i=';

    componentDidMount = async () => {
      const res = await fetch(this.OMDB_SEARCH_DETAILS + this.state.movieId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const movie = await res.json();
      this.setState({movie: movie});
    }

    constructor(props) {
      super(props);
      const { params } = this.props.navigation.state;
      const movie = params ? params.movie : null;

      this.state = {
        movieId: movie.imdbID,
        movie: {
          Title: ''
        }
      };
    }

    static navigationOptions =  ({navigation}) => {
        return {
          title: navigation.state.params.movie.Title
          };
    }
    // static navigationOptions = {
    //     title: this.props.navigation.state.movie.Title
    // };

    render() {

      return (
          <Container style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
            <Content>
              <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{this.state.movie.Title}</Text>
                      <Text note>{this.state.movie.Released}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: this.state.movie.Poster}} style={{height: 300, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Text>
                      {this.state.movie.Plot}
                    </Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{color: '#87838B'}}>
                      <Icon name="ios-star-half" />
                      <Text>{this.state.movie.imdbRating}</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
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
