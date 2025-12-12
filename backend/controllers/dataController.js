const {HoldingsModel} = require("../models/HoldingsModel");
const {PositionsModel} = require("../models/PositionsModel");
const {OrdersModel} = require("../models/OrdersModel");


const AllHoldings = async (req,res) => {
    let allHoldings = await HoldingsModel.find({}); // fetching all the Holdings data from database
    res.json(allHoldings);
} 


const AllPositions = async (req,res) => {
    let allPositions = await PositionsModel.find({}); // fetching all the Positions data from database
    res.json(allPositions);
} 


const AllOrders = async (req,res) => {
    let allOrders = await OrdersModel.find({}); // fetching all the Orders data from database
    res.json(allOrders);
}


const NewOrder = async (req,res) => {
    //  console.log(req.body);
     let newOrder = new OrdersModel({
           name: req.body.name,
           qty:  req.body.qty,
           price: req.body.price,
           mode: req.body.mode,
     });

     await newOrder.save();

     res.send("Orders saved!");
}

module.exports = {AllHoldings , AllPositions , AllOrders , NewOrder};