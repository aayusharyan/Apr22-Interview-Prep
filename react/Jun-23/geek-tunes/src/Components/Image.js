import { useState } from 'react'

const Image = ({ src, className }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <div className={`${className} animate-pulse bg-slate-700`}></div>
      ): false}
      <img src={src} onLoad={_ => setLoading(false)} className={`${className} ${loading ? "hidden" : ""}`} alt="" />
    </>

  )
}

export default Image