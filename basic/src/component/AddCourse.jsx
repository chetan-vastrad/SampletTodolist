import React from "react";
import styles from "./AddCourse.module.css"
const AddCourse = () =>{
    return(
        <div className={styles.maindiv}>
            <div className={styles.subdiv}>
               <form>
               <label className={styles.lableTag}>Add Course</label>
                <input type="text" className={styles.inputdiv}/>
                <button type="submit" className={styles.submitBtn}>Add Course</button>
               </form>
            </div>
        </div>
    )
}
export default AddCourse;
