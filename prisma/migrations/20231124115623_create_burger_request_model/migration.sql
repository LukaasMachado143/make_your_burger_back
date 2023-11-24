-- CreateTable
CREATE TABLE "BurgerRequests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BurgerRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BurgerRequestToIngredient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BurgerRequestToIngredient_AB_unique" ON "_BurgerRequestToIngredient"("A", "B");

-- CreateIndex
CREATE INDEX "_BurgerRequestToIngredient_B_index" ON "_BurgerRequestToIngredient"("B");

-- AddForeignKey
ALTER TABLE "_BurgerRequestToIngredient" ADD CONSTRAINT "_BurgerRequestToIngredient_A_fkey" FOREIGN KEY ("A") REFERENCES "BurgerRequests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BurgerRequestToIngredient" ADD CONSTRAINT "_BurgerRequestToIngredient_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
