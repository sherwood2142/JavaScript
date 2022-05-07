const getInfo = address => {
    Object.keys(address).map(key => console.log({key}));
}

const address = {
    street: 'Lenina',
    building: 1,
    flat: 40
};

getInfo(address);