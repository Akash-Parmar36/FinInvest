const { AllHoldings, AllPositions , AllOrders , NewOrder } = require("../controllers/dataController");  
const { ensureAuthenticated } = require("../middlewares/authVerification");

const express = require("express");

const dataRouter = express.Router();

dataRouter.get("/allHoldings", ensureAuthenticated , AllHoldings);
dataRouter.get("/allPositions", ensureAuthenticated , AllPositions);
dataRouter.get("/allOrders", ensureAuthenticated , AllOrders);
dataRouter.post("/newOrder", ensureAuthenticated , NewOrder);


module.exports = {dataRouter};
