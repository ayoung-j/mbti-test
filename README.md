# MBTI 테스트 만들기 
로그인, 회원가입, 닉네임 관리, MBTI 테스트 진행, 그리고 테스트 결과 저장 기능을 제공합니다. 
사용자는 회원가입 후 로그인하여 자신의 MBTI 테스트 결과를 확인하고, 해당 결과를 저장 및 관리할 수 있습니다.
<br/><br/>

## 🚩 프로젝트 개요
- 프로젝트명 : MBTI TEST
- 진행 기간 : 24.09.05 ~ 24.09.11
<br/><br/>

## 🗂 프로젝트 구조
📦mbti-test<br/>
 ┣ 📂public<br/>
 ┃ ┣ 📂images<br/>
 ┃ ┃ ┗ 📂favicon<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂api<br/>
 ┃ ┣ 📂assets<br/>
 ┃ ┃ ┗ 📂fonts<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┣ 📂data<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┣ 📂routes<br/>
 ┃ ┣ 📂utils<br/>
 ┃ ┣ 📂zustand<br/>
 ┃ ┣ 📜App.jsx<br/>
 ┃ ┣ 📜index.css<br/>
 ┃ ┗ 📜main.jsx<br/>
 ┣ 📜index.html<br/>
 ┣ 📜LICENSE<br/>
 ┗ 📜README.md
<br/><br/>

## ⚙️ STACKS
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![html](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React_Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
<br /><br />

## 💻 실행 방법
```
git clone https://github.com/ayoung-j/mbti-test.git
yarn
yarn dev
```
<br/>

## ✔ 주요 기능
- **회원가입 / 로그인 / 프로필 관리**
  - JWT 인증 서버를 사용하여 회원가입, 로그인, 프로필 수정이 가능합니다.
  - 인증이 되지 않은 사용자는 서비스를 이용할 수 없습니다.
- **MBTI 테스트**
    - 로그인한 사용자는 MBTI 테스트를 진행할 수 있습니다.
    - MBTI 테스트를 완료하면, 결과를 계산하여 저장합니다.
- **MBTI 테스트 결과**
    - 모든 사용자가 다른 사용자의 공개된 테스트 결과를 볼 수 있습니다.
    - 테스트 결과의 공개 여부를 변경할 수 있으며, 다른 사용자가 테스트 결과를 볼 수 없도록 설정할 수 있습니다.
    - 자신의 테스트 결과를 삭제할 수 있습니다.
