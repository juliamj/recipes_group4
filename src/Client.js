import * as contentful from 'contentful';

export const Client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN

})

//API keys are meant to be private. We can keep them private by saving them in environment variables.abs
//What we've done above makes sure the tokens and IDs are private
