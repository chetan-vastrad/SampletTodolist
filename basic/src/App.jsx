import { useState } from 'react';
import AddCourse from './component/AddCourse'
import AllCourses from './component/AllCourses';
const dummyData=[{course:"Go To Movie"},{course:"Go To Shopping"}];

function App() {
  
  const [allData,setAllData] = useState(dummyData)
  const recivingDataHandler = (data) =>{
setAllData((prev)=>{
  return [...prev,{course:data}]
});
  }
  
    
return (
  <div>
   <AddCourse recivingData={recivingDataHandler}/>
   <AllCourses intialData={allData}/>
  </div>
  )
}

export default App;
