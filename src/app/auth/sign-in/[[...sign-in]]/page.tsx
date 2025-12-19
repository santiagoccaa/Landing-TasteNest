import { Heading } from '@/components/UI'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
      <Heading fs='xl'>
        Inicia Sesion
      </Heading>
      <SignIn />
    </div>
  )
}