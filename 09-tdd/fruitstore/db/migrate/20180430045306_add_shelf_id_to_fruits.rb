class AddShelfIdToFruits < ActiveRecord::Migration[5.1]
  def change
    add_column :fruits, :shelf_id, :integer
  end
end
