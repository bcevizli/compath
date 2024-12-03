import { Blog } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface BlogDetailPage {
  params: {
    id: string
  }
}

const BlogDetailPage = ({ params }: BlogDetailPage) => {

  const { id } = params;
  const blog = Blog.find((blog) => blog.id === parseInt(id as string));

  if (!blog) {
    return (
      <div className='container mx-auto mt-8'>
        <h2 className='text-4xl font-semibold'>
          Not Found
        </h2>
        <Link href="/blog">
          <div className='mt-6 inline-block w-full px-4 py-2 bg-secondarycolor text-primarycolor text-center rounded-lg'>
            Bloga Geri Dön
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto mt-8'>
      <div className='max-w-5xl mx-auto'>
        <Image
          alt={blog.title}
          src={blog.image}
          width={1024}
          height={768}
          className='w-full h-56 object-cover transition-transform transform group-hover:scale-105'
        />
        <h2 className='text-2xl mt-4 font-bold mb-2 group-hover:text-quaternarycolor'>
          {blog.title}
        </h2>
        <p className='mb-5'>
          {blog.description}
        </p>
      </div>

    </div>
  )
}

export default BlogDetailPage
