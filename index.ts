import axios from 'axios';

const main = async () => {
  const response = await axios.get('https://randomuser.me/api/?results=20');
  const { data } = response;

  const names = getNames(data.results);
  console.log({ fullNames: names });
};

const getNames = (users: any) => {
  return users.map((user: any) => {
    return `${user.name.first} ${user.name.last}`;
  });
};

(async () => main())();
