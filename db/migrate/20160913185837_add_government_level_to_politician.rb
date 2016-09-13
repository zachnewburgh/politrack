class AddGovernmentLevelToPolitician < ActiveRecord::Migration[5.0]
  def change
    add_column :politicians, :government_level, :string
  end
end
