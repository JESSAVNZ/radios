import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Rpp Noticias",
            artist: "La voz de todo el Perú",
            cover: "https://i.imgur.com/DSA9eN6.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://bit.ly/RPPNoticia",
            active: true,
        },
        {
            name:"Planeta",
            artist: "Tu música en Inglés",
            cover: "https://i.imgur.com/sydfCHH.png",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://bit.ly/RPlaneta",
            active: false,
        },
        {
            name:"Ritmo Romantica",
            artist: "Tu radio de baladas",
            cover: "https://i.imgur.com/cHOE4S5.png",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://bit.ly/RRRomantica",
            active: false,
        },
    ];
}

export default chillHop;

