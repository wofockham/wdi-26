# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  has_many :songs
  has_many :genres, :through => :songs
end
