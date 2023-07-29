import React,{useState} from "react";
import { data } from "../Data";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
const Card = () => {
  const[showText, setShowText] = useState(false)
  return (
    <>
      {data.map((curr) => {
        const{id,projectName, description,siteLink,imageUrl,features,githubLink}=curr;

        let showLess = description.slice(0,70);
        let showMore = description;
        return (
          <div className="card" key={id}>
            <div className="card-data-heading">
              <div className="card-left">
                <h4>0{id}/{projectName}</h4>
                <p>
                  {
                    showText? showMore:showLess
                  }
                   
                  <button className="show" onClick={()=> setShowText(!showText)}>  {showText?"...show less":"...show more"}</button>
                </p>

                <span>features : {features.map((feature)=>{
                  return feature + ", "
                })}</span>
                <Link to={siteLink.isTrue?siteLink.link:githubLink} target="_blank">
                  {
                    siteLink.isTrue? "site link":"github link"
                  }
                 <FiArrowUpRight />{" "}
                </Link>
              </div>
              <div className="card-right">
                <Link to={siteLink.isTrue?siteLink.link:githubLink} target="_blank">
                  <img
                    className="card-img"
                    src={imageUrl}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Card;
