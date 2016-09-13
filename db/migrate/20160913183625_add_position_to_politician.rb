class AddPositionToPolitician < ActiveRecord::Migration[5.0]
  def change
    add_column :politicians, :position, :integer
  end
end
