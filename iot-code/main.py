import requests
import time
from sense_hat import SenseHat


sense = SenseHat()
sense.clear()

API_LINK = "http://18.159.135.221:5100/api"

while True:
    pressure = sense.get_pressure()
    temperature = sense.get_temperature()
    humidity = sense.get_humidity()

    # prepare data to send to API
    data = {"pressure": pressure,
            "temperature": temperature, "humidity": humidity}

    # POST request to API with data POST at API_LINK/data
    resp = requests.post(API_LINK + "/data", json=data)

    # check if response is OK
    if resp.status_code != 200:
        print("Error sending data to API")
        print(resp.text)
        continue
    print("Data sent to API at time: ", time.time())

    # sleep for 2 seconds
    time.sleep(2)
