import React from 'react';

import PlaceList from '../components/PlaceList'

function UserPlaces(props) {
    const uid = props.match.params.uid
    const PLACES=[{
          id:'1',
          imageURL:'https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/how-to-choose-right-location-house-netherlands.jpg',
          title:'Title1',
          description:'description',
          address:'address',
          location:{
            lat: 40,
            lng: -73
          },
          creater: '1'
    },
    {
        id:'2',
        imageURL:'https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/how-to-choose-right-location-house-netherlands.jpg',
        title:'Title2',
        description:'description',
        address:'address',
        location:{
          lat: 40,
          lng: -73
        },
        creater: '2'
  }]
    const userPlaces = PLACES.filter(place => place.creater === uid);
    return (
        <PlaceList items={userPlaces}/>
    );
}

export default UserPlaces;