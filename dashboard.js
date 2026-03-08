const container = document.getElementById("issuesContainer");
const loader = document.getElementById("loader");
const issueCount = document.getElementById("issueCount");

let allIssues = [];

function setActiveTab(tab) {
    document.querySelectorAll(".tab").forEach(btn => {
        btn.classList.remove("tab-active");
    });
    tab.classList.add("tab-active");

}

async function loadIssues(type = "all") {
    try {
        loader.classList.remove("hidden");
        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const data = await res.json();
        allIssues = data.issues || data.data || [];

        let issues = allIssues;
        if (type !== "all") {
            issues = allIssues.filter(issue => issue.status === type);
        }

        showIssues(issues);
    } catch (error) {

        console.error("Error loading issues:", error);
        container.innerHTML = `<p class="text-red-500">Failed to load issues</p>`;
    } finally {

        loader.classList.add("hidden");
    }

}



function showIssues(issues) {
    container.innerHTML = "";
    issueCount.innerText = `${issues.length} Issues`;
    issues.forEach(issue => {
        const card = document.createElement("div");
        card.classList.add("issue-card");
        card.style.borderTop = issue.status === "open" ? "4px solid green" : "4px solid purple";
        card.innerHTML = `
                    <div class="bg-white rounded-2xl shadow p-4 border-t-4 
                    ${issue.status === "open" ? "border-green-400" : "border-purple-400"}"> <div class="flex justify-between items-center mb-2"> <div class="w-7 h-7 
                    ${issue.status === "open" ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600"} 
                    rounded-full flex items-center justify-center">
                    <img src="${issue.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png" }" alt="status icon" class="w-4 h-4">
                    </div>
                    <span class="text-xs px-3 py-1 rounded-full 
                    ${issue.priority?.toLowerCase() === "high" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"}">

                    ${issue.priority} </span>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2"> ${issue.title} </h3> <p class="text-sm text-gray-500 mb-3">
                    ${issue.description.slice(0, 90)}... </p>
                    <div class="flex gap-2 mb-3">
                    <span class="text-xs border border-red-400 text-red-500 px-2 py-1 rounded-full"> BUG </span>
                    <span class="text-xs border border-yellow-400 text-yellow-600 px-2 py-1 rounded-full">HELP WANTED </span></div>
                    <hr class="my-2">
                    <div class="text-xs text-gray-500 flex justify-between">
                    <span>#${issue.id} by ${issue.author}</span>
                    <span>${new Date(issue.createdAt).toLocaleDateString()}</span></div>
                    </div>

`;

        card.addEventListener("click", () => openModal(issue));
        container.appendChild(card);
    });
}



function openModal(issue) {
    document.getElementById("modalTitle").innerText = issue.title;
    document.getElementById("modalDescription").innerText = issue.description;
    document.getElementById("modalAuthor").innerText = issue.author;
    document.getElementById("modalDate").innerText = new Date(issue.createdAt).toLocaleDateString();
    document.getElementById("modalAssignee").innerText = issue.author || "Unassigned";
    document.getElementById("modalPriority").innerText = issue.priority;
    document.getElementById("issueModal").showModal();

}



async function searchIssues() {
    const text = document.getElementById("searchInput").value.trim();
    if (text === "") {
        showIssues(allIssues);
        return;
    }

    try {
        const res = await fetch(
            `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
        );
        const data = await res.json();
        const results = data.issues || data.data || [];
        showIssues(results);
    } catch (error) {
        console.error("Search failed:", error);
    }

}


loadIssues();