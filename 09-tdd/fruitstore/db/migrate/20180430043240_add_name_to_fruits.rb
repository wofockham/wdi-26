class AddNameToFruits < ActiveRecord::Migration[5.1]
  def change
    add_column :fruits, :name, :string
  end
end
