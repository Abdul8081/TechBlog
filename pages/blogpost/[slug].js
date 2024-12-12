import React from 'react'
import {useRouter} from 'next/router'
const  slug = () => {
    const router = useRouter();
    // this is the slug whcih comes out then we are printing the slug
    const {slug}  = router.query;
  return (
    <div> {slug} </div>
  )
}

export default slug
