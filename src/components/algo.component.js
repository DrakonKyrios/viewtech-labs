import { DeflyWalletConnect } from "@blockshake/defly-connect";
import { DaffiWalletConnect } from "@daffiwallet/connect";
import { PeraWalletConnect } from "@perawallet/connect";
import algosdk from "algosdk";
import {
  PROVIDER_ID,
  WalletProvider,
  useInitializeProviders,
  useWallet,
} from "@txnlab/use-wallet";
import ConnectWallet from "./wallet/connect-wallet.component";
import Transact from "./wallet/transact.component";
import { useState } from "react";
import {
  VITE_ALGOD_NETWORK,
  getAlgodConfigFromViteEnvironment,
  getKmdConfigFromViteEnvironment,
} from "../environment";

let providersArray;
if (VITE_ALGOD_NETWORK === "") {
  const kmdConfig = getKmdConfigFromViteEnvironment();
  providersArray = [
    {
      id: PROVIDER_ID.KMD,
      clientOptions: {
        wallet: kmdConfig.wallet,
        password: kmdConfig.password,
        host: kmdConfig.server,
        token: String(kmdConfig.token),
        port: String(kmdConfig.port),
      },
    },
  ];
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ];
}

export const Algo = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openDemoModal, setOpenDemoModal] = useState(false);
  const { activeAddress } = useWallet();

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal);
  };

  const algodConfig = getAlgodConfigFromViteEnvironment();

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: `${algodConfig.port}`,
      nodeToken: `${algodConfig.token}`,
    },
    algosdkStatic: algosdk,
  });

  console.log("Wallet", activeAddress);

  return (
    <section>
      <WalletProvider value={walletProviders}>
        <div className="hero min-h-screen bg-teal-400">
          <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
            <div className="max-w-md">
              <h1 className="text-4xl">
                Welcome to <div className="font-bold">AlgoKit 🙂</div>
              </h1>
              <p className="py-6">
                This starter has been generated using official AlgoKit React
                template. Refer to the resource below for next steps.
              </p>

              <div className="grid">
                <a
                  data-test-id="getting-started"
                  className="btn btn-primary m-2"
                  target="_blank"
                  href="https://github.com/algorandfoundation/algokit-cli"
                >
                  Getting started
                </a>

                <div className="divider" />
                <button
                  data-test-id="connect-wallet"
                  className="btn m-2"
                  onClick={toggleWalletModal}
                >
                  Wallet Connection
                </button>

                {activeAddress && (
                  <button
                    data-test-id="transactions-demo"
                    className="btn m-2"
                    onClick={toggleDemoModal}
                  >
                    Transactions Demo
                  </button>
                )}
              </div>

              <ConnectWallet
                openModal={openWalletModal}
                closeModal={toggleWalletModal}
              />
              <Transact
                openModal={openDemoModal}
                setModalState={setOpenDemoModal}
              />
            </div>
          </div>
        </div>
      </WalletProvider>
    </section>
  );
};
