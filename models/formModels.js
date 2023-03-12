import uniqid from 'uniqid';

export const dataPengantinForms = [
    {
        key: "dataCewek",
        title: "Data Pengantin Cewek",
        apiCollectionName:"Pengantin_Wanita",
        radixTabsValue:"tab1",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPanggilanCewek",
                            apiFieldName:"Nama_Panggilan",
                            formType: "text",
                            label: "Nama Panggilan",
                            placeholder: "Nama Panggilan",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaLengkapCewek",
                            apiFieldName:"Nama_Lengkap",
                            formType: "text",
                            label: "Nama Lengkap",
                            placeholder: "Nama Lengkap",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaAyahCewek",
                            apiFieldName:"Nama_Ayah",
                            formType: "text",
                            label: "Nama Ayah",
                            placeholder: "Nama Ayah",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaIbuCewek",
                            apiFieldName:"Nama_Ibu",
                            formType: "text",
                            label: "Nama Ibu",
                            placeholder: "Nama Ibu",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_3",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"fotoSendiriCewek",
                            apiFieldName:"Foto_Sendiri",
                            formType: "photo",
                            label: "Foto Sendiri",
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataCowok",
        title: "Data Pengantin Cowok",
        apiCollectionName:"Pengantin_Pria",
        radixTabsValue:"tab2",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPanggilanCowok",
                            apiFieldName:"Nama_Panggilan",
                            formType: "text",
                            label: "Nama Panggilan",
                            placeholder: "Nama Panggilan",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaLengkapCowok",
                            apiFieldName:"Nama_Lengkap",
                            formType: "text",
                            label: "Nama Lengkap",
                            placeholder: "Nama Lengkap",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaAyahCowok",
                            apiFieldName:"Nama_Ayah",
                            formType: "text",
                            label: "Nama Ayah",
                            placeholder: "Nama Ayah",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaIbuCowok",
                            apiFieldName:"Nama_Ibu",
                            formType: "text",
                            label: "Nama Ibu",
                            placeholder: "Nama Ibu",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_3",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"fotoSendiriCowok",
                            apiFieldName:"Foto_Sendiri",
                            formType: "photo",
                            label: "Foto Sendiri",
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataAkad",
        title: "Data Acara Akad",
        apiCollectionName:"Acara_Akad",
        radixTabsValue:"tab3",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"waktuAkad",
                            apiFieldName:"Waktu",
                            formType: "date",
                            label: "Waktu",
                            placeholder: "Waktu",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"lokasiAkad",
                            apiFieldName:"Lokasi",
                            formType: "textArea",
                            label: "Lokasi",
                            placeholder: "Lokasi",
                            required: true
                        },
                    ]
                },
            ]
    },
    {
        key: "dataResepsi",
        title: "Data Acara Resepsi",
        apiCollectionName:"Acara_Resepsi",
        radixTabsValue:"tab4",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"waktuResepsi",
                            apiFieldName:"Waktu",
                            formType: "date",
                            label: "Waktu",
                            placeholder: "Waktu",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"lokasiResepsi",
                            apiFieldName:"Lokasi",
                            formType: "textArea",
                            label: "Lokasi",
                            placeholder: "Lokasi",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"urlLokasi",
                            referencedFormName: "lokasiResepsi",
                            apiFieldName:"URL_Lokasi",
                            formType: "textArea",
                            label: "Url Lokasi",
                            placeholder: "Url Lokasi",
                            required: false
                        },
                        {
                            key: "input_2",
                            name:"mapLokasi",
                            referencedFormName: "lokasiResepsi",
                            apiFieldName:"Iframe_Lokasi",
                            formType: "map",
                            label: "Map",
                            placeholder: "Map",
                            required:false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataGaleri",
        title: "Data Galeri Foto",
        apiCollectionName:"Galeri_Foto",
        radixTabsValue:"tab5",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"fotoGaleri",
                            apiFieldName:"Foto",
                            formType: "multiPhoto",
                            label: "Foto",
                            placeholder: "Foto",
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataAmplop",
        title: "Data Amplop",
        apiCollectionName:"Amplop",
        addForm: {
            key: "addForm_1",
            isExist: true
        },
        radixTabsValue:"tab6",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPenerimaAmplop",
                            apiFieldName:"Nama_Penerima",
                            formType: "text",
                            label: "Nama Penerima",
                            placeholder: "Nama Penerima",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"noRekeningAmplop",
                            apiFieldName:"No_Rekening",
                            formType: "text",
                            label: "No Rekening",
                            placeholder: "No Rekening",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"platformPenerimaAmplop",
                            apiFieldName:"Platform_Pembayaran",
                            formType: "select",
                            label: "Platform Penerima",
                            defaultValue: {
                                label:"Pick One",
                                value:"default"
                            },
                            options: [
                                "BCA",
                                "BNI",
                                "Mandiri",
                                "BRI",
                                "Gopay",
                                "OVO",
                                "DANA",
                                "ShopeePay"
                            ],
                            required: true
                        },
                    ]
                },
            ]
    },
    {
        key: "dataHadiah",
        title: "Data Hadiah",
        apiCollectionName:"Hadiah",
        radixTabsValue:"tab7",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPenerimaHadiah",
                            apiFieldName:"Nama_Penerima",
                            formType: "text",
                            label: "Nama Penerima",
                            placeholder: "Nama Penerima",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"noHpHadiah",
                            apiFieldName:"No_HP",
                            formType: "text",
                            label: "No HP",
                            placeholder: "No HP",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"alamatHadiah",
                            apiFieldName:"Alamat_Penerima",
                            formType: "textArea",
                            label: "Alamat Penerima",
                            placeholder: "Alamat Penerima",
                            required: true
                        },
                    ]
                },
            ]
    },
    {
        key: "dataPelengkap",
        title: "Data Pelengkap",
        apiCollectionName:"Pelengkap",
        radixTabsValue:"tab8",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"urlMusic",
                            apiFieldName:"URL_Musik",
                            formType: "text",
                            label: "Url Music (Soundcloud)",
                            placeholder: "Url Music",
                            required: false
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaAyatSuci",
                            apiFieldName:"Nama_AyatSuci",
                            formType: "text",
                            label: "Nama Ayat Suci",
                            placeholder: "Nama Ayat Suci",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"isiAyatSuci",
                            apiFieldName:"Isi_AyatSuci",
                            formType: "textArea",
                            label: "Isi Ayat Suci",
                            placeholder: "Isi Ayat Suci",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_3",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"perjalanan1",
                            apiFieldName:"Perjalanan_1",
                            formType: "textArea",
                            label: "Perjalanan Cinta 1",
                            placeholder: "Perjalanan Cinta 1",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"perjalanan2",
                            apiFieldName:"Perjalanan_2",
                            formType: "textArea",
                            label: "Perjalanan Cinta 2",
                            placeholder: "Perjalanan Cinta 2",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_4",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"perjalanan3",
                            apiFieldName:"Perjalanan_3",
                            formType: "textArea",
                            label: "Perjalanan Cinta 3",
                            placeholder: "Perjalanan Cinta 3",
                            required: true
                        },
                    ]
                },
            ]
    },
]


export const getDataAmplopAddedForm = (nameVariation) => {

    const generatedName = nameVariation+uniqid.time()

    return (
         {
            key: "dataAmplop" + generatedName,
            title: "Data Amplop",
            apiCollectionName:"Amplop",
            isDynamicApiCollection:true,
            radixTabsValue:"tab6",
            forms:
                [
                    {
                        key: "formGroup_1",
                        formType: "formGroup",
                        children: [
                            {
                                key: "input_1",
                                name: "namaPenerimaAmplop" + generatedName,
                                apiFieldName:"Nama_Penerima",
                                formType: "text",
                                label: "Nama Penerima",
                                placeholder: "Nama Penerima",
                                required: true
                            },
                            {
                                key: "input_2",
                                name: "noRekeningAmplop" + generatedName,
                                apiFieldName:"No_Rekening",
                                formType: "text",
                                label: "No Rekening",
                                placeholder: "No Rekening",
                                required: true
                            },
                        ]
                    },
                    {
                        key: "formGroup_2",
                        formType: "formGroup",
                        children: [
                            {
                                key: "input_1",
                                name: "platformPenerimaAmplop" + generatedName,
                                apiFieldName:"Platform_Pembayaran",
                                formType: "select",
                                label: "Platform Penerima",
                                defaultValue: {
                                    label: "Pick One",
                                    value: "default"
                                },
                                options: [
                                    "BCA",
                                    "BNI",
                                    "Mandiri",
                                    "BRI",
                                    "Gopay",
                                    "OVO",
                                    "DANA",
                                    "ShopeePay"
                                ],
                                required: true
                            },
                        ]
                    },
                ]
        }
    )

}