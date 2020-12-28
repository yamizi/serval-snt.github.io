export const countries = [
    "Afghanistan",
    "Angola",
    "Argentina",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belgium",
    "Belize",
    "Benin",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Bulgaria",
    "Burkina Faso",
    "Cameroon",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Croatia",
    "Denmark",
    "Dominican Republic",
    "Ecuador",
    "El Salvador",
    "Estonia",
    "Finland",
    "France",
    "Gabon",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemala",
    "Honduras",
    "Hungary",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Lebanon",
    "Libya",
    "Luxembourg",
    "Malaysia",
    "Mali",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Rwanda",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Singapore",
    "Slovenia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Tanzania",
    "Thailand",
    "Turkey",
    "Uganda",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Vietnam",
    "Zambia",
    "Zimbabwe",
]

export const scenarios = [
    {
        id: "scenario-brutal-exit",
        mitigations: [
            //{id:0, measure:"Essential groceries",date:"2020-05-11",value:100},
            { id: 1, measure: "Workplaces", date: "2020-05-11", value: 100 },
            //{id:2, measure:"School & Universities",date:"2020-05-11",value:100},
            {
                id: 3,
                measure: "Parks & outdoor activities",
                date: "2020-05-11",
                value: 100,
            },
            {
                id: 4,
                measure: "Public transport",
                date: "2020-05-11",
                value: 100,
            },
            {
                id: 5,
                measure: "Retail & Recreation",
                date: "2020-05-11",
                value: 100,
            },
            //{id:6, measure:"International travels",date:"2020-05-11",value:100}
        ],
    },
    /* {
        id: "scenario-brutal-exit-closed-borders",
        mitigations: [
            { id: 0, measure: "Essential groceries", date: "2020-05-11", value: 100 },
            { id: 1, measure: "Workplaces", date: "2020-05-11", value: 100 },
            //{id:2, measure:"School & Universities",date:"2020-05-11",value:100},
            { id: 3, measure: "Parks & outdoor activities", date: "2020-05-11", value: 100 },
            { id: 4, measure: "Public transport", date: "2020-05-11", value: 100 },
            { id: 5, measure: "Retail & Recreation", date: "2020-05-11", value: 100 },
            //{id:6, measure:"International travels",date:"2020-05-11",value:0}
        ]
    }, */
    {
        id: "scenario-cyclic-exit",
        mitigations: [
            //{id:0, measure:"Essential groceries",date:"2020-05-11",value:100},
            { id: 1, measure: "Workplaces", date: "2020-05-11", value: 100 },
            //{id:2, measure:"School & Universities",date:"2020-05-11",value:100},
            {
                id: 3,
                measure: "Parks & outdoor activities",
                date: "2020-05-11",
                value: 100,
            },
            {
                id: 4,
                measure: "Public transport",
                date: "2020-05-11",
                value: 100,
            },
            {
                id: 5,
                measure: "Retail & Recreation",
                date: "2020-05-11",
                value: 100,
            },
            //{id:6, measure:"International travels",date:"2020-05-11",value:100},

            {
                id: 7,
                measure: "Essential groceries",
                date: "2020-06-08",
                value: 20,
            },
            { id: 8, measure: "Workplaces", date: "2020-06-08", value: 20 },
            //{id:9, measure:"School & Universities",date:"2020-06-08",value:0},
            {
                id: 10,
                measure: "Parks & outdoor activities",
                date: "2020-06-08",
                value: 0,
            },
            {
                id: 11,
                measure: "Public transport",
                date: "2020-06-08",
                value: 0,
            },
            {
                id: 12,
                measure: "Retail & Recreation",
                date: "2020-06-08",
                value: 0,
            },
            //{id:13, measure:"International travels",date:"2020-06-08",value:0},

            //{id:14, measure:"Essential groceries",date:"2020-07-06",value:100},
            { id: 15, measure: "Workplaces", date: "2020-07-06", value: 100 },
            //{id:16, measure:"School & Universities",date:"2020-07-06",value:100},
            {
                id: 17,
                measure: "Parks & outdoor activities",
                date: "2020-07-06",
                value: 100,
            },
            {
                id: 18,
                measure: "Public transport",
                date: "2020-07-06",
                value: 100,
            },
            {
                id: 19,
                measure: "Retail & Recreation",
                date: "2020-07-06",
                value: 100,
            },
            //{id:20, measure:"International travels",date:"2020-07-06",value:100},

            //{id:21, measure:"Essential groceries",date:"2020-08-03",value:20},
            { id: 22, measure: "Workplaces", date: "2020-08-03", value: 20 },
            //{id:23, measure:"School & Universities",date:"2020-08-03",value:0},
            {
                id: 24,
                measure: "Parks & outdoor activities",
                date: "2020-08-03",
                value: 0,
            },
            {
                id: 25,
                measure: "Public transport",
                date: "2020-08-03",
                value: 0,
            },
            {
                id: 26,
                measure: "Retail & Recreation",
                date: "2020-08-03",
                value: 0,
            },
            //{id:27, measure:"International travels",date:"2020-08-03",value:0},

            //{id:28, measure:"Essential groceries",date:"2020-09-07",value:100},
            { id: 29, measure: "Workplaces", date: "2020-09-07", value: 100 },
            //{id:30, measure:"School & Universities",date:"2020-09-07",value:100},
            {
                id: 31,
                measure: "Parks & outdoor activities",
                date: "2020-09-07",
                value: 100,
            },
            {
                id: 32,
                measure: "Public transport",
                date: "2020-09-07",
                value: 100,
            },
            {
                id: 33,
                measure: "Retail & Recreation",
                date: "2020-09-07",
                value: 100,
            },
            //{id:34, measure:"International travels",date:"2020-09-07",value:100}
        ],
    },
]



export const rebornScenarios = [
    {
        id: "brutal-strategy",
        mitigations: [
            { id: 1, measure: "Belgium border", date: "2020-05-11", value: 100, label:'Close' },
            { id: 2, measure: "French border", date: "2020-05-11", value: 100, label:'Close' },
            { id: 3, measure: "German border", date: "2020-05-11", value: 100, label:'Close' },
            { id: 4, measure: "Schools", date: "2020-05-11", value: 100, label:'Close' },
            { id: 5, measure: "Public Gathering", date: "2020-05-11", value: 100, label:'Close' },
            { id: 6, measure: "Private Social Gathering", date: "2020-05-11", value: 100, label:'Close' },
            { id: 7, measure: "Parks", date: "2020-05-11", value: 100, label:'No R' },
            { id: 8, measure: "Travel allowed", date: "2020-05-11", value: 100, label:'Close' },
            { id: 9, measure: "Economic Activity Restriction", date: "2020-05-11", value: 50, label:'Full' },
            { id: 10, measure: "Strict Respect of Government Measures", date: "2020-05-11", value: 0, label:'Open' }
        ],
    },
    {
        id: "brutal-strategy-for-one-month",
        mitigations: [
            { id: 1, measure: "Belgium border", date: "2020-05-11", value: 100, label:'Close' },
            { id: 2, measure: "French border", date: "2020-05-11", value: 100, label:'Close' },
            { id: 3, measure: "German border", date: "2020-05-11", value: 100, label:'Close' },
            { id: 4, measure: "Schools", date: "2020-05-11", value: 100, label:'Close' },
            { id: 5, measure: "Public Gathering", date: "2020-05-11", value: 100, label:'Close' },
            { id: 6, measure: "Private Social Gathering", date: "2020-05-11", value: 100, label:'Close' },
            { id: 7, measure: "Parks", date: "2020-05-11", value: 100, label:'No R' },
            { id: 8, measure: "Travel allowed", date: "2020-05-11", value: 100, label:'Close' },
            { id: 9, measure: "Economic Activity Restriction", date: "2020-05-11", value: 50, label:'Full' },
            { id: 10, measure: "Strict Respect of Government Measures", date: "2020-05-11", value: 0, label:'Open' },

            { id: 1, measure: "Belgium border", date: "2020-06-11", value: 0, label:'Open' },
            { id: 2, measure: "French border", date: "2020-06-11", value: 0, label:'Open' },
            { id: 3, measure: "German border", date: "2020-06-11", value: 0, label:'Open' },
            { id: 4, measure: "Schools", date: "2020-06-11", value: 0, label:'Open' },
            { id: 5, measure: "Public Gathering", date: "2020-06-11", value: 0, label:'Open' },
            { id: 6, measure: "Private Social Gathering", date: "2020-06-11", value: 0, label:'Open' },
            { id: 7, measure: "Parks", date: "2020-06-11", value: 0, label:'None' },
            { id: 8, measure: "Travel allowed", date: "2020-06-11", value: 0, label:'Open' },
            { id: 9, measure: "Economic Activity Restriction", date: "2020-06-11", value: 0, label:'None' }
        ],
    }
    

]



export const measureTypes = [
    //{ id: "S1_School closing", value: "School & Universities" },
    //{ id: "S7_International travel controls", value: "International travels" },
    { id: "parks", value: "Parks & outdoor activities" },
    //{ id: "grocery/pharmacy", value: "Essential groceries" },
    { id: "transit_stations", value: "Public transport" },
    { id: "retail/recreation", value: "Retail & Recreation" },
    { id: "workplace", value: "Workplaces" },
]

export const RebornMeasureTypes = [
    { id: "b_be", value: "Belgium border" },
    { id: "b_fr", value: "French border" },
    { id: "b_de", value: "German border" },
    { id: "schools", value: "Schools" },
    { id: "public_gath", value: "Public Gathering" },
    { id: "private_gath", value: "Private Social Gathering" },
    { id: "park", value: "Parks" },
    { id: "travel", value: "Travel allowed" },
    { id: "activity_restr", value: "Economic Activity Restriction" },
    { id: "resp_gov_measure", value: "Strict Respect of Government Measures" },
]

export const rebornMeasureToApiMeasures = {
    "Belgium border": "b_be",
    "French border": "b_fr",
    "German border": "b_de",
    "Schools": "schools_m",
    "Public Gathering": "public_gath",
    "Private Social Gathering": "private_gath",
    "Parks": "parks_m",
    "Travel allowed": "travel_m",
    "Economic Activity Restriction": "activity_restr",
    "Strict Respect of Government Measures": "resp_gov_measure"
}

// TODO Savoir ce qu'est `scocial` dist pour la page web.
export const marksToApiValue = {
    "schools_m": {
        'open': "open",
        'owsd': "partial",
        'po': "preventive_measure",
        'close': "close"
    },
    "public_gath": { 'open': "yes", 'close': "no" },
    "private_gath": {
        'none': 1000,
        '5p': 5,
        '10p': 10,
        '20p': 20,
        'no r': 0
    },
    "social_dist": ["yes", "no"],
    "resp_gov_measure": { 'open': "yes", 'close': "no" },
    "parks_m": { 'open': "yes", 'close': "no" },
    "travel_m": { 'open': "yes", 'close': "no" },
    "activity_restr": {
        'none': "open",
        'full': "close",
        'mixed': "mixed"
    }
}