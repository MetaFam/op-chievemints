import { c as useWeb3, r as reactExports, a as jsxs, H as HelmetExport, j as jsx, k as useParams } from "./index-a2694dd7.js";
import { r as regexify, d as deregexify } from "./TokenFilterForm.module-ac5fb1f5.js";
import { View } from "./view-d3e1980c.js";
import { S as SubmitButton } from "./SubmitButton-18501646.js";
import "./react-markdown-46f5339b.js";
import "./HomeLink-7321b6df.js";
import "./ThreeDScene-0b6aac41.js";
const SelfMint = ({ tokenId }) => {
  const { rwContract, address } = useWeb3();
  const [processing, setProcessing] = reactExports.useState(false);
  const mint = reactExports.useCallback(async () => {
    try {
      setProcessing(true);
      const tx = await rwContract["mint(address[],uint256,bytes)"](
        [address],
        BigInt(tokenId),
        []
      );
      await tx.wait();
    } catch (error) {
      console.error({ error });
    } finally {
      setProcessing(false);
    }
  }, [address, rwContract, tokenId]);
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
//# sourceMappingURL=self-mint-211cdb78.js.map
