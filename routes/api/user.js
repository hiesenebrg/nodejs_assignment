const express = require("express");
const router = express.Router();
const passport = require("passport");
const usercontoller = require("../../controllers/api/user");

/**
 * @swagger
 * /api/user/sign-up:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user account with the provided credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User signed up successfully
 *       422:
 *         description: User already exists with the provided email
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/user/sign-in:
 *   post:
 *     summary: Log in as an existing user
 *     description: Logs in an existing user with the provided credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       422:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */

router.post("/sign-up", usercontoller.signup);
router.post("/sign-in", usercontoller.login);
module.exports = router;
