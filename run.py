from system.config_load import config_dict
from runners import  flask_server, waitress_server #, fastwsgi_server,




print('''
#############################################################
#                                                           #
#                _   _ ___ ____ ___ ____                    #
#                | | | |_ _| __ )_ _|  _ \                  #
#                | |_| || ||  _ \| || |_) |                 #
#                |  _  || || |_) | ||  _  |                 #
#                |_| |_|___|____/___|_| \_\                 #
#                                                           #
#                                                           #
#                                                           #
#                       Made by CID                         #
#                                                           #
#                                                           #
#############################################################
''')

config = config_dict()
run_func = None
if config['main']['web_engine'] == 'flask':
    run_func = flask_server.start_server
elif config['main']['web_engine'] == 'waitress':
    run_func = waitress_server.start_server
# elif config['main']['web_engine'] == 'fastwsgi':
#     run_func = fastwsgi_server.start_server
else:
    print("Parameter 'web_engine' was not recognized!")
    exit(-1)

# starting server
run_func()
