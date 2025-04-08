// Load models from face-api.js
async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.ageGenderNet.loadFromUri('/models');
    console.log('Models loaded');
}

// Start video stream
async function startVideo() {
    const video = document.getElementById('video');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        return true;
    } catch (err) {
        console.error("Error accessing camera:", err);
        alert("Could not access the camera. Please check permissions.");
        return false;
    }
}

// Detect faces and predict age/gender
async function detectFaces() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ageDisplay = document.getElementById('age');
    const genderDisplay = document.getElementById('gender');
    
    // Set canvas dimensions to match video
    canvas.width = video.width;
    canvas.height = video.height;
    
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
    
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(
            video, 
            new faceapi.TinyFaceDetectorOptions()
        ).withAgeAndGender();
        
        // Clear canvas
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw detections
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        
        // Update age and gender displays
        if (detections.length > 0) {
            const age = Math.round(detections[0].age);
            const gender = detections[0].gender;
            const genderConfidence = detections[0].genderProbability.toFixed(2);
            
            ageDisplay.textContent = `${age} years`;
            genderDisplay.textContent = `${gender} (${genderConfidence * 100}%)`;
        } else {
            ageDisplay.textContent = '--';
            genderDisplay.textContent = '--';
        }
    }, 100);
}

// Main function
async function run() {
    await loadModels();
    const started = await startVideo();
    if (started) {
        detectFaces();
    }
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', run);
