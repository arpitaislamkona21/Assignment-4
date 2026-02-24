const jobs = [
  {id:1, company:"Mobile First Corp", position:"React Native Developer", location:"Remote",type: "Full-time", salary:" $130,000 - $175,000", description:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"all"},
  {id:2, company:"WebFlow Agency", position:"web Designer & developer", location:"Los Angeles, CA",type: "part-time", salary:" $80,000 - $120,000", description:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"all"},
  {id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", location:"Boston, MA ", type: "Full-time",salary:"$125,000 - $165,000", 
    description:"ransform complex data into compelling visualizations. Required skills:3D.js,react and strong analytical thinking.", status:"all"},
  {id:4, company:"CloudFirst Inc", position:"Backend Developer", location:"Seattle, WA",type: "Full-time", salary:"$140,000 - $190,000", description:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"all"},
  {id:5, company:"Innovation Labs", position:"UI/UX Engineer", location:"Austin, TX", type: "Full-time",salary:"$110,000 - $150,000", description:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"all"},
  {id:6, company:"MegaCore Solutions", position:"JavaScript Developer", location:"New York, NY",type: "Full-time", salary:"$130,000 - $170,00", description:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"all"},
  {id:7, company:"StarbyteX", position:"StartupXYZ", location:"remote",type: "Full-time", salary:" $120,000 - $160,000", description:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"all"},
  {id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", location:"San Francisco, CA",type: "Full-time", salary:"$130,000 - $175,000", description:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"all"},
];

let currentTab = "all";

function renderJobs() {
  const container = document.getElementById("jobContainer");
  const emptyState = document.getElementById("emptyState");
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  document.getElementById("tabCount").innerText = filtered.length + " jobs";

  if(filtered.length === 0){
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "border rounded p-4 text-sm";

    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-bold">${job.company}</h3>
          <p class="text-xs font-bold py-2 text-gray-500">${job.position}</p>
          ${job.location} • ${job.type} • ${job.salary}
        </div>
        <button onclick="deleteJob(${job.id})" class="text-gray-400">✖</button>
      </div>

      <p class="text-xs mt-2 py-2text-gray-600"><span class="inline-block mt-2  text-xs bg-[#EEF4FF] font-semibold px-2 py-1 rounded">
        ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
      </span> </br></br> ${job.description}</p>

      

      <div class="flex gap-2 font-bold mt-3">
        <button onclick="updateStatus(${job.id}, 'interview')" 
          class="border border-green-500 text-green-600 px-3 py-1 rounded text-xs">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')" 
          class="border border-red-500 text-red-600 px-3 py-1 rounded text-xs">
          Rejected
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}
function updateStatus(id, status){
  const job = jobs.find(j => j.id === id);

  if(job.status === status){
    job.status = "all";
  } else {
    job.status = status;
  }

  renderJobs();
}

function deleteJob(id){
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index,1);
  renderJobs();
}

function updateDashboard(){
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}

function switchTab(tab){
  currentTab = tab;
  renderJobs();
}

renderJobs();