import { initiateDeveloperControlledWalletsClient } from '@circle-fin/developer-controlled-wallets'

const circleClient = new initiateDeveloperControlledWalletsClient({
  apiKey: process.env.CIRCLE_API_KEY,
  entitySecret: process.env.CIRCLE_ENTITY_SECRET,
});

export default async function handler(req, res) {
  try {
    const walletResponse = await circleClient.createWallets({
      blockchains: ["ETH-SEPOLIA"],
      accountType: "SCA",
      count: 1,
      walletSetId: "018b2b08-b83c-7526-8bdc-f5cf40efb5bb",
      metadata: [{ "name": "Viem Sample App Wallet" }],
    });

    // Extract the wallet address from the response
    const walletAddress = walletResponse.data.wallets[0].address;

    res.status(200).json({ walletAddress });
  } catch (error) {
    res.status(500).json({ error: 'Error creating wallet' });
  }
}
