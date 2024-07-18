import React from 'react'


const Condition = () => {
  return (
    <div>
    
      <div className="h-screen flex flex-col  justify-center items-center ">
        <div className="h-96 p-10 flex flex-col justify-between box  items-center bg-[#1da1f2]">
        <div className="image ">
       <img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="w-16 md:w-32 lg:w-48" alt="" />
        </div>
        <div className="content">
        <p>please upload your picture</p>
        </div>
        <div className="button">
        <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
       </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Condition
