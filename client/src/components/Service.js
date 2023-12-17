import {Link} from "react-router-dom";

export const Service = ({src, alt, title, tag}) => {
    return (
        <>
            <div className="service-item">
                <div className="header">
                    <img src={src} alt={alt}/>
                    <span className="head bolder">{title}</span>
                </div>
                <span className="tag">{tag}</span>
                <Link to={"/about"}>Learn more&nbsp;<i className="fa-solid fa-chevron-right"/></Link>
            </div>
        </>
    )
}