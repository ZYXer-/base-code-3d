var game;

var resources;
var img;
var sound;
var timer;

var preloadingManager;
var performanceMonitor;

var mouse;
var keyboard;

var renderer;

var cam;
var s;


jQuery(document).ready(function() {
  
  resources = new Resources();
  img = new Img();
  sound = new Sound();
  timer = new Timer();
  
  preloadingManager = new PreloadingManager();
  performanceMonitor = new PerformanceMonitor();
  
  mouse = new Mouse();
  keyboard = new Keyboard();
  
  game = new Game();
  game.init();
  
});