// ensure authentication for authenticated users or guest users

//Implemented the module to protect all the routes from breaching directly
module.exports = {
  ensureAuthenticated: (req, res, next) => {
    //check whether request is authenticated from passport or not
    // if (req.isAuthenticated()) {
      return next();
    // }

    
   
    res.redirect("/");
  },

  forwardAuthenticated: (req, res, next) => {
    // if (!req.isAuthenticated()) {
      return next();
    // }
  },
};

//this module require to save routes
