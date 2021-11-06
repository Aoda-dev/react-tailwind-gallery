import React from 'react'

const Card = ({ image, likes, views, downloads, user, tags }) => {
  const tag = tags.split(',')

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg cursor-pointer'>
      <img src={image} alt='' className='w-full bg-red' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>Photo by {user}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tag.map((tag, index) => (
          <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
