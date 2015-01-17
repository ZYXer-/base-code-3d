function IngameState() {
  
  this.cube;
  this.stats;
  
  this.lookAtX = 0.0;
  
  
  this.init = function() {
    
    s = new THREE.Scene();
    
    cam = new Camera();
    cam.initPerspectiveCamera(75, 1.0, 1000.0);
    //cam.initIsometricCamera(20.0, 0.5, 1.0, 1000.0);
    //cam.initOrthographicCamera(200.0, 1.0, 1000.0);
  };
  
  
  this.show = function() {
   
    var ambientLight = new THREE.AmbientLight(0x333333);
    s.add(ambientLight);
    
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0.5, 0.5, 0.0).normalize();
    
    light.castShadow = true;
    
    light.shadowCameraNear = 0;
    light.shadowCameraFar = 15;
    
    light.shadowCameraLeft = -5;
    light.shadowCameraRight = 5;
    light.shadowCameraTop = 5;
    light.shadowCameraBottom = -5;
    
    light.shadowCameraVisible = true;
    
    s.add(light);
    
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    this.cube = new THREE.Mesh(geometry, img.material("test"));
    this.cube.castShadow = true;
    s.add(this.cube);
    
    var geometry2 = new THREE.BoxGeometry(8, 1, 8);
    var cube2 = new THREE.Mesh(geometry2, img.material("test3"));
    cube2.receiveShadow = true;
    cube2.position.set(0, -1, 0);
    s.add(cube2);

    cam.setPosition(5.0, 5.0, 5.0);
    cam.lookAt(0.0, 0.0, 0.0);
  };
  
  
  this.update = function() {
    this.cube.rotation.y += 1.5 * timer.delta;
    this.lookAtX += 0.3 * timer.delta;
    var results = cam.getObjectsAtCoords(mouse.x, mouse.y, s.children);
    console.log(mouse.x, mouse.y);
    if(results.length > 0) {
      console.log(mouse.x, mouse.y);
      console.log(mouse.x, mouse.y, results[0]);
    }
  };
  
  
  this.draw = function() {
    cam.lookAt(this.lookAtX, 0.0);
    renderer.render(s, cam);
  };
  
}