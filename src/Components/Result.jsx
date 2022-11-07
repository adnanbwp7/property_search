import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Selected } from './State/actions/Property_Actions'

const Result = (props) => {
    const { id, address, post_code, property_type, no_of_rooms, floor_area, selected } = props.data
    const { TypeSelector } = props
    const dispatch = useDispatch()

    const checkBox = () => {
        dispatch(Selected(id))
        TypeSelector("All");
    }
    return (
        <>
            {props.select ?
                <tbody>
                    <tr className='bg-gray-100 border-y-2 my-1 border-gray-400'>
                        <td className='text-center p-2' >
                            <input type="checkbox" name="address" id="address" onClick={checkBox} className='bg-white' />
                        </td>
                        <td className='text-center p-2' >{address && address} </td>
                        <td className='text-center p-2' > {post_code && post_code} </td>
                        <td className='text-center p-2' > {property_type && property_type} </td>
                        <td className='text-center p-2' > {no_of_rooms && no_of_rooms} </td>
                        <td className='text-center p-2' > {floor_area && floor_area} </td>
                    </tr>
                </tbody>
                :
                selected && selected ?
                    <tbody>
                        <tr className='bg-gray-100 border-y-2 my-1 border-gray-400'>
                            <td className='text-center p-2' >{address} </td>
                            <td className='text-center p-2' >{post_code} </td>
                            <td className='text-center p-2' >{no_of_rooms} </td>
                            <td className='text-center p-2' >{floor_area} </td>
                        </tr>
                    </tbody >
                    :
                    <tbody>
                        <tr className='bg-gray-100 border-y-2 my-1 border-gray-400'>

                        </tr>
                    </tbody >


            }
            {/* </table> */}
        </>
    )
}

export default Result