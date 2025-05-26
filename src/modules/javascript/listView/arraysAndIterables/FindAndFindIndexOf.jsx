import React from "react";

const FindAndFindIndexOf = () => {
  const numArr = [1, 3, 6, -3, 9, 5, 67];
  console.dir(numArr.indexOf(-3));

  const personData = [
    { name: "KARMA", profession: "Software Engg." },
    { name: "Bhabani Sankar", profession: "Software Engg." },
  ];
  console.dir(
    personData.indexOf({ name: "Bhabani Sankar", profession: "Software Engg." })
  ); // Not applicable for objects

  const bhabaniSankar = personData.find((person) => {
    return person.name === "Bhabani Sankar";
  });
  console.dir(bhabaniSankar);

  const prices = [10, 20, 44.5, 3, 99];
  const tax = 0.19;
  const adjustedPrice = [];

  prices.forEach((price, idx) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    adjustedPrice.push(priceObj);
  });
  console.dir(adjustedPrice);

  const taxAdjustedPrices = prices.map((price, idx) => {
    return { index: idx, taxAdjPrice: price * (1 + tax) };
  });
  console.dir(taxAdjustedPrices);

  const codeString = `
const numArr = [1, 3, 6, -3, 9, 5, 67];
console.dir(numArr.indexOf(-3));

const personData = [
  { name: "KARMA", profession: "Software Engg." },
  { name: "Bhabani Sankar", profession: "Software Engg." }
];
console.dir(personData.indexOf({ name: "Bhabani Sankar", profession: "Software Engg." }));

const bhabaniSankar = personData.find((person) => {
  return person.name === "Bhabani Sankar";
});
console.dir(bhabaniSankar);

const prices = [10, 20, 44.5, 3, 99];
const tax = 0.19;
const adjustedPrice = [];

prices.forEach((price, idx) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  adjustedPrice.push(priceObj);
});
console.dir(adjustedPrice);

const taxAdjustedPrices = prices.map((price, idx) => {
  return { index: idx, taxAdjPrice: price * (1 + tax) };
});
console.dir(taxAdjustedPrices);
`;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Array Methods Example: `find`, `indexOf`, `forEach`, `map`
      </h2>
      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{codeString}</code>
      </pre>
    </div>
  );
};

export default FindAndFindIndexOf;
