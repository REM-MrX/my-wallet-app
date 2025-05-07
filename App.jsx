import { client } from "./client";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { lightTheme } from "thirdweb/react";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("org.uniswap"),
  createWallet("app.phantom"),
  createWallet("io.1inch.wallet"),
  createWallet("com.crypto.wallet"),
  createWallet("com.exodus"),
];

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={lightTheme({
          colors: { primaryButtonBg: "hsl(131, 56%, 40%)" },
        })}
        connectModal={{
          size: "compact",
          termsOfServiceUrl:
            "https://cdn.prod.website-files.com/67e5f33bf5f8bf0faeb42eb7/681b16a34c8ecd1841eb62e9_%F0%9F%9A%A8%20Terms%20of%20Service%20for%20REM%20Presale.pdf",
        }}
      />
    </div>
  );
}

export default App;