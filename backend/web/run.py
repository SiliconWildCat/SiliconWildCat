# Importing the necessary Libraries
from flask_cors import cross_origin
from flask import Flask, render_template, request, jsonify,send_file
from inference import synthesize, create_synthesizer
from flask_ngrok import run_with_ngrok
from flask_restful import reqparse,Api,Resource
import soundfile as sf
from saveText import save_text, find_path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask_swagger_ui import get_swaggerui_blueprint
import io


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

api=Api(app)

@app.route('/TTS', methods=['POST'])
@cross_origin()
def text_speech():
    if request.method=='POST':
        data=request.get_json()
        return jsonify(data)
    """
    text=request.args.get("speech")
    voice=request.args.get("type")
    return jsonify(text,voice)
    #syn=create_synthesizer(voice)
    #wavs=synthesize(text,syn)
    #out = io.BytesIO()
    #syn.save_wav(wavs, out)
    #save_text(text,database,session) 
    #return send_file(out, mimetype="audio/wav")
    

    #if request.method == 'POST':
        data=request.get_json()
        return jsonify(data)
        text = request.form['speech']
        voice = request.form['voices']
        syn=create_synthesizer(voice)
        save_text(text,database,session)
        wavs=synthesize(text,syn)
        #sf.write('/app/audio.wav',wavs, 22050, 'PCM_24')
        out = io.BytesIO()
        syn.save_wav(wavs, out)
        return send_file(out, mimetype="audio/wav")
        #return render_template('frontend.html')
        
    else:
        return render_template('frontend.html')"""

@app.route('/SVS', methods=['GET'])
def singing_voice():
    param_dict = request.args.to_dict()
    title = param_dict['title']
    file_path = find_path(title, session)
    return file_path


if __name__ == "__main__":
    app.run(port=80, debug=True)