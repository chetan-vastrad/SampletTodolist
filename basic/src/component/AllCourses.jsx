import { useState } from "react";
import styles from "./AllCourses.module.css"
const AllCourses = (props) =>{
    const renderidingData= (props.intialData);    
    return(
    <div className={styles.allCourses}>
            {renderidingData.map((data,index)=>{
                return(
                    <h3 key={index}>
                        {data.course}
                    </h3>
                )
            })}
    </div>
    )
}
export default AllCourses;

// import { useState } from "react";
// import styles from "./AllCourses.module.css";

// const AllCourses = (props) => {
//   const [renderingData, setRenderingData] = useState(props.initialData);
//   console.log("mainData", renderingData);

//   return (
//     <div className={styles.allCourses}>
//       <h3>
//         {renderingData.map((data, index) => (
//           <div key={index}>
//             {data.course}
//           </div>
//         ))}
//       </h3>
//     </div>
//   );
// };

// export default AllCourses;
