
const CategoryLayout = () => {
    return (
        <div className='w-3/4  lg:w-3/4 xl:w-2/4 mx-auto border border-white shadow-md bg-white rounded-md lg:h-60 p-6'>
            <p className='mb-2 font-medium text-xl text-violet-600 font-mono'>Find the job by your choice</p>
            <hr />
            <div className=" mt-4 flex gap-2 lg:m-4">
                <input
                    type="text"
                    placeholder='Job Title'
                    className='w-full h-12 border border-violet-600 pl-4 outline-none'
                // value={teacherName}
                // onChange={(e) => setTeacherName(e.target.value)}
                />
                <button
                    className='font-sans h-12 bg-violet-600 text-white w-20 lg:w-36 border border-violet-600 '
                >
                    Search
                </button>
            </div>

            <div className="lg:flex gap-2 lg:m-4">

                <div className='lg:flex gap-2  w-full'>
                   
                </div>


                <button
                    // onClick={handleSearch}
                    className="font-sans bg-violet-600 text-white px-4 py-2 w-20 lg:w-36  h-12 mt-2 lg:mt-0"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default CategoryLayout;