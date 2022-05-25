import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.kabupaten_kota.createMany({
    data: [
      {
        nama: "Kabupaten Pacitan",
        jml_puskesmas: 24,
        long_kordinat: "-8.1813138",
        lat_kordinat: "111.0699922"
      },
      {
        nama: "Kabupaten Ponorogo",
        jml_puskesmas: 31,
        long_kordinat: "-7.9708679",
        lat_kordinat: "111.3893264"
      },
      {
        nama: "Kabupaten Trenggalek",
        jml_puskesmas: 22,
        long_kordinat: "-8.1353861",
        lat_kordinat: "111.3387387"
      },
      {
        nama: "Kabupaten Tulungagung",
        jml_puskesmas: 32,
        long_kordinat: "-8.1483087",
        lat_kordinat: "111.8187384"
      },
      {
        nama: "Kabupaten Blitar",
        jml_puskesmas: 24,
        long_kordinat: "-8.1308302",
        lat_kordinat: "111.9370631"
      },
      {
        nama: "Kabupaten Kediri",
        jml_puskesmas: 37,
        long_kordinat: "-7.8007905",
        lat_kordinat: "111.8294155"
      },
      {
        nama: "Kabupaten Malang",
        jml_puskesmas: 39,
        long_kordinat: "-8.1117684",
        lat_kordinat: "112.3425871"
      },
      {
        nama: "Kabupaten Lumajang",
        jml_puskesmas: 25,
        long_kordinat: "-8.1232669",
        lat_kordinat: "112.8592935"
      },
      {
        nama: "Kabupaten Jember",
        jml_puskesmas: 50,
        long_kordinat: "-8.2648559",
        lat_kordinat: "113.3732605"
      },
      {
        nama: "Kabupaten Banyuwangi",
        jml_puskesmas: 45,
        long_kordinat: "-8.330861",
        lat_kordinat: "113.6609913"
      },
      {
        nama: "Kabupaten Bondowoso",
        jml_puskesmas: 25,
        long_kordinat: "-7.944511",
        lat_kordinat: "113.6558236"
      },
      {
        nama: "Kabupaten Situbondo",
        jml_puskesmas: 20,
        long_kordinat: "-7.797822",
        lat_kordinat: "113.7396995"
      },
      {
        nama: "Kabupaten Probolinggo",
        jml_puskesmas: 33,
        long_kordinat: "-7.8511749",
        lat_kordinat: "113.0054551"
      },
      {
        nama: "Kabupaten Pasuruan",
        jml_puskesmas: 33,
        long_kordinat: "-7.7502013",
        lat_kordinat: "112.6972884"
      },
      {
        nama: "Kabupaten Sidoarjo",
        jml_puskesmas: 26,
        long_kordinat: "-7.4471541",
        lat_kordinat: "112.6718016"
      },
      {
        nama: "Kabupaten Mojokerto",
        jml_puskesmas: 27,
        long_kordinat: "-7.54035",
        lat_kordinat: "112.2214564"
      },
      {
        nama: "Kabupaten Jombang",
        jml_puskesmas: 34,
        long_kordinat: "-7.5607088",
        lat_kordinat: "111.9790279"
      },
      {
        nama: "Kabupaten Nganjuk",
        jml_puskesmas: 20,
        long_kordinat: "-7.6143713",
        lat_kordinat: "111.6670659"
      },
      {
        nama: "Kabupaten Madiun",
        jml_puskesmas: 26,
        long_kordinat: "-7.6114556",
        lat_kordinat: "111.5085888"
      },
      {
        nama: "Kabupaten Magetan",
        jml_puskesmas: 22,
        long_kordinat: "-7.6529886",
        lat_kordinat: "111.2073035"
      },
      {
        nama: "Kabupaten Ngawi",
        jml_puskesmas: 24,
        long_kordinat: "-7.4321286",
        lat_kordinat: "111.2547404"
      },
      {
        nama: "Kabupaten Bojonegoro",
        jml_puskesmas: 36,
        long_kordinat: "-7.2270701",
        lat_kordinat: "111.5144818"
      },
      {
        nama: "Kabupaten Tuban",
        jml_puskesmas: 33,
        long_kordinat: "-6.9586358",
        lat_kordinat: "111.6158288"
      },
      {
        nama: "Kabupaten Lamongan",
        jml_puskesmas: 33,
        long_kordinat: "-7.1222712",
        lat_kordinat: "112.0322704"
      },
      {
        nama: "Kabupaten Gresik",
        jml_puskesmas: 32,
        long_kordinat: "-6.557261",
        lat_kordinat: "111.4500125"
      },
      {
        nama: "Kabupaten Bangkalan",
        jml_puskesmas: 22,
        long_kordinat: "-7.0458654",
        lat_kordinat: "112.7698064"
      },
      {
        nama: "Kabupaten Sampang",
        jml_puskesmas: 21,
        long_kordinat: "-7.0999704",
        lat_kordinat: "112.9816593"
      },
      {
        nama: "Kabupaten Pamekasan",
        jml_puskesmas: 20,
        long_kordinat: "-7.0707568",
        lat_kordinat: "113.3634473"
      },
      {
        nama: "Kabupaten Sumenep",
        jml_puskesmas: 30,
        long_kordinat: "-6.146758",
        lat_kordinat: "113.8011281"
      },
      {
        nama: "Kota Kediri",
        jml_puskesmas: 9,
        long_kordinat: "-7.8422462",
        lat_kordinat: "111.9461465"
      },
      {
        nama: "Kota Blitar",
        jml_puskesmas: 3,
        long_kordinat: "-8.0947389",
        lat_kordinat: "112.1302362"
      },
      {
        nama: "Kota Malang",
        jml_puskesmas: 16,
        long_kordinat: "-7.9784695",
        lat_kordinat: "112.561742"
      },
      {
        nama: "Kota Probolinggo",
        jml_puskesmas: 6,
        long_kordinat: "-7.7722255",
        lat_kordinat: "113.166456"
      },
      {
        nama: "Kota Pasuruan",
        jml_puskesmas: 8,
        long_kordinat: "-7.6513924",
        lat_kordinat: "112.8875851"
      },
      {
        nama: "Kota Mojokerto",
        jml_puskesmas: 6,
        long_kordinat: "-7.4714461",
        lat_kordinat: "112.4217213"
      },
      {
        nama: "Kota Madiun",
        jml_puskesmas: 6,
        long_kordinat: "-7.6299754",
        lat_kordinat: "111.4930317"
      },
      {
        nama: "Kota Surabaya",
        jml_puskesmas: 63,
        long_kordinat: "-7.2754438",
        lat_kordinat: "112.6426427"
      },
      {
        nama: "Kota Surabaya",
        jml_puskesmas: 5,
        long_kordinat: "-7.8806559",
        lat_kordinat: "112.5047944"
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
