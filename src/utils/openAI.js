import OpenAI from 'openai';
import { openAI_key } from './Constants';

const openAI = new OpenAI({
  apiKey: openAI_key,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

export default openAI;