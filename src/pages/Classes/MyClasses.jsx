import React, { useEffect } from 'react'
import useClassesLoader from '../hooks/useClassesLoader'
import useAuth from '../hooks/useAuth'

const MyClasses = () => {
    const {user} = useAuth()
    useEffect(() => {
        fetch(`http://localhost:4000/studentClasses?email=${user?.email}`)
            .then(res => res.json())
        .then(data =>console.log(data))
   },[])
  return (
    <div className='bg-red-500'>MyClasses is here</div>
  )
}

export default MyClasses