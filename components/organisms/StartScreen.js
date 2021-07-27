import React, { useState } from 'react';
import { View} from 'react-native';
import axios from 'axios'
import Albums from './Albums'
import AlbumDetail from './AlbumDetail'

const StartScreen = () => 
    {
        const [albumSelected, setAlbumSelected] = useState(null);
        const [albumDetail, setAlbumDetail] = useState(null);  
        const getDetails = async (item) => {
    
            try {
                const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos/${item}`);           
                setAlbumDetail(photos.data)      
                const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums/${item}`);
                setAlbumSelected(item)                                      
            } catch (e) {
    
                console.log(e)
            }
        }
    
        const buttonBack = async () => {
            setAlbumDetail(null)
            setAlbumSelected(null)            
        } 

        return (
            <View>
                {albumSelected ? (
                    <AlbumDetail buttonBack={buttonBack} albumDetail={albumDetail} />
                ) : (
                    <Albums getDetails={getDetails} />
                )}
            </View>
        );
    };
    
export default StartScreen;
