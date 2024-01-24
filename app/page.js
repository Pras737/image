"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [Images, setImages] = useState([]);
  const getImages=async()=>{
    
    try{
      const response=await axios.get("https://picsum.photos/v2/list");
      const data=response.data;
      setImages(data)

    }catch (error){
      console.log("error fatching images")
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-600 rounded mt-5 text-white'>Get Images</button>
      <div className='p-5'>
        {Images.map((elem,i)=>{
          return<img
          key={i}
          src={elem.download_url}
          width={300}
          height={300}
          className='m-5 rounded inline-block'
          />
        })}

      </div>
    </div>
  )
}

export default page



































// "use client"
// import Header from '@/Components/Header'
// import React, { useState } from 'react'

// const page = () => {
//   const [user, setuser] = useState("prashant")
//   return (
//     <>
//     <Header user={user}/>
//     {user}
//     </>
//   )
// }

// export default page
















































// "use client"
// import React,{useState} from 'react'

// const page = () => {
//   const [marks, setmarks] = useState (80)
//   return (
//     <>
//     <h1 className='font-bold text-xl text-red-500'>My marks were {marks}</h1>
//     <button onClick={()=>{
// setmarks(50)
//     }} className='bg-gray-400 px-5 py-2 rounded mt-5 text-white'>update</button>
//     </>
//   )
// }

// export default page