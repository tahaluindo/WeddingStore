import * as Yup from 'yup';

export const bridesFormSchema = Yup.object().shape({
  namaPanggilanCewek: Yup.string().required('Nama Panggilan wajib diisi'),
  namaLengkapCewek: Yup.string().required('Nama Lengkap wajib diisi'),
  namaAyahCewek: Yup.string().required('Nama Ayah wajib diisi'),
  namaIbuCewek: Yup.string().required('Nama Ibu wajib diisi'),
  fotoSendiriCewek: Yup.array().required('Foto sendiri wajib diupload'),
  namaPanggilanCowok: Yup.string().required('Nama Panggilan wajib diisi'),
  namaLengkapCowok: Yup.string().required('Nama Lengkap wajib diisi'),
  namaAyahCowok: Yup.string().required('Nama Ayah wajib diisi'),
  namaIbuCowok: Yup.string().required('Nama Ibu wajib diisi'),
  fotoSendiriCowok: Yup.array().required('Foto sendiri wajib diupload'),
  waktuAkad: Yup.string()
    .required('Waktu Akad wajib diisi')
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      'Date of Birth harus dalam format YYYY-MM-DD'
    ),
  lokasiAkad: Yup.string().required('Lokasi Akad wajib diiisi'),
  waktuResepsi: Yup.string()
    .required('Waktu Resepsi wajib diisi')
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      'Date of Birth harus dalam format YYYY-MM-DD'
    ),
  lokasiResepsi: Yup.string().required('Lokasi Resepsi wajib diiisi'),
  fotoGaleri: Yup.array().required('Foto Galeri wajib diupload'),
  namaPenerimaAmplop: Yup.string().required('Nama Penerima Amplop wajib diisi'),
  noRekeningAmplop: Yup.string().required('No Rekening Amplop wajib diisi'),
  platformPenerimaAmplop: Yup.string().required('Platform Amplop wajib dipilih'),
  namaPenerimaHadiah: Yup.string().required('Nama Penerima Hadiah wajib diisi'),
  noHpHadiah: Yup.string().required('No HP Hadiah wajib diisi'),
  alamatHadiah: Yup.string().required('Alamat Penerima Hadiah wajib diisi'),
  namaAyatSuci: Yup.string().required('Nama Ayat Suci wajib diisi'),
  isiAyatSuci: Yup.string().required('Isi Ayat Suci wajib diisi'),
  perjalanan1: Yup.string().required('Perejalanan Cinta 1 wajib diisi'),
  perjalanan2: Yup.string().required('Perejalanan Cinta 2 wajib diisi'),
  perjalanan3: Yup.string().required('Perejalanan Cinta 3 wajib diisi'),
})

export const orderFormSchema = Yup.object().shape({
  paket: Yup.string().required('Paket undangan wajib dipilih !'),
  template: Yup.number().required('Template undangan wajib dipilih !'),
  nama: Yup.string().required('Nama pemesan wajib diisi !'),
  noHP: Yup.string().required('No HP (No WA) wajib diisi !'),
  email: Yup.string().required('Email wajib diisi !'),
  password: Yup.string().required('Password wajib diisi !'),
  kota: Yup.string().required('Kota/Kabupaten wajib diisi !'),
  alamat: Yup.string().required('Alamat wajib diisi !'),
})

export const forgotFormSchema = Yup.object().shape({
  email: Yup.string().required('Email wajib diisi !'),
})

export const confirmationFormSchema = Yup.object().shape({
  orderId: Yup.string().required('Order ID wajib dipilih !'),
  namaPemesan: Yup.number().required('Nama pemesan wajib dipilih !'),
  namaPemilikRekening: Yup.string().required('Nama pemilik rekening wajib diisi !'),
  noWA: Yup.string().required('No HP (No WA) wajib diisi !'),
  email: Yup.string().required('Email wajib diisi !'),
  pesan: Yup.string().required('Pesan wajib diisi !'),
  fotoBukti: Yup.string().required('Foto Bukti wajib diisi !'),
})
export const slugFormSchema = Yup.object().shape({
  slug: Yup.string().required('Slug wajib diisi'),
})
export const loginFormSchema = Yup.object().shape({
  identifier: Yup.string().required('Masukkan OrderID/Email anda !'),
  password: Yup.string().required('Masukkan Passsword anda !'),
})
export const changePasswordFormSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Masukkan Passsword anda saat ini !'),
  newPassword: Yup.string().required('Masukkan Passsword baru anda !'),
  confirmationNewPassword: Yup.string().required('Masukkan Passsword baru anda !'),
})