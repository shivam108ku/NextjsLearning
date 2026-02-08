import Link from 'next/link';
import React from 'react'

const Section = () => {
  return (
    <div>
        <h1>
            Section
        </h1>
        <Link href={"/settings"}>Go to the Settings</Link>
    </div>
  )
}

export default Section;