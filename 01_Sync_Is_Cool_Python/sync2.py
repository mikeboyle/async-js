import requests

def get_post_and_comments():
    # get the post
    print('Fetching post from API...')
    res = requests.get('https://jsonplaceholder.typicode.com/posts/1')
    json = res.json()
    print('TITLE: {}'.format(json['title']))
    print('BODY: {}'.format(json['body']))
    print

    # get the comments
    print('Fetching comments from API...')
    comments_url = 'https://jsonplaceholder.typicode.com/comments?postId={}'.format(json['id'])
    comments_res = requests.get(comments_url)
    comments_json = comments_res.json()

    for comment in comments_json:
        print(comment['id'])
        print('NAME: {}'.format(comment['name']))
        print('EMAIL: {}'.format(comment['email']))
        print

if __name__ == "__main__":
    get_post_and_comments()
    print("loading header...") # blocked by API call
    print("rendering main grid...") # blocked by API call
