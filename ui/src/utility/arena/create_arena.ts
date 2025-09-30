import { Transaction } from "@mysten/sui/transactions";

export const createArena = (packageId: string, heroId: string) => {
  const tx = new Transaction();

  tx.moveCall({
    target: `${packageId}::arena::create_arena`,
    typeArguments: [],
    arguments: [
      tx.object(heroId)
    ],
  });
  return tx;
};
