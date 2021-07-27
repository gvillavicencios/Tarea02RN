import React,  { Component, useState } from 'react'
import { Text, View, Image } from 'react-native';
import styled from '@emotion/native';

const ButtonBack = styled.TouchableOpacity`
  background-color: #0099CC;
  color: #ffff;
  padding: 5px;
  width: 100%;
  `
const ImageSrc = styled.Image`
height: 80%;
`
const ViewSrc = styled.View`
padding: 25px;
`
const TextLableButton = styled.Text`
 color: white;
 text-align: center;
`
const TextLableTitle = styled.Text`
 padding: 25px;
 color: black;
 text-align: center;
 `
const AlbumDetail = (props) => {
    const { albumDetail, buttonBack } = props
    return (
        <ViewSrc>
            <View>
                <ImageSrc source={{uri: albumDetail.url}}/>                
                <TextLableTitle> Title: {albumDetail.title}</TextLableTitle>           
           </View>                                 
           <ButtonBack onPress={() => buttonBack()}>
          <TextLableButton>Return</TextLableButton>
      </ButtonBack>
        </ViewSrc>
    )
}

export default AlbumDetail
