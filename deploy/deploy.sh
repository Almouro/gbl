ssh amoureaux@gbu.fr 'mkdir -p sela-child'
scp -r [!.]* amoureaux@gbu.fr:~/sela-child
ssh amoureaux@gbu.fr 'cd /home/gbu-clone/gbl/wp-content/themes && rm -rf sela-child && mv ~/sela-child .'
