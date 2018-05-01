class Fruit < ApplicationRecord
  belongs_to :shelf, :optional => true

  validates_presence_of :name

  def squishy?
    true
  end
end
