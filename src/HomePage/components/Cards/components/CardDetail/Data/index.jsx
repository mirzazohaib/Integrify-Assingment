
export const getBreweryDataById = (id) => {
    return fetch(
        `https://api.openbrewerydb.org/breweries/${id}`,
    ).then((r) => r.json());
  };