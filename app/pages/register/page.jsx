import React from 'react'

const RegisterCompoenent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Daftar</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-600">
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500"
              >
                Show
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Konfirmasi Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition w-full"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterCompoenent
