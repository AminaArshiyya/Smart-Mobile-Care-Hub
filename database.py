from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["smart_mobile_care"]

users_collection = db["users"]
admins_collection = db["admins"]

print("MongoDB Connected Successfully!")