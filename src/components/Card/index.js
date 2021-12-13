import React, {useState} from 'react'
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { 
  Cards, CustomImage, Tittle, Column, Row,
  IconImage, RateBox, RateImg, RateText,
  Data, Loca, Details, Price, DetailsText, LikeImg} from './styled'
import {Bath, Bed, Location, Size, Star, Like, Dislike} from '../../library/icons'

export const Card = ({props, list}) => {

  const [Dislaik, setLike] = useState(Laik)
  const [Laik, setDislike] = useState(Dislaik)

  const ChangeLike = () =>{
    if(Laik){
      setLike(require('../../library/icons/Dislike.png'))
      setDislike(false)
    }
    else{
      setLike(require('../../library/icons/Like.png'))
      setDislike(true)
    }
  }


  const listToDisplay = list.map((item) =>{
      return(
          <Cards key={`House-${item.id}`}>
            <CustomImage source={{uri: item.img}}/>
            <RateBox>
              <Row>
                <RateImg source={Star}/>
                <RateText>{item.rate}</RateText>
              </Row>
            </RateBox>

            <Data>
            <Column>
              <Tittle>{item.name}</Tittle>

              <Loca>
                <Row>
                  <IconImage source={Location}/>
                  <Text>{item.address}</Text>
                </Row>
              </Loca>

              <Details>
                <Row>
                  <IconImage source={Bed}/>
                  <DetailsText>{`${item.beds}        `}</DetailsText>
                  <IconImage source={Bath}/>
                  <DetailsText>{`${item.baths}       `}</DetailsText>
                  <IconImage source={Size}/>
                  <DetailsText>{`${item.space}   `}</DetailsText>
                </Row>
              </Details>

              <Row>

              <Price>{item.price}</Price>

              <LikeImg onPress={
                ChangeLike
              }>
              <Image source={Dislaik}/>

              </LikeImg>
              
              </Row>
            </Column>
            </Data>
          </Cards>
      )
  })

  console.log(list[0])
  return (
    <ScrollView>
      {listToDisplay}
    </ScrollView>
  )
}

