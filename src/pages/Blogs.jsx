import React from 'react'

const Blogs = () => {
  return (
    <>
      <h1>Blogs</h1>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <caption className="py-2 text-start text-sm text-gray-600">
            Blog Lists
          </caption>
          <thead className="bg-gray-50">
            {/* Button row */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase border-b-2"
                colSpan="5"
              >
                {/* Button Add */}
                <button className="p-2 bg-primary-500 text-black rounded-sm float-right">
                  <i className="bx bx-add-to-queue mr-1"></i>
                  Add new member
                </button>
              </th>
            </tr>
            {/* Table Header */}
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Photo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 group">
            <tr className=" last:border-b">
              <td className="px-6 py-4 text-sm font-medium text-black">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/100"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-black">dede@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                Dede Supriatna
              </td>
              <td className="px-6 py-4 text-sm text-black">Programmer</td>
              <td className="px-6 py-4 flex gap-1 justify-center items-center text-end text-sm font-medium">
                {/* Button Delete */}
                <button
                  type="button"
                  className="p-2 rounded-lg border border-red-500"
                >
                  <i className="bx bx-trash text-red-500"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Blogs