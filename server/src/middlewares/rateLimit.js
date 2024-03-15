const limiter = require("express-rate-limit");


const rateLimiter = limiter.rateLimit({
    windowMs: 1 * 60 * 1000, // For every 1 minute time period.
    limit: 5,
    message: "Too many requests from client ip! Please try again later.",
    standardHeaders: 'draft-7',
    legacyHeaders: true
});


module.exports = rateLimiter;