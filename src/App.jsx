import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


function App() {
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {

    const getData = async () => {
      try {
        const url = "https://mlink-live.nms.saturn.spiderrockconnect.com/rest/json?apikey=ea36c806-3f6e-4905-b5df-579f79e85c3b&cmd=getmsgs&msgtype=NationsIndexPrice"
        const response = await axios.get(url)
        setData(response.data)


      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [update])

  setTimeout(() => {
    setUpdate(!update)
  }, 60000);


  return (
    <>
      <div className="relative overflow-x-auto m-10">

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Header
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                days
              </th>
              <th scope="col" className="px-6 py-3">
                ticker:at
              </th>
              <th scope="col" className="px-6 py-3">
                ticker:ts
              </th>
              <th scope="col" className="px-6 py-3">
                ticker:tk
              </th>
              <th scope="col" className="px-6 py-3">
                mrkPrice
              </th>
              <th scope="col" className="px-6 py-3">
                expiry
              </th>
              <th scope="col" className="px-6 py-3">
                srcTimestamp
              </th>

              <th scope="col" className="px-6 py-3">
                numMessagesSent
              </th>
              <th scope="col" className="px-6 py-3">
                queryElapsed
              </th>
              <th scope="col" className="px-6 py-3">
                result
              </th>
            </tr>

          </thead>
          {data.map((item, index) => {

            return (
              <tbody key={index}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.header.mTyp}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message?.pkey?.name}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message?.pkey?.days}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message?.pkey?.ticker?.at}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message?.pkey?.ticker?.ts}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message?.pkey?.ticker?.tk}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message.mrkPrice}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message.expiry}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message.srcTimestamp}
                  </th>

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message.numMessagesSent}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message.queryElapsed}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.message.result}
                  </th>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </>
  )
}
export default App





