const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
//require pool in order to establish a connection between the project and the db
const pool = require('../modules/pool');



// DO NOT MODIFY THIS FILE FOR BASE MODE
// GET Route
router.get('/', (req, res) => {
    //create a queryString to select all from gallery table 
    const queryString = `SELECT * FROM gallery ORDER BY id DESC;`;
    //pool sends a query (a commend that we want to do) to select all from the gallery and get the results
    pool.query( queryString ).then( (results)=>{
        //respond with the results of all the rows in the db
        res.send(results.rows);
    }).catch( (err)=>{
        console.log(err);
        res.sendStatus( 500 );
    })
}); // END GET Route

// POST Route
router.post('/', ( req, res ) => {
    console.log(req.body);
    //create a const called queryString and give it the value of the commend being sent to the db 
    const queryString = `INSERT INTO gallery (path, description) VALUES($1, $2);`;    
    let values = [req.body.url, req.body.description];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( error )=>{
            res.sendStatus( 500) ;
       })
}) // END POST Route


/// PUT (req.query)
router.put( '/like/:id', (req, res)=>{
    console.log( '/like PUT req.body:', req.body);
    //create a variable that stores all the likes 
    const likes= req.body.likes;
    //update name, description, and picture to the inputted text from the user 
    //UPDATE the gallery table and set the likes column equal to the number of likes the image has WHERE the id column in the db matches the id of the image. 
    const queryString = `UPDATE gallery SET likes='${likes}' WHERE id=${req.params.id}`;
    //connect to the database with pool. Use .query to send the query string (the const we made in the line above) to the database.
    pool.query( queryString ).then( (results)=>{
      res.sendStatus( 200 );
    }).catch( (err)=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  })


// DELETE /treats (req.query)
router.delete( '/delete/:id', (req, res)=>{
    console.log("req.body", req.body);
    let queryString = `DELETE FROM "gallery" where id=${req.body.id};`
    pool.query( queryString ).then( (results)=>{
      res.sendStatus( 200 );
    }).catch( (err)=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  })


// need to add post & delete routes 



module.exports = router;