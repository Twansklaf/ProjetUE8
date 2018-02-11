#!/usr/bin/env python3


# from pyspark.sql import SparkSession
import json

SPARK_APP_NAME = "TwitSearch"


#Creation d'une application spark

class TwitSearch():

	def __init__(self):

		self._sparkengine = SparkSession.builder.appName(SPARK_APP_NAME) \
		                        .config("spark.ui.showConsoleProgress","false") \
		                        .master("local").getOrCreate()
		self._sparkengine.sparkContext.setLogLevel("ERROR")
		self._dataframe = None


	def stopspark(self):
		self._sparkengine.stop()

class TwitSearchNoSpark():

	def __init__(self):
		self._data = []

	def load_json(self, path):
		
		with open(path) as f:
			l = f.readline()
			while l != "" :
				self._data.append(json.loads(l))
				l = f.readline()
		print("Done loading tw database")

#Creation d'une DATAFRAME (une « table ») à partir du fichier JSON se trouvant dans HDFS
#Il faut remplacer le chemin par le fichier sous hdfs
#on pourra le remplacer au début par un simple fichier local

# sp = TwitSearchNoSpark()

# sp.load_json("Data/tweets.json")

# print("loadok")

# df = sp._sparkengine.read.json("hdfs://localhost:9010/Data/tweets.json")

# rdd = df.rdd

#On obtient un objet RDD de Row(…) qui fonctionnent comme des dictionnaires pythons.

# rdd2 = rdd.map(lambda x: x['user_id'])
# for i in rdd2.collect():
#     print (i)
