import Image from 'next/image';
import React from 'react'
import { BsQuote } from 'react-icons/bs';

type Props = {
    image: string;
    name: string;
    role: string;
}

const ReviewCard = ({ image, name, role }: Props) => {
    return (
        <div>
            <BsQuote className='w-14 h-14 text-blue-600' />
            <p className='text-center text-gray-800 dark:text-gray-200 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro beatae hic maiores sit impedit molestiae eveniet, molestias optio veniam illum voluptatibus laudantium cupiditate a eligendi nihil nesciunt commodi voluptas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea, numquam dolores aperiam sit commodi saepe qui. Aspernatur quod, unde labore omnis officiis cum, quis, illo quia commodi reprehenderit aliquid.
            </p>
            <div className='mt-6'>
                <Image src={image} alt="image" width={100} height={100} className='object-center mx-auto rounded-full'/>
                <h1 className='text-lg font-bold text-center mt-4'>{name}</h1>
                <h1 className='text-center text-gray-500'>{role}</h1>
            </div>
        </div>
    )
}

export default ReviewCard