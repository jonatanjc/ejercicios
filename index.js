function Punto(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Punto.prototype.suma = function(p) {
    return new Punto(this.x + p.x, this.y + p.y);
  };
  
  Punto.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")";
  };
  
  let p1 = new Punto(1, 2);
  let p2 = new Punto(1, 2);
  
  console.log(p1.suma(p2).toString());
  