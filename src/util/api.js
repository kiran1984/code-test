const apiKey = '-fZDds_E07KFQkQ7YtfMCtKxOtfy_3Ab7su7oqHKkKDHHT6EI-157INA8NFEXdxMdD7eo3Zu7nBjqj8luiMDVF5of-EOB90UMuumIVpMPN2chIRQjrwGI5iqGAoKW3Yx';
// const clientId = '1-AYufRKUcsi2_GZLjuW0A';

export let Search = {
  search(term,location,sortBy)
  {
    const corsUrl='https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=';
    return fetch(`${corsUrl}${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
      return response.json();}
     ).then(jsonResponse => {if(jsonResponse.businesses)
       {
          const endpoint = jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories.title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
        return endpoint;
      }});
    }
  }
