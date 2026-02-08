import Link from 'next/link';
import React from 'react'

const Section = () => {
  return (
    <div>
        <h1>
            Section
        </h1>
        <Link href={"/admin"}>Go to the Admin</Link>
    </div>
  )
}

export default Section;