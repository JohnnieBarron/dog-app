const dog = require('../models/dog');

module.exports = {
    home: home,
    index: index,
    new: newDog,
    create: create,
    index: index,
    show: show,
    delete: deleteDog,
    edit: edit,
    update: update

};

//home page
async function home(req, res) {
    res.render('index.ejs')
};

// view all dogs page
async function index(req, res) {
  res.render('./dogs/index.ejs');  
};

//new dog
async function newDog(req, res) {
    res.render('./dogs/new.ejs')
}

// create new dog
async function create(req, res) {
  await dog.create(req.body);
  res.redirect('/dogs');
};

// find all dogs in the DB
async function index(req, res) {
  const foundDogs = await dog.find();
  res.render('dogs/index.ejs', {
    dogsList: foundDogs
  });
};

// show details of specific dog
async function show(req, res) {
  const foundDog = await dog.findById(req.params.dogId);
  res.render('dogs/view.ejs', {
    dog: foundDog,
  });
};

//delete dog
async function deleteDog(req, res) {
  await dog.findByIdAndDelete(req.params.dogId);
  res.redirect('/dogs');
};

// find the selected dog and pull the edit page
async function edit(req, res) {
  const foundDog = await dog.findById(req.params.dogId);
  res.render('dogs/edit.ejs', {
    dog: foundDog,
  });
};

//server update for edit function and redirect
async function update(req, res) {
  await dog.findByIdAndUpdate(req.params.dogId, req.body);
  res.redirect(`/dogs/${req.params.dogId}`);
};