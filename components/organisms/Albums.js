import React, { Component,useEffect} from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native'
import { Card, CardItem, Body} from 'native-base';
import axios from 'axios'
import ErrorPage from '../atoms/Error';

export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {albums: [],IsLoad: false, IsError: false
        };
    }
    getAlbums = async () => {
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/photos');
            this.setState({ albums: data.data, IsLoad: true, IsError: false });            
        } catch (e) {
            this.setState({ IsLoad: true, IsError: true });
            console.log(e)


        }

    }

    componentDidMount() {
        this.getAlbums()
   }

    getDetail = (id) => {        
        this.props.getDetails(id)
    }

    itemAlbums(item) {
        return (
            <TouchableOpacity onPress={() => this.getDetail(item.id)}>
                <Card>
            <CardItem cardBody >
              <Image source={{ uri: item.thumbnailUrl }} style= {{height: 200, width: null, flex: 1}}/>
           </CardItem>
           <CardItem style={[styles.container, {flexDirection: "column"}]}>
             <Body>
               <Text  style={[styles.textInputStyle]}> {item.title}</Text>
             </Body>
           </CardItem>
         </Card>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                {this.state.IsError ? (
                    <ErrorPage color="#008000" text="Error" subColor="#008000" subText="Try Again" />
                ) :
                    (
                        <View>
                            {this.state.IsLoad ? (
                                <FlatList
                                    data={this.state.albums}
                                    renderItem={({ item }) => this.itemAlbums(item)}
                                />
                            ) : (
                                    <ActivityIndicator size="large"  color="#0099CC" />

                            )
                            }
                        </View>
                    )}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        color: 'white',
        },
    container: {
        flex: 1,
        marginTop: 2,
        padding: 20,
        backgroundColor: "#0099CC",      
        color: "white"
      },
    title: {
        padding: 20,
        paddingRight: 60
    },
    image: {
        marginRight: 6
    },
    
});
