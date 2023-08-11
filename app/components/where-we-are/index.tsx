"use client"
import React, {useState} from 'react';
import {ComposableMap, Geographies, Geography} from 'react-simple-maps'
import Continents from "@/app/components/where-we-are/continents";
import CountryTab from "@/app/components/where-we-are/country-tab";

const continents = [
    {
        id: 1,
        name: 'Africa',
        countries: [{"id": 0, "name": "Egypt", "airports": []}, {
            "id": 1,
            "name": "Kenya",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]
        }, {
            "id": 2,
            "name": "Morocco",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]
        }, {"id": 3, "name": "Mozambique", "airports": []}, {"id": 4, "name": "Rwanda", "airports": []}]
    },
    {
        id: 2,
        name: 'Asia',
        countries: [{"id": 0, "name": "China", "airports": []}, {
            "id": 1,
            "name": "India",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]
        }, {
            "id": 2,
            "name": "Indonesia",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]
        }, {"id": 3, "name": "Iran", "airports": []}, {"id": 4, "name": "Israel", "airports": []}, {
            "id": 5,
            "name": "Japan",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]
        },]
    },
    {
        id: 3,
        name: 'Australia/ Oceania',
        countries: [{
            "id": 0,
            "name": "Australia",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 1,
            "name": "French Polynesia",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]
        }, {"id": 2, "name": "New Zealand", "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)"]}]
    },
    {
        id: 4,
        name: 'Europe',
        countries: [{
            "id": 0,
            "name": "Austria",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 1,
            "name": "Belgium",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 2,
            "name": "Bulgaria",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 3,
            "name": "Croatia",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 4,
            "name": "Cyprus",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 5,
            "name": "Netherlands",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 6,
            "name": "North Macedonia",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 7,
            "name": "Norway",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 8,
            "name": "Poland",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 9,
            "name": "Portugal",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }, {
            "id": 10,
            "name": "Romania",
            "airports": ["Bengaluru (BLR)", "Chennai (MAA)", "Delhi (DEL)", "Goa (GOA)", "Hyderabad (HYD)", "Jaipur (JAI)", "Kochi (COK)", "Kolkata (CCU)"]
        }]
    },
]

function WhereWeAre() {

    const [countries, setCountries] = useState<[]>([])
    const [countryTab, setCountryTab] = useState<boolean>(false)
    const handleContinent = (data: any) => {
        setCountryTab(() => true);
        setCountries(data)
    }

    return (
        <div id='whereweare' className={`pt-24 pt-24 h-[1000px]`}
             style={{background: 'linear-gradient(180deg, #385D7D 35%, #1A4163 100%)'}}>
            <div>
                <h2 className='text-center text-orange-100 text-[1rem] text-base font-medium uppercase tracking-wide mb-[1rem]'>
                    Where we are
                </h2>
                <div className='font-larken'>
                    <h1 className='text-center text-orange-100 text-[50px] font-light leading-[53.25px] mb-[1rem]'>
                        300+ airports, 150 countries
                    </h1>
                    <span className='text-center block text-orange-100 text-[21px] leading-[29.40px] mb-[1rem]'>
                                A network of airports, rail stations, private aviation terminals with
                        </span>
                    <div className='text-center text-orange-100 text-[50px] font-light leading-[53.25px]'>
                        1 mission, 0 friction
                    </div>
                </div>
            </div>
            <div className='w-5/6 m-auto relative'>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <Continents continents={continents} onContinentClick={handleContinent}/>
                        {countryTab && <CountryTab countries={countries}/>}
                    </div>
                    <div className='w-[800px]'>
                        <ComposableMap>
                            <Geographies geography='/topojson-file.json'>
                                {({geographies}) =>
                                    geographies.map((geo) => {
                                        return (
                                            <Geography key={geo.rsmKey} geography={geo}
                                                       fill="#b4c0ca"
                                                       stroke="#94a3b8" style={{pressed: {outline: "none"},}}/>
                                        )
                                    })
                                }
                            </Geographies>
                        </ComposableMap>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WhereWeAre;