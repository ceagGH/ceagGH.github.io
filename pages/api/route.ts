import formidable, { Formidable } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import fsPromises from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export type FormidableParseReturn = {
  fields: formidable.Fields;
  files: formidable.Files;
};

async function parseForm(req: NextApiRequest): Promise<FormidableParseReturn> {
  const form = formidable();

  return await new Promise<FormidableParseReturn>((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
      }

      resolve({ fields, files });
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    //Upload files
    const { fields, files } = await parseForm(req);
    const myfile = (files["file"] as any as File[])[0];
    const newFilename = (fields["filename"] as any as String[])[0];

    fs.copyFile(
      myfile.filepath,
      process.cwd() + "/public/assets/profiles/" + newFilename + '.' + myfile.originalFilename.match(new RegExp('[^.]+$')),
      function (err) {
        if (err) throw err;
        res.write("File uploaded and moved!");
        res.end();
      }
    );
    //Update JSON
    const dataFilePath = path.join(
      process.cwd(),
      "public/assets/profiles/personal_info.json"
    );
    const newInfo = (fields["info"] as any as String[])[0].toString();
    const objNewInfo = JSON.parse(newInfo);
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    objectData.push(objNewInfo);

    // Convert the object back to a JSON string
    const updatedData = JSON.stringify(objectData);

    // Write the updated data to the JSON file
    await fsPromises.writeFile(dataFilePath, updatedData);

    res.status(200).json({ message: "Sucess" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}