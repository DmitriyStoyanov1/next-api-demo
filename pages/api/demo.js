export default async function handler(req, res) {
  const request = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await request.json();

  res.status(200).json(characters);
}
