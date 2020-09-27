import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "../components/PlaceItem";
import Button from '../../shared/components/FormElements/Button'

function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  } else {
    const places = props.items.map((item) => {
      return (
        <PlaceItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          address={item.address}
          createrId={item.creater}
          coordinates={item.location}
          onDelete={props.onDeletePlace}
        />
      );
    });
    return <ul className="place-list">{places}</ul>;
  }
}

export default PlaceList;
