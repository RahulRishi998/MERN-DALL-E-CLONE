import  express  from "express";
import * as dotenv from "dotenv";
import {OpenAI} from "openai"

const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY,
});   


dotenv.config();

const router = express.Router()


router.route('/').post( async (req,res) => {
    try {
        const {prompt} = req.body;

        const aiResponse = await openai.images.generate({
            prompt,
            // n:1, 
            // size:'1024×1024',
            // response_format:'b64_json'
        })
        const image = aiResponse.data[0].url;
        res.status(200).json({photo:image});
    } catch (error) {
      console.log(error)
      res.status(500).send(error?.aiResponse.data.error.message || "Something went wrong")
    }
})

export default router
