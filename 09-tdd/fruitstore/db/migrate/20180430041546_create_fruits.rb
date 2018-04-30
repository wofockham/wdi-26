class CreateFruits < ActiveRecord::Migration[5.1]
  def change
    create_table :fruits do |t|

      t.timestamps
    end
  end
end
