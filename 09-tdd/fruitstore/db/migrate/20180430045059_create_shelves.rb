class CreateShelves < ActiveRecord::Migration[5.1]
  def change
    create_table :shelves do |t|

      t.timestamps
    end
  end
end
