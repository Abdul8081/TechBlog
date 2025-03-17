import { useState } from "react";
import styles from "@/styles/ReadMore.module.css";
const ReadMore = ({text="", maxLength}:{text?:string;maxLength:number}) => {
    const[isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    }
    return(
        <p className={styles.btn_bottom}>
            {isExpanded ? text : (text.slice(0, maxLength)) || "" +"..."}
            {text.length > maxLength&& (
                <button onClick={toggleReadMore} className={styles.botton}>
                {isExpanded?" Read Less" : " Read More"} </button>
            )}
        </p>
    );
};
export default ReadMore