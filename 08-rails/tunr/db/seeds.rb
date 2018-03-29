User.destroy_all
u1 = User.create :email => 'craigsy@ga.co'
u2 = User.create :email => 'jonesy@ga.co'

Song.destroy_all
s1 = Song.create :title => 'Have a Safe Trip, Dear'
s2 = Song.create :title => 'Toxic'
s3 = Song.create :title => "Don't Ask Me To Dance"

Album.destroy_all
l1 = Album.create :title => 'Engine Takes To The Water'
l2 = Album.create :title => 'In The Zone'
l3 = Album.create :title => 'The Last Romance'

Artist.destroy_all
a1 = Artist.create :name => 'June of 44'
a2 = Artist.create :name => 'Britney Spears'
a3 = Artist.create :name => 'Arab Strap'

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Nautical Math Rock'
g3 = Genre.create :name => 'Bollywood Bubblegum Pop'
g4 = Genre.create :name => 'Folk rock'
g5 = Genre.create :name => 'Scottish Misery'

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Driving Songs'
m2 = Mixtape.create :title => 'Makeout Music'
m3 = Mixtape.create :title => 'Code Jams'
m4 = Mixtape.create :title => 'Monkey Mongs'

# Albums and songs
l1.songs << s1
l2.songs << s2
l3.songs << s3

# Artists and songs
a1.songs << s1
a2.songs << s2
a3.songs << s3

# Genres and songs
s1.genres << g1 << g2
g3.songs << s2
s3.genres << g4 << g5

# Mixtapes of songs
m1.songs << s1 << s2 << s3 << s2
m2.songs << s2 << s3
m3.songs << s1 << s3
m4.songs << s2 << s2 << s2

# Mixtapes and users
u1.mixtapes << m1 << m2
u2.mixtapes << m3 << m4
