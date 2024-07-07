const normalizeUser = (rawUser) => {
  const image = {
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
  return {
    ...rawUser,
    image,
    address,
  };
};
module.exports = normalizeUser;
