var example = (function() {

	var scene = new THREE.Scene();
	var camera;

	var light = new THREE.AmbientLight(0xffffff);
	var box;
	var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	
	function initScene() {
		renderer.setSize( window.innerWidth, window.innerHeight );
		$("#webgl_container").append(renderer.domElement);

		scene.add(light);

		camera = new THREE.PerspectiveCamera(
			35,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);

		camera.position.z = 100;
		scene.add(camera);

		box = new THREE.Mesh(
			new THREE.BoxGeometry(20,20,20),
			new THREE.MeshBasicMaterial({color: "#0088cc"})
		);

		box.name = "box";
		scene.add(box);

		render();
	}

	function render() {
		box.rotation.y += 0.01;
		box.rotation.z += 0.05;
		box.rotation.x += 0.03;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	window.onload = initScene;

	return {
		scene: scene
	}
	

})();