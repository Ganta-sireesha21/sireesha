const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const countCategories = arr =>
  arr.reduce((acc, cat) =>
    ({ ...acc, [cat]: (acc[cat] || 0) + 1 }),
    {}
  );

const result = countCategories(categories);

console.log(result);