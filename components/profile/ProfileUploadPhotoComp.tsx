import { ArrowBigUpDash } from 'lucide-react'
import React from 'react'
import { BiUpArrow } from 'react-icons/bi'

function ProfileUploadPhotoComp() {
  const tabs = ["All", "Recent", "Popular", "Trending", "Favourites"]

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-white py-6">
      <header className='w-full flex items-center justify-center border-b h-[84px] mb-5'>
        <div className='relative '>
        <button className=" flex gap-2 items-center justify-center bg-transparent hover:bg-transparent px-2.5 py-1 rounded"><ArrowBigUpDash fill='black'/> Upload Photo</button>
        </div>
      </header>
      <div className="w-full flex items-center justify-start gap-3 px-[45px] mb-[20px]">
        {
          tabs.map((item,index)=>(
            <p key={index} className={`${index===2? "border-b border-b-red-600":""} font-bold text-sm`}>{item}</p>
          ))
        }
      </div>
      <div className='grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 w-full px-[30px] border'>
        {
          Array.from({length:8}).map((_,index)=>(
            <div key={index} className="w-[131px] h-[165px] flex items-center justify-center flex-col gap-4 py-2.5">
              <div className='h-[100px] w-[100px] rounded-full bg-gray-200'/>
              <p className='text-sm'>Winger</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProfileUploadPhotoComp