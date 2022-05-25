-- CreateTable
CREATE TABLE "kabupaten_kota" (
    "id" VARCHAR(50) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "jml_puskesmas" INTEGER NOT NULL,
    "long_kordinat" DECIMAL(65,30),
    "lat_kordinat" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kabupaten_kota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dbd" (
    "id" VARCHAR(50) NOT NULL,
    "kabupaten_kota_id" VARCHAR(50) NOT NULL,
    "jml_kasus_laki" INTEGER NOT NULL,
    "jml_kasus_perempuan" INTEGER NOT NULL,
    "jml_meninggal_laki" INTEGER NOT NULL,
    "jml_meninggal_perempuan" INTEGER NOT NULL,
    "cfr_laki" DECIMAL(65,30) NOT NULL,
    "cfr_perempuan" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dbd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dbd" ADD CONSTRAINT "dbd_kabupaten_kota_id_fkey" FOREIGN KEY ("kabupaten_kota_id") REFERENCES "kabupaten_kota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
