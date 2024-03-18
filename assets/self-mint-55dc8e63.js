import { u as useWeb3, r as reactExports, Q, j as jsxs, H as HelmetExport, e as jsx, f as useParams } from "./index-763d6cbb.js";
import { e as extractMessage, r as regexify, d as deregexify } from "./TokenFilterForm.module-38dece39.js";
import { View } from "./view-059b19b7.js";
import { S as SubmitButton } from "./SubmitButton-738a4758.js";
import "./react-markdown-8bfcb88e.js";
import "./HomeLink-197c24ea.js";
import "./ThreeDScene-51f97519.js";
const SelfMint = ({ tokenId }) => {
  const { rwContract, address, contractClient } = useWeb3();
  const [processing, setProcessing] = reactExports.useState(false);
  const mint = reactExports.useCallback(async () => {
    try {
      setProcessing(true);
      const hash = await rwContract("mint", [[address], BigInt(tokenId)]);
      await contractClient.waitForTransactionReceipt({ hash });
    } catch (error) {
      console.error({ error });
      Q.error(extractMessage(error));
    } finally {
      setProcessing(false);
    }
  }, [address, contractClient, rwContract, tokenId]);
  return /* @__PURE__ */ jsxs("main", { id: "self-mint", children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        "Self-Mint NFT #",
        regexify(tokenId)
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Mint a ’Chievemint NFT" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: mint, children: [
      /* @__PURE__ */ jsx(SubmitButton, { purpose: "mint", ...{ processing } }),
      /* @__PURE__ */ jsx(View, { ...{ tokenId }, header: false }),
      /* @__PURE__ */ jsx(SubmitButton, { purpose: "mint", ...{ processing } })
    ] })
  ] });
};
const SelfMintPage = () => {
  const { nftId } = useParams();
  const tokenId = deregexify(
    Array.isArray(nftId) ? nftId[0] : nftId
  );
  return /* @__PURE__ */ jsx(SelfMint, { ...{ tokenId } });
};
export {
  SelfMint,
  SelfMintPage,
  SelfMintPage as default
};
//# sourceMappingURL=self-mint-55dc8e63.js.map
