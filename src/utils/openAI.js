import OpenAI from 'openai';
import { openAI_key } from './Constants';

const openAI = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

export default openAI;