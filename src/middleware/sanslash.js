/**
 * Redirects all urls ending in a trailing slash to non trailing for SEO
 * @memberof Middleware
 * @version 1.0.0
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next next step function
 */
export default function(req, res, next) {
   if (req.path.substr(-1) == '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length);
      res.statusCode = 301;
      res.setHeader('Location', req.path.slice(0, -1) + query);
      res.end();
   } else {
      next();
   }
}
