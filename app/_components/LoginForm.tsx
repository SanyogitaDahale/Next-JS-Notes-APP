'use client'

import { useActionState } from 'react'
import { loginAction } from '@/app/actions/auth'

function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null)

  return (
    <div>
      <form action={formAction} className='space-y-4'>
        {/* Email */}
        <div>
          <label className='block text-m font-medium text-gray-700'>Email</label>
          <input 
            type="email" 
            name='email' 
            placeholder='Enter your email' 
            required 
            className='my-1 block w-full rounded-md border p-1'
          />
        </div>

        {/* Password */}
        <div>
          <label className='block text-m font-medium text-gray-700'>Password</label>
          <input 
            type="password" 
            name='password' 
            placeholder='Enter your password' 
            required 
            className='my-1 block w-full rounded-md border p-1'
          />
        </div>

        {/* Error Message Display */}
        {state?.error && (
          <p className='text-sm text-red-600 font-medium'>{state.error}</p>
        )}

        <button 
          type='submit' 
          disabled={isPending}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 mt-5 disabled:opacity-50'
        >
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm