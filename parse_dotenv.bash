#!/bin/bash
# Pase los env-vars a MYCOMMAND
eval  $(egrep -v  '^#'  .env | xargs) 
# ... o...
# Exporte los vars en .env a su shell:
export  $(egrep -v  '^#'  .env | xargs)