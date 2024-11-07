import { useState } from 'react';
import AddCourse from './component/AddCourse'
import AllCourses from './component/AllCourses';
const dummyData=[{course:"Test"},{course:"Test2"}];

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
