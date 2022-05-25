/*
  Warnings:

  - You are about to alter the column `cfr_laki` on the `dbd` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `cfr_perempuan` on the `dbd` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - Made the column `long_kordinat` on table `kabupaten_kota` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lat_kordinat` on table `kabupaten_kota` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "dbd" ALTER COLUMN "cfr_laki" DROP NOT NULL,
ALTER COLUMN "cfr_laki" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "cfr_perempuan" DROP NOT NULL,
ALTER COLUMN "cfr_perempuan" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "kabupaten_kota" ALTER COLUMN "long_kordinat" SET NOT NULL,
ALTER COLUMN "long_kordinat" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "lat_kordinat" SET NOT NULL,
ALTER COLUMN "lat_kordinat" SET DATA TYPE VARCHAR(255);
