import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {  handleAddedItems } from '../../data/slices/courses'
import './index.css'

export default function Course({title,price,id}:{title:string,price:number,id:number}){
    const [isAdded,setIsAdded]=useState(false)
    const dispatch = useDispatch()

    const handleItems=(type: 'add' | 'remove')=>{
        setIsAdded(!isAdded)
        dispatch(handleAddedItems({courseId:id,type}))
    }

    //16
    return (
        <div className="course" key={id}>
           
               <h1>
               <NavLink to={`/courses/${id}`}> 
                        {title}
               </NavLink>
               </h1>
         
            <h2>{price}</h2>
            <button className="cart-btn"  onClick={()=>handleItems(isAdded ?'remove':'add')} >
               <span className="icon-container"> 
                   <FontAwesomeIcon icon={faCartPlus}/>
               </span>
              <p className="text">{isAdded ? 'Remove from' : 'Add to'} Cart</p>
</button>
        </div>
    )
}