import React, { useState } from "react";
import Pet from "./Pet";
import Filters from './Filters';
import RotateLoader from 'react-spinners/RotateLoader'
import {css} from '@emotion/react'


function PetBrowser() {

   


  const petCards = []
  // const petCards = data.map((pet) => (
  //   <Pet key={pet.id} pet={pet} />
  // ));

  return (
      <div>
      <div className="ui cards">{petCards}</div>
    </div>
  );
}

export default PetBrowser;
