import React from 'react'

const Button = ({ styles }) => {
  return (
   <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary-bold
   outline-none ${styles} mt-10 rounded-[10px]`}>
      Getting-Started 
   </button>
  )
}

export default Button