
const API_URL = "http://localhost:5000";

async function checkBackend() {

    const statusElement = document.getElementById("status");

    try {

        const response = await fetch(`${API_URL}/health`);

        if (!response.ok) {
            throw new Error("Backend returned an error");
        }

        const data = await response.json();

        statusElement.innerText =
            `Backend Status: ${data.status}`;

    } catch (error) {

        statusElement.innerText =
            "Backend connection failed";

        console.error(error);
    }
}


async function getApplicationInfo() {

    const infoElement = document.getElementById("app-info");

    try {

        const response = await fetch(`${API_URL}/api/info`);

        if (!response.ok) {
            throw new Error("Unable to retrieve application info");
        }

        const data = await response.json();

        infoElement.innerText =
            `${data.application} | ${data.technology} | ${data.environment}`;

    } catch (error) {

        infoElement.innerText =
            "Unable to load application information";

        console.error(error);
    }
}


checkBackend();
getApplicationInfo();
