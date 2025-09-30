import { Transaction } from "@mysten/sui/transactions";

export const updateHeroImage = (
  packageId: string,
  heroId: string,
  newUrl: string,
) => {
  const tx = new Transaction();

  tx.moveCall({
    target: `${packageId}::hero::change_image_url`,
    arguments: [
      tx.object(heroId),
      tx.pure.string(newUrl),
    ],
  });

  return tx;
};
