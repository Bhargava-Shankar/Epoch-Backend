// Import necessary modules
import express, { Request, Response } from 'express';
import passport from 'passport';
import  {strategy } from "./Google";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a port
const PORT = process.env.PORT || 3000;

// Example route for GET request
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});


app.get("/auth/google/callback", (req,res) => {
    console.log(res)
    console.log(req)
    res.redirect("/")
})
app.get('/auth/google',
  passport.authenticate(strategy, { scope:
      ['email', 'profile'],
  }
));

// Example route for POST request
app.post('/data', (req: Request, res: Response) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
