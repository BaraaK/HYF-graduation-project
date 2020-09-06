import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./FormPlace.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/Util/Validator";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import UseForm from "../../shared/hook/form-hook";
import Card from '../../shared/components/UIElements/Card'

const PLACES = [
  {
    id: '1',
    imageURL:
      "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/how-to-choose-right-location-house-netherlands.jpg",
    title: "Title1",
    description: "description1",
    address: "address1",
    location: {
      lat: 40,
      lng: -73,
    },
    creater: "1",
  },
  {
    id: '2',
    imageURL:
      "https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/how-to-choose-right-location-house-netherlands.jpg",
    title: "Title2",
    description: "description2",
    address: "address2",
    createrId: "user1",
    location: {
      lat: 40,
      lng: -73,
    },
    creater: "user2",
  },
];

function UpdatePlace(props) {
  const placeId = useParams().pid;
  const [isLoading, setIsLoading] = useState(true);

  const identifiedPlace = PLACES.filter(place => place.id === placeId);
  console.log(identifiedPlace[0])

  const [formState, inputHandler, setFormData] = UseForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if(!identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace[0].title,
            isValid: true
          },
          description: {
            value: identifiedPlace[0].description,
            isValid: true
          }
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace[0]]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace[0]) {
    return (
      <Card className="center">
        <h2>Could not find place!</h2>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
}

export default UpdatePlace;
