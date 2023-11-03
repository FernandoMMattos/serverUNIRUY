import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Use cors middleware

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get('https://api.hgbrasil.com/weather?key=50f43aa2&woeid=455826&array_limit=2&fields=only_results,description,condition_slug&locale=pt');
    const description = response.data.description;
    res.json({ description });
  } catch (error) {
    console.error('Error retrieving data from the API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});