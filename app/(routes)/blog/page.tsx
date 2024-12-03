'use client'

import BlogTipOne from '@/components/blog/tip1';
import { Blog, BlogType } from '@/constants'
import React, { useEffect, useState } from 'react'

const Bloglar = () => {

    const [blog, setBlog] = useState<BlogType[]>([]);

    useEffect(()=>{
        setBlog(Blog)
    }, []);

    return (
        <>
            <div className='container mx-auto mt-8'>
                <h2 className='text-2xl font-semibold text-center'></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {blog.map((blog, index)=>(
                        <div key={index}>
                            <BlogTipOne key={index} 
                            title={blog.title}
                            active={blog.active}
                            id={blog.id}
                            description={blog.description}
                            image={blog.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Bloglar
