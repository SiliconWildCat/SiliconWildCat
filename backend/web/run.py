# Importing the necessary Libraries
from flask_cors import cross_origin
from flask import Flask, render_template, request
from inference import synthesize, create_synthesizer
from flask_ngrok import run_with_ngrok

import soundfile as sf
from saveText import save_text
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask_swagger_ui import get_swaggerui_blueprint


app = Flask(__name__,template_folder='') #html 폴더 경로 설정
app.config.from_pyfile('config.py')
database = create_engine(app.config['DB_URL'], encoding = 'utf-8', max_overflow = 0)
Session = sessionmaker(database)
session = Session()
#run_with_ngrok(app)



SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config = {
        'app_name':"SilliconWildCat"
    }
)

app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

@app.route('/', methods=['POST', 'GET'])
@cross_origin()
def homepage():
    if request.method == 'POST':
        text = request.form['speech']
        voice = request.form['voices']
        syn=create_synthesizer(voice)
        print(type(text))
        wavs=synthesize(text,syn)
        save_text(text,database,session)
        sf.write('/app/audio.wav',wavs, 22050, 'PCM_24')

        return render_template('frontend.html')
    else:
        return render_template('frontend.html')




if __name__ == "__main__":
    #app.run()
    app.run(port=80, debug=True)