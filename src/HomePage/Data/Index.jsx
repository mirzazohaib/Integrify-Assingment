
export const getBreweryData = () => {
    return fetch(
      'https://api.openbrewerydb.org/breweries',
    ).then((r) => r.json());
  };