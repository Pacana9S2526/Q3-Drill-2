function area() {
      var rad = document.getElementById("radius").value;
      var area = Math.PI * (rad ** 2);
      document.getElementById("area").value = area;
   }