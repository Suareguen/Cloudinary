import { useState } from 'react'
import './App.css'
import UploadWidget from './components/CloudinaryWidget/CloudinaryWidget'
function App() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const obj = {
    title: title,
    description: description
  }
  console.log(title)
  console.log(description)


  return (
    <>
      <h1>Holii</h1>
      <label> Title: 
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label> Description: 
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </label>
      <UploadWidget data={ obj }/>
    </>
  )
}

export default App
