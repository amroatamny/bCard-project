const generateBizNumber = require("./generateBizNumber");

const normalizeCard = async (rawCard, userId) => {
  const image = {
    url:
      rawCard.image.url ||
      "https://cdn.pixabay.com/photo/2024/01/26/06/49/elderly-man-8533488_1280.png",
    alt: rawCard.image.alt || "business card image",
  };
  const address = {
    ...rawCard.address,
    state: rawCard.address.state || "",
    zip: rawCard.address.zip || 0,
  };
  return {
    ...rawCard,
    web: rawCard.web || "",
    image,
    address,
    bizNumber: rawCard.bizNumber || (await generateBizNumber()),
    user_id: rawCard.user_id || userId,
  };
};

module.exports = normalizeCard;
