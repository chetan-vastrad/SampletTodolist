import { useState } from "react";
import styles from "./AddCourse.module.css"
const AddCourse = (props) =>{
    const [courseName,setCourseName]=useState("");
    const [addCourse,setAddCourse]= useState("add");
    const [isValid,setIsValid]=useState(true)

    const enterCourseHandeler = (event) =>{
    setCourseName(event.target.value);
    if(event.target.value.trim().length>0){
        setIsValid(true)
    }
    }
    const addCouserHandler = (event) =>{
     event.preventDefault();
     
     if(courseName.trim().length === 0){
        setIsValid(false);
        return;
     }
     props.recivingData(courseName);
     setCourseName("")
    }

    return(
        <div className={styles.maindiv}>
            <div className={styles.subdiv}>
               <form onSubmit={addCouserHandler}>
               <label className={`${styles.lableTag} ${!isValid ?  styles.errorlableTag:styles.lableTag }`}>Add Course</label>
                <input type="text" className={`${styles.inputdiv} ${!isValid ?  styles.inputdivError:styles.inputdiv }`} onChange={enterCourseHandeler} value={courseName}/>
                {!isValid && <p className={styles.erroTag}>Please Filup This Field *</p>}
                <button type="submit" className={styles.submitBtn}>Add Course</button>
               </form>
            </div>
        </div>
    )
}
export default AddCourse;
