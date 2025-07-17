export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Hotel Sunset",
      location: "Gdańsk",
      price: "320 zł / noc",
      image: "https://source.unsplash.com/featured/?hotel,1"
    },
    {
      id: 2,
      name: "Cozy Mountain Lodge",
      location: "Zakopane",
      price: "270 zł / noc",
      image: "https://source.unsplash.com/featured/?hotel,2"
    },
    {
      id: 3,
      name: "City Lights Hotel",
      location: "Warszawa",
      price: "410 zł / noc",
      image: "https://source.unsplash.com/featured/?hotel,3"
    }
  ]);
}
