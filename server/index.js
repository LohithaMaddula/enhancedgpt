//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
const { Configuration, OpenAIApi } = require("openai");
const express = require("express")
const bodyParser = require('body-parser')

const configuration = new Configuration({
  organization: "org-i16GdI3biVetsydNnhzCYRLs",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// callapi()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());

const express = require("express")
const app = express()

const port = 8080
app.post('/', async (req, res) => {
  const { message } = req.body;
  
  console.log(message);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
        
      
    })
    
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

