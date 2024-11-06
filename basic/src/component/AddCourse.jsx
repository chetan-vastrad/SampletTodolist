import { useState } from "react";
import styles from "./AddCourse.module.css"
const AddCourse = () =>{
    const [courseName,setCourseName]=useState("");
    const [addCourse,setAddCourse]= useState("add");
    const [isValid,setIsValid]=useState(false)

    const enterCourseHandeler = (event) =>{
    setCourseName(event.target.value);
    }
    const addCouserHandler = (event) =>{
     event.preventDefault();
     console.log(courseName.length);
     
     if(courseName.trim().length  0){
        setIsValid(true);
        return;
     }
    }
console.log(courseName);

    return(
        <div className={styles.maindiv}>
            <div className={styles.subdiv}>
               <form onSubmit={addCouserHandler}>
               <label className={`${styles.lableTag} ${!isValid ? styles.lableTag :styles.errorlableTag }`}>Add Course</label>
                <input type="text" className={styles.inputdiv} onChange={enterCourseHandeler} value={courseName}/>
                <button type="submit" className={styles.submitBtn}>Add Course</button>
               </form>
            </div>
        </div>
    )
}
export default AddCourse;
