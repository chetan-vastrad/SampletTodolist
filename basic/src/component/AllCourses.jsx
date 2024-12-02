import { useState, useEffect } from "react";
import styles from "./AllCourses.module.css";
const AllCourses = (props) => {
  const [recivingData, setRenderingData] = useState(props.intialData);
  const [isEdit, setIsEdit] = useState(null);
  const [teampValue,setTeampValue]= useState("")

  useEffect(()=>{
    setRenderingData(props.intialData);
  },[props.intialData]);

  const editChangeHandler = (index) => {
    setIsEdit(index);
    setTeampValue(recivingData[index]?.course)
  };
  const newChnageHandler = (event) => {
    setTeampValue(event.target.value)
  };
  const saveChangeHandler = (index) =>{
const updatedValue = [...recivingData];
updatedValue[index].course = teampValue;
setRenderingData(updatedValue);
setIsEdit(null)
  }
  const deleteHandler = (index) => {
    const updatedData = recivingData.filter((_, i) => i !== index); // Remove the item
    setRenderingData(updatedData);
  };
  return (
    <div>
      <div className={styles.allCourses}>
        {recivingData.map((data, index) => {
          return (
            <div className={styles.allFunctions} key={index}>
              {isEdit === index ? (
                <div>
                  <input
                  type="text"
                  value={teampValue}
                  onChange={newChnageHandler}
                />
                 <button onClick={() => saveChangeHandler(index)}>Save</button>
                 <button onClick={() => setIsEdit(null)}>Cancel</button>
                </div>
                
              ) 
              : (
                <div>
                  <h2>{data.course}</h2>
                  <button
                className={styles}
                onClick={() => {
                  editChangeHandler(index);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className={styles} onClick={()=>deleteHandler(index)}>
                <i className="fa-solid fa-trash"></i>
              </button>
                </div>
              )
              }
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllCourses;
