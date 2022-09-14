// ./controllers/wizard-controller.js

const express = require('express')
const router = express.Router()
const {Wizards} = require('../models');
//const Wizards = require('../models/Wizards');
///////////////////////////////
// ROUTES
////////////////////////////////

// wizard INDEX ROUTE
router.get("/", async (req, res) => {
    try{
	res.status(200).json(await Wizards.find({}))
    }
    catch(error){
        res.status(400).json(error)
    }
});

// wizard CREATE ROUTE
router.post("/", async (req, res) =>  {
    try{
        res.json(await Wizards.create(req.body))
    } catch(error){
        res.status(404).json(error)
        }
    }
);
// wizard SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // get people by ID
        res.json(await Wizards.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});
// wizard DELETE ROUTE
router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await Wizards.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

// wizard UPDATE ROUTE
router.put("/:id", async (req, res) => {
    try {
      // update people by ID
      res.json(
        await Wizards.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = router
