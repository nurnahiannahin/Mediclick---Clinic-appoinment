import Link from 'next/link'

const Admin = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-20 mb-20'>
      <h1 className='text-3xl font-bold'>Admin Login</h1>
      <form action="" className='flex flex-col gap-4' >
        <input
         className='border-2 px-4 py-2 text-left rounded-2xl'
         type='email'
         placeholder='E-mail'
        />
        <input
         className='border-2 px-4 py-2 text-left rounded-2xl'
         type='password'
         placeholder='Password'
        />
        <Link href="/admin/dashboard" className="bg-teal-500 font-bold text-white px-5 py-2.5 rounded-xl hover:bg-teal-600 transition-all shadow-sm shadow-teal-200">
          Log In
        </Link>
      </form>
    </div>
  )
}

export default Admin
