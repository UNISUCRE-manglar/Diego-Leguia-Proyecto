

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderHome = (req, res) => {
  res.render('home');
};
indexCtrl.rendertrabajo = (req, res) => {
  res.render('trabajo');
};
indexCtrl.renderpapegu = (req, res) => {
  res.render('papegu');
};
module.exports = indexCtrl;