"use client"
import React from 'react'
import { useParams } from 'next/navigation'

function page() {
  const Params = useParams()
console.log(Params)
  return (
    <div>
      <p>{Params.read}</p>
    </div>
  )
}

export default page