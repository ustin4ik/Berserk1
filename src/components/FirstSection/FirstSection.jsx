import React from 'react';
import './FirstSection.css';

import projectImgS from '../../assets/pictures/first/image11.png';
import projectVec from '../../assets/pictures/first/Vector.png';


function FirstSection() {

  return (
    <div className="block_1" id='FirstSection'>
      <div className="content_1"></div>
      <img className="vector_label_1" src={projectVec}/>
      <img className="label_1" src={projectImgS}/> 
      <h2>Gat`s way</h2>
      <p>How a little boy with a big heart became a grown man with a big sword</p>
    </div>
  )

}

export default FirstSection