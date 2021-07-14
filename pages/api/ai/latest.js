import {generateRandomAIPost} from '../../../utils/shared'

export default function handler(req, res) {
    let item1 = generateRandomAIPost()
    let item2 = generateRandomAIPost()
    let item3 = generateRandomAIPost()
    res.status(200).json([item1, item2, item3])
}