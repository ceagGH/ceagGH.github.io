import fsPromises from 'fs/promises';
import path from 'path';
const dataFilePath = path.join(process.cwd(), 'public/assets/profiles/personal_info.json');
//Source: https://dev.to/this-is-learning/readwrite-on-local-json-file-with-nextjs-part-51-8gg
const handler = async (req, res) => {
  if (req.method === 'GET') {
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  } else if (req.method === 'POST') {
    try {
        // Read the existing data from the JSON file
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);
  
        // Get the data from the request body
        const { ID, NAME, EMAIL, YEAR, COURSE } = req.body;
  
        // Add the new data to the object
        const newData = {ID, NAME, EMAIL, YEAR, COURSE};
        objectData.push(newData);
  
        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(objectData);
  
        // Write the updated data to the JSON file
        await fsPromises.writeFile(dataFilePath, updatedData);
  
        // Send a success response
        res.status(200).json({ message: 'Data stored successfully' });
      } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({ message: 'Error storing data' });
      }
  }
}

export default handler