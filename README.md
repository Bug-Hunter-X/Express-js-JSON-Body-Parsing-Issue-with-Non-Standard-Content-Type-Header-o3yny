# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The problem arises when the client sends a request with a Content-Type header that doesn't strictly adhere to the standard `application/json`.

## Problem Description

The provided `bug.js` file showcases an Express.js server that attempts to parse a JSON request body. However, if the client sends a request with a non-standard Content-Type header (e.g., `application/json; charset=utf-8`), the `req.body` will remain empty, leading to unexpected behavior.

## Solution

The `bugSolution.js` file offers a solution to this problem. By configuring the `express.json()` middleware with the `type` option, we can explicitly specify which Content-Type headers should trigger JSON body parsing.  This ensures that even with non-standard headers, the request body is parsed correctly.