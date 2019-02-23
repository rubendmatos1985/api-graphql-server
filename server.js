import express from 'express';
import graphqlHTTP from 'express-graphql'; 
import schema from './shema'

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));
  
const PORT = process.env.PORT = 4000  

app.listen(PORT, () => console.log(`server listening at port ${ PORT }` ));