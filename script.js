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

// function initPage() {
//     const task = projectData.tasks[0];
//     document.getElementById('task-title').innerText = task.task_title;
//     document.getElementById('task-desc').innerText = task.task_description;

//     const sidebar = document.getElementById('sidebar-list');
//     sidebar.innerHTML = `<ul style="list-style:none; padding:0;"><li style="font-weight:bold; margin-bottom:15px; padding-left:10px;">${task.task_title}</li>` + 
//         task.assets.map(a => `<li style="margin: 10px 0 10px 30px; font-size:14px; color:#333;">${a.asset_title}</li>`).join('') + `</ul>`;

//     const container = document.getElementById('assets-container');
//     container.innerHTML = ''; 

//     task.assets.forEach(asset => {
//         const card = document.createElement('div');
//         card.className = 'content-area';
        
//         let contentHtml = "";

//         if(asset.asset_content_type === 'video' || asset.asset_title === "Technical Project Management") {
//     // Figma waali image as a thumbnail aur click event
//     contentHtml = `
//         <div class="video-container" style="cursor:pointer; position:relative;" onclick="window.open('https://www.youtube.com/watch?v=TiMRwbaKcfY', '_blank')">
//             <img src="vedioImg.png" alt="Video Thumbnail" style="width:100%; height:291px; object-fit:cover;">
//         </div>`;
// } 
//         else if(asset.asset_title === "Threadbuild") {
//             contentHtml = `
//                 <div style="padding:15px;">
//                     <div style="background:#FEFFC0; padding:10px; font-weight:bold; border:1px solid #ddd; display:flex; align-items:center;"><i class="fas fa-chevron-up" style="margin-right:10px;"></i> Thread A</div>
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
//                         <i class="fas fa-lightbulb"></i> <i class="fas fa-comment-alt"></i> <i class="fas fa-question"></i> <i class="fas fa-leaf"></i>
//                         <select style="font-size:10px; border:1px solid #eee; border-radius:5px;"><option>Select Categ</option></select>
//                         <select style="font-size:10px; border:1px solid #eee; border-radius:5px;"><option>Select Process</option></select>
//                     </div>
//                     <button style="margin-top:10px; background:#0029FF; color:white; border:none; padding:8px 15px; border-radius:10px; cursor:pointer;">+ Sub-thread</button>
//                     <div style="margin-top:15px; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                         <label style="font-size:12px;">Summary for Thread A</label>
//                         <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                     </div>
//                 </div>`;
//         }
//         else if(asset.asset_title === "Structure your Pointers") {
//             contentHtml = `
//                 <div style="padding:15px;">
//                     <label style="font-weight:bold; display:block; margin-bottom:5px;">Title</label>
//                     <input type="text" style="width:94%; height:35px; margin-bottom:15px;">
//                     <label style="font-weight:bold; display:block; margin-bottom:5px;">Content</label>
//                     <div style="border:1px solid #ccc; border-radius:5px; overflow:hidden;">
//                         <div style="background:#f0f0f0; padding:10px; border-bottom:1px solid #ccc; display:flex; gap:10px; font-size:11px; color:#666;">
//                             <span>File Edit View Insert Format Tools Table Help</span>
//                         </div>
//                         <textarea style="width:94%; height:120px; border:none;"></textarea>
//                     </div>
//                 </div>`;
//         }
//         else if(asset.asset_title === "4SA Method") {
//             contentHtml = `
//                 <div style="padding:15px;">
//                     <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
//                         <i class="fas fa-chevron-up"></i> Introduction
//                     </div>
//                     <p style="font-size:14px; padding:0 10px 15px 10px;">The 4SA Method, How to bring a concept into progress?</p>
//                     <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
//                         <i class="fas fa-chevron-up"></i> Thread A
//                     </div>
//                     <p style="font-size:14px; padding:0 10px 10px 10px;">How are you going to develop your strategy? Which method are you going to use...</p>
//                 </div>`;
//         }

//         card.innerHTML = `
//             <div class="asset-header">${asset.asset_title} <i class="fas fa-info-circle"></i></div>
//             <div class="asset-body">
//                 <div style="padding:10px; font-size:14px; border-bottom:1px solid #eee; background:#fff;"><b>Description:</b> ${asset.asset_description}</div>
//                 ${contentHtml}
//             </div>`;
//         container.appendChild(card);
//     });
// }



// window.onload = initPage;


// function toggleNoticeBoard() {
//     const noticeBoard = document.getElementById("noticeBoard");
//     noticeBoard.classList.toggle("expanded");
// }



































// // Sidebar toggle function
// function toggleSidebar() {
//     const sb = document.getElementById("mySidebar");
//     sb.classList.toggle("expanded");
//     const icon = document.getElementById("toggleIcon");
//     if (icon) {
//         icon.style.transform = sb.classList.contains("expanded") ? "rotate(180deg)" : "rotate(0deg)";
//     }
// }

// // Notice Board toggle function
// function toggleNoticeBoard() {
//     const noticeBoard = document.getElementById("noticeBoard");
//     noticeBoard.classList.toggle("expanded");
// }


// const localProjectData = {
//     title: "Technical Project Management",
//     tasks: [{
//         task_title: "Explore the world of management",
//         task_description: "As a project manager, you play a key role in any organization's success...",
//         assets: [
//             { asset_title: "Technical Project Management", asset_description: "Story of Alignment...", asset_content: "https://www.youtube.com/embed/TiMRwbaKcfY", asset_content_type: "video" },
//             { asset_title: "Threadbuild", asset_description: "Watch the video and threadbuild...", asset_content: "", asset_content_type: "thread" },
//             { asset_title: "Structure your Pointers", asset_description: "Write a 400-500 word article...", asset_content: "", asset_content_type: "article" },
//             { asset_title: "4SA Method", asset_description: "To explore more read more.", asset_content: "", asset_content_type: "article" }
//         ]
//     }]
// };

// // Main function to fetch data and initialize page
// async function initPage() {
//     // const apiUrl = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json';

//     const apiUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
        
//         console.log("Data fetched successfully:", data); // Check karne ke liye

//         // JSON structure ke according pehla task uthate hain
//         const task = data.tasks[0];
        
//         // Header titles update karna
//         document.getElementById('project-title').innerText = data.title;
//         document.getElementById('task-title').innerText = task.task_title;
//         document.getElementById('task-desc').innerText = task.task_description;


//         // 1. Journey Board (Sidebar) Content
//         const sidebar = document.getElementById('sidebar-list');
//         sidebar.innerHTML = `
//             <ul style="list-style:none; padding:0;">
//                 <li style="font-weight:bold; margin-bottom:15px; padding-left:10px;">${task.task_title}</li>
//                 ${task.assets.map(a => `<li style="margin: 10px 0 10px 30px; font-size:14px; color:#333;">${a.asset_title}</li>`).join('')}
//             </ul>`;

//         // 2. Assets Container Content
//         const container = document.getElementById('assets-container');
//         container.innerHTML = ''; 

//         task.assets.forEach(asset => {
//             const card = document.createElement('div');
//             card.className = 'content-area';
            
//             let contentHtml = "";

//             // Logic for different asset types based on JSON data
//             if (asset.asset_content_type === 'video') {
//                 contentHtml = `
//                     <div class="video-container" style="cursor:pointer; position:relative;" onclick="window.open('${asset.asset_content}', '_blank')">
//                         <img src="vedioImg.png" alt="Video Thumbnail" style="width:100%; height:291px; object-fit:cover;">
//                         <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">
//                             <svg width="68" height="48" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"/><path d="M27 33V15l18 9-18 9z" fill="#fff"/></svg>
//                         </div>
//                     </div>`;
//             } 
//             else if (asset.asset_title === "Threadbuild") {
//                 contentHtml = `
//                     <div style="padding:15px;">
//                         <div style="background:#FEFFC0; padding:10px; font-weight:bold; border:1px solid #ddd; display:flex; align-items:center;"><i class="fas fa-chevron-up" style="margin-right:10px;"></i> Thread A</div>
//                         <div style="display:flex; gap:10px; margin-top:10px;">
//                             <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                                 <label style="font-size:12px;">Sub thread 1</label>
//                                 <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                             </div>
//                             <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                                 <label style="font-size:12px;">Sub Interpretation 1</label>
//                                 <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                             </div>
//                         </div>
//                         <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
//                             <i class="fas fa-lightbulb"></i> <i class="fas fa-comment-alt"></i> <i class="fas fa-question"></i> <i class="fas fa-leaf"></i>
//                             <select style="font-size:10px; border:1px solid #eee; border-radius:5px;"><option>Select Categ</option></select>
//                             <select style="font-size:10px; border:1px solid #eee; border-radius:5px;"><option>Select Process</option></select>
//                         </div>
//                         <button style="margin-top:10px; background:#0029FF; color:white; border:none; padding:8px 15px; border-radius:10px; cursor:pointer;">+ Sub-thread</button>
//                         <div style="margin-top:15px; background:#F5F5F5; padding:10px; border-radius:10px; border:1px solid #ccc;">
//                             <label style="font-size:12px;">Summary for Thread A</label>
//                             <textarea placeholder="Enter Text here" style="width:100%; border:none; background:transparent; resize:none;"></textarea>
//                         </div>
//                     </div>`;
//             }
//             else if (asset.asset_title === "Structure your Pointers") {
//                 contentHtml = `
//                     <div style="padding:15px;">
//                         <label style="font-weight:bold; display:block; margin-bottom:5px;">Title</label>
//                         <input type="text" style="width:94%; height:35px; margin-bottom:15px;">
//                         <label style="font-weight:bold; display:block; margin-bottom:5px;">Content</label>
//                         <div style="border:1px solid #ccc; border-radius:5px; overflow:hidden;">
//                             <div style="background:#f0f0f0; padding:10px; border-bottom:1px solid #ccc; display:flex; gap:10px; font-size:11px; color:#666;">
//                                 <span>File Edit View Insert Format Tools Table Help</span>
//                             </div>
//                             <textarea style="width:94%; height:120px; border:none;"></textarea>
//                         </div>
//                     </div>`;
//             }
//             else if (asset.asset_title === "4SA Method") {
//                 contentHtml = `
//                     <div style="padding:15px;">
//                         <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
//                             <i class="fas fa-chevron-up"></i> Introduction
//                         </div>
//                         <p style="font-size:14px; padding:0 10px 15px 10px;">The 4SA Method, How to bring a concept into progress?</p>
//                         <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:bold;">
//                             <i class="fas fa-chevron-up"></i> Thread A
//                         </div>
//                         <p style="font-size:14px; padding:0 10px 10px 10px;">How are you going to develop your strategy? Which method are you going to use...</p>
//                     </div>`;
//             }

//             card.innerHTML = `
//                 <div class="asset-header">${asset.asset_title} <i class="fas fa-info-circle"></i></div>
//                 <div class="asset-body">
//                     <div style="padding:10px; font-size:14px; border-bottom:1px solid #eee; background:#fff;"><b>Description:</b> ${asset.asset_description}</div>
//                     ${contentHtml}
//                 </div>`;
//             container.appendChild(card);
//         });

//     } catch (error) {
//         console.error("Error fetching project data:", error);
//         document.getElementById('assets-container').innerHTML = "<p style='padding:20px;'>Failed to load project data. Please check your connection.</p>";
//     }
// }

// // Initialize on window load
// window.onload = initPage;
















// online fetch url code 

/**
 * 1. LOCAL FALLBACK DATA
 * Agar API (CORS issue ki wajah se) fail ho jaye, toh ye data use hoga.
 */
const localProjectData = {
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

/**
 * 2. SIDEBAR TOGGLE (Journey Board)
 */
function toggleSidebar() {
    const sb = document.getElementById("mySidebar");
    const icon = document.getElementById("toggleIcon");
    sb.classList.toggle("expanded");
    
    if (sb.classList.contains("expanded")) {
        icon.style.transform = "rotate(180deg)";
    } else {
        icon.style.transform = "rotate(0deg)";
    }
}

/**
 * 3. NOTICE BOARD TOGGLE
 */
function toggleNoticeBoard() {
    const noticeBoard = document.getElementById("noticeBoard");
    noticeBoard.classList.toggle("expanded");
}

/**
 * 4. RENDER DATA FUNCTION
 * Ye function HTML mein cards aur content generate karta hai.
 */
function renderData(data) {
    const task = data.tasks[0];
    
    // Header Titles Update
    document.getElementById('project-title').innerText = data.title;
    document.getElementById('task-title').innerText = task.task_title;
    document.getElementById('task-desc').innerText = task.task_description;

    // Sidebar Assets List
    const sidebar = document.getElementById('sidebar-list');
    sidebar.innerHTML = `
        <ul style="list-style:none; padding:0;">
            <li style="font-weight:bold; margin-bottom:15px; padding-left:10px;">${task.task_title}</li>
            ${task.assets.map(a => `<li style="margin: 10px 0 10px 30px; font-size:14px; color:#333;">${a.asset_title}</li>`).join('')}
        </ul>`;

    // Assets Cards Container
    const container = document.getElementById('assets-container');
    container.innerHTML = ''; 

    task.assets.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'content-area';
        
        let contentHtml = "";

        // Asset Type Logic
        if (asset.asset_content_type === 'video' || asset.asset_title === "Technical Project Management") {
            contentHtml = `
                <div class="video-container" style="cursor:pointer; position:relative;" onclick="window.open('https://www.youtube.com/watch?v=TiMRwbaKcfY', '_blank')">
                    <img src="vedioImg.png" alt="Video Thumbnail" style="width:100%; height:291px; object-fit:cover;">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); pointer-events:none;">
                        <svg width="68" height="48" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"/><path d="M27 33V15l18 9-18 9z" fill="#fff"/></svg>
                    </div>
                </div>`;
        } 
        else if (asset.asset_title === "Threadbuild") {
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
        else if (asset.asset_title === "Structure your Pointers") {
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
        else if (asset.asset_title === "4SA Method") {
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

/**
 * 5. INIT FUNCTION (With Fetch and Fallback)
 */
async function initPage() {
    const originalUrl = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json';
    const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(originalUrl);

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        console.log("Data loaded from API");
        renderData(data);
    } catch (error) {
        console.warn("CORS/API Error. Using localProjectData instead.", error);
        renderData(localProjectData);
    }
}

// Window load trigger
window.onload = initPage;