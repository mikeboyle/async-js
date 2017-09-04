import requests

def get_post():
    print("Fetching post from API...")

    res = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    json = res.json()
    print("TITLE: {}".format(json['title']))
    print("BODY: {}".format(json['body']))


if __name__ == "__main__":
    get_post()
