# Exporte los vars en .env a su shell:
export  $(egrep -v  '^#'  .env | xargs) 

