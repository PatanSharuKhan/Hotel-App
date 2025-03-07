/*
  Warnings:

  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "UserAadhaar" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "aadhaarNumber" INTEGER NOT NULL,
    "bookUserId" INTEGER,
    "bookHotelId" INTEGER,

    CONSTRAINT "UserAadhaar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "userId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("userId","hotelId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAadhaar_aadhaarNumber_key" ON "UserAadhaar"("aadhaarNumber");

-- AddForeignKey
ALTER TABLE "UserAadhaar" ADD CONSTRAINT "UserAadhaar_bookUserId_bookHotelId_fkey" FOREIGN KEY ("bookUserId", "bookHotelId") REFERENCES "Book"("userId", "hotelId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
