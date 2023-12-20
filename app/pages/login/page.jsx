import Link from 'next/link'
import React from 'react'

const LoginCompoenent = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-200">
      <div
        className="lg:w-1/2 h-64 lg:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/login.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Masuk</h1>

        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              User ID:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-600">
              Ingatkan Saya
            </label>
          </div>

          <div className="mb-4">
            <Link href="/home">
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition w-full"
              >
                Login
              </button>
            </Link>
          </div>
        </form>

        <p className="text-center">
          Belum punya akun?{' '}
          <a href="/register" className="text-blue-500">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginCompoenent
