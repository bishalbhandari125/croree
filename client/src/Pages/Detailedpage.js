import Compareslideup from "../Components/Compareslideup"

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}



export default function Detailedpage() {
  return (
    <>
      <div className="min-h-full min-w-7xl">
      <main className="py-10 ">
          {/* Page header */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:flex md:items-center md:justify-between lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-32 w-32"
                    src="../Assets/sherbahadur.jpg"
                    alt=""
                  />
                  <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sher Bahadur Deuba</h1>
                <p className="text-md font-medium text-gray-500">
                  Prime Minister
                  </p>
                  <p className="text-md font-semibold text-gray-500">Nepali Congress</p>
              </div>
             {/* //comparebutton */}
              <div className="content-end">
                 <button className="ml:0 md:ml-5 lg:ml-40 bg-blue-400 px-3 py-2 rounded-md font-bold text-white content-end">Compare</button>
              </div>
            </div>
           </div>

           <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                        <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                          Politician's Information
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and works.</p>
                    </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Education</dt>
                        <dd className="mt-1 text-sm text-gray-900">Intermediate Level</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Political Involvement</dt>
                        <dd className="mt-1 text-sm text-gray-900">Since 1978</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Achievements</dt>
                        <dd className="mt-1 text-sm text-gray-900">Prime Minister</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                          proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

