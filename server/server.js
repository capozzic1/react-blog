
import users from './routes/users';
import newpost from './routes/newpost';
import getposts from './routes/getposts';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Post from './models/models';
import deleteposts from './routes/delete';
import editposts from './routes/editposts';

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/newpost', newpost);
app.use('/posts', getposts);
app.use('/delete', deleteposts);
app.use('/edit', editposts);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
