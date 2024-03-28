const express = require("express");
const router = express.Router();
const passport = require("passport");
const fetchdataController = require("../../controllers/api/fetchdata");

/**
 * @swagger
 * /api/fetchingdata/fetchdata:
 *   get:
 *     summary: Fetch data from public APIs
 *     description: Fetches data from public APIs and returns it
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data fetched successfully
 *       500:
 *         description: Something went wrong while fetching data
 */

/**
 * @swagger
 * /api/fetchingdata//fetchdata/{cat}:
 *   get:
 *     summary: Fetch data from public APIs based on category
 *     description: Fetches data from public APIs based on the provided category and returns it
 *     parameters:
 *       - in: path
 *         name: cat
 *         schema:
 *           type: string
 *         required: true
 *         description: The category to filter data
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data fetched successfully based on category
 */

/**
 * @swagger
 * /api/fetchingdata/fetchdata/{cat}/{range}:
 *   get:
 *     summary: Fetch data from public APIs based on category and range
 *     description: Fetches data from public APIs based on the provided category and range, and returns it
 *     parameters:
 *       - in: path
 *         name: cat
 *         schema:
 *           type: string
 *         required: true
 *         description: The category to filter data
 *       - in: path
 *         name: range
 *         schema:
 *           type: integer
 *         required: true
 *         description: The number of entries to return
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data fetched successfully based on category and range
 */



router.get(
  "/fetchdata",
  passport.authenticate("jwt", { session: false }),
  fetchdataController.fetchdata
);
router.get(
  "/fetchdata/:cat",
  passport.authenticate("jwt", { session: false }),
  fetchdataController.fetchdataonCategory
);
router.get(
  "/fetchdata/:cat/:range",
  passport.authenticate("jwt", { session: false }),
  fetchdataController.fetchdataonCategoryrange
);

module.exports = router;
