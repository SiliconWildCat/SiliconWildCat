# Importing the necessary Libraries
from flask_cors import cross_origin
from flask import Flask, render_template, request
#from inference import synthesize
from flask_ngrok import run_with_ngrok
#import IPython.display as ipd
#import soundfile as sf
from saveText import save_text
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


app = Flask(__name__,template_folder='') #html 폴더 경로 설정
app.config.from_pyfile('config.py')
database = create_engine(app.config['DB_URL'], encoding = 'utf-8', max_overflow = 0)
Session = sessionmaker(database)
session = Session()
#run_with_ngrok(app)


@app.route('/', methods=['POST', 'GET'])
@cross_origin()
def homepage():
    if request.method == 'POST':
        text = request.form['speech']
        voice = request.form['voices']
        #text_to_speech(text,voice)
        #wavs=synthesize(text)
        #ipd.display(ipd.Audio(wavs,rate=22050,autoplay=True))
        save_text(text,database,session)
        #sf.write('/content/audio.wav',wavs, 22050, 'PCM_24')
        return render_template('frontend.html')
    else:
        return render_template('frontend.html')


if __name__ == "__main__":
    #app.run()
    app.run(port=8000, debug=True)