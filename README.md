# 💫 About Me:
Dedicated data enthusiast with a deep passion for analytics, armed with exceptional skills in Python, SQL, R, and a keen aptitude for data analysis. My commitment to unlocking the power of data to inform strategic decisions and tackle intricate challenges sets me apart. I am eager to channel my analytical prowess into high-impact projects, driving success through data-driven precision

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --background: #5f5f5f;
    --menu-background: #2f2f2f;
    --white: #fff;
    --deepSkyBlue: #00bfff;
    --close: #FF0000;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, Helvetica;
    font-weight: 600;
}

body {
    /*min-height: 100vh;*/
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--background);
}

.display {
    background: var(--background);
    height: 95%;
    width: 50%;
}

.navigation {
    position: fixed;
    top: 40px;
    left: 384px;
    bottom: 40px;
    width: 70px;
    border-radius: 10px;
    box-sizing: initial;
    border-left: 5px solid var(--menu-background);
    background: var(--menu-background);
    transition: width .5s;
    overflow-x: hidden;
}

.navigation.active {
    width: 300px;
}

.navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 120px;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

/**/
.navigation ul li.active {
    background: var(--background);
}
/**/

.navigation ul li b:nth-child(1) {
    position: absolute;
    top: -20px;
    height: 20px;
    width: 100%;
    background: var(--background);
    display: none;
}

.navigation ul li b:nth-child(1)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: var(--menu-background);
}

.navigation ul li b:nth-child(2) {
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 100%;
    background: var(--background);
    display: none;
}

.navigation ul li b:nth-child(2)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: var(--menu-background);
}

.navigation ul li.active b:nth-child(1),
.navigation ul li.active b:nth-child(2) {
   display: block;
}

.navigation ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--white);
}

/**/
.navigation ul li.active a {
    color: var(--deepSkyBlue);
}
/**/

.icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
}

.icon ion-icon {
    font-size: 1.5em;
}

.title {
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: normal;
}

.toggle {
    position: fixed;
    top: 40px;
    right: 384px;
    width: 50px;
    height: 50px;
    background: var(--menu-background);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle.active {
    background: var(--close);
}

.toggle ion-icon {
    position: absolute;
    color: var(--white);
    font-size: 34px;
    display: none;
}

.toggle ion-icon.open,
.toggle.active ion-icon.close {
    display: block;
}

.toggle ion-icon.close,
.toggle.active ion-icon.open {
    display: none;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Menu</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="display">
        <div class="navigation">
            <ul>
                <li class="list active">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="title">Home</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">Profile</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="chatbox-outline"></ion-icon></span>
                        <span class="title">Messages</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span class="title">Settings</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
                        <span class="title">Help</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span class="title">Password</span>
                    </a>
                </li>
                <li class="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span class="title">Sing Out</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="toggle">
            <ion-icon name="grid-outline" class="open"></ion-icon>
            <ion-icon name="close-circle-outline" class="close"></ion-icon>   
        </div>
    </div>
    
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script>

        let menuToggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');

        menuToggle.onclick = function(){
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }

        let list = document.querySelectorAll('.list');
        for (let i = 0; i < list.length; i++) {
            list[i].onclick = function(){
                let j = 0;
                while(j < list.length){
                    list[j++].className = 'list';
                }
                list[i].className = 'list active';
            }
        }
    </script>
</body>
</html>
## 🌐 Socials:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/surajith-pranav) 

# 💻 Tech Stack:
![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white) ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white) ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![Adobe Photoshop](https://img.shields.io/badge/adobephotoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=SrSurajithPranav&theme=dark&hide_border=false&include_all_commits=true&count_private=false)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=SrSurajithPranav&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=SrSurajithPranav&theme=dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact)

## 🏆 GitHub Trophies
![](https://github-profile-trophy.vercel.app/?username=SrSurajithPranav&theme=radical&no-frame=false&no-bg=true&margin-w=4)

### ✍️ Random Dev Quote
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

---
[![](https://visitcount.itsvg.in/api?id=SrSurajithPranav&icon=0&color=0)](https://visitcount.itsvg.in)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
[![](https://visitcount.itsvg.in/api?id=Surajithpranav&label=Profile%20Views&pretty=false)](https://visitcount.itsvg.in)
