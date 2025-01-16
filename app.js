const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const [helmet, compression] = [require("helmet"), require("compression")];

//configuring express
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    let meta = {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
        "X-Powered-By": "https://github.com/Abbaskhurram255",
        "App-Name": "Random User Generator",
        "App-Author": "Abbaskhurram255",
        "App-Company": "Khurram's Web Servers",
        "App-Support-Mail": "abbaskhurram255@gmail.com",
        "App-Support-Phone": "+923012965459",
        "App-License": "MIT",
        "App-Version": "1.0.0",
    };
    res.set(meta);

    next();
});
app.use(
    helmet({
        hidePoweredBy: false,
    })
);
app.use(compression());

let make_cdn = (_for) => {
    if (typeof _for !== "string" || !String(_for).trim().length) return;
    let _this = {
        protocol: "https://",
        host: "randusers-api.up.railway.app",
        path: "/img",
    };
    return `${Object.values(_this).join("")}${
        _for === "pk" ? "/sorted" : "/new"
    }`;
};
let cdn1 = make_cdn("non-pk");
let cdn2 = make_cdn("pk");

//the array below HAS to use let, since it'll later be modified, or shuffled to be specific
let foreigners = [
    {
        name: {
            title: "Ms",
            first: "بهار",
            middle: "محمد",
            last: "خان",
            full: "Ms بهار محمدخان",
        },
        email: "bhr.mhmdkhn@icloud.com",
        login: {
            username: "heavypeacock635",
            password: "SVteoatZZsr4tH9Nuf8TTkKpeupo",
        },
        dob: "March 22, 1990",
        phone: "+98 (765) 082 5845",
        review: {
            rate: 5,
            text: "can't thank enough",
            rating: "⭐⭐⭐⭐⭐",
            score: "100%",
        },
        country: "Iran",
        sex: "female",
        religion: "Islam",
        state: "کردستان",
        city: "بجنورد",
        area: "2374 پارک 17 شهریور",
        date_registered: "May 22, 2004",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "122.127.92.166",
        last_active: "25 days ago",
        id: "A0",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Ms",
            first: "Pooja",
            last: "Kumaari",
            full: "Ms Pooja Kumaari",
        },
        email: "pooja.kumaari@outlook.com",
        login: {
            username: "purplepooja659",
            password: "hyqUNv3PXu1olXYzovbfV",
        },
        dob: "April 19, 1992",
        phone: "+91 (001) 601 7855",
        review: {
            rate: 4.7,
            text: "I... em.... ig... saitiiiiiiiiiiid",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "India",
        sex: "female",
        religion: "Hindu",
        state: "Manawatu-Wanganui",
        city: "Napier",
        area: "9897 Kamo Road",
        date_registered: "Apr 5, 2007",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "A1",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Ms",
            first: "پارمیس",
            last: "رضاییان",
            full: "Ms پارمیس رضاییان",
        },
        email: "prmys.rdyyn@yahoo.com",
        login: {
            username: "smallmeercat617",
            password: "39viREpePlHhqq1Zy",
        },
        dob: "August 9, 2003",
        phone: "+98 (270) 323 6072",
        review: {
            rate: 4.9,
            text: "I'd like to donate $99 to help you improve your services, because I'd like to see you rising like a a morning sunshine",
            rating: "⭐⭐⭐⭐",
            score: "98%",
        },
        country: "Iran",
        sex: "female",
        religion: "Islam",
        state: "بوشهر",
        city: "اسلام‌شهر",
        area: "2147 شهید ثانی",
        date_registered: "May 24, 2020",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "78.247.180.19",
        last_active: "46 weeks, 37 day(s) ago",
        id: "A2",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Mr",
            first: "پوریا",
            last: "قاسمی",
            full: "Mr پوریا قاسمی",
        },
        email: "pwry.qsmy@outlook.com",
        login: {
            username: "tinysnake314",
            password: "LTowg5kgOXMS5X9aYtuRAlKvH",
        },
        dob: "April 26, 1989",
        phone: "+98 (728) 272 4128",
        review: {
            rate: 5,
            text: "not bad",
            rating: "⭐⭐⭐⭐⭐",
            score: "100%",
        },
        country: "Iran",
        sex: "male",
        religion: "Islam",
        state: "مرکزی",
        city: "نجف‌آباد",
        area: "3811 خرمشهر",
        date_registered: "Aug 21, 2008",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "129.43.168.195",
        last_active: "24 weeks, 49 day(s) ago",
        id: "A3",
        bloodGroup: "AB-",
    },
    {
        name: {
            title: "Ms",
            first: "Alyssia",
            last: "Lopez",
            full: "Ms Alyssia Lopez",
        },
        email: "alyssia.lopez@hotmail.com",
        login: {
            username: "goldenrabbit303",
            password: "cXa2kL6W9",
        },
        dob: "July 27, 1987",
        phone: "+33 (765) 476 7762",
        review: {
            rate: 4,
            text: "thumbs up",
            rating: "⭐⭐⭐⭐",
            score: "80%",
        },
        country: "France",
        sex: "female",
        religion: "Christianity",
        state: "Seine-Maritime",
        city: "Montreuil",
        area: "9619 Rue des Cuirassiers",
        date_registered: "Jan 1, 2018",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "A4",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Mr",
            first: "میلاد",
            last: "احمدی",
            full: "Mr میلاد احمدی",
        },
        email: "myld.hmdy@hotmail.com",
        login: {
            username: "bluegoose800",
            password: "pjAZPmrAuOI0urOx4CcDffp9p4Dq9r",
        },
        dob: "November 15, 2000",
        phone: "+98 (174) 871 2308",
        review: {
            rate: 4,
            text: "long live the queen/king",
            rating: "⭐⭐⭐⭐",
            score: "80%",
        },
        country: "Iran",
        sex: "male",
        religion: "Islam",
        state: "یزد",
        city: "خربد",
        area: "9008 استاد نجات‌اللهی",
        son_of: "Ms بهار احمدی",
        date_registered: "Aug 31, 2012",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "10.148.74.243",
        last_active: "16 weeks, 47 day(s) ago",
        id: "A5",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Miss",
            first: "Debra",
            last: "Rice",
            full: "Miss Debra Rice",
        },
        email: "debra.rice@icloud.com",
        login: {
            username: "yellowsnake624",
            password: "7tOGlGmJ8YnXBwPcGz",
        },
        dob: "September 28, 1990",
        phone: "+353 (307) 778 3628",
        review: {
            rate: 5,
            text: "out of this world",
            rating: "⭐⭐⭐⭐⭐",
            score: "100%",
        },
        country: "Ireland",
        sex: "female",
        religion: "Christianity",
        state: "Dublin City",
        city: "Midleton",
        area: "9818 Boghall Road",
        daughter_of: "Ms Matilda Rice",
        date_registered: "Sep 7, 2006",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "27.26.192.26",
        last_active: "2 hours, 50 minute(s) ago",
        id: "A6",
        bloodGroup: "O+",
    },
    {
        name: {
            title: "Mr",
            first: "Alisa",
            last: "Kivi",
            full: "Ms Alisa Kivi",
        },
        email: "alisa.kivi@hotmail.com",
        login: {
            username: "tiny.alisa.in.her.tiny.world.24.7",
            password: "EMccJsJcOfNEwF",
        },
        dob: "July 21, 1989",
        phone: "+358 (667) 335 0324",
        review: {
            rate: 4.8,
            text: "cute",
            rating: "⭐⭐⭐⭐",
            score: "96%",
        },
        country: "Finland",
        sex: "female",
        religion: "Christianity",
        state: "Tavastia Proper",
        city: "Enonkoski",
        area: "1864 Pirkankatu",
        daughter_of: "Ms پارمیس Kivi",
        date_registered: "Jan 11, 2020",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "158.187.104.165",
        last_active: "35 days ago",
        id: "A7",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Miss",
            first: "Sophia",
            last: "Bruder",
            full: "Miss Sophia Bruder",
        },
        email: "sophia.bruder@outlook.com",
        login: {
            username: "crazyostrich598",
            password: "6LbeHerCVIXrwME",
        },
        dob: "May 29, 1987",
        phone: "+49 (675) 832 5447",
        review: {
            rate: 4.9,
            text: "brilliance in work",
            rating: "⭐⭐⭐⭐",
            score: "98%",
        },
        country: "Germany",
        sex: "female",
        religion: "Christianity",
        state: "Bremen",
        city: "Calw",
        area: "9541 Lessingstraße",
        daughter_of: "Mr پوریا Bruder",
        date_registered: "Oct 27, 2006",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "A8",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Ms",
            first: "Praneetha",
            last: "Kulkarni",
            full: "Ms Praneetha Kulkarni",
        },
        email: "praneetha.kulkarni@yahoo.com",
        login: {
            username: "happyfrog334",
            password: "LzrQjXEaEvTr",
        },
        dob: "January 28, 2002",
        phone: "+91 (041) 743 4523",
        review: {
            rate: 4.1,
            text: "you are the best",
            rating: "⭐⭐⭐⭐",
            score: "82%",
        },
        country: "India",
        sex: "female",
        religion: "Hindu",
        state: "Puducherry",
        city: "Katni",
        area: "1435 Sitabuldi Main Rd",
        daughter_of: "Ms Alyssia Kulkarni",
        date_registered: "Sep 21, 2019",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "127.178.152.222",
        last_active: "39 hours ago",
        id: "A9",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Ms",
            first: "Angèle",
            last: "Bertrand",
            full: "Ms Angèle Bertrand",
        },
        email: "angele.bertrand@gmail.com",
        login: {
            username: "happycat977",
            password: "pQxtt70nVK",
        },
        dob: "July 18, 1995",
        phone: "+33 (561) 445 6385",
        review: {
            rate: 4.9,
            text: "I... em.... ig... saitiiiiiiiiiiid",
            rating: "⭐⭐⭐⭐",
            score: "98%",
        },
        country: "France",
        sex: "female",
        religion: "Christianity",
        state: "Val-de-Marne",
        city: "Tours",
        area: "8255 Rue de L'Abbé-Carton",
        daughter_of: "Mr میلاد Bertrand",
        date_registered: "May 11, 2022",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "53.141.112.168",
        last_active: "45 minutes, 31 second(s) ago",
        id: "B0",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Mr",
            first: "Ethan",
            last: "Johnson",
            full: "Mr Ethan Johnson",
        },
        email: "ethan.johnson@icloud.com",
        login: {
            username: "blackrabbit384",
            password: "ATCHmpPVHyMeA9l6RNTUpuy4",
        },
        dob: "August 20, 1987",
        phone: "+1 (561) 340 0418",
        review: {
            rate: 4.5,
            text: "who wouldn't love this",
            rating: "⭐⭐⭐⭐",
            score: "90%",
        },
        country: "Canada",
        sex: "male",
        religion: "Christianity",
        state: "Nunavut",
        city: "Westport",
        area: "2460 St. Catherine St",
        son_of: "Miss Debra Johnson",
        date_registered: "Mar 19, 2019",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "B1",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mr",
            first: "Zhivoslav",
            last: "Goshovski",
            full: "Mr Zhivoslav Goshovski",
        },
        email: "zhivoslav.goshovski@outlook.com",
        login: {
            username: "yellowswan189",
            password: "77F4PGvticXeo1cdREi8aPAGop0",
        },
        dob: "August 14, 1987",
        phone: "+380 (674) 350 1855",
        review: {
            rate: 4.7,
            text: "owe you big time",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "Ukraine",
        sex: "male",
        religion: "Christianity",
        state: "Poltavska",
        city: "Korostishiv",
        area: "6423 Ploshcha Slavi",
        son_of: "Mrs Alisa Goshovski",
        date_registered: "Jan 2, 2017",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "B2",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Mr",
            first: "Etienne",
            last: "Lo",
            full: "Mr Etienne Lo",
        },
        email: "etienne.lo@yahoo.com",
        login: {
            username: "yellowwolf333",
            password: "m1ZAZtFx4wuyXAiL9dM3aROhtzrWQe6g",
        },
        dob: "April 5, 1988",
        phone: "+1 (365) 658 6043",
        review: {
            rate: 4.7,
            text: "saved me a lifetime",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "Canada",
        sex: "male",
        religion: "Christianity",
        state: "Nova Scotia",
        city: "Minto",
        area: "8730 College Ave",
        son_of: "Miss Sophia Lo",
        date_registered: "Jan 25, 2019",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "15.102.239.111",
        last_active: "44 minutes, 49 second(s) ago",
        id: "B3",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Miss",
            first: "عسل",
            last: "کریمی",
            full: "Miss عسل کریمی",
        },
        email: "aasl.khrymy@yahoo.com",
        login: {
            username: "smallduck632",
            password: "rKyatlymiA6p",
        },
        dob: "April 21, 1987",
        phone: "+98 (763) 412 6442",
        review: {
            rate: 5,
            text: "long live the queen/king",
            rating: "⭐⭐⭐⭐⭐",
            score: "100%",
        },
        country: "Iran",
        sex: "female",
        religion: "Islam",
        state: "کهگیلویه و بویراحمد",
        city: "نجف‌آباد",
        area: "9623 میدان شهیدان رحیمی",
        daughter_of: "Ms Praneetha کریمی",
        date_registered: "May 24, 2013",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "B4",
        bloodGroup: "O+",
    },
    {
        name: {
            title: "Ms",
            first: "Aïda",
            last: "Nieuwenhuis",
            full: "Ms Aïda Nieuwenhuis",
        },
        email: "aida.nieuwenhuis@hotmail.com",
        login: {
            username: "yellowwolf770",
            password: "hQ9YwHlr0RMunXqvfe17jXwH4o3F4Bxd",
        },
        dob: "November 30, 1992",
        phone: "+31 (602) 564 8357",
        review: {
            rate: 4.1,
            text: "who wouldn't love this",
            rating: "⭐⭐⭐⭐",
            score: "82%",
        },
        country: "Netherlands",
        sex: "female",
        religion: "Christianity",
        state: "Utrecht",
        city: "Elburg",
        area: "4576 Cooperatieweg",
        daughter_of: "Ms Angèle Nieuwenhuis",
        date_registered: "Sep 13, 2004",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "59.236.51.89",
        last_active: "18 minutes ago",
        id: "B5",
        bloodGroup: "A+",
    },
    {
        name: {
            title: "Monsieur",
            first: "Guillaume",
            last: "Lefevre",
            full: "Monsieur Guillaume Lefevre",
        },
        email: "guillaume.lefevre@outlook.com",
        login: {
            username: "ticklishmeercat698",
            password: "ivcVPGnZ3u0UTbiZpUEhmRZgMkuY22",
        },
        dob: "May 2, 1986",
        phone: "+41 (587) 382 7611",
        review: {
            rate: 4.6,
            text: "who wouldn't love this",
            rating: "⭐⭐⭐⭐",
            score: "92%",
        },
        country: "Switzerland",
        sex: "male",
        religion: "Christianity",
        state: "Zug",
        city: "Diepoldsau",
        area: "9989 Rue Desaix",
        son_of: "Mr Ethan Lefevre",
        date_registered: "Jul 22, 2005",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "B6",
        bloodGroup: "AB+",
    },
    {
        name: {
            title: "Mr",
            first: "Silas",
            last: "Poulsen",
            full: "Mr Silas Poulsen",
        },
        email: "silas.poulsen@yahoo.com",
        login: {
            username: "smallkoala612",
            password: "pStXezsr0tYAf",
        },
        dob: "July 6, 1985",
        phone: "+45 (385) 863 5325",
        review: {
            rate: 4.9,
            text: "out of this world",
            rating: "⭐⭐⭐⭐",
            score: "98%",
        },
        country: "Denmark",
        sex: "male",
        religion: "Christianity",
        state: "Sjælland",
        city: "Støvring",
        area: "794 Lundvej",
        son_of: "Mr Zhivoslav Poulsen",
        date_registered: "Apr 17, 2009",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "B7",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Mr",
            first: "Nooa",
            last: "Koivisto",
            full: "Mr Nooa Koivisto",
        },
        email: "nooa.koivisto@hotmail.com",
        login: {
            username: "tinypanda484",
            password: "uCgQquRsGrZAtYSkNRkzM56rMd9Q6",
        },
        dob: "February 14, 1996",
        phone: "+358 (105) 337 7215",
        review: {
            rate: 4.9,
            text: "fascinated by this",
            rating: "⭐⭐⭐⭐",
            score: "98%",
        },
        country: "Finland",
        sex: "male",
        religion: "Christianity",
        state: "Ostrobothnia",
        city: "Humppila",
        area: "3787 Rautatienkatu",
        son_of: "Mr Etienne Koivisto",
        date_registered: "Mar 27, 2006",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "27.9.159.95",
        last_active: "52 hours ago",
        id: "B8",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Miss",
            first: "Amalie",
            last: "Jensen",
            full: "Miss Amalie Jensen",
        },
        email: "amalie.jensen@gmail.com",
        login: {
            username: "happytiger993",
            password: "AoCBLIFnSD06",
        },
        dob: "January 10, 1985",
        phone: "+45 (401) 222 8083",
        review: {
            rate: 4.1,
            text: "helpful",
            rating: "⭐⭐⭐⭐",
            score: "82%",
        },
        country: "Denmark",
        sex: "female",
        religion: "Christianity",
        state: "Nordjylland",
        city: "Sønder Stenderup",
        area: "4583 Nyvang",
        daughter_of: "Miss عسل Jensen",
        date_registered: "May 3, 2012",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "181.224.249.233",
        last_active: "27 hours, 28 minute(s) ago",
        id: "B9",
        bloodGroup: "O+",
    },
    {
        name: {
            title: "Miss",
            first: "Olivia",
            last: "Taylor",
            full: "Miss Olivia Taylor",
        },
        email: "olivia.taylor@icloud.com",
        login: {
            username: "ticklishpeacock919",
            password: "41XxPwOdTiTZSxP",
        },
        dob: "November 16, 1992",
        phone: "+64 (617) 815 1654",
        review: {
            rate: 4.7,
            text: "spectacular",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "New Zealand",
        sex: "female",
        religion: "Christianity",
        state: "Auckland",
        city: "Tauranga",
        area: "5653 Buckleys Road",
        daughter_of: "Ms Aïda Taylor",
        date_registered: "Oct 6, 2017",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "C0",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Mr",
            first: "Sami",
            last: "Merkl",
            full: "Mr Sami Merkl",
        },
        email: "sami.merkl@outlook.com",
        login: {
            username: "sadlion959",
            password: "xC6hjAVwV7NjHMSpN",
        },
        dob: "January 23, 1993",
        phone: "+49 (801) 106 0667",
        review: {
            rate: 4.3,
            text: "can't thank enough",
            rating: "⭐⭐⭐⭐",
            score: "86%",
        },
        country: "Germany",
        sex: "male",
        religion: "Christianity",
        state: "Rheinland-Pfalz",
        city: "Landstuhl",
        area: "1532 Birkenweg",
        son_of: "Monsieur Guillaume Merkl",
        date_registered: "Feb 23, 2013",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "C1",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mr",
            first: "Archer",
            last: "Martin",
            full: "Mr Archer Martin",
        },
        email: "archer.martin@hotmail.com",
        login: {
            username: "heavypanda687",
            password: "rwAUsm5VHdriDbHB5K",
        },
        dob: "July 28, 1996",
        phone: "+64 (766) 111 5088",
        review: {
            rate: 4.3,
            text: "not bad",
            rating: "⭐⭐⭐⭐",
            score: "86%",
        },
        country: "New Zealand",
        sex: "male",
        religion: "Christianity",
        state: "West Coast",
        city: "Upper Hutt",
        area: "9098 Portsmouth Drive",
        son_of: "Mr Silas Martin",
        date_registered: "Aug 27, 2011",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "137.115.209.37",
        last_active: "6 minutes ago",
        id: "C2",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Miss",
            first: "Elsbeth",
            last: "Kaminski",
            full: "Miss Elsbeth Kaminski",
        },
        email: "elsbeth.kaminski@hotmail.com",
        login: {
            username: "beautifulbird886",
            password: "cB3hHDOnPT6bI07TO4zA4i4",
        },
        dob: "May 14, 1993",
        phone: "+49 (134) 104 4635",
        review: {
            rate: 4.2,
            text: "uh-oh... looks like I just found a new erogenous zone, let the dopamine mining begin",
            rating: "⭐⭐⭐⭐",
            score: "84%",
        },
        country: "Germany",
        sex: "female",
        religion: "Christianity",
        state: "Schleswig-Holstein",
        city: "Friedland",
        area: "1537 Bahnhofstraße",
        daughter_of: "Mr Nooa Kaminski",
        date_registered: "Dec 25, 2007",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "125.94.121.143",
        last_active: "12 weeks ago",
        id: "C3",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Mr",
            first: "Mirko",
            last: "Kojić",
            full: "Mr Mirko Kojić",
        },
        email: "mirko.kojic@icloud.com",
        login: {
            username: "tinyswan777",
            password: "16ocPJ5cYhULAxdaW",
        },
        dob: "September 1, 1998",
        phone: "+7 (455) 467 5862",
        review: {
            rate: 4.2,
            text: "great",
            rating: "⭐⭐⭐⭐",
            score: "84%",
        },
        country: "Serbia",
        sex: "male",
        religion: "Christianity",
        state: "Nišava",
        city: "Sečanj",
        area: "6173 DragolЈuba Jeličića",
        son_of: "Miss Amalie Kojić",
        date_registered: "Nov 11, 2012",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "C4",
        bloodGroup: "O+",
    },
    {
        name: {
            title: "Miss",
            first: "Ellie",
            last: "Payne",
            full: "Miss Ellie Payne",
        },
        email: "ellie.payne@icloud.com",
        login: {
            username: "brownrabbit145",
            password: "JmENdOKJaAZ",
        },
        dob: "February 11, 1991",
        phone: "+44 (236) 223 5270",
        review: {
            rate: 3.9,
            text: "cute",
            rating: "⭐⭐⭐",
            score: "78%",
        },
        country: "United Kingdom",
        sex: "female",
        religion: "Christianity",
        state: "County Down",
        city: "Edinburgh",
        area: "7199 Chester Road",
        daughter_of: "Miss Olivia Payne",
        date_registered: "May 18, 2005",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "84.201.83.204",
        last_active: "32 hours ago",
        id: "C5",
        bloodGroup: "AB-",
    },
    {
        name: {
            title: "Mrs",
            first: "Susie",
            last: "Simmons",
            full: "Mrs Susie Simmons",
        },
        email: "susie.simmons@icloud.com",
        login: {
            username: "bluewolf953",
            password: "6sP86FELzIS7l6HQVGuHRknM",
        },
        dob: "July 28, 1999",
        phone: "+44 (563) 155 1203",
        review: {
            rate: 4,
            text: "brilliance in work",
            rating: "⭐⭐⭐⭐",
            score: "80%",
        },
        country: "United Kingdom",
        sex: "female",
        religion: "Christianity",
        state: "Northamptonshire",
        city: "Oxford",
        area: "483 Springfield Road",
        daughter_of: "Mr Sami Simmons",
        date_registered: "Oct 12, 2015",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "175.187.90.54",
        last_active: "36 hours, 17 minute(s) ago",
        id: "C6",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mrs",
            first: "Brianna",
            last: "Kim",
            full: "Mrs Brianna Kim",
        },
        email: "brianna.kim@gmail.com",
        login: {
            username: "brownfrog608",
            password: "N0EWBcnqpW8B6I4rBQUN",
        },
        dob: "February 8, 1988",
        phone: "+1 (534) 775 7284",
        review: {
            rate: 4.6,
            text: "out of this world",
            rating: "⭐⭐⭐⭐",
            score: "92%",
        },
        country: "United States",
        sex: "female",
        religion: "Christianity",
        state: "Rhode Island",
        city: "Escondido",
        area: "2395 Harrison Ct",
        daughter_of: "Mr Archer Kim",
        date_registered: "May 12, 2013",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "22.217.43.98",
        last_active: "10 minutes ago",
        id: "C7",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Miss",
            first: "Patsy",
            last: "Schmidt",
            full: "Miss Patsy Schmidt",
        },
        email: "patsy.schmidt@yahoo.com",
        login: {
            username: "browngoose596",
            password: "VrwdQDTGtG13bWkySzu",
        },
        dob: "April 24, 1993",
        phone: "+1 (680) 427 8086",
        review: {
            rate: 4.4,
            text: "I wish I was here before",
            rating: "⭐⭐⭐⭐",
            score: "88%",
        },
        country: "United States",
        sex: "female",
        religion: "Christianity",
        state: "New Jersey",
        city: "Daly City",
        area: "1815 Northaven Rd",
        daughter_of: "Miss Rebekkah Schmidt",
        date_registered: "Dec 15, 2002",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "C8",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Miss",
            first: "Latife",
            last: "Mertoğlu",
            full: "Miss Latife Mertoğlu",
        },
        email: "latife.mertoglu@yahoo.com",
        login: {
            username: "tinygorilla862",
            password: "mTfUb1udUZYoIiU5",
        },
        dob: "April 23, 1998",
        phone: "+90 (118) 143 2883",
        review: {
            rate: 4.8,
            text: "total reliability",
            rating: "⭐⭐⭐⭐",
            score: "96%",
        },
        country: "Turkey",
        sex: "female",
        religion: "Islam",
        state: "Elazığ",
        city: "Erzurum",
        area: "390 Vatan Cd",
        daughter_of: "Miss Susanna Mertoğlu",
        date_registered: "Aug 8, 2017",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "C9",
        bloodGroup: "AB+",
    },
    {
        name: {
            title: "Mr",
            first: "Leslie",
            last: "Stewart",
            full: "Mr Leslie Stewart",
        },
        email: "leslie.stewart@yahoo.com",
        login: {
            username: "redpeacock391",
            password: "SIfnT9vBFG0Prr3aRJviHi6AfV4siRsB",
        },
        dob: "September 10, 2004",
        phone: "+1 (010) 302 0707",
        review: {
            rate: 4.6,
            text: "extraordinary",
            rating: "⭐⭐⭐⭐",
            score: "92%",
        },
        country: "United States",
        sex: "male",
        religion: "Christianity",
        state: "Idaho",
        city: "Indianapolis",
        area: "7370 E Sandy Lake Rd",
        son_of: "Ms Magdalena Stewart",
        date_registered: "Mar 5, 2006",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "D0",
        bloodGroup: "AB+",
    },
    {
        name: {
            title: "Mrs",
            first: "Stefana",
            last: "Simonović",
            full: "Mrs Stefana Simonović",
        },
        email: "stefana.simonovic@yahoo.com",
        login: {
            username: "yellowrabbit937",
            password: "yYks4dOva",
        },
        dob: "July 25, 1997",
        phone: "+7 (723) 002 6827",
        review: {
            rate: 4.1,
            text: "you are the best; charmed",
            rating: "⭐⭐⭐⭐",
            score: "82%",
        },
        country: "Serbia",
        sex: "female",
        religion: "Christianity",
        state: "Srem",
        city: "Doljevac",
        area: "8299 Nikole Tesle",
        daughter_of: "Miss Elsbeth Simonović",
        date_registered: "Jun 15, 2011",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "187.29.138.176",
        last_active: "21 minutes, 46 second(s) ago",
        id: "D1",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mr",
            first: "Askil",
            last: "Furuseth",
            full: "Mr Askil Furuseth",
        },
        email: "askil.furuseth@outlook.com",
        login: {
            username: "happyzebra348",
            password: "dmUNshVWjq",
        },
        dob: "November 19, 1990",
        phone: "+47 (558) 244 8582",
        review: {
            rate: 4.5,
            text: "bloody hell, I've been looking for this everywhere",
            rating: "⭐⭐⭐⭐",
            score: "90%",
        },
        country: "Norway",
        sex: "male",
        religion: "Christianity",
        state: "Trøndelag",
        city: "Drammen",
        area: "8700 Oscars gate",
        son_of: "Mr Mirko Furuseth",
        date_registered: "Sep 13, 2007",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "62.125.86.212",
        last_active: "16 weeks, 45 day(s) ago",
        id: "D2",
        bloodGroup: "O+",
    },
    {
        name: {
            title: "Mr",
            first: "سورنا",
            last: "نكو نظر",
            full: "Mr سورنا نكو نظر",
        },
        email: "swrn.nkwnzr@icloud.com",
        login: {
            username: "orangezebra453",
            password: "FweGA5Jf",
        },
        dob: "June 7, 1992",
        phone: "+98 (075) 604 8728",
        review: {
            rate: 4.3,
            text: "wonderful service :)",
            rating: "⭐⭐⭐⭐",
            score: "86%",
        },
        country: "Iran",
        sex: "male",
        religion: "Islam",
        state: "لرستان",
        city: "پاکدشت",
        area: "6521 دکتر لواسانی",
        son_of: "Miss Ellie نكو نظر",
        date_registered: "May 12, 2017",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "135.153.220.17",
        last_active: "45 minutes, 6 second(s) ago",
        id: "D3",
        bloodGroup: "AB+",
    },
    {
        name: {
            title: "Mr",
            first: "Yaron",
            last: "Salman",
            full: "Mr Yaron Salman",
        },
        email: "yaron.salman@icloud.com",
        login: {
            username: "goldenrabbit800",
            password: "We4FATRwCq8",
        },
        dob: "August 14, 2002",
        phone: "+31 (613) 575 3455",
        review: {
            rate: 3.8,
            text: "I'd like to donate $159 to help you improve your services, because I'd like to see you rising like a a morning sunshine",
            rating: "⭐⭐⭐",
            score: "76%",
        },
        country: "Netherlands",
        sex: "male",
        religion: "Christianity",
        state: "Zeeland",
        city: "Garijp",
        area: "4034 John Fordstrook",
        son_of: "Mrs Susie Salman",
        date_registered: "Oct 26, 2020",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "D4",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Mr",
            first: "Remko",
            last: "Pham",
            full: "Mr Remko Pham",
        },
        email: "remko.pham@yahoo.com",
        login: {
            username: "purplegoose603",
            password: "GlmuFpAGSD1Or0umYH",
        },
        dob: "July 21, 1992",
        phone: "+31 (436) 186 7638",
        review: {
            rate: 4.2,
            text: "not bad",
            rating: "⭐⭐⭐⭐",
            score: "84%",
        },
        country: "Netherlands",
        sex: "male",
        religion: "Christianity",
        state: "Friesland",
        city: "Tirns",
        area: "228 Johanniterhof",
        son_of: "Mrs Brianna Pham",
        date_registered: "Sep 29, 2017",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "73.91.145.134",
        last_active: "51 days ago",
        id: "D5",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Mr",
            first: "Peter",
            last: "Kreuz",
            full: "Mr Peter Kreuz",
        },
        email: "peter.kreuz@outlook.com",
        login: {
            username: "angrytiger318",
            password: "AkFZeh4UgtGod6UwLlK",
        },
        dob: "November 23, 1995",
        phone: "+49 (674) 500 2778",
        review: {
            rate: 4.9,
            text: "helpful",
            rating: "⭐⭐⭐⭐",
            score: "98%",
        },
        country: "Germany",
        sex: "male",
        religion: "Christianity",
        state: "Rheinland-Pfalz",
        city: "Gundelsheim",
        area: "5925 Berliner Straße",
        son_of: "Mrs Stefana Kreuz",
        date_registered: "Jun 9, 2006",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "94.127.93.62",
        last_active: "41 minutes, 4 second(s) ago",
        id: "D6",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mrs",
            first: "Ladomira",
            family: "Deema",
            last: "Chishko",
            full: "Mrs Ladomira Chishko",
        },
        email: "ladomira.chishko@gmail.com",
        login: {
            username: "ticklishcat505",
            password: "MH1jt5Rgc1mo",
        },
        dob: "August 18, 2002",
        phone: "+380 (308) 374 2380",
        review: {
            rate: 4.7,
            text: "bloody hell, I've been looking for this everywhere",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "Ukraine",
        sex: "female",
        religion: "Christianity",
        state: "Harkivska",
        city: "Fastiv",
        area: "2558 Alatirska",
        daughter_of: "Mr Askil Chishko",
        date_registered: "Oct 4, 2016",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "151.69.172.197",
        last_active: "10 weeks, 47 day(s) ago",
        id: "D7",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Miss",
            first: "Arianna",
            last: "Ruiz",
            full: "Miss Arianna Ruiz",
        },
        email: "arianna.ruiz@icloud.com",
        login: {
            username: "goldencat191",
            password: "N27uPHiN7B",
        },
        dob: "November 7, 1996",
        phone: "+61 (214) 377 2454",
        review: {
            rate: 4.4,
            text: "out of this world",
            rating: "⭐⭐⭐⭐",
            score: "88%",
        },
        country: "Australia",
        sex: "female",
        religion: "Christianity",
        state: "Australian Capital Territory",
        city: "Rockhampton",
        area: "7641 Country Club Rd",
        daughter_of: "Mr سورنا Ruiz",
        date_registered: "Sep 7, 2006",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "D8",
        bloodGroup: "A-",
    },
    {
        name: {
            title: "Miss",
            first: "Verena",
            last: "da Conceição",
            full: "Miss Verena da Conceição",
        },
        email: "verena.daconceicao@icloud.com",
        login: {
            username: "goldenpeacock860",
            password: "fEI6Cx1jahRGPIz0StrJpM2LBP61S",
        },
        dob: "January 14, 1998",
        phone: "+55 (821) 445 3035",
        review: {
            rate: 5,
            text: "who wouldn't love this",
            rating: "⭐⭐⭐⭐⭐",
            score: "100%",
        },
        country: "Brazil",
        sex: "female",
        religion: "Christianity",
        state: "Roraima",
        city: "Sorocaba",
        area: "4060 Rua Vinte de Setembro",
        daughter_of: "Mr Yaron da Conceição",
        date_registered: "Jun 12, 2004",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "153.59.254.205",
        last_active: "41 hours ago",
        id: "D9",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Ms",
            first: "Jasmine",
            last: "Jones",
            full: "Ms Jasmine Jones",
        },
        email: "jasmine.jones@yahoo.com",
        login: {
            username: "brownmeercat686",
            password: "LIFNnVT83xfBUZr3u6W6ZolCmps7ew",
        },
        dob: "November 6, 1992",
        phone: "+1 (876) 441 5588",
        review: {
            rate: 4.7,
            text: "💗",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "Canada",
        sex: "female",
        religion: "Christianity",
        state: "Newfoundland and Labrador",
        city: "Hampstead",
        area: "5055 Maple Ave",
        daughter_of: "Mr Remko Jones",
        date_registered: "Apr 10, 2005",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "E0",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mr",
            first: "Milan",
            last: "Nenadović",
            full: "Mr Milan Nenadović",
        },
        email: "milan.nenadovic@gmail.com",
        login: {
            username: "lazywolf476",
            password: "5OemdE5VmynGWMdTC4YPtx",
        },
        dob: "July 15, 1997",
        phone: "+7 (084) 754 5857",
        review: {
            rate: 3.8,
            text: "not bad",
            rating: "⭐⭐⭐",
            score: "76%",
        },
        country: "Serbia",
        sex: "male",
        religion: "Christianity",
        state: "Pčinja",
        city: "Priština",
        area: "9332 Emila Zole",
        son_of: "Mr Peter Nenadović",
        date_registered: "Apr 1, 2018",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "E1",
        bloodGroup: "A+",
    },
    {
        name: {
            title: "Mr",
            first: "Viljami",
            last: "Halonen",
            full: "Mr Viljami Halonen",
        },
        email: "viljami.halonen@outlook.com",
        login: {
            username: "brownduck743",
            password: "nJ9HcRe7ufh6zKoMb2vDo",
        },
        dob: "October 9, 2003",
        phone: "+358 (411) 083 8433",
        review: {
            rate: 4.6,
            text: "amazed💋💕",
            rating: "⭐⭐⭐⭐",
            score: "92%",
        },
        country: "Finland",
        sex: "male",
        religion: "Christianity",
        state: "Uusimaa",
        city: "Forssa",
        area: "7093 Visiokatu",
        son_of: "Mrs Ladomira Halonen",
        date_registered: "Mar 26, 2011",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "87.88.96.80",
        last_active: "58 days ago",
        id: "E2",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Monsieur",
            first: "Lionel",
            last: "Da Silva",
            full: "Monsieur Lionel Da Silva",
        },
        email: "lionel.dasilva@yahoo.com",
        login: {
            username: "redleopard927",
            password: "CtK24DtCy3e76Ta9Rrhpdkq6PK",
        },
        dob: "July 8, 2003",
        phone: "+41 (826) 563 4073",
        review: {
            rate: 4.6,
            text: "I... em.... ig... saitiiiiiiiiiiid",
            rating: "⭐⭐⭐⭐",
            score: "92%",
        },
        country: "Switzerland",
        sex: "male",
        religion: "Christianity",
        state: "Glarus",
        city: "Genève",
        area: "4309 Rue Denfert-Rochereau",
        son_of: "Miss Arianna Da Silva",
        date_registered: "Jun 30, 2003",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "225.17.148.72",
        last_active: "15 hours, 31 minute(s) ago",
        id: "E3",
        bloodGroup: "O-",
    },
    {
        name: {
            title: "Mrs",
            first: "Mónica",
            last: "Bravo",
            full: "Mrs Mónica Bravo",
        },
        email: "monica.bravo@gmail.com",
        login: {
            username: "orangewolf212",
            password: "YslA959wEN0UgW",
        },
        dob: "July 24, 1995",
        phone: "+34 (680) 623 0232",
        review: {
            rate: 4.7,
            text: "saved me a lifetime",
            rating: "⭐⭐⭐⭐",
            score: "94%",
        },
        country: "Spain",
        sex: "female",
        religion: "Christianity",
        state: "Comunidad de Madrid",
        city: "Talavera de la Reina",
        area: "2944 Calle de Arturo Soria",
        daughter_of: "Miss Verena Bravo",
        date_registered: "Jan 3, 2014",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "101.149.172.57",
        last_active: "21 weeks ago",
        id: "E4",
        bloodGroup: "A+",
    },
    {
        name: {
            title: "Mr",
            first: "Eddie",
            last: "Lane",
            full: "Mr Eddie Lane",
        },
        email: "eddie.lane@yahoo.com",
        login: {
            username: "goldenostrich550",
            password: "rLF6qvbXBjTCq9Ic2fjWXtXfLzaFxI",
        },
        dob: "June 4, 1991",
        phone: "+44 (784) 850 4361",
        review: {
            rate: 3.9,
            text: "not bad",
            rating: "⭐⭐⭐",
            score: "78%",
        },
        country: "United Kingdom",
        sex: "male",
        religion: "Christianity",
        state: "Powys",
        city: "Dundee",
        area: "2526 Victoria Street",
        son_of: "Mr Milan Lane",
        date_registered: "Oct 24, 2007",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "E5",
        bloodGroup: "AB+",
    },
    {
        name: {
            title: "Mrs",
            first: "Clem",
            last: "Oliveira",
            full: "Mrs Clem Oliveira",
        },
        email: "clem.oliveira@hotmail.com",
        login: {
            username: "ticklishbird327",
            password: "GLYiOcED",
        },
        dob: "January 2, 1998",
        phone: "+55 (654) 435 8527",
        review: {
            rate: 4.8,
            text: "thumbs up",
            rating: "⭐⭐⭐⭐",
            score: "96%",
        },
        country: "Brazil",
        sex: "female",
        religion: "Christianity",
        state: "Alagoas",
        city: "Americana",
        area: "6854 Rua Boa Vista",
        daughter_of: "Mr Viljami Oliveira",
        date_registered: "Apr 18, 2005",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "168.77.196.33",
        last_active: "34 hours ago",
        id: "E6",
        bloodGroup: "B+",
    },
    {
        name: {
            title: "Mr",
            first: "Aleksi",
            last: "Halonen",
            full: "Mr Aleksi Halonen",
        },
        email: "aleksi.halonen@gmail.com",
        login: {
            username: "yellowdog764",
            password: "ZchlyDZl",
        },
        dob: "September 21, 1991",
        phone: "+358 (318) 764 4376",
        review: {
            rate: 3.8,
            text: "Fine",
            rating: "⭐⭐⭐",
            score: "76%",
        },
        country: "Finland",
        sex: "male",
        religion: "Christianity",
        state: "Ostrobothnia",
        city: "Kemi",
        area: "5984 Visiokatu",
        son_of: "Monsieur Lionel Halonen",
        date_registered: "Jan 24, 2012",
        img: `${cdn1}/x.webp`,
        status: "active",
        id: "E7",
        bloodGroup: "B-",
    },
    {
        name: {
            title: "Mr",
            first: "Silas",
            last: "Madsen",
            full: "Mr Silas Madsen",
        },
        email: "silas.madsen@gmail.com",
        login: {
            username: "purpleduck180",
            password: "VRFF8Q0ffVM9XwZvskZm5sv",
        },
        dob: "September 4, 1998",
        phone: "+45 (526) 126 1276",
        review: {
            rate: 4.3,
            text: "uh-oh... looks like I just found a new erogenous zone, let the dopamine mining begin",
            rating: "⭐⭐⭐⭐",
            score: "86%",
        },
        country: "Denmark",
        sex: "male",
        religion: "Christianity",
        state: "Syddanmark",
        city: "Gørløse",
        area: "541 Højtoftevej",
        son_of: "Mrs Mónica Madsen",
        date_registered: "Jul 5, 2009",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "177.199.4.164",
        last_active: "49 minutes, 53 second(s) ago",
        id: "E8",
        bloodGroup: "A+",
    },
    {
        name: {
            title: "Mrs",
            first: "Smith",
            middle: "Halmond",
            last: "Parks",
            full: "Mrs Smith-Halmond Parks",
            pronunciation: "missus smith hemmund :pakks",
        },
        email: "a.florida.butterfly.in.a.love.triangle@icloud.com",
        login: {
            username: "optimisticbutterfly642",
            password: "S3cr3t.th2t.STayS+with+M3",
        },
        dob: "December 4, 2006",
        phone: "+1 (847) 608 7205",
        review: {
            rate: 4,
            text: "can't thank enough",
            rating: "⭐⭐⭐⭐",
            score: "80%",
        },
        country: "United States",
        sex: "female",
        religion: "Christianity",
        state: "Florida",
        city: "Ocala",
        area: "34481 Southwest, 100th Court",
        daughter_of: "Miss Dorothy Casper",
        date_registered: "Nov 25, 2018",
        img: `${cdn1}/x.webp`,
        status: "inactive",
        last_ip: "60.115.61.26",
        last_active: "17 hours ago",
        id: "E9",
        bloodGroup: "A+",
    },
];

const array = [
    {
        name: {
            title: "Miss",
            first: "Neha",
            last: "Parveen",
            full: "Miss Neha Parveen",
        },
        img: [`${cdn2}/1.webp`],
        city: "Islamabad",
        state: "Punjab",
    },
    {
        name: {
            title: "Ms",
            first: "Hania",
            last: "Bashir",
            full: "Miss Hania Bashir",
            pronunciation: "mis haneeya bashIr",
        },
        img: [`${cdn2}/2.webp`],
        city: "Karachi",
        state: "Sindh",
    },
    {
        name: {
            title: "Miss",
            first: "Uzmia",
            middle: "Ahmad",
            last: "Tahir",
            full: "Miss Uzmia-Ahmad Tahir",
            pronunciation: "mis oozmia ehma:d taahir",
            alias: "Uzmi",
        },
        img: [`${cdn2}/3.webp`],
        city: "Dera Ghazi Kahn",
        state: "Punjab",
    },
    {
        name: {
            title: "Miss",
            first: "Shamshad",
            last: "Rania",
            full: "Miss Shamshad Rania",
        },
        img: [`${cdn2}/4.webp`],
        city: "Quetta",
        state: "KPK",
    },
    {
        name: {
            title: "Mrs",
            first: "Asghar",
            last: "Malik",
            full: "Mrs Asghar Malik",
        },
        img: [`${cdn2}/5.webp`],
        city: "Hyderabad",
        state: "Sindh",
    },
    {
        name: {
            title: "Ms",
            first: "Kangana",
            last: "Qaisar",
            full: "Ms Kangana Qaisar",
            alias: "Kanga",
            pronunciation: "mis kuhngana keisar",
        },
        img: [`${cdn2}/6.webp`],
        city: "Rahim Yar Kahn",
        state: "Punjab",
    },
    {
        name: {
            title: "Miss",
            first: "Tahira",
            last: "Zafar",
            full: "Miss Tahira Zafar",
        },
        img: [`${cdn2}/7.webp`],
        city: "Islamabad",
        state: "Punjab",
    },
    {
        name: {
            title: "Miss",
            first: "Nida",
            last: "Meher",
            full: "Miss Nida Meher",
        },
        img: [`${cdn2}/8.webp`],
        city: "Kech",
        state: "Balochistan",
    },
    {
        name: {
            title: "Miss",
            first: "Saba",
            last: "Kiani",
            full: "Miss Saba Kiani",
        },
        img: [`${cdn2}/9.webp`],
        city: "Washuk",
        state: "Balochistan",
    },
    {
        name: {
            title: "Miss",
            first: "Iqra",
            last: "Johar",
            full: "Miss Iqra Johar",
        },
        img: [`${cdn2}/10.webp`],
        city: "Karachi",
        state: "Sindh",
    },
    {
        name: {
            title: "Miss",
            first: "Shahzia",
            last: "Basit",
            full: "Ms Shehzia Basit",
        },
        img: [`${cdn2}/11.webp`],
        city: "Umerkot",
        state: "Sindh",
    },
    {
        name: {
            title: "Miss",
            first: "Maria",
            last: "Danish",
            full: "Ms Maria Danish",
        },
        img: [`${cdn2}/12.webp`],
        city: "Sahiwal",
        state: "Punjab",
    },
];

foreigners.forEach((u, i) => {
    Object.assign(u, {
        get age() {
            let x = new Date() - new Date(u.dob);
            return Math.floor(
                x / 3600 / 24 / 365 / 1000 > 0
                    ? x / 3600 / 24 / 365 / 1000
                    : x / 360 / 24 / 365 / 1000
            );
            //complex means more accurate, for instance if it is Nov 26 2024 today, and the user was born a, let's say, Dec 25 2006, it'll return 17 and not 18
            //a little less complicated, inaccurate way would have been to use,
            //foreigners.forEach((u) => u.age = new Date().getFullYear() - parseInt(u.dob.slice(-4)));
            //Remember: we're here to be accurate, not save lines!
        },
        get id() {
            let [a, b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789".split("-");
            let collected = [];
            for (i in a) {
                for (j in b) {
                    collected.push(`${a[i]}${b[j]}`);
                }
            }
            return collected[foreigners.indexOf(u)];
        },
    });
});

//save the unsorted array for later shuffling
let shuffled_foreigners,
    sorted_foreigners = foreigners.slice().sort((a, b) => a.id - b.id);

//if the country name is not a full country name, but a code
let recognized_codes = {
    "(us|1)": "United States",
    ca: "Canada",
    "(rs|7)": "Russia",
    ru: "Russia",
    "(nl|31)": "Netherlands",
    "(fr|33)": "France",
    "(es|34)": "Spain",
    "(ch|41)": "Switzerland",
    "(gb|44)": "United Kingdom",
    uk: "United Kingdom",
    "(dk|45)": "Denmark",
    "(no|47)": "Norway",
    "(de|49)": "Germany",
    ge: "Germany",
    "(mx|52)": "Mexico",
    "(br|55)": "Brazil",
    "(au|61)": "Australia",
    "(nz|64)": "New Zealand",
    "(tr|90)": "Turkey",
    "(in|91)": "India",
    "(pk|92)": "Pakistan",
    "(ir|98)": "Iran",
    "(ie|353)": "Ireland",
    "(fi|358)": "Finland",
    "(ua|380)": "Ukraine",
};
recognized_codes = Object.entries(recognized_codes);

//ROOT ROUTES
app.get("/", (req, res) => {
    const { method, path, query } = req;
    let { country, city, state, age, religion, status, sex, id, sorted } =
        query;
    //shuffle, by default
    shuffled_foreigners = foreigners.slice().sort(() => 0.5 - Math.random());
    for (let i = shuffled_foreigners.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = shuffled_foreigners[i];
        shuffled_foreigners[i] = shuffled_foreigners[j];
        shuffled_foreigners[j] = temp;
    }
    let qr = new URLSearchParams(query).toString();
    console.log(
        `Received a ${method} request on ${path}${
            !!Object.values(query)[0] ? "?" + qr : ""
        }, acting accordingly!`
    );

    if (String(sorted).match(/true|yes/i)) foreigners = sorted_foreigners;
    else foreigners = shuffled_foreigners;
    // let objectKeysToLowerCase = function (input) {
    //     if (typeof input !== "object") return input;
    //     if (Array.isArray(input)) return input.map(objectKeysToLowerCase);
    //     return Object.keys(input).reduce(function (newObj, key) {
    //         let val = input[key];
    //         let newVal =
    //             typeof val === "object" && val !== null
    //                 ? objectKeysToLowerCase(val)
    //                 : val;
    //         newObj[key.toLowerCase()] = newVal;
    //         return newObj;
    //     }, {});
    // };
    // req.query = objectKeysToLowerCase(req.query);

    if (status) status = status.toLowerCase();
    if (sex) sex = sex.toLowerCase();
    if (status === "online") status = "active";
    else if (status === "offline") status = "inactive";
    //^this here, stays, to handle cases where the uses passes in "online" or "offline" instead of "active" or "inactive"
    if (!!String(sex).match(/^m(an)?$/i)) sex = "male";
    else if (!!String(sex).match(/^(f$|w)(oman$)?/i)) sex = "female";
    //cover cases where the user passes in [man|woman|[m|w]|[m|f]] instead
    //using String() here, to force it to be a string, to handle null case
    if (country) {
        //replace the cc with the full country name
        country = country.toLowerCase();
        for ([k, v] of recognized_codes)
            country = country.replace(RegExp(`^${k}$`, "i"), v);

        let filteredUsers = foreigners.filter(
            (u) => !!u.country.match(RegExp(country, "i"))
        );
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this country!",
                },
                success: false,
            });
    } else if (city) {
        let filteredUsers = foreigners.filter(
            (u) => !!u.city.match(RegExp(city, "i"))
        );
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this city!",
                },
                success: false,
            });
    } else if (state) {
        let filteredUsers = foreigners.filter(
            (u) => !!u.state.match(RegExp(state, "i"))
        );
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this state/provision!",
                },
                success: false,
            });
    } else if (religion) {
        let filteredUsers = foreigners.filter(
            (u) => !!u.religion.match(RegExp(religion, "i"))
        );
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this religion!",
                },
                success: false,
            });
    } else if (status) {
        let filteredUsers = foreigners.filter(
            (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
        );
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this activity status!",
                },
                success: false,
            });
    } else if (age) {
        let filteredUsers = [];
        if (String(age).match(/[>\^]/)) {
            age = parseInt(String(age).replace(/\D/g, ""));
            filteredUsers = foreigners.filter((u) => u.age >= age);
        } else if (String(age).match(/</)) {
            age = parseInt(String(age).replace(/\D/g, ""));
            filteredUsers = foreigners.filter((u) => u.age <= age);
        } else if (String(age).match(/[\~\*]/)) {
            age = parseInt(String(age).replace(/\D/g, ""));
            filteredUsers = foreigners.filter(
                (u) =>
                    u.age === age + 2 ||
                    u.age === age - 2 ||
                    u.age === age + 1 ||
                    u.age === age - 1 ||
                    u.age === age
            );
        } else {
            age = parseInt(String(age).replace(/\D/g, ""));
            filteredUsers = foreigners.filter((u) => u.age === age);
        }
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        //String.raw here, fixes a bug
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this age!",
                },
                success: false,
            });
    } else if (sex) {
        let filteredUsers = foreigners.filter((u) => u.sex === sex);
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        //String.raw here fixes a bug
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (id) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = filteredUsers.filter(
                (u) => !!String(u.id).match(id)
            );
        }
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this sex!",
                },
                success: false,
            });
    } else if (id) {
        id = id.toUpperCase();
        id = id.match(/[,;]/) ? id.split(/[,;]+/g) : id;
        let filteredUsers;
        if (!Array.isArray(id)) {
            id = RegExp(
                String.raw`(${id}|${id.split("").reverse().join("")})`,
                "i"
            );
            filteredUsers = foreigners.filter((u) => !!String(u.id).match(id));
        } else {
            filteredUsers = foreigners.filter((u) =>
                id.some((n) =>
                    n.match(
                        RegExp(
                            String.raw`(${u.id}|${u.id
                                .split("")
                                .reverse()
                                .join("")})`,
                            "i"
                        )
                    )
                )
            );
        }
        if (country)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
        if (city)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
        if (age) {
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = filteredUsers.filter((u) => u.age === age);
            }
        }
        if (state)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
        if (status)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
        //String.raw here fixes a bug
        if (religion)
            filteredUsers = filteredUsers.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
        if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
        if (filteredUsers.length)
            res.status(200).json({
                users: filteredUsers,
                length: filteredUsers.length,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "No users found for this id!",
                },
                success: false,
            });
    } else {
        res.status(200).json({
            users: foreigners,
            length: foreigners.length,
            success: true,
        });
    }
});

//NON-ROOT ROUTES
app.all("/:number", (req, res) => {
    let { path, method, params, query } = req;
    let { number } = params;
    let non_parsed_number = String(number);
    number = Number(non_parsed_number.replace(/\D+/g, ""));
    if (Object.values(query).length && "country" in query) {
        country = query.country;
    }
    if (
        (number % 1 || number < 1 || !isFinite(number)) &&
        !String(non_parsed_number).match(/\d[a-yA-Y]|[a-yA-Y]\d/i)
    ) {
        return res.status(400).json({ code: 400, message: "Invalid request!" });
    }
    console.log(`Received a ${method} request on ${path}, acting accordingly!`);
    if (method === "GET") {
        let { country, city, state, age, religion, status, sex, id, sorted } =
            req.query;
        //shuffle, by default
        shuffled_foreigners = foreigners
            .slice()
            .sort(() => 0.5 - Math.random());
        for (let i = shuffled_foreigners.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = shuffled_foreigners[i];
            shuffled_foreigners[i] = shuffled_foreigners[j];
            shuffled_foreigners[j] = temp;
        }
        if (String(sorted).match(/true|yes/i)) foreigners = sorted_foreigners;
        else foreigners = shuffled_foreigners;
        if (status) status = status.toLowerCase();
        if (sex) sex = sex.toLowerCase();
        if (status === "online") status = "active";
        else if (status === "offline") status = "inactive";
        //^this here, stays, to handle cases where the uses passes in "online" or "offline" instead of "active" or "inactive"
        if (!!String(sex).match(/^m(an)?$/i)) sex = "male";
        else if (!!String(sex).match(/^(f$|w)(oman$)?/i)) sex = "female";
        //cover cases where the user passes in [man|woman|[m|w]|[m|f]] instead
        //using String() here, to force it to be a string, to handle null case
        if (country) {
            //replace the cc with the full country name
            country = country.toLowerCase();
            for ([k, v] of recognized_codes)
                country = country.replace(RegExp(`^${k}$`, "i"), v);

            let filteredUsers = foreigners.filter(
                (u) => !!u.country.match(RegExp(country, "i"))
            );
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this country!",
                    },
                    success: false,
                });
            }
        } else if (city) {
            let filteredUsers = foreigners.filter(
                (u) => !!u.city.match(RegExp(city, "i"))
            );
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this city!",
                    },
                    success: false,
                });
            }
        } else if (state) {
            let filteredUsers = foreigners.filter(
                (u) => !!u.state.match(RegExp(state, "i"))
            );
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message:
                            "No users found for this state/provice/region!",
                    },
                    success: false,
                });
            }
        } else if (religion) {
            let filteredUsers = foreigners.filter(
                (u) => !!u.religion.match(RegExp(religion, "i"))
            );
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this religion!",
                    },
                    success: false,
                });
            }
        } else if (status) {
            let filteredUsers = foreigners.filter(
                (u) => !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
            );
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this activity status!",
                    },
                    success: false,
                });
            }
        } else if (age) {
            let filteredUsers = [];
            if (String(age).match(/[>\^]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = foreigners.filter((u) => u.age >= age);
            } else if (String(age).match(/</)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = foreigners.filter((u) => u.age <= age);
            } else if (String(age).match(/[\~\*]/)) {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = foreigners.filter(
                    (u) =>
                        u.age === age + 2 ||
                        u.age === age - 2 ||
                        u.age === age + 1 ||
                        u.age === age - 1 ||
                        u.age === age
                );
            } else {
                age = parseInt(String(age).replace(/\D/g, ""));
                filteredUsers = foreigners.filter((u) => u.age === age);
            }
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this age!",
                    },
                    success: false,
                });
            }
            //CONTINUE HERE*
        } else if (sex) {
            let filteredUsers = foreigners.filter((u) => u.sex === sex);
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (id) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = filteredUsers.filter(
                    (u) => !!String(u.id).match(id)
                );
            }
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this sex!",
                    },
                    success: false,
                });
            }
        } else if (id) {
            id = id.toUpperCase();
            id = id.match(/[,;]/) ? id.split(/[,;]+/g) : id;
            let filteredUsers;
            if (!Array.isArray(id)) {
                id = RegExp(
                    String.raw`(${id}|${id.split("").reverse().join("")})`,
                    "i"
                );
                filteredUsers = foreigners.filter(
                    (u) => !!String(u.id).match(id)
                );
            } else {
                filteredUsers = foreigners.filter((u) =>
                    id.some((n) =>
                        n.match(
                            RegExp(
                                String.raw`(${u.id}|${u.id
                                    .split("")
                                    .reverse()
                                    .join("")})`,
                                "i"
                            )
                        )
                    )
                );
            }
            if (country)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.country.match(RegExp(country, "i"))
                );
            if (city)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.city.match(RegExp(city, "i"))
                );
            if (age) {
                if (String(age).match(/[>\^]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age >= age);
                } else if (String(age).match(/</)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age <= age);
                } else if (String(age).match(/[\~\*]/)) {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter(
                        (u) =>
                            u.age === age + 2 ||
                            u.age === age - 2 ||
                            u.age === age + 1 ||
                            u.age === age - 1 ||
                            u.age === age
                    );
                } else {
                    age = parseInt(String(age).replace(/\D/g, ""));
                    filteredUsers = filteredUsers.filter((u) => u.age === age);
                }
            }
            if (state)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.state.match(RegExp(state, "i"))
                );
            if (status)
                filteredUsers = filteredUsers.filter(
                    (u) =>
                        !!u.status.match(RegExp(String.raw`^${status}$`, "i"))
                );
            //String.raw here fixes a bug
            if (religion)
                filteredUsers = filteredUsers.filter(
                    (u) => !!u.religion.match(RegExp(religion, "i"))
                );
            if (sex) filteredUsers = filteredUsers.filter((u) => u.sex === sex);
            if (filteredUsers.length) {
                if (filteredUsers.length > number)
                    filteredUsers = filteredUsers.slice(0, number);
                res.status(200).json({
                    users: filteredUsers,
                    length: filteredUsers.length,
                    success: true,
                });
            } else {
                res.status(404).json({
                    error: {
                        code: 404,
                        message: "No users found for this id!",
                    },
                    success: false,
                });
            }
        } else {
            if (!Number(number)) {
                res.status(400).json({error: {code: 400, message: "Bad request"}, success: false});
                return;
            }
            let sliced_foreigners = foreigners.slice(0, number);
            res.status(200).json({
                users: sliced_foreigners,
                length: sliced_foreigners.length,
                success: true,
            });
        }
    } else if (method === "POST") {
        let {
            id,
            name,
            sex,
            age,
            country,
            city,
            state,
            status,
            religion,
            phone,
            email,
            username,
            password,
            bloodGroup
        } = req.body;
        name = name || {};
        if (
            String(id).trim().length < 2 || foreigners.some((u) => u.id === id) ||
            typeof name !== "object" || Object.values(name).length < 3 || !("title" in name) || !("first" in name) || !("last" in name) ||
            !String(sex).trim().length ||
            String(age).trim().length < 2 ||
            String(country).trim().length < 3 ||
            String(city).trim().length < 3 ||
            String(state).trim().length < 2 ||
            String(status).trim().length < 5 ||
            String(religion).trim().length < 4 ||
            String(phone).trim().length < 10 ||
            String(email).trim().length < 5 ||
            !String(username).trim().length ||
            String(password).trim().length < 8 ||
            String(bloodGroup).trim().length < 2
        ) {
            res.status(400).json({ message: "Either bad paramaters, or user with the same id was found!", success: false });
            return;
        }
        const newUser = { name: name, sex: sex, age: age, country: country, city: city, state: state, status: status, religion: religion, phone: phone, email: email, login: {username: username, password: password }, bloodGroup: bloodGroup, id: id };
        foreigners.push(newUser);
        res.status(200).json({
            message: `User added successfully! New user: ${newUser.name} from ${newUser.country}`,
            success: true,
        });
        
    } else if (method === "PATCH") {
        non_parsed_number = non_parsed_number.toUpperCase();
        non_parsed_number = non_parsed_number.match(/\W/)
            ? non_parsed_number.split(/\W+/g)
            : non_parsed_number;
        let [users_with_specified_ids, user_with_specified_id] = [[], ""];
        if (!Array.isArray(non_parsed_number)) {
            user_with_specified_id = foreigners.find((u) =>
                non_parsed_number.match(
                    RegExp(
                        String.raw`^(${u.id}|${u.id
                            .split("")
                            .reverse()
                            .join("")})$`,
                        "i"
                    )
                )
            );
            Object.entries(req.body).forEach(([key, value]) => {
                if (user_with_specified_id) {
                    if (key === "id") {
                        res.status(403).json({
                            error: {
                                code: 403,
                                message:
                                    "Forbidden. You are unauthorized to modify the default id of a user. Remove the 'id' property/key to continue!",
                            },
                            success: false,
                        });
                        return;
                        //if key==="id", stop the operation. The core properties --- like id --- shouldn't accept any modifications.
                    }
                    user_with_specified_id[key] = value;
                    console.log(user_with_specified_id);
                } else {
                    res.status(404).json({
                        error: {
                            code: 404,
                            message: "No such user found with this id!",
                        },
                        success: false,
                    });
                }
            });
        } else {
            users_with_specified_ids = foreigners.filter((u) =>
                non_parsed_number.some((n) =>
                    n.match(
                        RegExp(
                            String.raw`^(${u.id}|${u.id
                                .split("")
                                .reverse()
                                .join("")})$`,
                            "i"
                        )
                    )
                )
            );
            Object.entries(req.body).forEach(([key, value]) => {
                users_with_specified_ids.forEach((u) => {
                    if (key === "id") {
                        res.status(403).json({
                            error: {
                                code: 403,
                                message:
                                    "Forbidden. You are unauthorized to modify the default id of a user. Remove the 'id' property/key to continue!",
                            },
                            success: false,
                        });
                        return;
                        //if key==="id", stop the operation. The core properties --- like id --- shouldn't accept any modifications.
                    }
                    u[key] = value;
                });
            });
        }
        res.status(200).json({
            message: `Updated user(s) with specified ids, and their values, as per the request. Here comes the modified user:`,
            modifiedUser: users_with_specified_ids.length
                ? users_with_specified_ids
                : user_with_specified_id,
            success: true,
        });
    } else if (method === "PUT") {
        res.status(403).send({ error: "PUT method not allowed!" });
    } else if (method === "DELETE") {
        non_parsed_number = non_parsed_number.toUpperCase();
        non_parsed_number = non_parsed_number.match(/\W/)
            ? non_parsed_number.split(/\W+/g)
            : non_parsed_number;
        let filteredUsers;
        if (!Array.isArray(non_parsed_number)) {
            filteredUsers = foreigners.filter(
                (u) =>
                    !non_parsed_number.match(
                        RegExp(
                            String.raw`^(${u.id}|${u.id
                                .split("")
                                .reverse()
                                .join("")})$`,
                            "i"
                        )
                    )
            );
        } else {
            filteredUsers = foreigners.filter((u) =>
                non_parsed_number.every(
                    (n) =>
                        !n.match(
                            RegExp(
                                String.raw`^(${u.id}|${u.id
                                    .split("")
                                    .reverse()
                                    .join("")})$`,
                                "i"
                            )
                        )
                )
            );
        }
        if (filteredUsers.length !== foreigners.length)
            res.status(200).json({
                message: `Deleted user(s) with id ${non_parsed_number}, as per the request. Here is the rest of the array:`,
                filteredArray: filteredUsers,
                success: true,
            });
        else
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Such an id does not exist on the server!",
                },
                success: false,
            });
    }
});

app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/*", (req, res) => {
    res.status(206).send("Please type something awesome!");
});

app.use((err, res) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

let PORT = parseInt(process.env.PORT) || 3002;
app.listen(PORT, (err) => {
    if (err) {
        throw new Error("Failed to start server, failed with error:", err);
    }
    console.log(`listening on port ${PORT}`);
});
