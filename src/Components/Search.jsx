import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Result from './Result'
import { Data, propertyAddress, propertyType, Selected } from './State/actions/Property_Actions';


const Search = (props) => {
    const { result, TypeSelector, setResult } = props
    const dispatch = useDispatch()
    // const { propertyType, propertyAddress, selected } = bindActionCreators(actionCreators, dispatch)

    const [search, setSearch] = useState('')



    const btn_handler = () => {
        setResult(result.filter((value) => {
            if (search === value.address) { return value }
        }))
    }

    useEffect(() => {
        dispatch(Data());
    }, [result])
    return (
        <>
            <div className="flex w-full">
                <div className="flex w-full flex-col">
                    <label htmlFor="search" className='font-bold py-3'>Search</label>
                    <div className="flex w-11/12 items-center  justify-between">
                        <input
                            value={search}
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            className='bg-slate-100 w-4/5 rounded-sm outline-none border-1 text-[18px] p-2'
                            name="search"
                            id="search"
                            placeholder='Address'
                        />
                        <button className='bg-yellow-300 px-8 py-2 h-fit rounded-sm font-bold' onClick={btn_handler} >Search</button>
                    </div>

                    <label htmlFor="search" className='font-bold pt-16 pb-5'>Selected Properties</label>
                    <table className='w-11/12'>
                        <thead>
                            <tr className='bg-gray-300 '>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Address</th>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Post Code</th>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Number of Rooms</th>
                                <th className='p-2 border-b-2 border-b-gray-400'>Floor Area (m<sup>2</sup>)  </th>
                            </tr>
                        </thead>
                        {/* Selected Properties */}
                        {result?.map((data, index) => {
                            if (data) {

                                return (
                                    <Result key={index} data={data} />
                                )
                            }
                        })
                        }

                    </table>
                    <label htmlFor="search" className='font-bold pt-16 pb-5'>Search Result</label>

                    <table className='w-11/12'>
                        <thead>
                            <tr className='bg-gray-300 '>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Tr</th>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Address</th>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Post Code</th>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Propert Type</th>
                                <th className='border-r-2 border-b-2 p-2 border-b-gray-400 border-r-white'>Number of Rooms</th>
                                <th className='p-2 border-b-2 border-b-gray-400'>Floor Area (m<sup>2</sup>)  </th>
                            </tr>
                        </thead>
                        {/* Search Reault */}
                        {result?.map((data, index) => {
                            if (data) {

                                return (
                                    <Result key={index} data={data} select TypeSelector={TypeSelector} />
                                )
                            }
                        })
                        }
                    </table>

                </div>

            </div>
        </>
    )
}

export default Search