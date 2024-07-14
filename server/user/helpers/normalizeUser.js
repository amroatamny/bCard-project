const { generateUserPassword } = require("./bcypt");
const normalizeUser = (rawUser) => {
  const name = { ...rawUser.name, middle: rawUser.name.middle || "" };
  const image = {
    ...rawUser.image,
    url:
      rawUser.image.url ||
      "https://media.istockphoto.com/id/499728904/photo/unknown-person-silhouette.jpg?s=1024x1024&w=is&k=20&c=cvcV9WvqFt691KAQCXPzFexJ5VVSIYx4lBlhPXwydaE=",
    alt: rawUser.image.alt || "business card image",
  };
  const address = {
    ...rawUser.address,
    state: rawUser.address.state || "",
    zip: rawUser.address.zip || 0,
  };
  const user = {
    ...rawUser,
    name,
    image,
    address,
    password: generateUserPassword(rawUser.password),
  };
  return user;
};
module.exports = normalizeUser;
