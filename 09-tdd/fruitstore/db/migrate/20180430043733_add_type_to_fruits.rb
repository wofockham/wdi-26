class AddTypeToFruits < ActiveRecord::Migration[5.1]
  def change
    add_column :fruits, :type, :string
  end
end
