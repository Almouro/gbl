ssh amoureaux@gbu.fr 'mkdir -p sela'
scp -r [!.]* amoureaux@gbu.fr:~/sela
ssh amoureaux@gbu.fr 'cd /home/gbu-clone/gbl/wp-content/themes && rm -rf sela && mv ~/sela .'
