import { Suspense } from 'react'
import RegisterForm from '../components/register-form'

export default function RegisterPage () {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Suspense>      <RegisterForm/>
</Suspense>
    </div>
  )
}

