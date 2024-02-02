import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from "react-redux";
import { getData, setMainData, signupUser } from "../../../redux/user/userSlice";
import { BASE_URL } from "../../../constant/config";



const NoteCard = ({ title, body, _id }) => {
  const cancelButtonRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [notesTitle, setNotesTitle] = useState("")
  const [notesBody, setNotesBody] = useState("")
  // const { token } = useSelector((state) => state.user)
  // const token = localStorage.getItem("token")
  const dispatch = useDispatch()

  const extractTokenFromHeaders = (headers) => {
    // Extract the token from the Authorization header (Bearer token)
    const authHeader = headers && headers.Authorization;
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    return token;
  };
  const protectedResource = (e) => {
    const token = extractTokenFromHeaders(e.headers);

  }

  const UpdateNotes = async () => {
    let res = await axios({
      method: "patch",
      url: BASE_URL + "/note",
      data: {
        title: notesTitle,
        body: notesBody
      },
      headers: {
        Authorization: token,
        id: _id
      }

    })
    console.log(res)
    setNotesTitle("")
    setNotesBody("")

    const response = await axios({
      method: 'get',
      url: BASE_URL,
      headers: {
        Authorization: token
      }
    })

    setMainData(response)


  }






  return (
    <>
      <div className=" mx-10 my-10  shadow-lg">
        <a
          href="#"
          className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          ></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {title}
              </h3>

            </div>

          </div>

          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">
              {body}
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div onClick={() => setOpen(true)} className="flex flex-col-reverse">
              <FaRegEdit size={20} />
            </div>

            <div className="flex flex-col-reverse">
              <MdDelete size={20} />
            </div>
          </dl>
        </a>
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
                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Update Notes
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
                        UpdateNotes()
                      }}
                    >
                      Update
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
    </>
  );
};

export default NoteCard;
