import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from autocorrect import Speller
import numpy as np
from tensorflow.keras.models import load_model

import nltk
from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
import string

app1 = Flask(__name__)
CORS(app1)

nltk.download('punkt')
nltk.download('stopwords')

english_stopwords = set(stopwords.words('english'))
punctuation = set(string.punctuation)
punctuation.add("'s")

stemmer = PorterStemmer()

def stem(word):
    return stemmer.stem(word)

def tokenize(sentence):
    words = nltk.word_tokenize(sentence)
    words = [stem(w) for w in words if w.lower() not in english_stopwords and w not in punctuation]
    return words

def bag_of_words(pattern_sentences, all_words):
    bag = [1 if w in pattern_sentences else 0 for w in all_words]
    return bag

# For Spell checking
spell = Speller()

def correct_misspelled_words(sentence):
    words = sentence.split()
    corrected_words = [spell(word) for word in words]
    corrected_sentence = ' '.join(corrected_words)
    return corrected_sentence

# JSON File reader
with open('ECchatBotData.json', 'r') as f:
    intents = json.load(f)

all_words = []
tags = []
xy = []

for intent in intents['intents']:
    tag = intent['tag']
    tags.append(tag)
    for pattern in intent['patterns']:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, tag))

all_words = sorted(set(all_words))
tags = sorted(tags)

# Loading the Model
savedModel = load_model('emo1.keras')

# Create the response function
@app1.route('/chat', methods=['POST'])
def get_response():
    data = request.json
    input_sentence = data.get('message', '')
    # Preprocess the input sentence
    input_sentence = correct_misspelled_words(input_sentence)
    input_bag = bag_of_words(tokenize(input_sentence), all_words)
    input_bag = np.array(input_bag).reshape(1, -1)
    
    # Predict the intent
    predictions = savedModel.predict(input_bag)
    tag = tags[np.argmax(predictions)]
    
    max_prob_index = np.argmax(predictions)
    confidence = predictions[0][max_prob_index]
    
    # Get a random response for the predicted tag
    for intent in intents['intents']:
        if intent['tag'] == tag:
            responses = intent['responses']
            if confidence < 0.5:
                return jsonify({"response": "Sorry I did not Understand"})
            else:
                return jsonify({"response": np.random.choice(responses)})

if __name__ == '__main__':
    app1.run(host='0.0.0.0', port=5000, debug=True)
