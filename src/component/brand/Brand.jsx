import React from 'react';
import "./brand.css";
import shopify from "../../assets/shopify.png"
import slack from "../../assets/slack.png"
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import google from "../../assets/google.png";
const Brand = () => {
  return (
    <div className='brand__main section__padding'>
      <div>
        <img src={google} alt='image of google'/>
      </div>
      <div>
         <img src={slack} alt='image of slack'/>
      </div>
      <div>
          <img src={atlassian} alt='image of atlassion'/>
      </div>
      <div>
           <img src={dropbox} alt='image of dropbox'/>
      </div>
      <div>
            <img src={shopify} alt='image of shopify'/>
      </div>
      
    </div>
  )
}

export default Brand