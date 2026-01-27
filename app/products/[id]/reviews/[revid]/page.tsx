import React from 'react'

type Props = {
  params: Promise<{revid:string}>
}

const Review = async ({params}:Props) => {
  const { revid } = await params;
  return (
    <div>Review --- {revid}</div>
  )
}

export default Review