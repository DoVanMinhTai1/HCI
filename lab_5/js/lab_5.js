


document.addEventListener("DOMContentLoaded", function() {
    function showContent(tab) {
        const contentDiv = document.getElementById("content");
        document.querySelectorAll('.nav-tabs a').forEach(tabLink => {
            tabLink.classList.remove('active');
            tabLink.classList.remove('active-tab'); // if you still need this for styling
        });
        const activeTab = document.getElementById(tab);
        activeTab.classList.add('active');
    
    
        switch (tab) {
            case "certifications":
                contentDiv.innerHTML = `  
                  <div>
                    <div class="my-badges">
                        <h4>My badges</h4>
                        <div class="phead">
    
                            <p>You have earned and uploaded <span>0 badges</span> <i class="fa-solid fa-circle-info"
                                    style="padding-top: 4px; "></i></p>
                            <button>Import new badge</button>
                        </div>
                        <p class="p-item">Currently, there are no badges uploaded to your profile. Begin your
                            journey
                            towards your certification goals or upload your third-party badges to your profile and impress
                            your
                            manager and peers with your accomplishments. Start preparing for your next certificate today!
                        </p>
                    </div>
                    <hr>
                    <div class="cert-prep">
                        <h2>Certification preparation</h2>
                        <div class="detail-certifi">
                            <p>You are preparing for <span>4 certifications</span> <i class="fa-solid fa-circle-info"
                                    style="padding-top: 4px; "></i></p>
                            <button>Explore certification preparation</button>
                        </div>
                        <div class="container-fluidvv">
                            <div class="grid">
                                <div class="g-col-6 ">
                                    <div class="img-1">
                                        <img src="../lab_5/image/item1.png" alt="">
                                    </div>
                                    <div class="text-img">
                                        <div class="svg1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path
                                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                        </div>
                                        <div class="text">
                                            <p class="text-specil"> Oracle Certified Associate, Java SE 8 Programmer by
                                                Oracle</p>
    
                                            <p class="text-a">Oracle</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="g-col-6 ">
                                    <div class="img-1">
                                        <img src="../lab_5/image/item2.png" alt="">
                                    </div>
                                    <div class="text-img">
                                        <div class="svg1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path
                                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                        </div>
                                        <div class="text">
                                            <p class="text-specil"> LSTQB@ Certifled Tester Foundation Level (CTFL)</p>
    
                                            <p class="text-a">Brightest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                  `;
                break;
            case "archived":
                contentDiv.innerHTML = `
                
                
            <div class="card " style="width: 19rem; ">
    <img src="../lab_5/image/image.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" style="font-weight: bolder; padding-top:10px;">FPT_Corporate Social Responsibility Training 2024</h5>
      <p >FSOFT Content Development</p>
      <hr style="border-top: 5px solid #5E2B9C; width: 100%;">
      <div style="display: flex; justify-content: space-between;">
        <p>100% complete</p>
        <div style="padding-left: 30px;">
            <i class="fa-solid fa-star" style="color: gold;"></i>
    <i class="fa-solid fa-star" style="color: gold;"></i>
    <i class="fa-solid fa-star" style="color: gold;"></i>
    <i class="fa-regular fa-star-half-stroke" style="color: gold;"></i>
    <i class="fa-regular fa-star" style="color: gold;"></i>
    
        </div>
    </div>
    <p style="text-align: right;">Your rating</p>
    </div>
    </div>
              
                
                
                `;
                break;
            case "learning-tools":
                contentDiv.innerHTML = ` 
        <div class="cert-prep">
            <h2 style="font-weight:900;">Learning tools</h2>
            <div class="detail-certifi" style="width:100%; " >
                <p class="text-abc" >Explore a diverse range of courses and take advantage of these versatile toolds to gain knowledge, skills, and confidence at your own pace.</p>
            </div>
            <div class="container-fluidvv">
                <div class="grid">
                    <div class="g-col-6 ">
                        <div class="img-1" >
                            <img src="../lab_5/image/imagelearn1.png" alt="">
                        </div>
                        <div class="text-img">
                           
                            <div class="text">
                                 <p class="text-specil" style="padding-top:10px;"> Learning reminders</p>
                                <p style="color: #888;" >Set time aside to learn and get reminders using your scheduler</p>
                                <p class="text-learn" style="white-space: nowrap;"> You currently have no ongoing reminders.</p>
                                <div>
                                <a href="" style=" text-decoration: none;" ><p style="padding-bottom:10px; font-size:large;  text-decoration: underline; color: #a535f0;   ">See more</p></a>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                     <div class="g-col-6 ">
                        <div class="img-1">
                            <img src="../lab_5/image/imagelearn2.png" alt="">
                        </div>
                        <div class="text-img">
                           
                            <div class="text">
    
                                <div style="display:flex; gap: 10px; height:100%; ">
                              <div>  <p class="text-specil" style="padding-top:10px;"> Reflections</p></div> 
                                    <div style="background-color: ;"> <p class="text-specil1"> Beta</p></div>
                                 </div>
                                 <p style="color: #888;">Take time to reflect to strengthen your learning.</p>
                                <p class="text-learn"> You have currently no recorded reflections on your learning journey.</p>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
                break;
            default:
                contentDiv.innerHTML = "<h2>All Courses</h2><p>View all available courses.</p>";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    showContent('certifications');
});