function dataParser(objectArg) {
  const image = objectArg.picture.large;
  const { first, last } = objectArg.name;
  const { email, phone } = objectArg;
  const { age } = objectArg.dob;
  const { number, name } = objectArg.location.street;
  const { password } = objectArg.login;

  const newPerson = {
    name: `${first} ${last}`,
    age,
    image,
    email,
    street: `${number} ${name}`,
    phone,
    password,
  };

  return newPerson;
}

export default dataParser;
