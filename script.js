const localProjectData = {
  title: "Technical Project Management",
  tasks: [
    {
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want  to manage each  and every step of your life?",
      assets: [
        {
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          asset_content: "https://www.youtube.com/embed/TiMRwbaKcfY",
          asset_content_type: "video",
        },
        {
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and threadbuild, and jot out key threads while watching the video",
          asset_content: "",
          asset_content_type: "thread",
        },
        {
          asset_title: "Structure your Pointers",
          asset_description:
            "Write a 300-400 word article from your thread. Publish your understanding and showcase your understanding to the entire world",
          asset_content: "",
          asset_content_type: "article",
        },
        {
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content: "",
          asset_content_type: "article",
        },
      ],
    },
  ],
};

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

function toggleNoticeBoard() {
  const noticeBoard = document.getElementById("noticeBoard");
  noticeBoard.classList.toggle("expanded");
}

function renderData(data) {
  const task = data.tasks[0];

  document.getElementById("project-title").innerText = data.title;
  document.getElementById("task-title").innerText = task.task_title;
  document.getElementById("task-desc").innerText = task.task_description;

  const sidebar = document.getElementById("sidebar-list");

  sidebar.innerHTML = `
    <ul style="list-style-type: disc; padding-left: 25px; margin-top: 15px; line-height: 2.2;">
        <li style="font-weight: 600; font-size: 16px; color: #000; margin-bottom: 5px;">
            ${task.task_title}
        </li>
        ${task.assets
          .map(
            (asset) => `
            <li style="font-size: 16px; color: rgba(0, 0, 0, 1); font-weight: 400; margin-left: 10px; letter-spacing: 0.2">
                ${asset.asset_title}
            </li>
        `
          )
          .join("")}
    </ul>`;

  const container = document.getElementById("assets-container");
  container.innerHTML = "";

  task.assets.forEach((asset) => {
    const card = document.createElement("div");
    card.className = "content-area";

    let contentHtml = "";

    if (
      asset.asset_content_type === "video" ||
      asset.asset_title === "Technical Project Management"
    ) {
      contentHtml = `
                <div class="video-container" style="cursor:pointer; position:relative;" onclick="window.open('https://www.youtube.com/watch?v=TiMRwbaKcfY', '_blank')">
                    <img src="videoImg.png" alt="Video Thumbnail" style="width:100%; height:291px; object-fit:cover;">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); pointer-events:none;">
                        <svg width="68" height="48" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"/><path d="M27 33V15l18 9-18 9z" fill="#fff"/></svg>
                    </div>
                </div>`;
    } else if (asset.asset_title === "Threadbuild") {
      contentHtml = `
                <div style="padding:15px;">
                    <div style="background:rgba(254, 255, 192, 0.2); padding:10px; font-size:20px; font-weight:700; letter-spacing: 1; border:0.1px solid rgba(0, 0, 0, 0.1); display:flex; align-items:center; width:110%; margin-left:-16px; padding-left:15px; margin-top:-15px;"><i class="fas fa-chevron-up" style="margin-right:73px; margin-top:3px;"></i> Thread A</div>
                    <div style="display:flex; gap:10px; margin-top:30px; justify-content:space-evenly;">
                    <div>
                        <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px 10px 0 0; border:1px solid #ccc; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
                            <label style="font-size:12px; font-weight:400; font-family: "Open Sans", sans-serif;">Sub thread 1</label>                       
                        </div>
                         <textarea placeholder="Enter Text here" style="width:100%;border:1px solid #ccc; background: white; width:199px; height:70px; resize:none; margin-top:-5px;box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);"></textarea>
                        </div>


                        <div>
                        <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px 10px 0 0; border:1px solid #ccc; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
                            <label style="font-size:12px; font-weight:400; font-family: "Open Sans", sans-serif;">Sub Interpretation 1</label>
                            
                        </div>

                        <textarea placeholder="Enter Text here" style="width:100%;border:1px solid #ccc; background: white; width:199px; height:70px; resize:none; margin-top:-5px;box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);"></textarea>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:flex-end; gap:20px; margin-top:24px; margin-right:25px;">
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z" fill="#323232"/>
</svg>


<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9895 2C20.9895 0.9 20.055 0 18.9 0H2.1C0.945 0 0 0.9 0 2V14C0 15.1 0.945 16 2.1 16H16.8L21 20L20.9895 2ZM16.8 12H4.2V10H16.8V12ZM16.8 9H4.2V7H16.8V9ZM16.8 6H4.2V4H16.8V6Z" fill="#323232"/>
</svg>


<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6667 0H2.33333C1.03833 0 0 0.857143 0 1.90476V15.2381C0 16.2857 1.03833 17.1429 2.33333 17.1429H7L10.5 20L14 17.1429H18.6667C19.95 17.1429 21 16.2857 21 15.2381V1.90476C21 0.857143 19.95 0 18.6667 0ZM11.6667 15.2381H9.33333V13.3333H11.6667V15.2381ZM14.0817 7.85714L13.0316 8.73338C12.1916 9.42861 11.6667 10 11.6667 11.4286H9.33333V10.9524C9.33333 9.90476 9.85824 8.95242 10.6982 8.25718L12.1449 7.05718C12.5766 6.71432 12.8333 6.2381 12.8333 5.71429C12.8333 4.66667 11.7833 3.80952 10.5 3.80952C9.21667 3.80952 8.16667 4.66667 8.16667 5.71429H5.83333C5.83333 3.60952 7.92167 1.90476 10.5 1.90476C13.0783 1.90476 15.1667 3.60952 15.1667 5.71429C15.1667 6.55238 14.7467 7.31429 14.0817 7.85714Z" fill="#323232"/>
</svg>

                       <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6212 6.867C12.4528 4.356 11.3954 1.908 9.41199 0C7.40985 1.926 6.30559 4.374 6.0904 6.867C7.28795 7.479 8.39215 8.27101 9.3558 9.23401C10.3194 8.28001 11.4236 7.488 12.6212 6.867ZM6.53992 9.25203C6.40894 9.16203 6.25907 9.08099 6.11873 8.99099C6.25907 9.08999 6.40894 9.16203 6.53992 9.25203ZM12.5463 9.02703C12.4246 9.10803 12.2933 9.17103 12.1717 9.26103C12.2933 9.17103 12.4246 9.10803 12.5463 9.02703ZM9.3558 12.105C7.3443 9.15296 3.91072 7.2 0 7.2C0 11.988 3.14335 16.038 7.5125 17.541C8.10192 17.748 8.7196 17.901 9.3558 18C9.99199 17.892 10.6003 17.739 11.1991 17.541C15.5682 16.038 18.7116 11.988 18.7116 7.2C14.8009 7.2 11.3673 9.15296 9.3558 12.105Z" fill="#323232"/>
</svg>
 
                        <select style="font-size:11px; border:1px solid #eee; border-radius:5px; width:91px; height:32px; box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);font-weight:600; margin-top:-6px;"><option>Select Categ</option></select>

                        <select style="font-size:10.7px; border:1px solid #eee; border-radius:5px; width:91px; height:32px; box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);font-weight:600; margin-top:-6px;"><option>Select Process</option></select>
                    </div>
                    <button style="margin-top:30px; margin-left:24px; background:rgba(0, 41, 255, 1); color:white; border:none; border-radius:10px; cursor:pointer; width:100px; height:36px; font-size:12px; font-weight:500; text-align:center; justify-content:center;">
                    
                    <svg width="20" height="9" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.74609 4.15039V5.84961H0V4.15039H9.74609ZM5.78125 0V10.3516H3.97461V0H5.78125Z" fill="white"/>
</svg>

                    
                    <span >Sub-thread </span></button>

                    <div style="margin-top:20px; margin-left:20px;">
                    <div style="flex:1; background:#F5F5F5; padding:10px; border-radius:10px 10px 0 0; border:1px solid #ccc; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); width:409px;">
                        <label style="font-size:12px; font-weight:400; font-family: "Open Sans", sans-serif;">Summary for Thread A</label>
                       
                    </div>
                     <textarea placeholder="Enter Text here" style="width:100%;border:1px solid #ccc; background: white; width:430px; height:70px; resize:none; margin-top:-5px;box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);"></textarea>
                    </div>
                </div>`;
    } else if (asset.asset_title === "Structure your Pointers") {
      contentHtml = `
                <div style="padding:15px;>
                    <label style="font-weight:600; font-size:16px; display:block; margin-bottom:5px;">Title</label>
                    <input type="text" style="width:94%; height:35px; margin-bottom:15px; background:rgba(252, 251, 251, 1); border:none; box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.13);">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Content</label>


                    <div style="border:1px solid #ccc; border-radius:5px; overflow:hidden; box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.13);">
                        <div style="background:rgba(252, 251, 251, 1); border:none; display:flex; box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.13); gap:10px; color:#666; padding:20px; padding-bottom:40px;">
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">File</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">Edit</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">View</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">Insert</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">Format</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">Tools</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">Table</li>
                            <li style="font-size:13px; font-weight:400; gap:20px; text-decoration:none; list-style:none;">Help</li>
                         </div>

                                           
                                           <div style="margin-top:-30px; margin-left:17px; margin-bottom:10px; background-color:rgba(252, 251, 251, 1); border:none; ">
                                             <svg  width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.79978 3.1501L3.15002 7.13561M3.15002 7.13561L7.79978 11.1211M3.15002 7.13561L13.85 7.13561C16.0592 7.13561 17.85 8.92647 17.85 11.1356V14.8501" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9431 3.32505L16.15 7.53197M16.15 7.53197L11.9431 11.7389M16.15 7.53197H6.85003C4.64089 7.53197 2.85003 9.32284 2.85003 11.532V15.675" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<svg style="margin-left:20px;" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5961 1.8999H17.0995M17.0995 1.8999V7.40335M17.0995 1.8999L11.5961 7.40335M7.40397 17.0999H1.90052M1.90052 17.0999V11.5964M1.90052 17.0999L7.60052 11.3999M17.1 11.596V17.0994M17.1 17.0994H11.5966M17.1 17.0994L11.5966 11.596M1.90002 7.40385L1.90002 1.9004M1.90002 1.9004L7.40348 1.9004M1.90002 1.9004L7.60002 7.6004" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




<svg style="margin-bottom:8px; margin-left:20px;" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="#616161"/>
</svg>

<svg style="margin-bottom:8px;" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="#616161"/>
</svg>

<svg style="margin-bottom:8px;" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="#616161"/>
</svg>

                                            </div>
                       


                        <textarea style=" box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.13); width:100%; height:120px; border:none; resize:none;"></textarea>
                    </div>
                </div>`;
    } else if (asset.asset_title === "4SA Method") {
      contentHtml = `
                <div style="padding:15px;">
                    <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:600; font-size:16px;">
                        <i class="fas fa-chevron-up" style="margin-right:10px"></i> Introduction

                    </div>
                    <p style="font-size:14px; padding:0 10px 15px 10px;">The 4SA Method, How to bring a concept into progress?</p>

                     <p style="margin-left:390px; font-size:14px; color:rgba(96, 97, 97, 1); font-weight:600; margin-top:40px; margin-bottom:40px;">See more</p>
                    <div style="background:#F2F2F2; padding:10px; border:1px solid #ddd; margin-bottom:10px; font-weight:600; font-size:16px;">
                        <i class="fas fa-chevron-up" style="margin-right:10px"></i> Thread A
                    </div>
                    <p style="font-size:14px; padding:0 10px 10px 10px;">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>

                    <p style="margin-left:390px; font-size:14px; color:rgba(96, 97, 97, 1); font-weight:600; margin-top:20px; margin-bottom:40px;">See more</p>

                    <input type="text" placeholder="Example 1" style="width:95%; margin-left:30px;"/>
                </div>`;
    }

    card.innerHTML = `
            <div class="asset-header">${asset.asset_title} <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" fill="white"/>
<path d="M9.752 16L9.656 15.376C10.1787 15.2693 10.4933 15.1627 10.6 15.056C10.7173 14.9387 10.776 14.7413 10.776 14.464V9.872C10.776 9.648 10.6907 9.488 10.52 9.392C10.3493 9.28533 10.0293 9.184 9.56 9.088L9.656 8.576C10.7973 8.42667 11.592 8.352 12.04 8.352L12.216 8.512V14.848C12.216 14.976 12.2427 15.0613 12.296 15.104C12.36 15.136 12.44 15.1627 12.536 15.184L13.32 15.376L13.256 16H9.752ZM12.232 5.504C12.232 5.77067 12.1467 5.99467 11.976 6.176C11.816 6.35733 11.5973 6.448 11.32 6.448C11.0533 6.448 10.8293 6.368 10.648 6.208C10.4773 6.048 10.392 5.82933 10.392 5.552C10.392 5.264 10.472 5.03467 10.632 4.864C10.8027 4.69333 11.032 4.608 11.32 4.608C11.928 4.608 12.232 4.90667 12.232 5.504Z" fill="black"/>
</svg>
</div>
            <div class="asset-body">
                <div style="padding-left: 15px; padding-top:34; padding-bottom:34; font-size:16px; font-weight:400; background:#fff;"><span style="font-weight:600;">Description:</span> ${asset.asset_description}</div>
                ${contentHtml}
            </div>`;
    container.appendChild(card);
  });
}

/**
 * 5. INIT FUNCTION (With Fetch and Fallback)
 */
async function initPage() {
  const originalUrl =
    "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";
  const proxyUrl =
    "https://api.allorigins.win/raw?url=" + encodeURIComponent(originalUrl);

  try {
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error("API request failed");
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
