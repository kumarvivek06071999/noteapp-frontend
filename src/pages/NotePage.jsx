import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import NoteCard from '../components/NotesPage/NoteCard/NoteCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store'
import { fetchData, setData } from '../redux/note/noteSlice'
import { IoAddOutline } from "react-icons/io5";

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FaNoteSticky } from "react-icons/fa6";
import { BASE_URL } from '../constant/config'



const NotePage = () => {

    const [open, setOpen] = useState(false)
    const data = useSelector((state) => state.note.data)
    const cancelButtonRef = useRef(null)
    const [notes, setNotes] = useState([])
    const [notesTitle, setNotesTitle] = useState("")
    const [notesBody, setNotesBody] = useState("")
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchData())

    }, [])


    useEffect(() => {

        setNotes(data)

    }, [data])
    // setNotes(data)
    // console.log(data)

    const CreateNotes = async () => {

        let res = await axios({
            method: "post",
            url: BASE_URL + "/note/create",
            data: {
                title: notesTitle,
                body: notesBody
            },
            headers: {
                Authorization: token
            }

        })
        setNotesTitle("")
        setNotesBody("")

        fetchData()
    }


    useEffect(() => {
        dispatch(fetchData())

    }, [])

    return (
        <div className=''>
            <Navbar />
            <div className=' min-h-screen w-full grid  gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 '>
                {
                    notes?.map((elem) => (
                        <NoteCard {...elem} key={elem._id} />

                    ))
                }

                {/* <NoteCard /> */}

            </div>

            <div onClick={() => {
                setOpen(true)
            }} className=' sticky w-fit left-1/2 bottom-10 bg-blue-500 text-white rounded-full p-1 cursor-pointer '>
                <IoAddOutline size={35} />
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <FaNoteSticky className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Create Notes
                                                </Dialog.Title>

                                                <div className="mt-2">
                                                    <input value={notesTitle} onChange={(e) => setNotesTitle(e.target.value)} type="text" className="text-sm text-gray-500 rounded-md" placeholder='Your Title Goes Here...' />

                                                </div>
                                                <div className="mt-2">
                                                    <input value={notesBody} onChange={(e) => setNotesBody(e.target.value)} type="text" className="text-sm text-gray-500 rounded-md" placeholder='Your Notes Goes Here...' />
                                                    {/* <textarea value={notesBody} onChange={(e) => setNotesBody(e.target.value)} className="text-sm text-gray-500 rounded-md" placeholder='Your Notes Goes Here...' ></textarea> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => {
                                                setOpen(false)
                                                CreateNotes()
                                            }}
                                        >
                                            Create
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>


        </div>
    )
}

export default NotePage