# Voice Changer : Voice Style Transfer


Voice Style Transfer provides two main features:

1) Provides clips of music in the style of our source voice(Taeyeon) covering songs originally from other singers. 

2) Provides two options of voices that reads out a given text.

An example is shown below, when you enter text, the text is read by a trained female voice.

---

## System Architecture
![Untitled](https://user-images.githubusercontent.com/78634177/126619817-cc748f9c-3d27-4bc9-acbd-02b4314b8a8c.png)

---
## Tech Stack

<img src="https://img.shields.io/badge/PYTHON-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/flask-ffffff?style=for-the-badge&logo=flask&logoColor=black"> <img src="https://img.shields.io/badge/gunicorn-489746?style=for-the-badge&logo=gunicorn&logoColor=black"> <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=black"> <img src="https://img.shields.io/badge/Google Cloud-4285F4?style=for-the-badge&logo=google cloud&logoColor=white"> <img src="https://img.shields.io/badge/Google Colaboratory-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=black"> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=black"> <img src="https://img.shields.io/badge/Google Cloud Storage-4285F4?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=black"> <img src="https://img.shields.io/badge/Redux Saga-999999?style=for-the-badge&logo=reduxSaga&logoColor=black"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">
<img src="https://img.shields.io/badge/Jquery-0769AD?style=for-the-badge&logo=Jquery&logoColor=black">



    Backend: Flask
    Frontend: React, Next.js, Typescript, jQuery, Redux, Redux-Saga, styled-components
    Middleware: Gunicorn
    etc: Nginx, Docker, Mysql, Colaboratory, Google Cloud Storage, swagger
---
## Installation
>### Clone Repository 

    $git clone --recursive https://github.com/SiliconWildCat/SiliconWildCat.git

>### Docker 🐳
    docker-compose up -d 

>### Nginx 
- Frontend
```
http://localhost:80
```
- Backend
```
http://localhost:8000
```

>### Local
```
Frontend: http://localhost:3000
Backend: http://localhost:5000
```

---
## Features
``` 
 This website provides 2 features, Text To Speech and Singing Voice Synthesize.
```
### 1) Text To Speech
![TTS](https://user-images.githubusercontent.com/78634177/126648363-72c2741d-6e41-4185-8da4-28f6185be1fb.PNG)

- Enter the text you want to convert and select the desired voice to play the text as the corresponding voice.


- In Text To Speech, <b>GlowTTS and HIFI-GAN</b> were used.
  - GlowTTS : Train the audio dataset converted to Mel spectogram to learn 
  the tone and pronounce of voice. 
  - Hifi Gan: Reduce Noise and make the voice similar to the actual speaker.
  
### 2) Singing Voice Synthesize

![VS](https://user-images.githubusercontent.com/78634177/126648439-f6ece78d-6904-4652-9852-d497d01a8660.png)


- This will provide the result of synthesizing songs with singer Taeyeon's voice.


- In Voice Synthesizing, <b>MLP Model and HIFI-GAN</b> were used.

  - MLP Model :
    Trains the MLP based Neural Network Model with three files - text file, midi file, vocal file - to create a Mel-spectrogram.

  - HIFI-GAN : Reduce Noise and make the voice closer to the actual speaker.



---
## Frontend

> How to Initiallize

    > when you use npm
         npm i && npm run build && npm start
         
    > when you use yarn
        yarn && yarn build && yarn start 

> About Installation

     1. yarn : you can get node modules
        ./frontend/node_moduels
     2. yarn build : you can get next build files
        ./frontend/
     3. yarn start : run webpage!!!

> About Pages

     When you start the webpage you will see the SVG(Singing Voice Synthesis) page first.
     Switching in between two pages can be reached by clicking on the button. 
     Enjoy IT! 😃


> Directory Structure
```
 frontend
 ┣ components
 ┃ ┣ Music
 ┃ ┃ ┣ Music.tsx
 ┃ ┃ ┗ music.scss
 ┃ ┣ Tts.tsx
 ┃ ┗ musicPlayer.tsx
 ┣ hooks
 ┃ ┣ createRequestSaga.ts
 ┃ ┗ useSelector.tsx
 ┣ interface
 ┃ ┣ counter.ts
 ┃ ┣ loading.ts
 ┃ ┗ tts.ts
 ┣ lib
 ┃ ┗ api
 ┃ ┃ ┣ api.ts
 ┃ ┗ ┗ client.ts
 ┣ modules
 ┃ ┣ index.ts
 ┃ ┣ loading.ts
 ┃ ┗ tts.ts
 ┣ pages
 ┃ ┣ _app.tsx
 ┃ ┣ _document.tsx
 ┗ ┗ index.tsx
```
---
## Backend

> How to Initiallize
```
  docker exec -it backend /bin/bash
  python3 run.py
```
> About
```
  Enter the text you want to convert to voice. Our project provides Taeyeon and KSS voice dataset. If you select the voice and press the 'say it' button, the audio file is saved in the path below.
  
  >> /app/audio.wav   
```

> Directory Structure

```
 backend
 ┣ web
 ┃ ┣ TTS (submodule)
 ┃ ┣ g2pK (submodule)
 ┃ ┣ glowtts-v2 (Text to Mel spectogram Model)
 ┃ ┃ ┣ KSS
 ┃ ┃ ┗ TaeYeon 
 ┃ ┣ hifigan-v2 (Mel spectogram to Audio Model)
 ┃ ┃ ┣ KSS
 ┃ ┃ ┗ TaeYeon
 ┃ ┣ config.py (database configuration)
 ┃ ┣ inference.py (TTS synthesis)
 ┃ ┣ run.py
 ┃ ┗ saveText.py (save text to DB)
 ┣ Dockerfile
 ┗ requirements.txt
```

> Submodule

    g2pK : g2p module for Korean language

    TTS : Text to Speech generation library
    

---
## Swagger
![swagger](https://user-images.githubusercontent.com/78634177/126648053-8ebb22a4-33f2-4bad-a3aa-dcebee7cc46a.png)


---
## Reference
- SCE-TTS: https://github.com/sce-tts/TTS.git
- MLP Singer: https://github.com/neosapience/mlp-singer
- g2pK: https://github.com/sce-tts/g2pK.git
- TTS: https://github.com/sce-tts/TTS.git
