import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    const handleCountry = (id) => {
      console.log(id)
    }
    return (
        <div onClick={()=>handleCountry(country._id)} className="p-4 shadow-md bg-gray-50 text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                </div>
                {/* <a rel="noopener noreferrer" href="#">See All</a> */}
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={country.country_pic} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold text-violet-600">{country.country_name}</h3>
                    </a>
                    <p className="leading-snug text-gray-600">{country.country_desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;