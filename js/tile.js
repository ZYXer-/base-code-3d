/**
 *
 * Created by janmeier on 19.01.15.
 */

function Position2D() {
   this.x = 0;
   this.y = 0;

   this.init = function(x, y) {
      this.x = x;
      this.y = y;
   };
}

Position2D.makePosition = function(x, y) {
   var position = new Position2D();
   position.init(x,y);
   return position;

};

Position2D.Origin = Position2D.makePosition(0, 0);

function Vector3D() {
   this.x = 0;
   this.y = 0;
   this.z = 0;

   this.init = function(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
   };

   this.isOrthogonalToBaseVector = function() {
     return this.x == 0 || this.y == 0 || this.z ==0;
   }


}
Vector3D.makeVector = function(x, y, z) {
   var vector = new Vector3D();
   vector.init(x, y, z);
   return vector;
}


function Tile() {
   this.position = new Position2D();

   this.map;


   this.init = function(x, y, map) {
      this.map = map;
      this.position.init(x,y)
   };
}

