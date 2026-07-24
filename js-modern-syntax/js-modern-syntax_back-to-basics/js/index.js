/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

//export const getNameAndCountry = ({ name, country }) => [name, country];
export const getNameAndCountry = (cityObject) => [
    cityObject.name,
    cityObject.country,
];

// export const getRelocatedCity = (city1, city2 = { name: "Berlin", country: "Germany" },) => {

//   const [, country] = getNameAndCountry(city2);
//     return {...city1, country,};
// };

export const getRelocatedCity = (
    city1,
    city2 = { name: "Berlin", country: "Germany" },
) => {
    const city2Array = getNameAndCountry(city2);
    const country = city2Array[1];
    //const [, country] = getNameAndCountry(city2);
    const city1Name = city1.name;
    return { name: city1Name, country: country };
};
