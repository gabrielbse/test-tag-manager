var firebaseConfig = {
	apiKey: "AIzaSyBBtxJtnJf-drsU5-q7ANrQIQVhpuYl0Ds",
	authDomain: "test-tag-manager-f2ee7.firebaseapp.com",
	projectId: "test-tag-manager-f2ee7",
	storageBucket: "test-tag-manager-f2ee7.appspot.com",
	messagingSenderId: "1969848427",
	appId: "1:1969848427:web:122f0efe4cffe742fdb12e",
	measurementId: "G-HFT190FPF0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function is_checked() {
    return document.getElementsByClassName("count-checked")[0].checked;
}

function trigger() {
	console.log("trigered");
	dataLayer.push({
		'event': 'count-mouseenter',
		'elementClasses': 'elementClasses'
	});
}