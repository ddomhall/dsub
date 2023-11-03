"use client";
import { useState } from "react";
import Section from "./section";
import React from 'react';
import InputRange from 'react-input-range';
import '../app/input-range.css'

export default function Search() {
    const [advanced, setAdvanced] = useState(false)
    const [data, setData] = useState()
    const [range, setRange] = useState({ min: -1, max: 1 })
    const values = {
        text: "",
        sourceCountries: "",
        language: "",
        minSentiment: "",
        maxSentiment: "",
        earliestPublishDate: "",
        latestPublishDate: "",
        newsSources: "",
        authors: "",
        sortType: "",
        sortDirection: "",
        offset: "",
        number: ""
    }

    const languages = [
        [
            "",
            ""
        ],
        [
            "Afar",
            "aa"
        ],
        [
            "Amharic",
            "am"
        ],
        [
            "Arabic",
            "ar"
        ],
        [
            "Bengali",
            "bn"
        ],
        [
            "Bosnian",
            "bs"
        ],
        [
            "Bulgarian",
            "bg"
        ],
        [
            "Burmese",
            "my"
        ],
        [
            "Chinese",
            "zh"
        ],
        [
            "Croatian",
            "hr"
        ],
        [
            "Czech",
            "cs"
        ],
        [
            "Danish",
            "da"
        ],
        [
            "Dutch",
            "nl"
        ],
        [
            "English",
            "en"
        ],
        [
            "Estonian",
            "et"
        ],
        [
            "Finnish",
            "fi"
        ],
        [
            "French",
            "fr"
        ],
        [
            "German",
            "de"
        ],
        [
            "Greek",
            "el"
        ],
        [
            "Hebrew",
            "he"
        ],
        [
            "Hindi",
            "hi"
        ],
        [
            "Hungarian",
            "hu"
        ],
        [
            "Icelandic",
            "is"
        ],
        [
            "Indonesian",
            "id"
        ],
        [
            "Italian",
            "it"
        ],
        [
            "Japanese",
            "ja"
        ],
        [
            "Korean",
            "ko"
        ],
        [
            "Lao",
            "lo"
        ],
        [
            "Latvian",
            "lv"
        ],
        [
            "Lithuanian",
            "lt"
        ],
        [
            "Macedonian",
            "mk"
        ],
        [
            "Malay",
            "ms"
        ],
        [
            "Maltese",
            "mt"
        ],
        [
            "Marathi",
            "mr"
        ],
        [
            "Māori",
            "mi"
        ],
        [
            "Nepali",
            "ne"
        ],
        [
            "Norwegian",
            "no"
        ],
        [
            "Persian",
            "fa"
        ],
        [
            "Polish",
            "pl"
        ],
        [
            "Portuguese",
            "pt"
        ],
        [
            "Romanian",
            "ro"
        ],
        [
            "Russian",
            "ru"
        ],
        [
            "Serbian",
            "sr"
        ],
        [
            "Sinhalese",
            "si"
        ],
        [
            "Slovak",
            "sk"
        ],
        [
            "Slovene",
            "sl"
        ],
        [
            "Somali",
            "so"
        ],
        [
            "Spanish",
            "es"
        ],
        [
            "Swedish",
            "sv"
        ],
        [
            "Tajik",
            "tg"
        ],
        [
            "Tamil",
            "ta"
        ],
        [
            "Telugu",
            "te"
        ],
        [
            "Thai",
            "th"
        ],
        [
            "Turkish",
            "tr"
        ],
        [
            "Ukrainian",
            "uk"
        ],
        [
            "Urdu",
            "ur"
        ],
        [
            "Uzbek",
            "uz"
        ],
        [
            "Vietnamese",
            "vi"
        ]
    ]

    const countries = [
        [
            "",
            ""
        ],
        [
            "Afghanistan",
            "af"
        ],
        [
            "Albania",
            "al"
        ],
        [
            "Algeria",
            "dz"
        ],
        [
            "American Samoa",
            "as"
        ],
        [
            "Anguilla",
            "ai"
        ],
        [
            "Australia",
            "au"
        ],
        [
            "Austria",
            "at"
        ],
        [
            "Bahamas",
            "bs"
        ],
        [
            "Bahrain",
            "bh"
        ],
        [
            "Bangladesh",
            "bd"
        ],
        [
            "Barbados",
            "bb"
        ],
        [
            "Belarus",
            "by"
        ],
        [
            "Belgium",
            "be"
        ],
        [
            "Belize",
            "bz"
        ],
        [
            "Benin",
            "bj"
        ],
        [
            "Bermuda",
            "bm"
        ],
        [
            "Bhutan",
            "bt"
        ],
        [
            "Bosnia And Herzegovina",
            "ba"
        ],
        [
            "Bouvet Island",
            "bv"
        ],
        [
            "Brazil",
            "br"
        ],
        [
            "British Indian Ocean Territory",
            "io"
        ],
        [
            "Brunei Darussalam",
            "bn"
        ],
        [
            "Bulgaria",
            "bg"
        ],
        [
            "Burkina Faso",
            "bf"
        ],
        [
            "Burundi",
            "bi"
        ],
        [
            "Cambodia",
            "kh"
        ],
        [
            "Cameroon",
            "cm"
        ],
        [
            "Canada",
            "ca"
        ],
        [
            "Cape Verde",
            "cv"
        ],
        [
            "Central African Republic",
            "cf"
        ],
        [
            "Chile",
            "cl"
        ],
        [
            "China",
            "cn"
        ],
        [
            "Colombia",
            "co"
        ],
        [
            "Comoros",
            "km"
        ],
        [
            "Congo, Democratic Republic Of The",
            "cd"
        ],
        [
            "Congo, Republic Of The",
            "cg"
        ],
        [
            "Costa Rica",
            "cr"
        ],
        [
            "Cote D'ivoire",
            "ci"
        ],
        [
            "Croatia",
            "hr"
        ],
        [
            "Cuba",
            "cu"
        ],
        [
            "Cyprus",
            "cy"
        ],
        [
            "Czech Republic",
            "cz"
        ],
        [
            "Denmark",
            "dk"
        ],
        [
            "Djibouti",
            "dj"
        ],
        [
            "Dominican Republic",
            "do"
        ],
        [
            "Ecuador",
            "ec"
        ],
        [
            "Egypt",
            "eg"
        ],
        [
            "El Salvador",
            "sv"
        ],
        [
            "Eritrea",
            "er"
        ],
        [
            "Ethiopia",
            "et"
        ],
        [
            "Europe",
            "eu"
        ],
        [
            "Fiji",
            "fj"
        ],
        [
            "Finland",
            "fi"
        ],
        [
            "France",
            "fr"
        ],
        [
            "French Guiana",
            "gf"
        ],
        [
            "French Polynesia",
            "pf"
        ],
        [
            "Gambia",
            "gm"
        ],
        [
            "Germany",
            "de"
        ],
        [
            "Ghana",
            "gh"
        ],
        [
            "Greece",
            "gr"
        ],
        [
            "Guatemala",
            "gt"
        ],
        [
            "Guinea",
            "gn"
        ],
        [
            "Guyana",
            "gy"
        ],
        [
            "Honduras",
            "hn"
        ],
        [
            "Hong Kong",
            "hk"
        ],
        [
            "Hungary",
            "hu"
        ],
        [
            "Iceland",
            "is"
        ],
        [
            "India",
            "in"
        ],
        [
            "Indonesia",
            "id"
        ],
        [
            "Iran",
            "ir"
        ],
        [
            "Iraq",
            "iq"
        ],
        [
            "Ireland",
            "ie"
        ],
        [
            "Israel",
            "il"
        ],
        [
            "Italy",
            "it"
        ],
        [
            "Japan",
            "jp"
        ],
        [
            "Jordan",
            "jo"
        ],
        [
            "Kazakhstan",
            "kz"
        ],
        [
            "Kenya",
            "ke"
        ],
        [
            "Kuwait",
            "kw"
        ],
        [
            "Laos",
            "la"
        ],
        [
            "Latvia",
            "lv"
        ],
        [
            "Lebanon",
            "lb"
        ],
        [
            "Lesotho",
            "ls"
        ],
        [
            "Liberia",
            "lr"
        ],
        [
            "Liechtenstein",
            "li"
        ],
        [
            "Lithuania",
            "lt"
        ],
        [
            "Luxembourg",
            "lu"
        ],
        [
            "Macedonia",
            "mk"
        ],
        [
            "Madagascar",
            "mg"
        ],
        [
            "Malawi",
            "mw"
        ],
        [
            "Malaysia",
            "my"
        ],
        [
            "Maldives",
            "mv"
        ],
        [
            "Mali",
            "ml"
        ],
        [
            "Malta",
            "mt"
        ],
        [
            "Mauritania",
            "mr"
        ],
        [
            "Mauritius",
            "mu"
        ],
        [
            "Mexico",
            "mx"
        ],
        [
            "Micronesia, Federated States Of",
            "fm"
        ],
        [
            "Moldova",
            "md"
        ],
        [
            "Monaco",
            "mc"
        ],
        [
            "Montenegro",
            "me"
        ],
        [
            "Montserrat",
            "ms"
        ],
        [
            "Morocco",
            "ma"
        ],
        [
            "Myanmar",
            "mm"
        ],
        [
            "Namibia",
            "na"
        ],
        [
            "Nepal",
            "np"
        ],
        [
            "Netherlands",
            "nl"
        ],
        [
            "New Zealand",
            "nz"
        ],
        [
            "Niger",
            "ne"
        ],
        [
            "Nigeria",
            "ng"
        ],
        [
            "North Korea",
            "kp"
        ],
        [
            "Norway",
            "no"
        ],
        [
            "Oman",
            "om"
        ],
        [
            "Pakistan",
            "pk"
        ],
        [
            "Palestinian Territory",
            "ps"
        ],
        [
            "Paraguay",
            "py"
        ],
        [
            "Peru",
            "pe"
        ],
        [
            "Philippines",
            "ph"
        ],
        [
            "Poland",
            "pl"
        ],
        [
            "Portugal",
            "pt"
        ],
        [
            "Qatar",
            "qa"
        ],
        [
            "Romania",
            "ro"
        ],
        [
            "Russia",
            "ru"
        ],
        [
            "Rwanda",
            "rw"
        ],
        [
            "Saint Kitts And Nevis",
            "kn"
        ],
        [
            "Saint Vincent And The Grenadines",
            "vc"
        ],
        [
            "San Marino",
            "sm"
        ],
        [
            "Saudi Arabia",
            "sa"
        ],
        [
            "Senegal",
            "sn"
        ],
        [
            "Serbia",
            "rs"
        ],
        [
            "Seychelles",
            "sc"
        ],
        [
            "Sierra Leone",
            "sl"
        ],
        [
            "Singapore",
            "sg"
        ],
        [
            "Slovakia",
            "sk"
        ],
        [
            "Slovenia",
            "si"
        ],
        [
            "Solomon Islands",
            "sb"
        ],
        [
            "Somalia",
            "so"
        ],
        [
            "South Africa",
            "za"
        ],
        [
            "South Korea",
            "kr"
        ],
        [
            "Spain",
            "es"
        ],
        [
            "Sri Lanka",
            "lk"
        ],
        [
            "Suriname",
            "sr"
        ],
        [
            "Swaziland",
            "sz"
        ],
        [
            "Sweden",
            "se"
        ],
        [
            "Switzerland",
            "ch"
        ],
        [
            "Syria",
            "sy"
        ],
        [
            "Taiwan",
            "tw"
        ],
        [
            "Tajikistan",
            "tj"
        ],
        [
            "Thailand",
            "th"
        ],
        [
            "Timor-leste",
            "tl"
        ],
        [
            "Togo",
            "tg"
        ],
        [
            "Tonga",
            "to"
        ],
        [
            "Trinidad And Tobago",
            "tt"
        ],
        [
            "Turkey",
            "tr"
        ],
        [
            "Tuvalu",
            "tv"
        ],
        [
            "Ukraine",
            "ua"
        ],
        [
            "Uganda",
            "ug"
        ],
        [
            "United Arab Emirates",
            "ae"
        ],
        [
            "United Kingdom",
            "gb"
        ],
        [
            "United States Of America",
            "us"
        ],
        [
            "Uruguay",
            "uy"
        ],
        [
            "Uzbekistan",
            "uz"
        ],
        [
            "Vanuatu",
            "vu"
        ],
        [
            "Zambia",
            "zm"
        ]
    ]

    async function getNews(e) {
        e.preventDefault()
        setData()
        let count = 0
        let index = 0
        while (e.target[count]) {
            if (e.target[count].id === "advanced" || e.target[count].id === "submit") {
                count++
            } else if (e.target[count].id === "sourceCountries") {
                index = countries.findIndex(i => i.includes(e.target[count].value))
                values[e.target[count].id] = countries[index][1]
                count++
            } else if (e.target[count].id === "language") {
                index = languages.findIndex(i => i.includes(e.target[count].value))
                values[e.target[count].id] = languages[index][1]
                count++
            } else if (e.target[count].id === "date") {
                let now = new Date
                values["latestPublishDate"] = "2023-10-30 00:00:00"
                values["earliestPublishDate"] = "2022-10-20 00:00:00"
                if (e.target[count].value === "yesterday") {
                    values["earliestPublishDate"] = new Date(now - 86400000)
                } else if (e.target[count].value === "last week") {
                    values["earliestPublishDate"] = new Date(now - 604800000)
                } else if (e.target[count].value === "last month") {
                    values["earliestPublishDate"] = new Date(now - 2628000000)
                } else if (e.target[count].value === "last year") {
                    values["earliestPublishDate"] = new Date(now - 31540000000)
                }
                count++
            } else {
                values[e.target[count].id] = e.target[count].value
                count ++
            }
        }

        values["minSentiment"] = range.min
        values["maxSentiment"] = range.max

        const {text,sourceCountries,language,minSentiment,maxSentiment,earliestPublishDate,latestPublishDate,newsSources,authors,sortType,sortDirection,offset,number} = values
        await fetch(`/api/news?text=${text}&sourceCountries=${sourceCountries}&language=${language}&minSentiment=${minSentiment}&maxSentiment=${maxSentiment}&earliestPublishDate=${earliestPublishDate}&latestPublishDate=${latestPublishDate}&newsSources=${newsSources}&authors=${authors}&sortType=${sortType}&sortDirection=${sortDirection}&offset=${offset}&number=${number}`)
            .then(response => response.json())
            .then(response => setData(response.data.news))
            .then(response => console.log(data))
            .catch(err => console.error(err));

    }

    return (
        <section>
        <form className="flex flex-col py-6" onSubmit={getNews}>
        <label htmlFor="text">text</label>
        <input className="rounded-3xl px-2" id="text"/>
        <button className="mt-6 rounded-3xl text-black bg-slate-400 hover:bg-slate-300" onClick={() => setAdvanced(!advanced)} id="advanced" type="button">advanced</button>
        {advanced ?
        <div>
            <label htmlFor="input-range">sentiment</label>
            <div className="my-4 mx-2">
                <InputRange id="input-range" maxValue={1} minValue={-1} step={0.05} value={range} onChange={value => setRange({min: parseFloat(value.min.toFixed(1)), max: parseFloat(value.max.toFixed(1))})}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="date">date range</label>
                <select className="rounded-3xl px-2 text-black bg-white" id="date">
                    <option className="bg-slate-900" key="nodate"></option>
                    <option className="bg-slate-900" key="yesterday">yesterday</option>
                    <option className="bg-slate-900" key="last week">last week</option>
                    <option className="bg-slate-900" key="last month">last month</option>
                    <option className="bg-slate-900" key="last year">last year</option>
                </select>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="sourceCountries">country</label>
                    <select className="rounded-3xl px-2 text-black bg-white" id="sourceCountries">
                        {countries.map(country => <option className="bg-slate-900" key={country[0]}>{country[0]}</option>)}
                    </select>
                </div>
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="language">language</label>
                    <select className="rounded-3xl px-2 text-black bg-white" id="language">
                        {languages.map(language => <option className="bg-slate-900" key={language[0]}>{language[0]}</option>)}
                    </select>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="newsSources">news-sources</label>
                    <input className="rounded-3xl px-2" id="newsSources" type="url"/>
                </div>
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="authors">authors</label>
                    <input className="rounded-3xl px-2" id="authors"/>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="sortType">sort</label>
                    <select className="rounded-3xl px-2 text-black bg-white" id="sortType">
                        <option className="bg-slate-900" key="nosort"></option>
                        <option className="bg-slate-900" key="publish-time">publish-time</option>
                        <option className="bg-slate-900" key="sentiment">sentiment</option>
                    </select>
                </div>
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="sortDirection">sort-direction</label>
                    <select className="rounded-3xl px-2 text-black bg-white" id="sortDirection">
                        <option className="bg-slate-900" key="nosortdir"></option>
                        <option className="bg-slate-900" key="ASC">ASC</option>
                        <option className="bg-slate-900" key="DESC">DESC</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="offset">offset</label>
                    <input className="rounded-3xl px-2" id="offset" type="number"/>
                </div>
                <div className="flex flex-col w-[150px]">
                    <label htmlFor="number">number</label>
                    <input className="rounded-3xl px-2" id="number" type="number"/>
                </div>
            </div>
        </div> : "" }
        <button className="mt-6 rounded-3xl text-black bg-slate-400 hover:bg-slate-300" id="submit" type="submit">submit</button>
        </form>
        {data ? data.map(item => <Section key={item.id} news={item}/>) : ""}
        </section>
    )
}

