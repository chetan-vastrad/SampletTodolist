import AddCourse from './component/AddCourse'
import AllCourses from './component/AllCourses';

function App() {
  const dummyData=[{course:"Test"},{course:"Test2"}];

  return (
  <div>
   <AddCourse/>
   <AllCourses intialData={dummyData}/>
  </div>
  )
}

export default App;


// import { useState } from 'react';
// import AddCourse from './component/AddCourse';
// import AllCourses from './component/AllCourses';

// function App() {
//   const dummyData = [{ course: "test" }, { course: "test2" }]; // consistent key names

//   return (
//     <div>
//       <AddCourse />
//       <AllCourses initialData={dummyData} />
//     </div>
//   );
// }

// export default App;

