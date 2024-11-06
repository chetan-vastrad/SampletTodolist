import { useState } from 'react';
import AddCourse from './component/AddCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
   <AddCourse/>
  </div>
  )
}

export default App
