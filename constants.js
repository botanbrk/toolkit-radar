export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.047182',
      bl_lng: '24.992627',
      tr_lat: '42.705437',
      tr_lng: '42.705437',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '7f9edcb32dmshc4faa1398105449p1b70a2jsnd88cba8b3d45',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    },
  };

  export const detailOptions = {
    headers: {
      'X-RapidAPI-Key':
        '7f9edcb32dmshc4faa1398105449p1b70a2jsnd88cba8b3d45',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
    },
  };