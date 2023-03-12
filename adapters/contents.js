import { formatDate } from "../utils/formatDate"

const randomIndex = (array) => Math.floor(Math.random() * array.length)

export const getWeddingContents = (data) => {

    /* deprecated */
    // const akadDate = new Date(data.Acara_Akad.Waktu)
    // const weddingDate = new Date(data.Acara_Resepsi.Waktu)

    const date = {
        akad: data.Acara_Akad?.Waktu,
        wedding: data.Acara_Resepsi?.Waktu,
    }


    ///for local storage
    // let gallery = []
    // data.Galeri_Foto.Foto.data.map((item) => {
    //     gallery.push(`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.url}`)
    // })

    let gallery = []
    data.Galeri_Foto?.Foto.data.map((item) => {
        gallery.push(`${item.attributes.url}`)
    })

    let wallet = []
    data.Amplop.map((item) => {
        let platformName = item.Platform_Pembayaran.toLowerCase();
        wallet.push({
            name: item.Nama_Penerima, 
            number: item.No_Rekening, 
            src: `/static/wallet/${platformName}.png`
        })
    })

    /// for local storage
    // let countdownSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Countdown.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Countdown.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`
    // let akadSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Akad.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Akad.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`
    // let weddingSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Resepsi.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Resepsi.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`
    // let outroSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Outro.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Outro.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[randomIndex(data.Galeri_Foto.Foto.data)].attributes.url}`

    /// for online storage
    /// we can make it short with nullable variable ex:(data.Foto_Tambahan?.Foto_Countdown.data) so we can omitting (data.Foto_Tambahan) ///
    let countdownSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Countdown.data)) ? `${data.Foto_Tambahan.Foto_Countdown.data.attributes.url}` : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`) : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`
    let akadSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Akad.data)) ? `${data.Foto_Tambahan.Foto_Akad.data.attributes.url}` : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`) : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`
    let weddingSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Resepsi.data)) ? `${data.Foto_Tambahan.Foto_Resepsi.data.attributes.url}` : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`) : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`
    let outroSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Outro.data)) ? `${data.Foto_Tambahan.Foto_Outro.data.attributes.url}` : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`) : `${data.Galeri_Foto?.Foto.data[randomIndex(data.Galeri_Foto?.Foto.data)].attributes.url}`

    const contents = {
        cover: {
            cewekName: data.Pengantin_Wanita?.Nama_Panggilan,
            cowokName: data.Pengantin_Pria?.Nama_Panggilan,
            weddingDate: formatDate(date.wedding)
        },
    
        musicUrl : (data.Pelengkap?.URL_Musik)?data.Pelengkap?.URL_Musik : "https://soundcloud.com/poethv/fall-in-love-alone-bahiyyih?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

        countdown : {
            cewekName: data.Pengantin_Wanita?.Nama_Panggilan,
            cowokName: data.Pengantin_Pria?.Nama_Panggilan,
            weddingDate: formatDate(date.wedding),
            locationUrl: data.Acara_Resepsi?.URL_Lokasi,
            src: countdownSrc,
        },
    
        ///for local storage
        // intro : {
        //     cewek: {
        //         name: data.Pengantin_Wanita.Nama_Panggilan,
        //         fullName: data.Pengantin_Wanita.Nama_Lengkap,
        //         ayahName: data.Pengantin_Wanita.Nama_Ayah,
        //         ibuName: data.Pengantin_Wanita.Nama_Ibu,
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Pengantin_Wanita.Foto_Sendiri.data.attributes.url}`,
        //     },
        //     cowok: {
        //         name: data.Pengantin_Pria.Nama_Panggilan,
        //         fullName: data.Pengantin_Pria.Nama_Lengkap,
        //         ayahName: data.Pengantin_Pria.Nama_Ayah,
        //         ibuName: data.Pengantin_Pria.Nama_Ibu,
        //         src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Pengantin_Pria.Foto_Sendiri.data.attributes.url}`
        //     }
        // },

        intro : {
            cewek: {
                name: data.Pengantin_Wanita?.Nama_Panggilan,
                fullName: data.Pengantin_Wanita?.Nama_Lengkap,
                ayahName: data.Pengantin_Wanita?.Nama_Ayah,
                ibuName: data.Pengantin_Wanita?.Nama_Ibu,
                src: `${data.Pengantin_Wanita?.Foto_Sendiri.data.attributes.url}`,
            },
            cowok: {
                name: data.Pengantin_Pria?.Nama_Panggilan,
                fullName: data.Pengantin_Pria?.Nama_Lengkap,
                ayahName: data.Pengantin_Pria?.Nama_Ayah,
                ibuName: data.Pengantin_Pria?.Nama_Ibu,
                src: `${data.Pengantin_Pria?.Foto_Sendiri.data.attributes.url}`
            }
        },
    
        verse : {
            ayatName: data.Pelengkap?.Nama_AyatSuci,
            ayatContent: data.Pelengkap?.Isi_AyatSuci,
        },
    
        storyboards : {
            perjalanan1: data.Pelengkap?.Perjalanan_1,
            perjalanan2: data.Pelengkap?.Perjalanan_2,
            perjalanan3: data.Pelengkap?.Perjalanan_3,
    
        },
    
        agenda : {
            akad: {
                date: formatDate(date.akad),
                address: data.Acara_Akad?.Lokasi,
                src: akadSrc
            },
            wedding: {
                date: formatDate(date.wedding),
                address: data.Acara_Resepsi?.Lokasi,
                src: weddingSrc
            }
        },
    
        album : {
            maps:{
                locationUrl: data.Acara_Resepsi?.URL_Lokasi,
                iframe: data.Acara_Resepsi?.Iframe_Lokasi,
            },
            gallery: gallery,
        },

        comment:{
            dbName: data.OrderID,
        },
    
        giving : {
            walletContents: wallet,
            giftContents: {
                name: data.Hadiah?.Nama_Penerima,
                number: data.Hadiah?.No_HP,
                address: data.Hadiah?.Alamat_Penerima,
    
            }
        },

        rsvp:{
            dbName: data.OrderID,
        },
    
        outro : {
            cewekName: data.Pengantin_Wanita?.Nama_Panggilan,
            cowokName: data.Pengantin_Pria?.Nama_Panggilan,
            src: outroSrc
        }
    }

    return(
        contents
    )
}