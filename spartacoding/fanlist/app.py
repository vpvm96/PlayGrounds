from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('여긴 비밀입니다.')
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/homework", methods=["POST"])
def homework_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']

    doc = {
        "name": name_receive,
        "comment": comment_receive,
    }

    db.homework.insert_one(doc)
    return jsonify({'msg': '작성 완료!'})


@app.route("/homework", methods=["GET"])
def homework_get():
    post_list = list(db.homework.find({}, {"_id": False}))
    return jsonify({"post": post_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
