function Car(make, model, year, id, image = false) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.id = "id-"+id;
  this.image = image;
}

export const carConstructor = Car;
