class AddHomestateToPolitician < ActiveRecord::Migration[5.0]
  def change
    add_column :politicians, :homestate, :string
  end
end
