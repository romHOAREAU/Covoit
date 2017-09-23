exports.index = function(req, res, next) {
  res.render('index', { title: 'Application de covoiturage' });
};
