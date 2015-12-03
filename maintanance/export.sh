#!/bin/bash 


mongodump -d my_database_name
tar cvzf db_dump_$(date +%s).tar.gz dump/
sudo rm -r dump