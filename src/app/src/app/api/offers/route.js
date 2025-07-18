export async function GET() {
  const offers = [
    {
      id: 1,
      name: 'Sunset Beach Resort',
      location: 'Gdańsk',
      price: '249 zł',
      image: 'https://placehold.co/400x250',
    },
    {
      id: 2,
      name: 'Tatra Chalet',
      location: 'Zakopane',
      price: '399 zł',
      image: 'https://placehold.co/400x250',
    },
    {
      id: 3,
      name: 'Mazury Lake Hotel',
      location: 'Giżycko',
      price: '199 zł',
      image: 'https://placehold.co/400x250',
    },
  ];

  return Response.json(offers);
}
