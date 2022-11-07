import React, { useState } from 'react'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { Data, propertyType } from './State/actions/Property_Actions'

const Home = () => {
    const data = useSelector((data) => data.property)
    const [result, setResult] = useState(data)

    const TypeSelector = (type) => {
        if (type !== "All") {
            setResult(data.filter((value) => {
                if (type === value.property_type) { return value }
            }))
        } else {
            setResult(data)
        }
    }
    const btn_text = ["All", "Flat", "Terraced House", "Semi Detached"]

    return (
        <>
            <div className="flex w-full h-[80vh]">
                <div className="flex w-1/3 m-auto">
                    <div className="flex flex-col m-auto">
                        <h1 className='font-bold my-2'>Property Types</h1>
                        <div className='bg-slate-100 p-2 gap-1 pb-5 flex flex-col'>
                            {
                                btn_text.map((text) => {
                                    return <button className='text-left ' onClick={(e) => TypeSelector(text)}>{text} </button>
                                })
                            }
                        </div>
                    </div >
                </div>
                <div className="flex w-2/3 m-auto"><Search setResult={setResult} result={result} TypeSelector={TypeSelector} /></div>
            </div>
        </>
    )
}

export default Home