import { formatDate } from "../utils/formatDate"


export const getDefaultContents = (slug) => {

    const contents = defaultContents[slug]

    if(!contents){
        const contents = defaultContents["chiangmai"]
        return contents
    }

    return contents
}

const akadDate = new Date("September 29, 2023 13:15:00")
const weddingDate = new Date("November 20, 2023 12:15:00")

const date = {
    akad: akadDate,
    wedding: weddingDate,
}

const defaultContents = {
    chiangmai: {
        cover: {
            cewekName: "Pulin",
            cowokName: "Pulan",
            weddingDate: formatDate(date.wedding)
        },
        musicUrl: "https://soundcloud.com/reminiscience/chopin-nocturne-op-9-no-2?si=8b120b1b0c874fff9169b9850f9aeeec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

        countdown: {
            cewekName: "Pulin",
            cowokName: "Pulan",
            weddingDate: formatDate(date.wedding),
            locationUrl: "https://www.google.com/maps/place/Jl.+Gatot+Subroto,+Kota+Medan,+Sumatera+Utara/@3.5925103,98.6677857,17z/data=!3m1!4b1!4m5!3m4!1s0x303131dae67c572b:0x586f53a879fcfcfb!8m2!3d3.5925103!4d98.669969",
            src: "/static/other/countdown-bg.jpg",
        },

        intro: {
            cewek: {
                name: "Pulin",
                fullName: "Pulin Sianipar S.Kom",
                ayahName: "Ayah Sianipar",
                ibuName: "Ibu Sihombing",
                src: "/static/other/intro-cewek.jpg"
            },
            cowok: {
                name: "Pulan",
                fullName: "Pulan Sianipar S.Kom",
                ayahName: "Ayah Sianipar",
                ibuName: "Ibu Sihombing",
                src: "/static/other/intro-cowok.jpg"
            }
        },

        verse: {
            ayatName: "Ar-Rum Ayat 21",
            ayatContent: `“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”`
        },

        storyboards: {
            perjalanan1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",
            perjalanan2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",
            perjalanan3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",

        },

        agenda: {
            akad: {
                date: formatDate(date.akad),
                address: "Rumah Garox Jl. Samlekom Mamank, Kec. Ayb Guys, Chernobyl",
                src: "/static/other/akad.jpg"
            },
            wedding: {
                date: formatDate(date.wedding),
                address: "Jl. Yang Lurus no.99 (Depan Bakso Oppa)",
                src: "/static/other/resepsi.jpg"
            }
        },

        album: {
            maps:{
                locationUrl: "https://www.google.com/maps/place/Jl.+Gatot+Subroto,+Kota+Medan,+Sumatera+Utara/@3.5925103,98.6677857,17z/data=!3m1!4b1!4m5!3m4!1s0x303131dae67c572b:0x586f53a879fcfcfb!8m2!3d3.5925103!4d98.669969",
                iframe:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.9682176692877!2d98.77635795085357!3d1.7449209987214414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa85c0a750f90f7c1!2zMcKwNDQnNDEuNyJOIDk4wrA0Nic0Mi44IkU!5e0!3m2!1sid!2sid!4v1666607762200!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
            },
            gallery: ["/static/gallery/1.jpg", "/static/gallery/1.jpg", "/static/gallery/1.jpg"]
        },

        comment: {
            dbName:"user1",
        },

        giving: {
            walletContents: [
                { name: "Putri Tanjung", number: "08635536262", src: "/static/wallet/bca.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/mandiri.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/bni.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/shopeepay.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/dana.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/ovo.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/gopay.png" },
                { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/bri.png" },
            ],
            giftContents: {
                name: "Garox Tanjung",
                number: "086535553533",
                address: `Jl. Sisingamangaraja No. 1
            Kelurahan Pancuran Gerobak, 22524
            Kecamatan Sibolga Kota,
            Kota Sibolga,
            Provinsi Sumatera Utara,
            INDONESIA`

            }
        },

        rsvp: {
            dbName:"user1",
        },

        outro: {
            cewekName: "Pulin",
            cowokName: "Pulan",
            src: "/static/other/outro.jpg"
        }
    },
}