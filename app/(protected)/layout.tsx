import React from 'react'
interface ProtectedLayoutProps {
    children: React.ReactNode;
}
const ProtectedLayout = ({children}:ProtectedLayoutProps) => {
  return (
    <div className='w-full h-screen flex flex-col gap-y-10 justify-center'>
        {children}
      
    </div>
  )
}

export default ProtectedLayout
