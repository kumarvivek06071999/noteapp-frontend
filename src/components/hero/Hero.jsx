import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Note } from '../../assets'
const Hero = () => {
    const nav = useNavigate()
    return (
        <div className='  min-h-screen w-full flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>

            <div className='w-1/2 flex flex-col '>
                <div onClick={useEffect(() => {
                    nav("/")
                }, [])} className='mt-10 cursor-pointer'>
                    <h1 className=' text-6xl font-bold'>NoteApp</h1>
                </div>
                <div className='flex mt-20'>
                    <div className='h-[416px] w-[512px] text-2xl'>
                        <p className=' font-sans font-medium text-justify'>A note-taking app is a digital tool designed to help users capture and organize their thoughts, ideas, and important information in a convenient and accessible way. With the ubiquity of smartphones, tablets, and computers, note-taking apps have become an integral part of both personal and professional life, retrieve, and share their notes seamlessly.</p>
                        <p className=' font-sans font-medium text-justify mt-2'>A note-taking app is a digital tool designed to help users capture and organize their thoughts, ideas, and important information in a convenient and accessible way.</p>

                    </div>
                </div>
            </div>
            <div className=' w-1/2 flex items-center justify-center '>
                <div className='h-[416px] w-[416px]'>
                    <img className='' src={Note} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero