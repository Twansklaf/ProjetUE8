from twitter_db import *
from httpd import *


if __name__ == "__main__":

    # tw.load_json("Data/tweets.json")

    PORT = 9010
    HTTPD = ExtensibleHttpServer(("localhost", 9010), HttpHandler)
    print ("Serving at address : http://localhost:" + str(PORT))
    HTTPD.serve_until_interrupted()
