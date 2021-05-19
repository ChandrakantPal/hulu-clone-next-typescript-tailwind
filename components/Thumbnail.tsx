import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { forwardRef } from 'react'

type Props = { result: any }
export type Ref = HTMLDivElement

const Thumbnail = forwardRef<Ref, Props>((props, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div
      ref={ref}
      className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${
            props.result.backdrop_path || props.result.poster_path
          }` || `${BASE_URL}${props.result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="max-w-md truncate">{props.result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {props.result.title || props.result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {props.result.media_type && `${props.result.media_type} •`}{' '}
          {props.result.release_date || props.result.first_air_date} •{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {props.result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
