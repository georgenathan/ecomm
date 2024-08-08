import React from 'react'
import Button from '../Shared/Button'
import { useCart } from 'react-use-cart';

const ItemCard = ({data}) => {
    const { addItem } = useCart();
  return (
    <div className='mb-10'>
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {/* card */}
            {data.map((data) =>(
                <div className='group' key={data.id}>
                    <div className='relative space-y-3'>
                        <img 
                        src={data.img} 
                        alt="" 
                        className='h-[180px] w-[260px] object-cover rounded-md '/>
                        {/* action hover button */}
                        <div className='hidden group-hover:flex absolute 
                        top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                        h-full w-full text-center 
                        group-hover:backdrop-blur-sm justify-center 
                        items-center duration-200 rounded-md'>
                            <Button 
                            text={"View Item"}
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            onClick={()=> addItem(data.addItem)}
                            />
                        </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.title}</h2>
                        <h2 className='font-bold'>${data.price}</h2>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ItemCard