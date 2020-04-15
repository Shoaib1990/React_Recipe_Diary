import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './Route/diaryRoute';

import cors from 'cors';


const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;

// recipesDB mongoose connection
// mongoose.connect('mongodb://localhost/recipesDB', {
//     usedNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://localhost/commentsDB', {
    usedNewUrlParser: true,
    useUnifiedTopology: true
});



// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);
//routesComment(app);

app.get('/', (req, res) => {
    res.send(`Recipe App is running ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Recipe App is running on port ${PORT}`);
});