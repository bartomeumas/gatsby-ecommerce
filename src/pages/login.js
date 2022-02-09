import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function Login() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
    },
  })

  const handleChange = e => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    })
  }

  return (
    <Layout>
      <figure className="h-screen flex">
        <div className="w-full max-w-md m-auto bg-emerald-200 rounded-lg border border-primaryBorder shadow-default py-10 px-1">
          <div className=" m-6">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-2xl font-medium mt-4 mb-2">
                Login to your account
              </h1>
            </div>
            <form>
              <label className="text-left">Username:</label>
              <input
                name="username"
                type="text"
                value={formData.user.username}
                onChange={handleChange}
                placeholder="Username"
                className={
                  "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Password:</label>
              <input
                name="password"
                type="password"
                value={formData.user.password}
                onChange={handleChange}
                placeholder="Password"
                className={
                  "w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <div className="flex items-center mt-3 justify-center">
                <button
                  className={
                    "bg-green-700 hover:bg-green-500 py-2 px-4 text-md text-white rounded border border-green focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center mt-3 justify-center">
              <Link
                to="/signup"
                className={"justify-center text-green-700 hover:underline"}
              >
                Need to register? Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </figure>
    </Layout>
  )
}
