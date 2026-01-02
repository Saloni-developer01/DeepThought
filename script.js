// Local variable to avoid CORS issues and hardcoding 
// const projectData = {
//     title: "Technical Project Management",
//     tasks: [{
//         task_title: "Explore the world of management",
//         task_description: "As a project manager, you play a key role in any organization's success. This task helps you understand those roles.",
//         assets: [
//             { asset_title: "Technical Project Management", asset_description: "Story of Alignment, Scope of Agility, Scrum Master, Sprint Planning, and more.", asset_content: "https://www.youtube.com/embed/TiMRwbaKcfY", asset_content_type: "video" },
//             { asset_title: "Threadbuild", asset_description: "Watch the video and threadbuild, and check out sub threads.", asset_content: "", asset_content_type: "thread" },
//             { asset_title: "Structure your Pointers", asset_description: "Write a 400-500 word article from your thread.", asset_content: "", asset_content_type: "article" },
//             { asset_title: "4SA Method", asset_description: "To explore more read more.", asset_content: "", asset_content_type: "article" }
//         ]
//     }]
// };

// function toggleSidebar() {
//     const sb = document.getElementById("mySidebar");
//     const icon = document.getElementById("toggleIcon");
//     sb.classList.toggle("expanded");
//     icon.style.transform = sb.classList.contains("expanded") ? "rotate(180deg)" : "rotate(0deg)";
// }

// function toggleDescription(element) {
//     element.parentElement.classList.toggle('is-open');
// }

// function initPage() {
//     const task = projectData.tasks[0];
//     document.getElementById('project-title').innerText = projectData.title;
//     document.getElementById('task-title').innerText = task.task_title;
//     document.getElementById('task-desc').innerText = task.task_description;

//     // Render Sidebar List [cite: 7, 8]
//     const sidebar = document.getElementById('sidebar-list');
//     let sidebarHtml = `<ul><li style="font-weight:bold; margin-bottom:10px;">${task.task_title}</li>`;
//     task.assets.forEach(a => sidebarHtml += `<li>${a.asset_title}</li>`);
//     sidebarHtml += `</ul>`;
//     sidebar.innerHTML = sidebarHtml;

//     // Render Assets [cite: 7]
//     const container = document.getElementById('assets-container');
//     task.assets.forEach(asset => {
//         const card = document.createElement('div');
//         card.className = 'content-area';
        
//         let content = `<div style="padding:20px;">${asset.asset_description}</div>`;
//         if(asset.asset_content_type === 'video') {
//             content = `<iframe width="100%" height="300" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`;
//         }

//         card.innerHTML = `
//             <div class="asset-header">${asset.asset_title} <i class="fas fa-info-circle"></i></div>
//             <div class="asset-body">${content}</div>
//             <div class="description-section">
//                 <div class="description-header" onclick="toggleDescription(this)">
//                     <i class="fas fa-chevron-down arrow-icon"></i>
//                     <span>Description</span>
//                 </div>
//                 <div class="description-text">${asset.asset_description}</div>
//             </div>
//         `;
//         container.appendChild(card);
//     });
// }

// window.onload = initPage;








// updated jismai vedio nhi show ho rha

// Local variable to avoid CORS and display content immediately 
// const projectData = {
//     title: "Technical Project Management",
//     tasks: [{
//         task_title: "Explore the world of management",
//         task_description: "As a project manager, you play a key role in any organization's success. This task helps you understand those roles. ",
//         assets: [
//             { asset_title: "Technical Project Management", asset_description: "Story of Alignment, Scope of Agility, Scrum Master, Sprint Planning, and more.", asset_content: "https://www.youtube.com/embed/TiMRwbaKcfY", asset_content_type: "video" },
//             { asset_title: "Threadbuild", asset_description: "Watch the video and threadbuild, and check out sub threads. ", asset_content: "", asset_content_type: "thread" },
//             { asset_title: "Structure your Pointers", asset_description: "Write a 400-500 word article from your thread.", asset_content: "", asset_content_type: "article" },
//             { asset_title: "4SA Method", asset_description: "To explore more read more.", asset_content: "", asset_content_type: "article" }
//         ]
//     }]
// };

// function toggleSidebar() {
//     const sb = document.getElementById("mySidebar");
//     const icon = document.getElementById("toggleIcon");
//     sb.classList.toggle("expanded");
//     icon.style.transform = sb.classList.contains("expanded") ? "rotate(180deg)" : "rotate(0deg)";
// }

// function toggleDescription(element) {
//     element.parentElement.classList.toggle('is-open');
// }

// function initPage() {
//     const task = projectData.tasks[0];
//     document.getElementById('project-title').innerText = projectData.title;
//     document.getElementById('task-title').innerText = task.task_title;
//     document.getElementById('task-desc').innerText = task.task_description;

//     const sidebar = document.getElementById('sidebar-list');
//     let sidebarHtml = `<ul><li style="font-weight:bold; padding: 10px 0;">${task.task_title}</li>`;
//     task.assets.forEach(a => sidebarHtml += `<li style="margin-left:20px; font-size:14px; padding:5px 0;">${a.asset_title}</li>`);
//     sidebarHtml += `</ul>`;
//     sidebar.innerHTML = sidebarHtml;

//     const container = document.getElementById('assets-container');
//     task.assets.forEach(asset => {
//         const card = document.createElement('div');
//         card.className = 'content-area';
        
//         let contentHtml = "";

//         // UI Logic based on Asset Type [cite: 6, 8]
//         if(asset.asset_content_type === 'video') {
//             contentHtml = `<iframe width="100%" height="291" src="${asset.asset_content}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
// //         } 
//         else if(asset.asset_title === "Threadbuild") {
//             // Figma-style Threadbuild Component [cite: 3, 6]
//             contentHtml = `
//                 <div class="thread-container" style="padding:15px; background:#fff;">
//                     <div style="background:#FEFFC0; padding:10px; border-radius:5px; font-weight:bold;">Thread A</div>
//                     <div style="display:flex; gap:10px; margin-top:10px;">
//                         <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                             <label style="font-size:12px;">Sub thread 1</label>
//                             <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                         </div>
//                         <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                             <label style="font-size:12px;">Sub Interpretation 1</label>
//                             <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                         </div>
//                     </div>
//                     <button style="margin-top:10px; background:#0029FF; color:white; border:none; padding:8px 15px; border-radius:10px; cursor:pointer;">+ Sub-thread</button>
//                 </div>`;
//         } 
//         else {
//             contentHtml = `<div style="padding:20px; min-height:150px;">${asset.asset_description}</div>`;
//         }

//         card.innerHTML = `
//             <div class="asset-header">${asset.asset_title} <i class="fas fa-info-circle"></i></div>
//             <div class="asset-body">${contentHtml}</div>
//             <div class="description-section">
//                 <div class="description-header" onclick="toggleDescription(this)">
//                     <i class="fas fa-chevron-down arrow-icon"></i>
//                     <span><b>Description:</b></span>
//                 </div>
//                 <div class="description-text">${asset.asset_description}</div>
//             </div>
//         `;
//         container.appendChild(card);
//     });
// }

// window.onload = initPage;























// const projectData = {
//     title: "Technical Project Management",
//     tasks: [{
//         task_title: "Explore the world of management",
//         task_description: "As a project manager, you play a key role in any organization's success. This task helps you understand those roles.",
//         assets: [
//             { asset_title: "Technical Project Management", asset_description: "Story of Alignment, Scope of Agility, Scrum Master, Sprint Planning, and more.", asset_content: "https://www.youtube.com/embed/TiMRwbaKcfY", asset_content_type: "video" },
//             { asset_title: "Threadbuild", asset_description: "Watch the video and threadbuild, and check out sub threads.", asset_content: "", asset_content_type: "thread" },
//             { asset_title: "Structure your Pointers", asset_description: "Write a 400-500 word article from your thread.", asset_content: "", asset_content_type: "article" },
//             { asset_title: "4SA Method", asset_description: "To explore more read more.", asset_content: "", asset_content_type: "article" }
//         ]
//     }]
// };

// function toggleSidebar() {
//     const sb = document.getElementById("mySidebar");
//     sb.classList.toggle("expanded");
//     document.getElementById("toggleIcon").style.transform = sb.classList.contains("expanded") ? "rotate(180deg)" : "rotate(0deg)";
// }

// function toggleDescription(element) {
//     element.parentElement.classList.toggle('is-open');
// }

// function initPage() {
//     const task = projectData.tasks[0];
//     document.getElementById('task-title').innerText = task.task_title;
//     document.getElementById('task-desc').innerText = task.task_description;

//     // Sidebar rendering
//     const sidebar = document.getElementById('sidebar-list');
//     sidebar.innerHTML = `<ul style="list-style:none; padding:0;"><li style="font-weight:bold; margin-bottom:15px; cursor:pointer;">${task.task_title}</li>` + 
//         task.assets.map(a => `<li style="margin: 10px 0 10px 20px; font-size:14px; color:#666;">${a.asset_title}</li>`).join('') + `</ul>`;

//     const container = document.getElementById('assets-container');
//     container.innerHTML = ''; // Clear container before rendering

//     task.assets.forEach(asset => {
//         const card = document.createElement('div');
//         card.className = 'content-area';
        
//         let contentHtml = "";

//         // Asset Type 1: Video 
//         if(asset.asset_content_type === 'video') {
//             contentHtml = `<iframe width="100%" height="291" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`;
//         } 
//         // Asset Type 2: Threadbuild (With Figma extra fields) 
//         else if(asset.asset_title === "Threadbuild") {
//             contentHtml = `
//                 <div style="padding:15px;">
//                     <div style="background:#FEFFC0; padding:10px; font-weight:bold; border:1px solid #ddd;">Thread A</div>
//                     <div style="display:flex; gap:10px; margin-top:10px;">
//                         <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                             <label style="font-size:12px;">Sub thread 1</label>
//                             <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                         </div>
//                         <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                             <label style="font-size:12px;">Sub Interpretation 1</label>
//                             <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                         </div>
//                     </div>
//                     <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
//                         <i class="fas fa-lightbulb"></i> <i class="fas fa-comment-alt"></i>
//                         <select style="font-size:10px; border:none; box-shadow:0 2px 4px rgba(0,0,0,0.1);"><option>Select Categ</option></select>
//                         <select style="font-size:10px; border:none; box-shadow:0 2px 4px rgba(0,0,0,0.1);"><option>Select Process</option></select>
//                     </div>
//                     <button style="margin-top:10px; background:#0029FF; color:white; border:none; padding:8px 15px; border-radius:10px; cursor:pointer;">+ Sub-thread</button>
//                     <div style="margin-top:15px; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                         <label style="font-size:12px;">Summary for Thread A</label>
//                         <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                     </div>
//                 </div>`;
//         }
//         // Asset Type 3: Structure your Pointers (Editor Style) 
//         else if(asset.asset_title === "Structure your Pointers") {
//             contentHtml = `
//                 <div style="padding:15px;">
//                     <label style="font-weight:bold; display:block; margin-bottom:5px;">Title</label>
//                     <input type="text" style="width:100%; height:35px; border:1px solid #ccc; border-radius:5px; box-shadow:0 2px 4px rgba(0,0,0,0.1); margin-bottom:15px;">
//                     <label style="font-weight:bold; display:block; margin-bottom:5px;">Content</label>
//                     <div style="border:1px solid #ccc; border-radius:5px; overflow:hidden;">
//                         <div style="background:#f0f0f0; padding:5px; border-bottom:1px solid #ccc; display:flex; gap:10px; font-size:11px; color:#666;">
//                             <span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Tools</span><span>Table</span><span>Help</span>
//                         </div>
//                         <textarea style="width:100%; height:120px; border:none; padding:10px;"></textarea>
//                     </div>
//                 </div>`;
//         }
//         // Asset Type 4: 4SA Method (Accordion Style) 
//         else if(asset.asset_title === "4SA Method") {
//             contentHtml = `
//                 <div style="padding:15px;">
//                     <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
//                         <i class="fas fa-chevron-up"></i> Introduction
//                     </div>
//                     <p style="font-size:14px; padding:0 10px 10px 10px; color:#333;">The 4SA Method, How to bring a concept into progress?</p>
//                     <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
//                         <i class="fas fa-chevron-up"></i> Thread A
//                     </div>
//                     <p style="font-size:14px; padding:0 10px 10px 10px; color:#333;">How are you going to develop your strategy? Which method are you going to use...</p>
//                     <div style="text-align:right; color:#666; font-size:12px; margin-top:5px; cursor:pointer;">See More</div>
//                 </div>`;
//         }

//         card.innerHTML = `
//             <div class="asset-header">${asset.asset_title} <i class="fas fa-info-circle"></i></div>
//             <div class="asset-body" style="flex-grow:1;">
//                 <div style="padding:10px; font-size:14px; border-bottom:1px solid #eee;"><b>Description:</b> ${asset.asset_description}</div>
//                 ${contentHtml}
//             </div>
//             <div class="description-section">
//                 <div class="description-header" onclick="toggleDescription(this)">
//                     <i class="fas fa-chevron-down arrow-icon"></i>
//                     <span><b>Description Detail</b></span>
//                 </div>
//                 <div class="description-text">${asset.asset_description}</div>
//             </div>`;
//         container.appendChild(card);
//     });
// }

// window.onload = initPage;











/// jismai notice board hai 

const projectData = {
    title: "Technical Project Management",
    tasks: [{
        task_title: "Explore the world of management",
        task_description: "As a project manager, you play a key role in any organization's success. This task helps you understand those roles.",
        assets: [
            { asset_title: "Technical Project Management", asset_description: "Story of Alignment, Scope of Agility, Scrum Master, Sprint Planning, and more.", asset_content: "https://www.youtube.com/embed/TiMRwbaKcfY", asset_content_type: "video" },
            { asset_title: "Threadbuild", asset_description: "Watch the video and threadbuild, and check out sub threads.", asset_content: "", asset_content_type: "thread" },
            { asset_title: "Structure your Pointers", asset_description: "Write a 400-500 word article from your thread.", asset_content: "", asset_content_type: "article" },
            { asset_title: "4SA Method", asset_description: "To explore more read more.", asset_content: "", asset_content_type: "article" }
        ]
    }]
};

function toggleSidebar() {
    const sb = document.getElementById("mySidebar");
    sb.classList.toggle("expanded");
    document.getElementById("toggleIcon").style.transform = sb.classList.contains("expanded") ? "rotate(180deg)" : "rotate(0deg)";
}

function initPage() {
    const task = projectData.tasks[0];
    document.getElementById('task-title').innerText = task.task_title;
    document.getElementById('task-desc').innerText = task.task_description;

    const sidebar = document.getElementById('sidebar-list');
    sidebar.innerHTML = `<ul style="list-style:none; padding:0;"><li style="font-weight:bold; margin-bottom:15px; padding-left:10px;">${task.task_title}</li>` + 
        task.assets.map(a => `<li style="margin: 10px 0 10px 30px; font-size:14px; color:#333;">${a.asset_title}</li>`).join('') + `</ul>`;

    const container = document.getElementById('assets-container');
    container.innerHTML = ''; 

    task.assets.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'content-area';
        
        let contentHtml = "";

        if(asset.asset_content_type === 'video' || asset.asset_title === "Technical Project Management") {
    // Figma waali image as a thumbnail aur click event
    contentHtml = `
        <div class="video-container" style="cursor:pointer; position:relative;" onclick="window.open('https://www.youtube.com/watch?v=TiMRwbaKcfY', '_blank')">
            <img src="vedioImg.png" alt="Video Thumbnail" style="width:100%; height:291px; object-fit:cover;">
        </div>`;
} 
        else if(asset.asset_title === "Threadbuild") {
            contentHtml = `
                <div style="padding:15px;">
                    <div style="background:#FEFFC0; padding:10px; font-weight:bold; border:1px solid #ddd; display:flex; align-items:center;"><i class="fas fa-chevron-up" style="margin-right:10px;"></i> Thread A</div>
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
                            <label style="font-size:12px;">Sub thread 1</label>
                            <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
                        </div>
                        <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
                            <label style="font-size:12px;">Sub Interpretation 1</label>
                            <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
                        <i class="fas fa-lightbulb"></i> <i class="fas fa-comment-alt"></i> <i class="fas fa-question"></i> <i class="fas fa-leaf"></i>
                        <select style="font-size:10px; border:1px solid #eee; border-radius:5px;"><option>Select Categ</option></select>
                        <select style="font-size:10px; border:1px solid #eee; border-radius:5px;"><option>Select Process</option></select>
                    </div>
                    <button style="margin-top:10px; background:#0029FF; color:white; border:none; padding:8px 15px; border-radius:10px; cursor:pointer;">+ Sub-thread</button>
                    <div style="margin-top:15px; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
                        <label style="font-size:12px;">Summary for Thread A</label>
                        <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
                    </div>
                </div>`;
        }
        else if(asset.asset_title === "Structure your Pointers") {
            contentHtml = `
                <div style="padding:15px;">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Title</label>
                    <input type="text" style="width:94%; height:35px; margin-bottom:15px;">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Content</label>
                    <div style="border:1px solid #ccc; border-radius:5px; overflow:hidden;">
                        <div style="background:#f0f0f0; padding:10px; border-bottom:1px solid #ccc; display:flex; gap:10px; font-size:11px; color:#666;">
                            <span>File Edit View Insert Format Tools Table Help</span>
                        </div>
                        <textarea style="width:94%; height:120px; border:none;"></textarea>
                    </div>
                </div>`;
        }
        else if(asset.asset_title === "4SA Method") {
            contentHtml = `
                <div style="padding:15px;">
                    <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
                        <i class="fas fa-chevron-up"></i> Introduction
                    </div>
                    <p style="font-size:14px; padding:0 10px 15px 10px;">The 4SA Method, How to bring a concept into progress?</p>
                    <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
                        <i class="fas fa-chevron-up"></i> Thread A
                    </div>
                    <p style="font-size:14px; padding:0 10px 10px 10px;">How are you going to develop your strategy? Which method are you going to use...</p>
                </div>`;
        }

        card.innerHTML = `
            <div class="asset-header">${asset.asset_title} <i class="fas fa-info-circle"></i></div>
            <div class="asset-body">
                <div style="padding:10px; font-size:14px; border-bottom:1px solid #eee; background:#fff;"><b>Description:</b> ${asset.asset_description}</div>
                ${contentHtml}
            </div>`;
        container.appendChild(card);
    });
}

window.onload = initPage;