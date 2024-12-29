import React from 'react';
import './SeventhSection.css';
import projectImgFon from '../../assets/pictures/seventh/fon_block_7.png';
import projectVec from '../../assets/pictures/seventh/Vector 20.png';
import projectImg1 from '../../assets/pictures/seventh/Group 63.png';
import projectImg2 from '../../assets/pictures/seventh/Group 73.png';
import projectImg3 from '../../assets/pictures/seventh/Group 74.png';
import projectImg4 from '../../assets/pictures/seventh/Group 75.png';


function SeventhSection() {

  return (
  
  <div className="block_7">
    <div className="header_block_4">
      
      Love

    </div>

    <div className="fon_block_7">

      <img className="branch_block7" src={projectVec} alt=""/>
      <img className="fon_7" src={projectImgFon}/>

      <div className="content_block_7">
              
              <div className="text_content_block_7">

                <p id="p1_block_7_js" >
                  Gats and Helmet meet in difficult<br/> conditions Kaska, being one of the best<br/> warriors of this group, initially treats<br/> Gatsu with distrust and finds his rude<br/> nature unacceptable.
                </p>
      
                <p id="p2_block_7_js">
                  After the events leading to serious<br/> injuries to Kaski, Gats is faced with a<br/> choice: to protect his feelings and<br/> serious fears or to openly confess his<br/> love, which becomes another difficult<br/> emotion in their interaction.
                </p>
      
                <p id="p3_block_7_js">
                  Over time, thanks to joint battles and shared<br/> experiences, they begin to understand and<br/> trust each other. An important milestone in<br/> their relationship is the situation when Gats<br/> protects the Helmet from attack, which<br/> demonstrates his willingness to take risks for<br/> her.
                </p> 
      
                <p id="p4_block_7_js">
                  This story is about love pierced<br/> by horror, about a bright future<br/> that can arise from darkness<br/> and about how passions can test<br/> the boundaries of human<br/> destiny.
                </p> 

                <p id="p5_block_7_js">
                  They would have loved each other<br/> happily ever after, if not for one thing.
                </p> 
      
              </div>
      
              <div className="branch_content_block_7">
      
                <img className="img_block_2_js" id="img1_block_7" src={projectImg1} alt=""/>
                
                <img className="img_block_2_js" id="img2_block_7" src={projectImg2} alt=""/>
                
                <img className="img_block_2_js" id="img3_block_7" src={projectImg3} alt=""/>
                
                <img className="img_block_2_js" id="img4_block_7" src={projectImg4} alt=""/>
                
              </div>
      
            </div>

    </div>

  </div>

  
  )

}

export default SeventhSection