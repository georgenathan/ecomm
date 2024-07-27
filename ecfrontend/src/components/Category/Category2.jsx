import React from 'react'
import Button from "../Shared/Button"
import Image1 from "../../assets/category/gaming.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/speaker.png"

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* first */}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-gray-100
                text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='space-y-2 mb-4'>
                            <p className='text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:5xl font-bold opacity-40 mb-2'>Laptop</p>
                            <Button 
                            text="Browse" 
                            bgColor={"bg-primary"} 
                            textColor={"text-white"} 
                            />
                        </div>
                    </div>
                    <img src={Image1} alt="" 
                    className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'
                    />
                </div>
                {/* second  */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90
                text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:5xl font-bold opacity-20 mb-2'>Airbods</p>
                            <Button 
                            text="Browse" 
                            bgColor={"bg-white"} 
                            textColor={"text-brandGreen"} />
                        </div>
                    </div>
                    <img src={Image2} 
                    className='w-[320px] absolute bottom-2'
                    />
                </div>
                {/* third  */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
                text-white rounded-3xl relative h-[320px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:5xl font-bold opacity-40 mb-2'>Gadget</p>
                            <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"} />
                        </div>
                    </div>
                    <img src={Image3} alt="" 
                    className='w-[180px] absolute bottom-0 right-0 lg:top-[30px]'
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Category